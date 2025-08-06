"use client"
import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"; // ✅ icons from react-icons

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white px-6 md:px-12 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Contact Me
        </h2>
        <p className="text-gray-600 mb-12">
          Have a project in mind or want to collaborate? Let’s talk!
        </p>
      </div>

      {/* Contact Form */}
      <form
        className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md p-8 space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info + About */}
      <div className="mt-16 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left - Contact Info */}
        <div className="flex-1 space-y-4 text-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Get in Touch</h3>
          
          <div className="flex items-center gap-3">
            <FiMail className="text-xl text-black" />
            <p>hassanhuriye05@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <FiPhone className="text-xl text-black" />
            <p>+252 61 264 2905</p>
          </div>

          <div className="flex items-center gap-3">
            <FiMapPin className="text-xl text-black" />
            <p>Mogadishu, Somalia</p>
          </div>
        </div>

        {/* Right - About Me */}
        <div className="flex-1 text-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">About Me</h3>
          <p>
            I’m a dedicated frontend developer who enjoys turning designs into functional websites.
            My mission is to build modern, responsive, and accessible interfaces that provide great
            user experience. I'm currently open for new freelance or full-time opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
