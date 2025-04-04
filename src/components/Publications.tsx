import DecryptedText from "../blocks/TextAnimations/DecryptedText/DecryptedText";
import { useState, useEffect } from "react";

const publications = [
  {
    title: "Drone detection using YOLO and SSD: A Comparative Study",
    authors: "Atharva Pansare, Nidhi Sabu, Nitin Thakur, et al.",
    conference:
      "IEEE International Conference on Signal and Information Processing, 2022",
    link: "https://ieeexplore.ieee.org/abstract/document/10007489",
  },
  {
    title: "Personality prediction with Natural Language Processing",
    authors: "Atharva Pansare, Prabhat Panwar, Pranali Kosamkar",
    conference: "IEEE Pune Section International Conference, 2022",
    link: "https://ieeexplore.ieee.org/abstract/document/10014939",
  },
  {
    title: "Remote Landslide Detection Using Semantic Segmentation",
    authors: "Atharva Pargaonkar, Atharva Pansare, Shreyas Konjerla",
    conference: "IEEE 11th Region 10 Humanitarian Technology Conference, 2023",
    link: "https://ieeexplore.ieee.org/abstract/document/10461895",
  },
];

const Publications = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1); // Increment key to force re-render
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <div className="flex flex-col items-center mt-10 px-6">
      <div>
        {/* Increased font size */}
        <DecryptedText
          key={animationKey} // To re-render and run animation
          text="Publications"
          animateOn="view"
          revealDirection="start"
          sequential={true}
          speed={40}
          style={{
            color: "#39ff14",
            fontSize: "2.5rem",
            fontWeight: "bold",
          }} // Increased font size
        />
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{ marginTop: "40px" }}
      >
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-gray-900 p-5 rounded-2xl shadow-lg transition-transform hover:scale-105 max-w-sm flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold text-white">{pub.title}</h2>
            <p className="text-sm text-gray-400 mt-2">{pub.authors}</p>
            <p className="text-sm text-gray-500 mt-2">{pub.conference}</p>

            {/* Spacer to push Read More to the bottom */}
            <div></div>

            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-0 py-2 text-black font-semibold self-start"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
