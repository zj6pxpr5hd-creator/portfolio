import CommandModule from "./CommandModule";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <CommandModule />
      <div className="hero__badges" aria-label="Current profile">
        <span className="hero__badge--highlight">CS Year 3 / Tech · Building Daily</span>
        <span>First-principles enthusiast</span>
        <span className="hero__badge--accent">Open to SWE internships</span>
      </div>

      <div className="hero__grid">
        <div className="hero__copy">
          <h1 id="hero-title">Systems Crafter &amp; CS Student</h1>
          <p className="hero__role">Aspiring Systems &amp; Full-Stack Engineer</p>
          <p className="hero__summary">
            CS student obsessed with computer architecture, clean code, and
            shipping real things. I learn by breaking things down to first
            principles, writing toy compilers from scratch, and building
            software people actually use.
          </p>

          <div className="hero__metrics" aria-label="Current focus">
            <div className="hero__metric">
              <span className="mono-label">Focus</span>
              <strong>Systems + full-stack</strong>
            </div>
            <div className="hero__metric">
              <span className="mono-label">Mode</span>
              <strong>Learn by shipping</strong>
            </div>
            <div className="hero__metric">
              <span className="mono-label">Signal</span>
              <strong>Curious, hands-on</strong>
            </div>
          </div>
        </div>

        <div className="hero__panel" aria-label="Developer status">
          <div className="hero__panel-header">
            <span className="mono-label">gcc · 03:42 AM</span>
            <span className="hero__panel-status">
              <span aria-hidden="true" />
              0 warnings
            </span>
          </div>
          <div className="hero__panel-screen" aria-hidden="true">
            <img src="/design-reference/screenshots/profile_pic.jpeg" alt="Developer screen" />
          </div>
          <div className="hero__panel-footer">
            <span className="mono-label">status / building in public</span>
            <code>const next = ship(idea);</code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;