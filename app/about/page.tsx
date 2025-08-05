import React from "react";
import Image from "next/image";
import aboutImg from "@/public/home2.avif"; // waxaad u beddeli kartaa sawirkaaga

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-12 py-16 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* Left - Image */}
      <div className="w-full md:w-[400px] h-[300px] relative">
        <Image
          src={aboutImg}
          alt="About Mohamed"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow"
          priority
        />
      </div>

      {/* Right - Text */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          I'm a passionate frontend developer who loves building modern, responsive web
          applications using React and Next.js. I enjoy turning complex problems into simple,
          beautiful, and intuitive designs.
        </p>
        <p className="text-gray-600">
          I focus on writing clean and efficient code, constantly learning new technologies, and
          delivering high-quality user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
