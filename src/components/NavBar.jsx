import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Send,
} from "lucide-react";

// 🔹 Navigation config
const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", route: "/about" },     // 👈 route
  { name: "Contact", route: "/contact" }, // 👈 route
];

// --- Custom Color Definitions ---
const NAVY_BLUE = "#0b132b";
const NAVY_HOVER = "#1e293b";
const NAVY_SHADOW = "0 4px 15px rgba(11, 19, 43, 0.4)";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Navigation handler (single source of truth)
  const handleNavigation = (link) => {
    setIsOpen(false);

    if (link.route) {
      navigate(link.route); // SPA navigation
    } else if (link.href) {
      window.location.href = link.href; // hash scroll
    }
  };

  // Animations
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <>
      {/* Navbar Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 group bg-transparent border-none"
          >
            <img src="/logo.png" alt="Logo" className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-extrabold text-gray-900">
                ViyaInnovations
              </h1>
              <p className="text-xs font-medium" style={{ color: NAVY_BLUE }}>
                Branding • Web • Motion
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(link)}
                className="relative group bg-transparent border-none cursor-pointer transition"
                onMouseEnter={e => e.currentTarget.style.color = NAVY_BLUE}
                onMouseLeave={e => e.currentTarget.style.color = ""}
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  style={{ backgroundColor: NAVY_BLUE }}
                />
              </button>
            ))}

            <button className="flex items-center gap-1 text-xs font-semibold">
              <Globe size={16} /> EN <ChevronDown size={14} />
            </button>

            <motion.a
              whileHover={{ scale: 1.05, boxShadow: NAVY_SHADOW }}
              href="#quote"
              className="ml-4 px-6 py-2.5 rounded-full text-white text-sm font-semibold"
              style={{ backgroundColor: NAVY_BLUE }}
            >
              <Send size={16} /> Get a Quote
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full border"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-white z-40 p-8 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-xl font-bold">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => handleNavigation(link)}
                  className="text-left bg-transparent border-none"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
