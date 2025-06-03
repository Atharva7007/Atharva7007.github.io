import {
  FaPython,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
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
  SiTypescript,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiNginx,
  SiSqlite,
} from "react-icons/si";

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "C", icon: <SiCplusplus className="text-gray-500 rotate-180" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
    ],
  },
  {
    name: "Machine Learning & AI",
    skills: [
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="text-orange-500" />,
      },
      { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
      { name: "Pandas", icon: <SiPandas className="text-blue-600" /> },
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn className="text-orange-600" />,
      },
    ],
  },
  {
    name: "Web Development",
    skills: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Flask", icon: <SiFlask className="text-white" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
      { name: "Django", icon: <SiDjango className="text-green-600" /> },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Apache Kafka", icon: <SiApachekafka className="text-white" /> },
      { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
      { name: "Nginx", icon: <SiNginx className="text-green-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "SQLite", icon: <SiSqlite className="text-blue-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="py-10 px-5" style={{ marginTop: "50px" }}>
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {category.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {category.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform w-40 h-28"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-base font-semibold text-white">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
