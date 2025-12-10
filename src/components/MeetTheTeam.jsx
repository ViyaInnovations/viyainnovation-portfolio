import React, { useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Linkedin, Briefcase, ArrowLeft, ArrowRight } from "lucide-react";

// **********************************
// FIX APPLIED HERE: Correctly importing the JSON file
// **********************************
import teamData from '../data/teamData.json'; 

// --- Custom Color Definitions (Reusing your defined colors) ---
const NAVY_BLUE = "#0b132b";
const NAVY_HOVER_BG = "#1e293b"; 
const NAVY_ACCENT_LIGHT = "#e0f2f1"; 

// --- Helper function to wrap index ---
const wrap = (min, max, value) => {
    const range = max - min;
    return ((((value - min) % range) + range) % range) + min;
};

// --- Animation Variants ---
const sliderVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        x: 0,
        opacity: 1
    },
    exit: (direction) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

// --- Component: Team Card ---
const TeamCard = ({ member }) => {
    return (
        <motion.div
            className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 border border-gray-100 max-w-4xl mx-auto"
            whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(11, 19, 43, 0.15)" }}
        >
            {/* Horizontal Layout: Image on Left, Content on Right (Desktop) */}
            <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="relative md:w-2/5 h-72 sm:h-80 md:h-auto overflow-hidden">
                    <img 
                        src={member.imagePath} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                    <span 
                        className="absolute top-3 right-3 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: NAVY_BLUE, opacity: 0.9 }}
                    >
                        {member.specialty}
                    </span>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                    {/* Bio/Quote First */}
                    <div>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 italic border-l-4 pl-4 mb-6 leading-relaxed" style={{ borderColor: NAVY_ACCENT_LIGHT }}>
                            "{member.bio}"
                        </p>
                        
                        {/* Name and Title */}
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: NAVY_BLUE }}>
                            {member.name}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg font-medium text-gray-500 mb-4">{member.title}</p>
                    </div>

                    {/* Footer / Links */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                        <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2.5 sm:p-3 rounded-full transition-colors duration-200 hover:scale-110"
                            style={{ color: NAVY_BLUE, backgroundColor: NAVY_ACCENT_LIGHT }}
                            aria-label={`LinkedIn profile for ${member.name}`}
                        >
                            <Linkedin size={20} className="sm:w-6 sm:h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// --- Component: Team Carousel (All Screens) ---
const TeamCarousel = ({ members }) => {
    const [[page, direction], setPage] = useState([0, 0]);
    
    const memberIndex = React.useMemo(
        () => wrap(0, members.length, page),
        [page, members.length]
    );

    const paginate = useCallback((newDirection) => {
        setPage([page + newDirection, newDirection]);
    }, [page]);

    const goToSlide = useCallback((index) => {
        setPage([index, index > memberIndex ? 1 : -1]);
    }, [memberIndex]);

    return (
        <div className="relative">
            {/* Carousel Container */}
            <div className="relative min-h-[620px] sm:min-h-[580px] md:min-h-[450px] lg:min-h-[420px] flex items-center justify-center overflow-hidden py-8">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={sliderVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="absolute w-full px-4 sm:px-6 md:px-8"
                    >
                        <TeamCard member={members[memberIndex]} />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons - Responsive Design */}
                <button
                    onClick={() => paginate(-1)}
                    className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg z-20 transition-all duration-300 hover:scale-110 active:scale-95"
                    style={{ backgroundColor: NAVY_ACCENT_LIGHT, color: NAVY_BLUE }}
                    aria-label="Previous team member"
                >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>
                <button
                    onClick={() => paginate(1)}
                    className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg z-20 transition-all duration-300 hover:scale-110 active:scale-95"
                    style={{ backgroundColor: NAVY_ACCENT_LIGHT, color: NAVY_BLUE }}
                    aria-label="Next team member"
                >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {members.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 sm:h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                            memberIndex === index ? 'w-6 sm:w-8' : 'w-2 sm:w-2.5'
                        }`}
                        style={{ backgroundColor: memberIndex === index ? NAVY_BLUE : NAVY_ACCENT_LIGHT }}
                        aria-label={`Go to team member ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

// --- Main Component: MeetTheTeam ---
export default function MeetTheTeam() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section className="bg-white py-16 sm:py-20 md:py-32" id="our-team">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <motion.div 
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
                >
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 inline-flex items-center gap-1 justify-center" style={{ color: NAVY_BLUE }}>
                        <Briefcase size={14} className="sm:w-4 sm:h-4" /> OUR CORE STAFF
                    </span>
                    <h2 
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4"
                        style={{ color: NAVY_BLUE }}
                    >
                        Meet the Innovators Behind the Code
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600">
                        Our cross-functional team brings deep expertise in strategic planning, modern web development, and secure cloud operations.
                    </p>
                </motion.div>
                
                {/* Team Carousel (All Screen Sizes) */}
                <div className="max-w-5xl mx-auto">
                    <TeamCarousel members={teamData} />
                </div>
            </div>
        </section>
    );
}