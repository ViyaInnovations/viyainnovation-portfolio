import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Target, LayoutGrid, Code, Rocket, CheckCircle } from "lucide-react";

// JSON Data
import processSteps from "../data/processSteps.json";

// Colors
const NAVY_BLUE = "#0b132b";
const NAVY_ACCENT_LIGHT = "#e0f2f1";

// Icon Mapping (because JSON only stores icon names)
const ICON_MAP = { Target, LayoutGrid, Code, Rocket };

// Mobile Carousel Card Component
const MobileStepCard = ({ step }) => {
  const IconComponent = ICON_MAP[step.icon];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="min-w-[80%] bg-white shadow-lg rounded-2xl p-6 mx-3 border border-gray-100"
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
        style={{ background: NAVY_BLUE }}
      >
        <IconComponent size={22} className="text-white" />
      </div>

      <h3 className="text-xl font-bold mb-2" style={{ color: NAVY_BLUE }}>
        {step.title}
      </h3>
      <p className="text-gray-600 text-sm">{step.description}</p>
    </motion.div>
  );
};

// Desktop Timeline Step Component
const DesktopStep = ({ step, isLast, index }) => {
  const IconComponent = ICON_MAP[step.icon];

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 60 }}
      className="flex relative pl-10 md:pl-0 w-full"
    >
      {/* Vertical line (connector) */}
      {!isLast && (
        <div
          className="absolute top-0 bottom-0 left-[21px] md:left-1/2 md:-translate-x-1/2 w-0.5"
          style={{ backgroundColor: NAVY_ACCENT_LIGHT }}
        />
      )}

      {/* Left content */}
      <div className="hidden md:flex w-1/2 justify-end pr-10">
        {index % 2 === 0 && (
          <div className="text-right max-w-md">
            <h3 className="text-xl font-bold mb-2" style={{ color: NAVY_BLUE }}>
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        )}
      </div>

      {/* Center icon */}
      <div
        className="absolute md:relative left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10"
        style={{ backgroundColor: NAVY_BLUE }}
      >
        <IconComponent size={20} className="text-white" />
      </div>

      {/* Right content (small screens + alternating layout) */}
      <div className="w-full md:w-1/2 pl-6 md:pl-10 pb-16 md:pb-0">
        <div className="md:hidden">
          <h3 className="text-xl font-bold mb-2" style={{ color: NAVY_BLUE }}>
            {step.title}
          </h3>
          <p className="text-gray-600">{step.description}</p>
        </div>

        {index % 2 === 1 && (
          <div className="hidden md:block text-left max-w-md">
            <h3 className="text-xl font-bold mb-2" style={{ color: NAVY_BLUE }}>
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// MAIN COMPONENT
export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-white py-20 md:py-28" id="process">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase" style={{ color: NAVY_BLUE }}>
            Our Systematic Approach
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-2" style={{ color: NAVY_BLUE }}>
            Our Method to Guaranteed Success
          </h2>

          <p className="text-lg text-gray-600 mt-3">
            A transparent, efficient, and growth-focused process from strategy to launch.
          </p>
        </div>

        {/* MOBILE VIEW → CAROUSEL */}
        <div className="md:hidden overflow-x-scroll flex no-scrollbar pb-6">
          {processSteps.map((step, i) => (
            <MobileStepCard key={i} step={step} />
          ))}
        </div>

        {/* DESKTOP TIMELINE */}
        <motion.div
          ref={ref}
          className="hidden md:block relative mt-10"
        >
          {/* Vertical central line */}
          <div
            className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2"
            style={{ backgroundColor: NAVY_ACCENT_LIGHT }}
          />

          {processSteps.map((step, index) => (
            <DesktopStep
              key={index}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <div
          className="mt-20 text-center p-6 rounded-xl max-w-xl mx-auto"
          style={{ backgroundColor: NAVY_ACCENT_LIGHT }}
        >
          <p className="text-lg font-medium text-gray-700 flex justify-center gap-2">
            <CheckCircle size={24} style={{ color: NAVY_BLUE }} />
            Ready to move forward with clarity?
          </p>

          <motion.a
            whileHover={{ scale: 1.04 }}
            href="#contact"
            className="mt-4 inline-block text-white px-6 py-3 rounded-lg font-semibold"
            style={{ backgroundColor: NAVY_BLUE }}
          >
            Start Your Project
          </motion.a>
        </div>
      </div>
    </section>
  );
}
