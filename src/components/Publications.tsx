import React from "react";

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
  return (
    <div className="flex flex-col items-center mt-10 px-6">
      <h1 className="text-3xl font-bold text-neon-green mb-6">Publications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
