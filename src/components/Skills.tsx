import {
  FaPython,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiFlask,
  SiFastapi,
  SiDjango,
  SiApachekafka,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "C", icon: <SiCplusplus className="text-gray-500 rotate-180" /> }, // Reusing C++ icon flipped
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Flask", icon: <SiFlask className="text-white" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "Apache Kafka", icon: <SiApachekafka className="text-white" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
];

const Skills = () => {
  return (
    <div className="py-10 px-5 text-center" style={{ marginTop: "50px" }}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
