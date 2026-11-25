import assert from "node:assert/strict";
import { test } from "node:test";
import { handleLeetCodeRequest } from "../api/leetcode.ts";
import viteConfig from "../vite.config.ts";

function createResponse() {
  const headers = new Map();
  return {
    statusCode: 0,
    headers,
    body: "",
    setHeader(name, value) {
      headers.set(name.toLowerCase(), value);
    },
    end(body) {
      this.body = body ?? "";
    },
  };
}

test("returns the solved count with CDN cache headers", async () => {
  const response = createResponse();
  let requestedUrl;
  let requestedOptions;

  await handleLeetCodeRequest(
    { method: "GET" },
    response,
    async (url, options) => {
      requestedUrl = url;
      requestedOptions = options;
      return new Response(
        JSON.stringify({
          data: {
            matchedUser: {
              submitStats: {
                acSubmissionNum: [{ difficulty: "All", count: 42 }],
              },
            },
          },
        }),
      );
    },
  );

  assert.equal(requestedUrl, "https://leetcode.com/graphql/");
  assert.equal(requestedOptions.method, "POST");
  assert.deepEqual(JSON.parse(requestedOptions.body), {
    query: `query userSolvedCount($username: String!) {
          matchedUser(username: $username) {
            submitStats { acSubmissionNum { difficulty count } }
          }
        }`,
    variables: { username: "lLuVeJwG5C" },
  });
  assert.equal(response.statusCode, 200);
  assert.deepEqual(JSON.parse(response.body), { solvedCount: 42 });
  assert.equal(
    response.headers.get("cache-control"),
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );
});

test("Vite proxies same-origin API requests to the local Vercel server", () => {
  assert.equal(viteConfig.server.proxy["/api"].target, "http://localhost:3000");
});

test("rejects unsupported methods without caching", async () => {
  const response = createResponse();
  let upstreamRequested = false;

  await handleLeetCodeRequest({ method: "POST" }, response, async () => {
    upstreamRequested = true;
    return new Response();
  });

  assert.equal(response.statusCode, 405);
  assert.equal(response.headers.get("allow"), "GET");
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(upstreamRequested, false);
});

test("does not cache upstream failures", async () => {
  const response = createResponse();

  await handleLeetCodeRequest(
    { method: "GET" },
    response,
    async () => new Response("Unavailable", { status: 503 }),
  );

  assert.equal(response.statusCode, 502);
  assert.equal(response.headers.get("cache-control"), "no-store");
});
