import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <h2>Find me on:</h2>
      <div className="social-links-wrapper">
        <a
          href="https://www.linkedin.com/in/atharva-pansare-948293207/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Atharva7007"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
