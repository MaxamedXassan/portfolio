"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // React Icons for hamburger

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    {  href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/service", label: "Service" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
         <div className="flex items-center gap-2">
         <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
         M
       </div>
       <span className="text-xl font-semibold">Mohamed Hassan</span>
       </div>

        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-black transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-800 focus:outline-none">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-black transition"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

