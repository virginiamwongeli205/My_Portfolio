import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Services", "About", "Portfolio", "Contact"];

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-xl font-bold text-white">
          <span className="text-[#39FF14]">V</span>irginia
        </h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-[#A1A1AA] hover:text-[#39FF14] transition duration-300 relative group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#39FF14] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <button className="px-5 py-2 rounded-lg bg-[#39FF14] text-black font-semibold hover:shadow-[0_0_15px_#39FF14] transition duration-300">
            <a href="#contact">Hire Me</a>
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-white text-xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#111111] px-6 pb-6"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-[#A1A1AA] hover:text-[#39FF14] transition"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}

            <button className="mt-4 px-5 py-2 rounded-lg bg-[#39FF14] text-black font-semibold">
              Hire Me
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
