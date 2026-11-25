import type { IncomingMessage, ServerResponse } from "node:http";

const LEETCODE_URL = "https://leetcode.com/graphql/";
const LEETCODE_USERNAME = "lLuVeJwG5C";
const CACHE_CONTROL = "public, s-maxage=3600, stale-while-revalidate=86400";

type ApiRequest = Pick<IncomingMessage, "method">;
type ApiResponse = Pick<ServerResponse, "statusCode" | "setHeader" | "end">;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getSolvedCount(payload: unknown): number | undefined {
  if (!isRecord(payload)) return undefined;
  const data = payload.data;
  if (!isRecord(data) || !isRecord(data.matchedUser)) return undefined;

  const submitStats = data.matchedUser.submitStats;
  if (!isRecord(submitStats) || !Array.isArray(submitStats.acSubmissionNum)) {
    return undefined;
  }

  for (const submission of submitStats.acSubmissionNum) {
    if (!isRecord(submission) || submission.difficulty !== "All") continue;
    if (
      typeof submission.count === "number" &&
      Number.isSafeInteger(submission.count) &&
      submission.count >= 0
    ) {
      return submission.count;
    }
  }
}

function sendJson(
  response: ApiResponse,
  statusCode: number,
  body: Record<string, string | number>,
  cacheControl = "no-store",
) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", cacheControl);
  response.end(JSON.stringify(body));
}

export async function handleLeetCodeRequest(
  request: ApiRequest,
  response: ApiResponse,
  fetcher: typeof fetch = fetch,
): Promise<void> {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  let upstreamResponse: Response;
  try {
    upstreamResponse = await fetcher(LEETCODE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query userSolvedCount($username: String!) {
          matchedUser(username: $username) {
            submitStats { acSubmissionNum { difficulty count } }
          }
        }`,
        variables: { username: LEETCODE_USERNAME },
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    sendJson(response, 502, { error: "Unable to fetch LeetCode statistics" });
    return;
  }

  if (!upstreamResponse.ok) {
    sendJson(response, 502, { error: "LeetCode statistics request failed" });
    return;
  }

  let payload: unknown;
  try {
    payload = await upstreamResponse.json();
  } catch {
    sendJson(response, 502, { error: "LeetCode returned an invalid response" });
    return;
  }

  const solvedCount = getSolvedCount(payload);
  if (solvedCount === undefined) {
    sendJson(response, 502, { error: "LeetCode statistics are unavailable" });
    return;
  }

  sendJson(response, 200, { solvedCount }, CACHE_CONTROL);
}

export default function handler(request: IncomingMessage, response: ServerResponse) {
  return handleLeetCodeRequest(request, response);
}
