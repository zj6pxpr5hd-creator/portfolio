import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import Stack from "./components/Stack";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="site-shell" id="top">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="site-main site-container">
        <Hero />
        <ProjectsSection />
        <Stack />
      </main>
      <footer className="site-footer">
        <div className="site-container">
          <Contacts />
        </div>
      </footer>
    </div>
  );
}

export default App;