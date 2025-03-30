import React from "react";
import myPhoto from "/assets/Atharva 1.jpg"; // Ensure you have your photo in the assets folder

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        maxWidth: "80%",
        margin: "0 auto",
        marginTop: "50px",
      }}
    >
      {/* Left side: Text */}
      <div style={{ maxWidth: "50%" }}>
        <h1>About Me</h1>
        <p style={{ marginTop: "30px" }}>
          Hi, I'm Atharva! I enjoy coding, and Python really got me into the
          world of programming. I created some video games using PyGame—then I
          built AIs to play those games!
          <br />
          <br></br>
          Over time, my interest expanded to Machine Learning and Deep Learning,
          and now I'm passionate about exploring and building Machine
          Learning/Deep Learning models.
        </p>
        <br />
        <p>
          Other than that, I enjoy playing chess and tennis. I love watching
          anime and playing RPG games like Sekiro and The Witcher 3.
          <br />
          <strong>"Hesitation is defeat" – Isshin the Sword Saint.</strong>
        </p>
      </div>
      {/* Right side: Photo */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <img
          src={myPhoto} // Replace with your actual image path
          alt="Atharva Pansare"
          style={{
            width: "60%",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </div>
  );
};

export default About;
