import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import LetterGlitch from "./blocks/Backgrounds/LetterGlitch/LetterGlitch";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import SocialLinks from "./components/SocialLinks";
import "./styles/common.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </Router>

      <div className="full-screen-container">
        <LetterGlitch
          glitchColors={["#013220", "#004C2B", "#004C2A"]}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      <SocialLinks />
    </>
  );
}

export default App;
