function Contacts() {
  return (
    <>
      <section className="contacts" id="contact" aria-labelledby="contact-title">
        <div className="contacts__copy">
          <span className="contacts__eyebrow mono-label">
            <span aria-hidden="true">▣</span> Internship &amp; collaboration invite
          </span>
          <h2 id="contact-title">Looking for hard engineering problems &amp; great mentors</h2>
          <p>
            Seeking SWE internship roles. Always eager to dive into distributed
            systems, compilers, or high-throughput backends alongside experienced
            teams.
          </p>
        </div>
        <div className="contacts__actions">
          <a className="contacts__email" href="mailto:example@email.com">
            example@email.com
          </a>
          <a className="contacts__button" href="mailto:example@email.com">
            Get in touch
          </a>
        </div>
      </section>

      <div className="site-footer__meta">
        <div>
          <span>© 2025 Anonymous Developer</span>
          <span aria-hidden="true">•</span>
          <span>Built w/ Curiosity &amp; Craft</span>
        </div>
        <nav aria-label="Social links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter / X
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:example@email.com">example@email.com</a>
        </nav>
      </div>
    </>
  );
}

export default Contacts;
