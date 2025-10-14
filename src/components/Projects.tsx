// import gif from "/assets/Under_Construction.gif";
import { FaGithub } from "react-icons/fa";

const projectCategories = [
  {
    name: "Data Science & Machine Learning",
    projects: [
      {
        name: "Fraud Shield - a RAG-based Fraud Detection (Hack NCState 2nd Place Winner)",
        description:
          "A full-stack, real-time fraud detection app powered by a Retrieval-Augmented Generation (RAG) workflow.",
        githubLink: "https://github.com/Atharva7007/fraud_detector",
        techStack: ["FastAPI", "React", "MongoDB", "Nginx", "GitHub Actions"],
      },
      {
        name: "Object Detection - NC PSI Hackathon (Winner)",
        description:
          "Won a 3-day hackathon by developing and training a YOLOv8 object detection model using AWS SageMaker.",
        githubLink: "",
        techStack: ["YOLOv8", "Python", "AWS SageMaker"],
      },
      {
        name: "Thumbnail Recommendation System",
        description:
          "A real-time thumbnail recommendation system using TensorFlow and transfer learning, deployed as a containerized REST API with Docker.",
        githubLink: "",
        techStack: ["TensorFlow", "Python", "Docker", "CherryPy"],
      },
      {
        name: "Marketing Campaign Uplift Analysis",
        description:
          "Developed a causal inference T-learner model to optimize marketing effectiveness by identifying key customer segments.",
        githubLink: "",
        techStack: ["Python", "Scikit-learn", "Pandas", "Causal Inference"],
      },
    ],
  },
  {
    name: "Web Development",
    projects: [
      {
        name: "Event Management System",
        description:
          "A full-stack Event Management System implementing CRUD operations, user authentication, and role-based access control.",
        githubLink: "https://github.com/Atharva7007/WolfEvents",
        techStack: ["Flask", "React", "SQLite", "Flask-SQLAlchemy"],
      },
      {
        name: "Real-time Chat Application",
        description:
          "A real-time chat application featuring WebSocket-based communication using Apache Kafka for message persistence and to broadcast messages.",
        githubLink: "https://github.com/Atharva7007/Chat-App",
        techStack: ["Node.js", "React", "Apache Kafka", "MySQL", "WebSockets"],
      },
      {
        name: "E-Textbook Platform Database Design",
        description:
          "A multi-entity relational schema in MySQL and developed stored procedures, triggers, with a Web interface to simulate real-world workflows.",
        githubLink: "",
        techStack: ["MySQL", "SQL", "React", "Flask"],
      },
    ],
  },
  {
    name: "Data Engineering",
    projects: [
      {
        name: "Real-Time YouTube Analytics Pipeline",
        description:
          "A real-time data pipeline to ingest YouTube API data, using Spark for transformations, Airflow for orchestration, and Streamlit for live analytics.",
        githubLink: "",
        techStack: ["Airflow", "Spark", "PostgreSQL", "Kafka", "Streamlit"],
      },
    ],
  },
  {
    name: "Software Development",
    projects: [
      {
        name: "Algorithm Visualizer",
        description:
          "Created a Python desktop application tool to visualize various sorting and pathfinding algorithms like BFS, DFS, and A*.",
        githubLink: "https://github.com/Atharva7007/Visualize-Sorts",
        techStack: ["Python", "Pygame"],
      },
    ],
  },
];

const Projects = () => {
  // return <img src={gif} alt="Description" className="w-full h-auto" />;
  return (
    <div className="py-10 px-5" style={{ marginTop: "25px" }}>
      <h1 className="text-xl text-[#39ff14] mb-4 text-center">My Projects</h1>

      {projectCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-4">
          <h2 className="text-lg font-bold text-white mb-4 text-center">
            {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>

                {project.techStack && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm transition-colors ${
                      project.githubLink
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <FaGithub />
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
