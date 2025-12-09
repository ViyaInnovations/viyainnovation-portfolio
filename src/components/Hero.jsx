import React from 'react';
import { motion } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  Monitor,
  ArrowRight,
  Send,
  Sparkles,
} from "lucide-react";

// --- Custom Color Definitions ---
const NAVY_BLUE = "#0b132b";
const NAVY_HOVER_BG = "#1e293b"; // Darker shade for CTA hover (Slate-900 equivalent)
const NAVY_ACCENT_LIGHT = "#e0f2f1"; // Very light cyan/slate for tagline background (similar to the light indigo)
const NAVY_ACCENT_BORDER = "#475569"; // Slate-600 equivalent for tagline border
const NAVY_SHADOW = "0 6px 20px rgba(11, 19, 43, 0.4)"; // Shadow based on the primary color

// Framer Motion Variants for Staggered Children (Kept for smooth entrance)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 12, mass: 0.5 }
  },
};

// Framer Motion Variants for the Stat items (Interactive hover animation)
const statVariants = {
    hover: { 
      y: -2,
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 }
    },
    initial: { 
      y: 0,
      boxShadow: "none"
    }
}

export default function AdvancedHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-16 lg:grid-cols-12 items-center"
      >
        {/* Left Content Column */}
        <div className="lg:col-span-7">
          
          {/* Tagline/Pre-Header - Clean & Subtle Navy Accent */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{ 
                backgroundColor: NAVY_ACCENT_LIGHT, 
                color: NAVY_BLUE, // Text color is Navy
                borderColor: NAVY_ACCENT_BORDER // Border color is a dark slate
            }}
          >
            <Sparkles size={14} style={{ color: NAVY_BLUE }} />
            Full-Service Creative Studio for Global Brands
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 tracking-tighter"
          >
            We engineer <strong>memorable brands</strong> and high-performance digital platforms.
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants} 
            className="mt-5 text-base md:text-lg text-gray-600 max-w-lg"
          >
            Your dedicated partner in Strategic Branding, Enterprise Web Development, Motion Graphics, and Targeted Digital Marketing—delivering measurable impact worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-3">
            {/* Primary CTA: Dynamic and Elevated Navy Button */}
            <motion.a 
              whileHover={{ scale: 1.03, boxShadow: NAVY_SHADOW }} // Custom Navy Shadow
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-lg transition duration-200"
              style={{ backgroundColor: NAVY_BLUE }} // Navy Background
              onMouseEnter={e => e.currentTarget.style.backgroundColor = NAVY_HOVER_BG}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = NAVY_BLUE}
            >
              <Send size={16} />
              Start Your Project
            </motion.a>
            
            {/* Secondary CTA: Transparent/Bordered */}
            <a 
              href="#work" 
              className="inline-flex items-center justify-center gap-2 border border-gray-300 px-5 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-200"
            >
              See Our Work 
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Stats/Social Proof - Navy Icons */}
          <motion.div variants={itemVariants} className="mt-10 pt-6 border-t border-gray-100 grid grid-cols-3 gap-6">
            
            {/* Stat 1 */}
            <motion.div 
                variants={statVariants} 
                initial="initial" 
                whileHover="hover" 
                className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-gray-100 transition duration-150 cursor-pointer"
            >
              {/* Navy Icon */}
              <Briefcase size={18} className="mt-1" style={{ color: NAVY_BLUE }} />
              <div>
                <div className="text-xl font-bold text-gray-900">200+</div>
                <div className="text-xs font-medium uppercase tracking-wider text-gray-500">Projects Completed</div>
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
                variants={statVariants} 
                initial="initial" 
                whileHover="hover" 
                className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-gray-100 transition duration-150 cursor-pointer"
            >
              {/* Navy Icon */}
              <TrendingUp size={18} className="mt-1" style={{ color: NAVY_BLUE }} />
              <div>
                <div className="text-xl font-bold text-gray-900">Global</div>
                <div className="text-xs font-medium uppercase tracking-wider text-gray-500">Client Reach</div>
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
                variants={statVariants} 
                initial="initial" 
                whileHover="hover" 
                className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-gray-100 transition duration-150 cursor-pointer"
            >
              {/* Navy Icon */}
              <Monitor size={18} className="mt-1" style={{ color: NAVY_BLUE }} />
              <div>
                <div className="text-xl font-bold text-gray-900">100%</div>
                <div className="text-xs font-medium uppercase tracking-wider text-gray-500">Digital Focus</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Visual Column (Sophisticated structure with clean placeholder) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
          className="lg:col-span-5 hidden lg:block"
        >
          {/* The placeholder retains its high-end, clean structure */}
          <div className="w-full h-[500px] rounded-3xl bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200 shadow-2xl">
            <h3 className="text-lg font-medium text-gray-400">
              [Placeholder for High-End Digital/Motion Visual]
            </h3>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}