import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Aurora",
    icon: "✦",
    category: "AI integration",
    description:
      "Aurora is a AI assistant whose goal is to make the technological environment it is put in work in favor of the user.",
    technologies: ["React", "Express", "Gemini API", "SQLite"],
    takeaway:
      "Understanding the nuances of AI integration and how to manage it's context in a way that enhances user experience.",
    architecture:
      "React / Vite frontend → Express backend → Gemini API → SQLite database.",
    accent: "fuchsia",
    link: "https://github.com",
  },
  {
    title: "Raft-Lite: Distributed Consensus Node",
    icon: "◈",
    category: "Distributed systems",
    description:
      "A compact consensus node built to explore leader election, replication, and failure recovery.",
    technologies: ["Go", "TCP", "State machines"],
    takeaway:
      "The hard part was making failure behavior explicit: timeouts and retries became part of the design rather than edge cases.",
    architecture:
      "Client requests → replicated log → leader election → committed state machine.",
    accent: "blue",
    link: "https://github.com",
  },
  {
    title: "CampusLink: Student Utility Platform",
    icon: "⌘",
    category: "Full-stack interface",
    description:
      "A focused interface for helping students discover useful campus resources and coordinate around them.",
    technologies: ["React", "TanStack", "TypeScript"],
    takeaway:
      "Small feedback loops matter: a fast interface and clear empty states make an early product feel trustworthy.",
    architecture:
      "Typed UI state → query layer → reusable feature cards → responsive interface.",
    accent: "teal",
    link: "https://github.com",
  },
  {
    title: "TinySQL: In-Memory B-Tree Database",
    icon: "▣",
    category: "Iterative learning",
    description:
      "An in-memory SQL engine built to understand indexing, parsing, and transaction-shaped state.",
    technologies: ["Rust", "B-Tree", "SQL"],
    takeaway:
      "Rebuilding from scratch made failure modes visible: the fastest teacher was understanding why each invariant existed.",
    architecture:
      "SQL parser → query planner → B-tree index → in-memory table scan.",
    accent: "amber",
    link: "https://github.com",
  },
];

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <header className="section-heading">
        <div>
          <span className="section-heading__eyebrow mono-label">
            <span aria-hidden="true" /> Projects &amp; experiments
          </span>
          <h2 id="projects-title">Growth trajectory through code</h2>
        </div>
        <span className="section-heading__aside mono-label">Built from scratch</span>
      </header>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
