function Header() {
  return (
    <header className="site-header">
      <div className="site-header__identity">
        <a className="site-header__brand" href="#top">
          <span className="site-header__brand-name">Systems Crafter</span>
          <span className="site-header__subtitle">
            SWE Undergrad · Building from scratch
          </span>
        </a>
      </div>

      <nav className="site-header__nav" aria-label="Primary navigation">
        <a href="#projects">Projects</a>
        <a href="#stack">Stack</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="site-header__actions">
        <span className="site-header__availability">
          <span className="site-header__availability-dot" aria-hidden="true" />
          PLACEHOLDER
        </span>
        <a className="site-header__cta" href="#contact">
          Let&apos;s Talk Code
        </a>
      </div>
    </header>
  );
}

export default Header;