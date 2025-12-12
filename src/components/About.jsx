import React from 'react';
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Target,
  Feather,
  PenTool,
  Code,
  Rocket,
} from "lucide-react";

// --- THEME COLOR ---
const NAVY = "#0b132b";
const NAVY_LIGHT = "rgba(11, 19, 43, 0.08)";
const NAVY_TINT = "rgba(11, 19, 43, 0.12)";

// --- Framer Motion Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 80, damping: 12 } 
  },
};

// --- Process Steps ---
const processSteps = [
  { name: "Discovery", icon: Target, desc: "Deep diving into market, audience, and business goals." },
  { name: "Strategy", icon: Feather, desc: "Defining the product roadmap and brand positioning." },
  { name: "Design", icon: PenTool, desc: "Crafting elegant UI/UX and visual prototypes." },
  { name: "Build", icon: Code, desc: "Engineering the platform using scalable, modern architecture." },
  { name: "Growth", icon: Rocket, desc: "Launching, monitoring performance, and optimizing for scale." },
];

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="bg-white py-24 lg:py-36"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: NAVY }}
            variants={itemVariants}
          >
            Our Methodology
          </motion.h2>

          <motion.h3 
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            variants={itemVariants}
          >
            A Strategic, Rigorous Path to Digital Excellence
          </motion.h3>
        </div>

        {/* Process Steps */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.name} 
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)" }}
              className="relative p-6 rounded-xl bg-gray-50 border border-gray-200 transition duration-300"
            >
              {/* Number & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div 
                  className="text-3xl font-extrabold"
                  style={{ color: NAVY + "80" }}
                >
                  0{index + 1}
                </div>

                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center border"
                  style={{ background: NAVY_LIGHT, borderColor: NAVY_TINT }}
                >
                  <step.icon size={20} style={{ color: NAVY }} />
                </div>
              </div>

              {/* Title + Desc */}
              <h4 className="font-bold text-lg mb-2 text-gray-900">
                {step.name}
              </h4>

              <p className="text-sm text-gray-600 min-h-[60px]">
                {step.desc}
              </p>

              {/* Connector Arrow */}
              {index < processSteps.length - 1 && (
                <div className="absolute -right-12 top-1/2 hidden lg:block transform -translate-y-1/2">
                    <ArrowRight size={24} className="text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Block */}
        <div 
          className="mt-20 p-8 md:p-12 text-white rounded-2xl shadow-xl max-w-4xl mx-auto"
          style={{ background: NAVY }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            <div className="md:col-span-2">
              <motion.h4 
                variants={itemVariants}
                className="font-extrabold text-3xl mb-2"
              >
                Partnerships Built for Flexibility
              </motion.h4>

              <motion.p 
                variants={itemVariants}
                className="opacity-80 text-lg"
              >
                Our engagement models—from project-based sprints to dedicated long-term teams—are designed to integrate seamlessly with your workflow.
              </motion.p>
            </div>

            <div className="md:col-span-1 text-right">
              <motion.a 
                variants={itemVariants}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-xl text-base font-semibold transition duration-200 hover:shadow-lg"
                style={{ color: NAVY }}
              >
                Discuss Your Project
              </motion.a>
            </div>

          </div>
        </div>

      </div>
    </motion.section>
  );
}
