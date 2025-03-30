import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import LetterGlitch from "./blocks/Backgrounds/LetterGlitch/LetterGlitch";
import Skills from "./components/Skills";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          paddingBottom: "20px",
        }}
      >
        <h2>Find me on:</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "10px",
          }}
        >
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/atharva-pansare-948293207/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#333", // LinkedIn color
              color: "white",
              fontSize: "24px",
              textDecoration: "none",
            }}
          >
            <FaLinkedin />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Atharva7007"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#333", // GitHub color
              color: "white",
              fontSize: "24px",
              textDecoration: "none",
            }}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
