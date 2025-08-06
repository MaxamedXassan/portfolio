import React from "react";
import { FaCode, FaPaintBrush, FaSearch } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaCode size={28} className="text-indigo-600" />,
    description: "I build fast, modern, and scalable web applications using React and Next.js.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush size={28} className="text-indigo-600" />,
    description: "I design clean, user-friendly interfaces that offer great user experience.",
  },
  {
    title: "SEO Optimization",
    icon: <FaSearch size={28} className="text-indigo-600" />,
    description: "I help improve your website's visibility on search engines for better reach.",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="service"
      className="bg-white px-6 md:px-12 py-20 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        My Services
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-md p-8 hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
