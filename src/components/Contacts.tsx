import { useState } from "react";

type CopyStatus = "idle" | "copied" | "error";

function Contacts() {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText("edoardovolley06@gmail.com");
        setCopyStatus("copied");
        setTimeout(() => setCopyStatus("idle"), 2000);
      } else {
        window.location.href = "mailto:edoardovolley06@gmail.com";
      }
    } catch {
      setCopyStatus("error");
      setTimeout(() => setCopyStatus("idle"), 3000);
    }
  };

  const getButtonText = () => {
    if (copyStatus === "copied") return "✓ Copied!";
    if (copyStatus === "error") return "× Error copying";
    return "edoardovolley06@gmail.com";
  };

  const getAriaLabel = () => {
    if (copyStatus === "copied") return "Email address copied to clipboard";
    if (copyStatus === "error") return "Failed to copy email address";
    return "Copy email address to clipboard";
  };

  const getAnnouncementText = () => {
    if (copyStatus === "copied") return "Email address copied to clipboard";
    if (copyStatus === "error") return "Failed to copy email address to clipboard";
    return "";
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
                className={`contacts__email-btn ${
                  copyStatus === "copied"
                    ? "contacts__email-btn--copied"
                    : copyStatus === "error"
                      ? "contacts__email-btn--error"
                      : ""
                }`}
                onClick={handleCopy}
                aria-label={getAriaLabel()}
                title="Click to copy email address"
              >
                {getButtonText()}
              </button>
              <span className="sr-only" aria-live="polite">
                {getAnnouncementText()}
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
