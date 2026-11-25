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

      <div className="hero__grid">
        <div className="hero__copy">
          <span className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            Open to internships · Summer 2027
          </span>
          <h1 id="hero-title">Edoardo Chessa</h1>
          <p className="hero__role">SWE Student at Politecnico di Milano</p>
          <p className="hero__summary">
            Software Engineering student at Politecnico di Milano. I build full-stack apps and systems tools, most recently Aurora, an AI assistant with persistent memory (React, Express, Gemini API, SQLite). Looking for a summer 2027 internship in backend or full-stack development.
          </p>

          <div className="hero__actions" aria-label="Contact and resume">

            <a
              className="hero__action--secondary"
              href="/Edoardo_Chessa_CV.pdf"
              download
            >
              Download CV
            </a>
            <nav className="hero__links" aria-label="Social links">
              <a
                href="https://github.com/zj6pxpr5hd-creator"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub (opens in a new tab)"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/edoardo-chessa-65487a442"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
              >
                LinkedIn
              </a>
            </nav>

          </div>

          

          <div className="hero__metrics" aria-label="Current focus">
            <div className="hero__metric">
              <span className="mono-label">Focus</span>
              <strong>Full-stack + Backend</strong>
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
        </div>
          <div className="hero__panel-screen">
            <video
              src="/Aurora_video.mp4"
              poster="/aurora-poster.png"
              autoPlay muted loop playsInline
              className="video_display"
              aria-label="Demo of Aurora answering a question using stored memory"
            />
          </div>
        </div>
      </div>
      </AnimatedBackground>
    </section>
  );
}

export default Hero;