import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Monitor, // Strategy/Campaigns
    Lightbulb, // Creative/Design
    Code, // Development/Tech
    Users, // Social Media
    Film, // Video/Motion
    Camera, // Photography
    Layers, // Branding
    Search, // SEO
    Megaphone, // Advertising
    Calendar, // Events
    Wrench, // General Tech
} from "lucide-react";

// --- Custom Color Definitions (for consistency) ---
const NAVY_BLUE = "#0b132b";
const NAVY_ACCENT_LIGHT = "#e0f2f1"; 

// --- Icons Mapping (Simplified & Consolidated) ---
const serviceIcons = {
    Strategy: Monitor,
    Branding: Layers,
    "Graphic Designing": Lightbulb,
    "Motion & Video": Film,
    Photography: Camera,
    "Web Development": Code,
    "SEO & Campaigns": Search,
    "Social Media Marketing": Users,
    Advertising: Megaphone,
    Events: Calendar,
};

// --- DATA: Refined and Grouped Services List ---
const groupedServices = {
    Strategy: [
        {
            title: "Branding",
            description: "Complete brand identity development, voice, and strategy that makes your business stand out.",
            icon: "Branding",
            color: "from-red-500 to-pink-500",
        },
        {
            title: "SEO & Campaigns",
            description: "Advanced search optimization (SEO) strategies to improve rankings and integrated campaigns for measurable business objectives.",
            icon: "SEO & Campaigns",
            color: "from-green-600 to-emerald-500",
        },
        {
            title: "Advertising",
            description: "Strategic advertising campaigns (digital and video) that capture attention and drive conversions across all platforms.",
            icon: "Advertising",
            color: "from-red-500 to-orange-500",
        },
    ],
    Creative: [
        {
            title: "Graphic Designing",
            description: "Creative visual designs, including UI/UX concepts, that communicate your brand message effectively and beautifully.",
            icon: "Graphic Designing",
            color: "from-pink-500 to-purple-500",
        },
        {
            title: "Motion & Video",
            description: "Dynamic motion graphics, animated content, and compelling video production for engaging digital storytelling.",
            icon: "Motion & Video",
            color: "from-green-500 to-teal-500",
        },
        {
            title: "Photography",
            description: "Professional photography services for product, lifestyle, and corporate needs, capturing stunning visuals for your brand.",
            icon: "Photography",
            color: "from-gray-500 to-slate-500",
        },
    ],
    Technology: [
        {
            title: "Web Development",
            description: "Custom, high-performance websites and web applications built with modern, cutting-edge technologies.",
            icon: "Web Development",
            color: "from-cyan-500 to-blue-500",
        },
        {
            title: "Social Media Marketing",
            description: "Comprehensive social media strategies, content creation, and management to build engagement and grow your online presence.",
            icon: "Social Media Marketing",
            color: "from-blue-500 to-indigo-500",
        },
    ],
    Events: [
        {
            title: "Events",
            description: "End-to-end event management, planning, and on-site execution that creates truly memorable and professional experiences.",
            icon: "Events",
            color: "from-yellow-500 to-orange-500",
        },
    ]
};

// --- ANIMATION VARIANTS ---
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

// --- Service Card Component (Simplified and using item variant) ---
function ServiceCard({ service, index }) {
    // Determine the correct Icon Component
    const IconComponent = serviceIcons[service.icon] || Wrench; 

    // Placeholder image structure is removed, focusing on clean design with Navy theme
    // The component is simplified to a clean card with an accent icon and text.

    return (
        <motion.div
            variants={item}
            className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 overflow-hidden"
        >
            
            {/* Icon Circle (Accent Color) */}
            <div 
                className="w-14 h-14 flex items-center justify-center rounded-full mb-6 transition-all duration-300"
                style={{ backgroundColor: NAVY_ACCENT_LIGHT }}
            >
                <IconComponent size={24} style={{ color: NAVY_BLUE }} />
            </div>

            {/* Title */}
            <h3 
                className="text-2xl font-bold text-gray-800 mb-3"
                style={{ color: NAVY_BLUE }} 
            >
                {service.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>

            {/* Link Button */}
            <div className="mt-6 pt-6 border-t border-gray-100">
                <button
                    className={`text-sm font-semibold transition-colors hover:opacity-80`}
                    style={{ color: NAVY_BLUE }} 
                >
                    Explore {service.title} →
                </button>
            </div>
        </motion.div>
    );
}

// --- Services Main Component (Structured) ---
export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Category titles for display
    const categoryTitles = {
        Strategy: "Brand & Digital Strategy",
        Creative: "Visual & Content Creation",
        Technology: "Development & Digital Growth",
        Events: "Experiences & Execution",
    };

    return (
        <div className="min-h-screen pt-32 pb-20 bg-gray-50" >
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-sm font-semibold uppercase tracking-wider mb-2 inline-block" style={{ color: NAVY_BLUE }}>
                        Core Offerings
                    </span>
                    <h1 
                        className="text-5xl md:text-6xl font-extrabold mb-6"
                        style={{ color: NAVY_BLUE }}
                    >
                        Our Digital Solutions
                    </h1>
                    <p className="text-xl text-gray-600">
                        We transform concepts into digital realities through strategic planning, compelling creative work, and robust technology execution.
                    </p>
                </div>

                {/* Services Grouped by Category */}
                <div ref={ref}>
                    {Object.keys(groupedServices).map((categoryKey, groupIndex) => (
                        <div key={categoryKey} className="mb-20">
                            {/* Category Header */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                                className="max-w-4xl mx-auto mb-10 text-center"
                            >
                                <h2 className="text-3xl font-bold mb-2" style={{ color: NAVY_BLUE }}>
                                    {categoryTitles[categoryKey]}
                                </h2>
                                <p className="text-lg text-gray-500">
                                    {/* Sub-description for the category */}
                                    {categoryKey === 'Strategy' && "Laying the foundation for success with insights, planning, and brand positioning."}
                                    {categoryKey === 'Creative' && "Bringing your vision to life with stunning visuals, engaging motion, and professional media."}
                                    {categoryKey === 'Technology' && "Building modern digital platforms and ensuring your growth through targeted online visibility."}
                                    {categoryKey === 'Events' && "Seamless execution and technical production for impactful, real-world experiences."}
                                </p>
                            </motion.div>
                            
                            {/* Cards Grid */}
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                            >
                                {groupedServices[categoryKey].map((service, index) => (
                                    <ServiceCard 
                                        key={service.title} 
                                        service={service} 
                                        index={index} 
                                    />
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}