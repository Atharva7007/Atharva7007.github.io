import { useEffect, useState } from "react";
import DecryptedText from "../blocks/TextAnimations/DecryptedText/DecryptedText";
import "../styles/common.css";

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
    }, 3000); // Change role every 2 seconds

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
      <div className="flex items-center justify-between px-10">
        <div className="flex-1">
          <DecryptedText
            key={animationKey}
            text="Hi there!"
            animateOn="view"
            revealDirection="start"
            sequential={true}
            speed={40}
            style={{ fontSize: "2rem" }}
          />
          <div>
            <span className="heading-large">I'm</span>{" "}
            <DecryptedText
              key={animationKey}
              text=" Atharva Pansare"
              animateOn="view"
              revealDirection="start"
              sequential={true}
              speed={45}
              style={{ color: "#39ff14" }}
              className="heading-large"
            />
          </div>
          <br />

          <div>
            <p className="text-medium" style={{ marginTop: "-20px" }}>
              I am{" "}
              <span
                style={{
                  color: "#39ff14",
                  display: "inline-block",
                  minWidth: "32ch",
                }}
              >
                {roles[currentRole]}
              </span>
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <p className="mb-4">
            While you're here, here's something fun I found:
          </p>
          <img
            src="https://imgs.xkcd.com/comics/machine_learning.png"
            alt="XKCD 1881: Machine Learning"
            style={{
              display: "inline-block",
              maxWidth: "75%",
              height: "auto",
              padding: "10px 20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
