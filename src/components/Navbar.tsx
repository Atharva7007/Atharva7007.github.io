import { Link } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaFileAlt,
  FaUser,
  FaCode,
} from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";

const navItems = [
  { path: "/", icon: FaHome, label: "Home" },
  { path: "/projects", icon: FaProjectDiagram, label: "Projects" },
  { path: "/skills", icon: FaCode, label: "Skills" },
  { path: "/publications", icon: MdOutlineScience, label: "Publications" },
  { path: "/resume", icon: FaFileAlt, label: "Resume" },
  { path: "/about", icon: FaUser, label: "About Me" },
];

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 fixed top-0 left-0 w-full z-10">
      <ul className="flex justify-center space-x-20 font-bold text-lg">
        {navItems.map(({ path, icon: Icon, label }) => (
          <li key={path}>
            <Link to={path} className="flex items-center space-x-2">
              <Icon />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
