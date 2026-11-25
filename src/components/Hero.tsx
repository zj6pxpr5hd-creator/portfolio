import { useEffect, useState } from "react";
import CommandModule from "./CommandModule";
import AnimatedBackground from "./AnimatedBackground";

function Hero() {
  const [solvedCount, setSolvedCount] = useState<number | null>(null);
  const [statsLoaded, setStatsLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadSolvedCount() {
      try {
        const response = await fetch("/api/leetcode", { signal: controller.signal });
        if (!response.ok) throw new Error("LeetCode statistics request failed");

        const data: unknown = await response.json();
        if (
          typeof data !== "object" ||
          data === null ||
          !("solvedCount" in data) ||
          typeof data.solvedCount !== "number"
        ) {
          throw new Error("LeetCode statistics response is invalid");
        }

        setSolvedCount(data.solvedCount);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Unable to load LeetCode statistics:", error);
        }
      } finally {
        if (!controller.signal.aborted) setStatsLoaded(true);
      }
    }

    void loadSolvedCount();

    return () => controller.abort();
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <AnimatedBackground>
      <CommandModule />
      <div className="hero__badges" aria-label="Current profile">
        <span className="hero__badge--highlight">SWE Year 2 / Tech · Building Daily</span>
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
              <span className="mono-label">LeetCode Problems Solved</span>
              <strong>{solvedCount ?? (statsLoaded ? "Unavailable" : "Loading…")}</strong>
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
            </span>
          </div>
          <div className="hero__panel-screen">
            <img
              src="/profile_pic.jpeg"
              alt="Edoardo Chessa"
              width={736}
              height={736}
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="hero__panel-footer">
            <code>const next = ship(idea);</code>
          </div>
        </div>
      </div>
      </AnimatedBackground>
    </section>
  );
}

export default Hero;