function Contacts() {
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
            <a
              href="mailto:edoardovolley06@gmail.com"
              title="Send email to Edoardo"
            >
              edoardovolley06@gmail.com
            </a>
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
