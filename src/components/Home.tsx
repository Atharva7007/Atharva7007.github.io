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
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div>
      <DecryptedText
        text="Hi there!"
        animateOn="view"
        revealDirection="start"
        sequential={true}
        speed={70}
      />
      <div>
        <DecryptedText
          text="I'm Atharva Pansare"
          animateOn="view"
          revealDirection="start"
          sequential={true}
          speed={70}
        />
      </div>

      <div>
        <p>I am {roles[currentRole]}</p>
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
