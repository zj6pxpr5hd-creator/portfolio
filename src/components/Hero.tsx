function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__eyebrow mono-label">01 / Developer cockpit</div>
      <div className="hero__copy">
        <p className="hero__kicker">Serial builder · SWE student</p>
        <h1 id="hero-title">Building systems from first principles.</h1>
        <p className="hero__summary">
          CS student obsessed with computer architecture, clean code, and
          shipping useful software. I learn by breaking ideas down, writing
          toy compilers from scratch, and turning experiments into things
          people can use.
        </p>
      </div>

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

      <div className="hero__panel" aria-label="Developer status">
        <div className="hero__panel-header">
          <span className="mono-label">late-night-command-module</span>
          <span className="hero__panel-status">
            <span aria-hidden="true" />
            online
          </span>
        </div>
        <div className="hero__panel-screen" aria-hidden="true">
          <span className="hero__panel-grid" />
          <span className="hero__panel-orbit hero__panel-orbit--one" />
          <span className="hero__panel-orbit hero__panel-orbit--two" />
          <span className="hero__panel-core" />
          <span className="hero__panel-line hero__panel-line--one" />
          <span className="hero__panel-line hero__panel-line--two" />
        </div>
        <div className="hero__panel-footer">
          <span className="mono-label">status / building in public</span>
          <code>const next = ship(idea);</code>
        </div>
      </div>
    </section>
  );
}

export default Hero;