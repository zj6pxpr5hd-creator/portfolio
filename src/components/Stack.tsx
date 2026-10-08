import TechnologyCard, { type Technology } from "./TechnologyCard";

const technologies: Technology[] = [
  {
    name: "C / Go",
    category: "Systems & concurrency",
    description:
      "Low-level fundamentals, manual memory management, and concurrency primitives without magical runtime bloat.",
    accent: "lime",
    path: "runtime/go_lang.demo",
    code: `go func serve(ctx context.Context) error {
  return http.ListenAndServe(":8080", nil)
}`,
    strength: "Predictable memory, simple concurrency, rock-solid standard library.",
    tradeoff: "Explicit error paths and fewer guardrails mean more design responsibility.",
  },
  {
    name: "TypeScript & React",
    category: "Full-stack interface",
    description:
      "Building responsive, strongly typed frontend interfaces with predictable state machines and zero runtime surprises.",
    accent: "blue",
    path: "client/contracts.schema.ts",
    code: `type ApiResponse<T> =
  | { status: "ok"; data: T }
  | { status: "fail"; code: string };`,
    strength: "Fearless refactors across UI components and shared contracts.",
    tradeoff: "Complex recursive generics can make diagnostics feel dense.",
  },
  {
    name: "PostgreSQL & SQL",
    category: "Data architecture",
    description:
      "Understanding relational algebra, query planners, indexing trade-offs, and ACID transaction durability guarantees.",
    accent: "amber",
    path: "storage/ledger.audit.sql",
    code: `BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;
UPDATE accounts SET balance = balance - 100;`,
    strength: "Durable relational guarantees, expressive queries, transparent plans.",
    tradeoff: "Connection pooling and migrations require operational discipline.",
  },
  {
    name: "Linux, POSIX & OS",
    category: "Core fundamentals",
    description:
      "Developing comfort in the terminal, exploring kernel syscalls, virtual memory paging, and process scheduling.",
    accent: "purple",
    path: "infra/system.service.unit",
    code: `[Unit]
Description=Portfolio API Service
[Service]
ExecStart=/usr/local/bin/api`,
    strength: "Near-zero overhead, instant reboots, and direct system visibility.",
    tradeoff: "Requires comfort with POSIX signals, permissions, and disk I/O.",
  },
  {
    name: "Distributed Systems & Networking",
    category: "Active research",
    description:
      "Exploring consensus protocols, TCP flow control, event-driven socket programming, and fault-tolerant services that survive chaotic partitions.",
    accent: "lime",
    path: "network/consensus_notes.md",
    code: `term := raft.ElectionTimeout
if leader == nil {
  startElection(term + 1)
}`,
    strength: "Failure-aware architecture and a sharper understanding of trade-offs.",
    tradeoff: "Distributed correctness is expensive to explain, test, and operate.",
    wide: true,
  },
];

function Stack() {
  return (
    <section className="stack" id="stack" aria-labelledby="stack-title">
      <header className="section-heading">
        <div>
          <span className="section-heading__eyebrow section-heading__eyebrow--amber mono-label">
            <span aria-hidden="true" /> Craft &amp; learning radar
          </span>
          <h2 id="stack-title">Technologies I Study &amp; Build With</h2>
        </div>
        <span className="section-heading__aside mono-label">
          Systems primitives · annotated
        </span>
      </header>
      <div className="technology-grid">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.name} technology={technology} />
        ))}
      </div>
    </section>
  );
}

export default Stack;
