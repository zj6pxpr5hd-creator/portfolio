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
    link: "https://github.com/zj6pxpr5hd-creator/aurora_prot.git",
  },
  {
    title: "Hosting Aurora On My Home Server",
    icon: "💾",
    category: "Hosting and Deployment",
    description:
      "A personal guide to hosting a web application on a personal server.",
    technologies: ["Ubuntu", "Docker", "Tailscale" ],
    takeaway:
      "Understanding the different steps required to deploy an application, from Docker containers to outside access and security.",
    architecture:
      "My old laptop running Ubuntu → Docker containers → Tailscale",
    accent: "blue",
    link: "https://github.com/zj6pxpr5hd-creator/home-server-hosting.git",
  },
  {
    title: "All Auth",
    icon: "🔒",
    category: "Authentication & Authorization",
    description:
      "An implementation of an authentication system built fully from scratch, that tries to be as professional as possible",
    technologies: ["React", "Express", "PostgreSQL", "JWT", "bcrypt"],
    takeaway:
      "Understanding the intricacies of authentication and authorization, and how to implement them securely in a web application.",
    architecture:
      "React frontend → Express backend → PostgreSQL database → JWT→ bcrypt",
    accent: "teal",
    link: "https://github.com/zj6pxpr5hd-creator/all-auth.git",
  },
  {
    title: "SignalBoard",
    icon: "✒️",
    category: "Full-stack web application",
    description:
      "A small web application where users can signup/login, post signals that all other users can see and delete their own signals.",
    technologies: ["React", "Express", "PostgreSQL"],
    takeaway:
      "As my first full-stack web application, I learned how frontend and backend communicate with each other, how to structure a real app.",
    architecture:
      "React frontend → Express backend → PostgreSQL database.",
    accent: "amber",
    link: "https://github.com/zj6pxpr5hd-creator/signal-board.git",
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
