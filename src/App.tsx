import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import Stack from "./components/Stack";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="site-shell" id="top">
      <Header />
      <main className="site-main site-container">
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