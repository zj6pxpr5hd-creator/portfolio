import { useState } from "react";

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
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(technology.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
    }
  };

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
        <div className="technology-card__code-container">
          <pre className="technology-card__code"><code>{technology.code}</code></pre>
          <button
            type="button"
            className={`technology-card__copy-btn ${copied ? "technology-card__copy-btn--copied" : ""}`}
            onClick={handleCopy}
            aria-label={copied ? "Code snippet copied" : `Copy ${technology.name} code snippet`}
            title={copied ? "Copied!" : "Copy code snippet"}
          >
            {copied ? "✓ Copied" : "Copy"}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? `${technology.name} code snippet copied to clipboard` : ""}
          </span>
        </div>
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
