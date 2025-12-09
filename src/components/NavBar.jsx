import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Globe, 
  Send,
} from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

// --- Custom Color Definitions ---
const NAVY_BLUE = "#0b132b";
const NAVY_HOVER = "#1e293b"; // A slightly lighter slate/blue for hover feedback
const NAVY_SHADOW = "0 4px 15px rgba(11, 19, 43, 0.4)"; // Shadow based on the primary color

export default function AdvancedNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Custom Hook to close menu on window resize (better UX)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Framer Motion Variants for animations (no change needed here)
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
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            {/* Custom Navy Logo Accent */}
            <div className="w-9 h-9 rounded-full text-white font-bold text-lg shadow-md" style={{ backgroundColor: NAVY_BLUE }}>VI</div>
            <div>
              <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">ViyaInnovations</h1>
              {/* Subtle Navy accent for tagline */}
              <p className="text-xs font-medium" style={{ color: NAVY_BLUE }}>Branding • Web • Motion</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                // Custom Navy Hover Text
                className="transition duration-150 relative group"
                style={{ "--hover-color": NAVY_BLUE }} // Using CSS variable for hover text color
                onMouseEnter={e => e.currentTarget.style.color = NAVY_BLUE}
                onMouseLeave={e => e.currentTarget.style.color = ''}
              >
                {link.name}
                {/* Custom Navy Underline Hover Effect */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: NAVY_BLUE }}></span>
              </a>
            ))}
            
            {/* CTA Button - High-Class Custom Navy Look */}
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: NAVY_SHADOW }} // Custom Navy Shadow
              whileTap={{ scale: 0.95 }}
              href="#quote"
              // Custom Navy Button and Hover Color
              className="ml-4 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold shadow-lg transition duration-200 ease-in-out"
              style={{ backgroundColor: NAVY_BLUE }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = NAVY_HOVER}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = NAVY_BLUE}
            >
              <Send size={16} />
              Get a Quote
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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

      {/* Mobile Full-Screen Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 p-8 flex flex-col justify-start md:hidden overflow-y-auto"
          >
            <div className="flex justify-end mb-10">
              <button 
                aria-label="Close Menu" 
                onClick={toggleMenu}
                className="p-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition duration-150"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col gap-6 text-2xl font-bold text-gray-800">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={toggleMenu} 
                  // Custom Navy Hover Text
                  className="py-2 transition duration-150 border-b border-gray-100 last:border-b-0"
                  style={{ "--hover-color": NAVY_BLUE }} // Using CSS variable for hover text color
                  onMouseEnter={e => e.currentTarget.style.color = NAVY_BLUE}
                  onMouseLeave={e => e.currentTarget.style.color = ''}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 + 0.2 }}
              href="#quote"
              onClick={toggleMenu}
              // Custom Navy Button and Hover Color
              className="mt-10 inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl text-white text-lg font-semibold shadow-xl transition duration-200 ease-in-out"
              style={{ backgroundColor: NAVY_BLUE }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = NAVY_HOVER}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = NAVY_BLUE}
            >
              <Send size={20} />
              Get a Quote Now
            </motion.a>
            
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