import { useEffect, useState } from "react";
import DecryptedText from "../blocks/TextAnimations/DecryptedText/DecryptedText";

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "a Software Developer",
    "a Machine Learning Enthusiast",
    "a Python Developer",
    "an Open-Source Contributor",
    "a Problem Solver",
    "a 2x Hackathon Winner",
    "a 3x Published Research Author",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000); // Change role every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1); // Increment key to force re-render
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div style={{ marginTop: "80px" }}>
      <DecryptedText
        key={animationKey} // To re-render and run animation
        text="Hi there!"
        animateOn="view"
        revealDirection="start"
        sequential={true}
        speed={40}
        style={{ fontSize: "2rem" }} // Increased font size
      />
      <div>
        <span style={{ fontSize: "2.5rem" }}>I'm</span>{" "}
        {/* Increased font size */}
        <DecryptedText
          key={animationKey} // To re-render and run animation
          text=" Atharva Pansare"
          animateOn="view"
          revealDirection="start"
          sequential={true}
          speed={45}
          style={{ color: "#39ff14", fontSize: "2.5rem" }} // Increased font size
        />
      </div>
      <br></br>

      <div>
        <p style={{ fontSize: "1.8rem" }}>
          {" "}
          {/* Increased font size */}I am{" "}
          <span style={{ color: "#39ff14" }}>{roles[currentRole]}</span>{" "}
        </p>
      </div>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>While you're here, here's something fun I found:</p>
        <img
          src="https://imgs.xkcd.com/comics/exploits_of_a_mom.png"
          alt="Exploits of a Mom"
          style={{ maxWidth: "100%", height: "auto", padding: "10px 10px" }}
        />
      </div>
    </div>
  );
};

export default Home;
