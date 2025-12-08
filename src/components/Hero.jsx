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
  hidden: { opacity: 0, y: 15 }, // Reduced Y-offset for subtler movement
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 12, mass: 0.5 } // Adjusted physics for smoother motion
  },
};

// Framer Motion Variants for the Stat items (Interactive hover animation)
const statVariants = {
    hover: { 
        y: -2, // Subtler lift
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)", // Lighter shadow
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
          
          {/* Tagline/Pre-Header - Clean & Subtle */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 uppercase tracking-wider">
            <Sparkles size={14} className="text-indigo-500" />
            Full-Service Creative Studio for Global Brands
          </motion.div>

          {/* Main Headline - FINAL FONT REDUCTION (Max 5xl) */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 tracking-tighter"
          >
            We engineer <strong>memorable brands</strong> and high-performance digital platforms.
          </motion.h1>

          {/* Subtext - Proportional and Clean */}
          <motion.p 
            variants={itemVariants} 
            className="mt-5 text-base md:text-lg text-gray-600 max-w-lg" // Reduced default size
          >
            Your dedicated partner in Strategic Branding, Enterprise Web Development, Motion Graphics, and Targeted Digital Marketing—delivering measurable impact worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-3">
            {/* Primary CTA: Dynamic and Elevated */}
            <motion.a 
              whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-lg transition duration-200 hover:bg-indigo-700" // Reduced size again
            >
              <Send size={16} />
              Start Your Project
            </motion.a>
            
            {/* Secondary CTA: Transparent/Bordered */}
            <a 
              href="#work" 
              className="inline-flex items-center justify-center gap-2 border border-gray-300 px-5 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200" // Reduced size again
            >
              See Our Work 
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Stats/Social Proof - Cleaner, More Subtle Look with Hover Animation */}
          <motion.div variants={itemVariants} className="mt-10 pt-6 border-t border-gray-100 grid grid-cols-3 gap-6">
            
            {/* Stat 1 */}
            <motion.div 
                variants={statVariants} 
                initial="initial" 
                whileHover="hover" 
                className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-gray-100 transition duration-150 cursor-pointer"
            >
              <Briefcase size={18} className="text-indigo-500 mt-1" />
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
              <TrendingUp size={18} className="text-indigo-500 mt-1" />
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
              <Monitor size={18} className="text-indigo-500 mt-1" />
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