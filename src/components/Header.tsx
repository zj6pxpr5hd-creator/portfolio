import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;

function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      let current: string | null = null;
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__identity">
        <a className="site-header__brand" href="#top">
          <span className="site-header__brand-name">Edoardo Chessa</span>
          <span className="site-header__subtitle">
            SWE Undergrad · Building from scratch
          </span>
        </a>
      </div>

      <nav className="site-header__nav" aria-label="Primary navigation">
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={isActive ? "is-active" : undefined}
              aria-current={isActive ? "true" : undefined}
            >
              {label}
            </a>
          );
        })}
      </nav>

      <div className="site-header__actions">
        <span className="site-header__availability">
          <span className="site-header__availability-dot" aria-hidden="true" />
          ONLINE
        </span>
        <a className="site-header__cta" href="#contact">
          Let&apos;s Talk Code
        </a>
      </div>
    </header>
  );
}

export default Header;