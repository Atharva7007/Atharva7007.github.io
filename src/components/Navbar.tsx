import { Link } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaFileAlt,
  FaUser,
  FaCode,
} from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 fixed top-0 left-0 w-full z-10">
      <ul className="flex justify-center space-x-20 font-bold text-lg">
        <li>
          <Link to="/" className="flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/projects" className="flex items-center space-x-2">
            <FaProjectDiagram />
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/skills" className="flex items-center space-x-2">
            <FaCode />
            <span>Skills</span>
          </Link>
        </li>
        <li>
          <Link to="/publications" className="flex items-center space-x-2">
            <MdOutlineScience />
            <span>Publications</span>
          </Link>
        </li>
        <li>
          <Link to="/resume" className="flex items-center space-x-2">
            <FaFileAlt />
            <span>Resume</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex items-center space-x-2">
            <FaUser />
            <span>About Me</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
