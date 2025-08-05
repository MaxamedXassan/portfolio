import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Name */}
        <div className="text-2xl font-semibold text-white">Mohamed Hasan</div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Mohamed Hasan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
