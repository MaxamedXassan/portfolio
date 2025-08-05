import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-white px-4"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        Mohamed Hassan
      </h1>

      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Frontend Web Developer | React & Next.js
      </p>

      <a
        href="#projects"
        className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
