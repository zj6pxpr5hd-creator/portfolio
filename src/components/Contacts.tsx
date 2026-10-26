import { useState } from "react";

function Contacts() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("edoardovolley06@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = "mailto:edoardovolley06@gmail.com";
    }
  };

  return (
    <>
      <section className="contacts" id="contact" aria-labelledby="contact-title">
        <div className="contacts__copy">
          <span className="contacts__eyebrow mono-label">
            <span aria-hidden="true">▣</span> collaborations
          </span>
          <h2 id="contact-title">Looking for hard engineering problems </h2>
          <nav aria-label="Social links" className="contacts__links">
            <a
              href="https://github.com/zj6pxpr5hd-creator"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (opens in a new tab)"
              title="Visit GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://x.com/Edozzz06"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X (opens in a new tab)"
              title="Visit Twitter / X profile"
            >
              Twitter / X
            </a>
            <a
              href="https://www.linkedin.com/in/edoardo-chessa-65487a442"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
              title="Visit LinkedIn profile"
            >
              LinkedIn
            </a>
            <div className="contacts__email-wrapper">
              <button
                type="button"
                className={`contacts__email-btn ${copied ? "contacts__email-btn--copied" : ""}`}
                onClick={handleCopy}
                aria-label={copied ? "Email address copied to clipboard" : "Copy email address to clipboard"}
                title={copied ? "Email address copied to clipboard!" : "Click to copy email address"}
              >
                <span className="contacts__email-address">edoardovolley06@gmail.com</span>
                <span className="contacts__email-badge" aria-hidden="true">
                  {copied ? "✓ Copied" : "Copy"}
                </span>
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </div>
          </nav>
        </div>
      </section>

      <div className="site-footer__meta">
        <div>
          <span>© 2026 Edoardo Chessa</span>
          <span aria-hidden="true">•</span>
          <span>Built w/ Curiosity &amp; Passion</span>
        </div>
      </div>
    </>
  );
}

export default Contacts;
