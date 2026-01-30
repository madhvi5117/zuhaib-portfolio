import Navbar from "./components/Navbar.jsx";
import Hero from "./components/hero.jsx";
import HorizontalProjects from "./components/HorizontalProjects.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ReverseSkills from "./components/ReverseSkills.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import ElasticCursor from "./components/ElasticCursor";

export default function App() {
  return (
    <>
      <Navbar />
      
      <Hero />
      {/* SELECTED WORK LABEL */}
      <section
        style={{
          padding: "120px 0 60px",
          background: "#2b2e34",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            letterSpacing: "2px",
            opacity: 0.4,
          }}
        >
          SELECTED WORK
        </p>
      </section>
       <cinematicCursor />
      <HorizontalProjects />
      <ReverseSkills />
          <ElasticCursor />
      <About />
      <Contact />
    </>
  );
}
