import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white py-4 shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold">MyPortfolio</h1>

        {/* Desktop + Tablet Navigation */}
        <ul className="hidden sm:flex gap-4 md:gap-6 lg:gap-10 text-base md:text-lg font-medium">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/skills" className="hover:text-blue-400">Skills</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link to="/resume" className="hover:text-blue-400">Resume</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden bg-gray-800 w-full absolute top-16 left-0 
                    flex flex-col items-center gap-6 py-6 text-lg font-medium 
                    transition-all duration-300
                    ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"}`}
      >
        <Link to="/" onClick={() => setOpen(false)} className="hover:text-blue-400">Home</Link>
        <Link to="/about" onClick={() => setOpen(false)} className="hover:text-blue-400">About</Link>
        <Link to="/skills" onClick={() => setOpen(false)} className="hover:text-blue-400">Skills</Link>
        <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-blue-400">Projects</Link>
        <Link to="/resume" onClick={() => setOpen(false)} className="hover:text-blue-400">Resume</Link>
        <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
