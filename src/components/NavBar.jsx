import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
  Globe, // Used for Language Selector
  Send,
} from "lucide-react";

const navLinks = [
  { name: "Home", section: "hero", path: "/" },
  { name: "Services", section: "service", path: "/" },
  { name: "Work", section: "work", path: "/" },
  { name: "Contact", section: "contact", path: "/" },
];

// --- Custom Color Definitions ---
const NAVY_BLUE = "#0b132b";
const NAVY_HOVER = "#1e293b"; // A slightly lighter slate/blue for hover feedback
const NAVY_SHADOW = "0 4px 15px rgba(11, 19, 43, 0.4)"; // Shadow based on the primary color




export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // Custom Hook to close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Scroll Effect for Shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Framer Motion Variants (Keep as is)
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3 }
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      {/* Navbar Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm' // Dynamic Shadow
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

          {/* Logo Section - FIX: Reduced image size from w-24/h-24 to w-10/h-10 */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.png" // Assumes logo.png is in the public folder
              alt="ViyaInnovations Logo"
              className="w-10 h-10 object-contain" // FIXED SIZE
            />
            <div>
              <span className="text-xl font-extrabold text-gray-900 tracking-tight transition-colors duration-200 group-hover:text-gray-700">
                Viya Innovations
              </span>
              <p className="text-xs font-medium transition-colors duration-200" style={{ color: NAVY_BLUE }}>Branding • Web • Motion</p>
            </div>
          </a>

          {/* Desktop Navigation & Actions (No changes needed) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navLinks.map((link, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  if (location.pathname === "/") {
                    document
                      .getElementById(link.section)
                      ?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate(`/#${link.section}`);
                  }
                }}
                className="transition duration-150 relative group bg-transparent border-none cursor-pointer"
                onMouseEnter={e => (e.currentTarget.style.color = NAVY_BLUE)}
                onMouseLeave={e => (e.currentTarget.style.color = "")}
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: NAVY_BLUE }}
                />
              </button>
            ))}


            <button
              className="flex items-center gap-1.5 p-1.5 rounded-full text-gray-600 text-xs font-semibold hover:bg-gray-50 transition duration-150 border border-transparent hover:border-gray-200"
              aria-label="Select Language"
            >
              <Globe size={16} />
              EN <ChevronDown size={14} />
            </button>
          </nav>

          {/* Mobile Menu Button (No changes needed) */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2 rounded-full text-gray-600 hover:bg-gray-50 transition duration-150"
              aria-label="Select Language"
            >
              <Globe size={20} />
            </button>

            <button
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="p-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition duration-150"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Drawer (No changes needed) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 w-full max-w-sm h-screen bg-white z-40 p-8 flex flex-col justify-start md:hidden overflow-y-auto shadow-2xl"
          >
            {/* Drawer Header: Close Button and Logo */}
            <div className="flex justify-between items-center mb-10">
              <a href="#" onClick={toggleMenu} className="flex items-center gap-2">
                <img src="/logo.png" alt="ViyaInnovations Logo" className="w-8 h-8 object-contain" />
                <span className="text-xl font-extrabold text-gray-900">ViyaInnovations</span>
              </a>
              <button
                aria-label="Close Menu"
                onClick={toggleMenu}
                className="p-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition duration-150"
              >
                <X size={24} />
              </button>
            </div>


            {/* Mobile Links */}
            <nav className="flex flex-col gap-4 text-xl font-bold text-gray-800">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  type="button"
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => {
                    toggleMenu();

                    if (location.pathname === "/") {
                      document
                        .getElementById(link.section)
                        ?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      navigate(`/#${link.section}`);
                    }
                  }}
                  className="py-3 text-left transition duration-150 border-b border-gray-100 hover:border-b-2 bg-transparent border-none cursor-pointer"
                  onMouseEnter={e => (e.currentTarget.style.color = NAVY_BLUE)}
                  onMouseLeave={e =>
                    (e.currentTarget.style.color = "rgb(31 41 55)")
                  }
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>


            {/* Contact Info (Less prominent) */}
            <p className="mt-8 text-sm text-center text-gray-500">
              Ready to transform your brand?
            </p>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}