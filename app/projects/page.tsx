import React from "react";
import Image from "next/image";
import project1 from "@/public/project1.jpg";

// Tusaale ahaan 3 project (bedeli karto)
const projects = [
  {
    title: "Portfolio Website",
    image: "/project2.jpg", // ku dar sawirkaaga gudaha public/
    description: "A personal portfolio site built with Next.js and Tailwind CSS.",
    live: "https://huriye.netlify.app/",
    code: "https://github.com/MaxamedXassan/MyPortfolio",
  },
  {
    title: "E-commerce Store",
    image: "/project1.jpg",
    description: "Modern e-commerce frontend built with React, Redux and Tailwind.",
    live: "https://store-demo.vercel.app",
    code: "https://github.com/yourusername/store",
  },
  {
    title: "Blog Platform",
    image: "/project3.png",
    description: "A blog website using Next.js, MDX, and Tailwind for blogging.",
    live: "https://myblog.vercel.app",
    code: "https://github.com/yourusername/blog",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-50 px-6 md:px-12 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
         Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
