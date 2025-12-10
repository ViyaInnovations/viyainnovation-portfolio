import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import {
    Target, 
    LayoutGrid, 
    Code, 
    Rocket,
    CheckCircle
} from "lucide-react";

// --- Custom Color Definitions (for consistency) ---
const NAVY_BLUE = "#0b132b";
const NAVY_ACCENT_LIGHT = "#e0f2f1"; // Light background for step icons

// --- Data: 4-Step Process ---
const processSteps = [
    {
        icon: Target,
        title: "1. Define & Strategize",
        description: "We initiate with deep discovery sessions to align on goals, define the user journey, and architect a technical roadmap tailored to your market.",
    },
    {
        icon: LayoutGrid,
        title: "2. Design & Prototype",
        description: "Our creative team crafts wireframes, visual mockups, and interactive prototypes, ensuring full design approval and flawless user experience (UX/UI) before code begins.",
    },
    {
        icon: Code,
        title: "3. Build & Iterate",
        description: "Development runs on transparent, agile sprints. We test rigorously across devices and integrate continuous feedback, ensuring robust, high-quality execution.",
    },
    {
        icon: Rocket,
        title: "4. Launch & Optimize",
        description: "We manage the deployment process, followed by comprehensive performance monitoring and a defined phase of iterative post-launch optimization and support.",
    },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            type: "spring",
            stiffness: 70,
        }
    }
};

// --- Component: Individual Step in the Timeline ---
const ProcessStep = ({ step, isLast }) => {
    const IconComponent = step.icon;

    return (
        <motion.div variants={stepVariants} className="flex relative pl-10 md:pl-0 md:items-start w-full">
            
            {/* Vertical Line Connector (Hidden on last item) */}
            {!isLast && (
                <div className="absolute top-0 bottom-0 left-[21px] md:left-1/2 md:-translate-x-1/2 w-0.5" style={{ backgroundColor: NAVY_ACCENT_LIGHT }} />
            )}

            {/* Left Side Content (Text on Left of line for large screens) */}
            <div className="hidden md:flex w-1/2 justify-end pr-10">
                <div className="text-right max-w-lg">
                    <h3 className="text-xl font-bold mb-2" style={{ color: NAVY_BLUE }}>{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                </div>
            </div>

            {/* Center Icon Circle */}
            <div className="absolute md:relative left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full z-10 shrink-0" 
                 style={{ backgroundColor: NAVY_BLUE }}
            >
                <IconComponent size={20} className="text-white" />
            </div>

            {/* Right Side Content (Text on Right of line for small screens) */}
            <div className="w-full md:w-1/2 pl-6 md:pl-10 pb-16 md:pb-0">
                {/* Visible on small screens only */}
                <div className="md:hidden">
                    <h3 className="text-xl font-bold mb-2" style={{ color: NAVY_BLUE }}>{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                </div>
            </div>
        </motion.div>
    );
};


// --- Main Component: Process ---
export default function Process() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section className="bg-white py-20 md:py-32" id="process">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <span className="text-sm font-semibold uppercase tracking-wider mb-2 inline-block" style={{ color: NAVY_BLUE }}>
                        Our Systematic Approach
                    </span>
                    <h2 
                        className="text-4xl md:text-5xl font-extrabold mb-4"
                        style={{ color: NAVY_BLUE }}
                    >
                        Our Method to Guaranteed Success
                    </h2>
                    <p className="text-lg text-gray-600">
                        We don't just deliver projects; we build partnerships through a transparent, systematic, and data-driven approach designed for measurable business growth.
                    </p>
                </div>
                
                {/* Timeline Container */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="md:grid md:grid-cols-2 gap-y-16 md:gap-y-0 relative"
                >
                    {processSteps.map((step, index) => (
                        <div 
                            key={index}
                            // Alternate the step direction on large screens
                            className={index % 2 === 1 ? 'md:col-start-2' : 'md:col-start-1'}
                        >
                            <ProcessStep 
                                step={step} 
                                isLast={index === processSteps.length - 1}
                            />
                        </div>
                    ))}
                    
                    {/* The main vertical line for MD screens and up */}
                    <div className="hidden md:block absolute inset-y-0 left-1/2 w-0.5" style={{ backgroundColor: NAVY_ACCENT_LIGHT }} />
                </motion.div>
                
                {/* Final CTA/Confidence Builder */}
                <div className="mt-16 md:mt-24 text-center max-w-2xl mx-auto p-6 rounded-xl" style={{ backgroundColor: NAVY_ACCENT_LIGHT }}>
                    <p className="text-lg font-medium text-gray-700 flex items-center justify-center gap-3">
                        <CheckCircle size={24} style={{ color: NAVY_BLUE }} className="shrink-0" />
                        Ready to see your project move forward with clarity and confidence?
                    </p>
                    <motion.a 
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        href="#contact" 
                        className="mt-4 inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-xl text-md font-semibold shadow-lg transition duration-200"
                        style={{ backgroundColor: NAVY_BLUE }} 
                    >
                        Start a Project Today
                    </motion.a>
                </div>

            </div>
        </section>
    );
}