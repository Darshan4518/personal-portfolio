import "./App.css";
import EducationSection from "./components/EducationSection";
import HeroSection from "./components/Home";
import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div className="antialiased bg-black min-h-screen max-w-full overflow-x-hidden">
      {/* Main Section */}
      <main className="space-y-16">
        {/* Hero Section */}
        <section>
          <HeroSection />
        </section>
        {/* Skills Section */}
        <section>
          <SkillsSection />
        </section>
        {/* Projects Section */}
        <section>
          <Projects />
        </section>
        {/* Education Section */}
        <section>
          <EducationSection />
        </section>
      </main>
    </div>
  );
}

export default App;
