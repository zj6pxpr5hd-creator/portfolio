import CommandModule from "./CommandModule";
import AnimatedBackground from "./AnimatedBackground";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <AnimatedBackground>
      <CommandModule />
      <div className="hero__badges" aria-label="Current profile">
        <span className="hero__badge--highlight">SWE Year 2 / Tech · Building Daily</span>
        <span>Technology enthusiast</span>
        <span className="hero__badge--accent">💻 Looking for SWE internships</span>
      </div>

      <div className="hero__grid">
        <div className="hero__copy">
          <h1 id="hero-title">Edoardo Chessa</h1>
          <p className="hero__role">SWE Student at Politecnico di Milano &amp; Serial Builder</p>
          <p className="hero__summary">
            POLIMI student obsessed with shipping real things while maintaining a stellar GPA. 
            I love to build and break things, and I'm always looking for the next challenge.
          </p>

          <div className="hero__metrics" aria-label="Current focus">
            <div className="hero__metric">
              <span className="mono-label">Focus</span>
              <strong>Systems + full-stack</strong>
            </div>
            <div className="hero__metric">
              <span className="mono-label">Mode</span>
              <strong>Learn by doing</strong>
            </div>
            <div className="hero__metric">
              <span className="mono-label">GPA</span>
              <strong>29.83/30</strong>
            </div>
          </div>
        </div>

        <div className="hero__panel" aria-label="Developer status">
          <div className="hero__panel-header">
            <span className="mono-label">Status</span>
            <span className="hero__panel-status">
              <span aria-hidden="true" />
              0 warnings
            </span>
          </div>
          <div className="hero__panel-screen" aria-hidden="true">
            <img src="/profile_pic.jpeg" alt="Developer screen" />
          </div>
          <div className="hero__panel-footer">
            <span className="mono-label">studying / building in public</span>
            <code>const next = ship(idea);</code>
          </div>
        </div>
      </div>
      </AnimatedBackground>
    </section>
  );
}

export default Hero;