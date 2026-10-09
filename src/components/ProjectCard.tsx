export type Project = {
  title: string;
  icon: string;
  category: string;
  description: string;
  technologies: string[];
  takeaway: string;
  architecture: string;
  accent: "lime" | "blue" | "amber" | "fuchsia" | "teal";
  link?: string;
};

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-card__header">
        <div className="project-card__identity">
          <span className="project-card__icon" aria-hidden="true">
            {project.icon}
          </span>
          <div>
            <div className="project-card__title-row">
              <h3>{project.title}</h3>
              {project.link && (
                <a
                  className="project-card__link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} link`}
                >
                  ↗
                </a>
              )}
            </div>
            <p>{project.description}</p>
          </div>
        </div>
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          <span className="project-card__technologies">
            {project.technologies.join(" · ")}
          </span>
        </div>
      </div>

      <div className="project-card__details">
        <div>
          <span className="mono-label">Key takeaway</span>
          <p className="project-card__learning">💡 {project.takeaway}</p>
        </div>
        <div>
          <span className="mono-label">Architecture</span>
          <p>{project.architecture}</p>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
