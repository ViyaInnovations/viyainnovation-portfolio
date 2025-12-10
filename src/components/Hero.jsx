import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase,
    TrendingUp,
    Monitor,
    ArrowRight,
    Send,
    Sparkles,
} from "lucide-react";

// --- Custom Color Definitions (Keep these) ---
const NAVY_BLUE = "#0b132b";
const NAVY_HOVER_BG = "#1e293b"; 
const NAVY_ACCENT_LIGHT = "#e0f2f1"; 
const NAVY_ACCENT_BORDER = "#475569"; 
const NAVY_SHADOW = "0 6px 20px rgba(11, 19, 43, 0.4)"; 

// --- Motion Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 }
    }
};

const statVariants = {
    // Define stat variants for a subtle effect if needed, otherwise leave empty
};


// --- Easing Fix: Corrected Variants for the Image Transition ---
const imageVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
            duration: 0.8, 
            ease: "backOut" // Fixed: Using WAAPI-safe 'backOut' ease
        }
    },
    exit: { 
        opacity: 0, 
        scale: 0.95,
        transition: { duration: 0.4 } 
    }
};

const heroImages = [
    { src: '/1.png', alt: 'Abstract digital data flow concept' },
    { src: '/2.png', alt: 'Creative professional workspace design' },
    { src: '/3.png', alt: 'Business growth strategy visual' },
    { src: '/4.png', alt: 'Diverse remote team collaboration' },
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Image Rotation Effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => 
                (prevIndex + 1) % heroImages.length
            );
        }, 5000); 
        
        return () => clearInterval(interval);
    }, []);

    const currentImage = heroImages[currentImageIndex];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-16 lg:grid-cols-12 items-center"
            >
                {/* Left Content Column - RE-POPULATED CONTENT */}
                <div className="lg:col-span-7">
                    
                    {/* Tagline/Pre-Header */}
                    <motion.div 
                        variants={itemVariants} 
                        className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                        style={{ 
                            backgroundColor: NAVY_ACCENT_LIGHT, 
                            color: NAVY_BLUE, 
                            borderColor: NAVY_ACCENT_BORDER 
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
                        {/* Primary CTA */}
                        <motion.a 
                            whileHover={{ scale: 1.03, boxShadow: NAVY_SHADOW }} 
                            whileTap={{ scale: 0.98 }}
                            href="#contact" 
                            className="inline-flex items-center justify-center gap-2 text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-lg transition duration-200"
                            style={{ backgroundColor: NAVY_BLUE }} 
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = NAVY_HOVER_BG}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = NAVY_BLUE}
                        >
                            <Send size={16} />
                            Start Your Project
                        </motion.a>
                        
                        {/* Secondary CTA */}
                        <a 
                            href="#work" 
                            className="inline-flex items-center justify-center gap-2 border border-gray-300 px-5 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-200"
                        >
                            See Our Work 
                            <ArrowRight size={16} />
                        </a>
                    </motion.div>

                    {/* Stats/Social Proof - RE-POPULATED CONTENT */}
                    <motion.div variants={itemVariants} className="mt-10 pt-6 border-t border-gray-100 grid grid-cols-3 gap-6">
                        {/* Stat 1: 200+ Projects Completed */}
                        <div 
                            className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-gray-100 transition duration-150 cursor-pointer"
                        >
                            <Briefcase size={18} className="mt-1" style={{ color: NAVY_BLUE }} />
                            <div>
                                <div className="text-xl font-bold text-gray-900">200+</div>
                                <div className="text-xs font-medium uppercase tracking-wider text-gray-500">Projects Completed</div>
                            </div>
                        </div>

                        {/* Stat 2: Global Client Reach */}
                        <div 
                            className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-gray-100 transition duration-150 cursor-pointer"
                        >
                            <TrendingUp size={18} className="mt-1" style={{ color: NAVY_BLUE }} />
                            <div>
                                <div className="text-xl font-bold text-gray-900">Global</div>
                                <div className="text-xs font-medium uppercase tracking-wider text-gray-500">Client Reach</div>
                            </div>
                        </div>

                        {/* Stat 3: 100% Digital Focus */}
                        <div 
                            className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-gray-100 transition duration-150 cursor-pointer"
                        >
                            <Monitor size={18} className="mt-1" style={{ color: NAVY_BLUE }} />
                            <div>
                                <div className="text-xl font-bold text-gray-900">100%</div>
                                <div className="text-xs font-medium uppercase tracking-wider text-gray-500">Digital Focus</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Visual Column (Image Rotation Logic) */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
                    className="lg:col-span-5 hidden lg:block relative" 
                >
                    <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl relative">
                        <AnimatePresence initial={false} mode="wait">
                            <motion.img
                                key={currentImageIndex} 
                                src={currentImage.src} 
                                alt={currentImage.alt} 
                                variants={imageVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Image Indicators */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 p-2 bg-white/70 backdrop-blur-sm rounded-full shadow-md z-10">
                            {heroImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`h-2.5 rounded-full transition-all duration-300`}
                                    style={{ 
                                        backgroundColor: index === currentImageIndex ? NAVY_BLUE : 'rgba(11, 19, 43, 0.4)',
                                        width: index === currentImageIndex ? '20px' : '10px'
                                    }}
                                    aria-label={`Show image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}