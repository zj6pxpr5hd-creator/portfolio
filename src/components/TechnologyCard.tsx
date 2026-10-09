export type Technology = {
  name: string;
  category: string;
  description: string;
  accent: "lime" | "cobalt" | "amber" | "fuchsia" | "purple" | "teal";
  path: string;
  code: string;
  strength: string;
  tradeoff: string;
  wide?: boolean;
};

type TechnologyCardProps = {
  technology: Technology;
};

function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <article
      className={`technology-card technology-card--${technology.accent}${
        technology.wide ? " technology-card--wide" : ""
      }`}
    >
      <div className="technology-card__topline">
        <span className="technology-card__path">
          {technology.path}
        </span>
        <span className="technology-card__category">
          {technology.category}
        </span>
      </div>
      <div className="technology-card__body">
        <div className="technology-card__title-row">
          <h3>{technology.name}</h3>
          <span>{technology.category}</span>
        </div>
        <pre className="technology-card__code"><code>{technology.code}</code></pre>
        <p>{technology.description}</p>
      </div>
      <footer className="technology-card__evidence">
        <div>
          <span className="technology-card__evidence-label">✓ Strengths:</span>
          <p>{technology.strength}</p>
        </div>
        <div>
          <span className="technology-card__evidence-label technology-card__evidence-label--tradeoff">
            × Tradeoff:
          </span>
          <p>{technology.tradeoff}</p>
        </div>
      </footer>
    </article>
  );
}

export default TechnologyCard;
