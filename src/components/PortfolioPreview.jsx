import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { ArrowRight, Zap, Target } from "lucide-react";

// --- Custom Color Definitions (for consistency) ---
const NAVY_BLUE = "#0b132b";
const NAVY_HOVER_BG = "#1e293b"; 
const NAVY_ACCENT_LIGHT = "#e0f2f1"; 

// --- Dummy Data (Simulating import from src/data/portfolioData.json) ---
const portfolioData = [
    {
        id: 1,
        client: "Ascend Corp.",
        title: "Global E-commerce Platform Launch",
        focus: "Full Stack Web Development",
        result: "45% increase in conversion rate in 3 months.",
        imagePath: "https://images.unsplash.com/photo-1542831371-29b0f74f940d?q=80&w=1280&auto=format&fit=crop", 
        linkSlug: "ascend-ecommerce" 
    },
    {
        id: 2,
        client: "FuturePulse Analytics",
        title: "Data Visualization & Dashboard UI/UX",
        focus: "Strategic Design & Branding",
        result: "Reduced user support tickets by 60%.",
        imagePath: "https://images.unsplash.com/photo-1551288258-29388c3a105f?q=80&w=1280&auto=format&fit=crop",
        linkSlug: "futurepulse-dashboard"
    },
    {
        id: 3,
        client: "Veloce Motors",
        title: "Automotive Marketing Video Campaign",
        focus: "Motion Graphics & Advertising",
        result: "Generated over 5 million views across platforms.",
        imagePath: "https://images.unsplash.com/photo-1522858882-0196726c927e?q=80&w=1280&auto=format&fit=crop",
        linkSlug: "veloce-video-campaign"
    },
    {
        id: 4,
        client: "Envision Health",
        title: "Patient Portal UX/UI Redesign",
        focus: "UX Design & System Integration",
        result: "Improved patient satisfaction scores by 25%.",
        imagePath: "https://images.unsplash.com/photo-1550064214-e0c804f86d87?q=80&w=1280&auto=format&fit=crop",
        linkSlug: "envision-health-portal"
    }
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

const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
        }
    }
};

// --- Project Card Component ---
const ProjectCard = ({ project }) => {
    return (
        <motion.a 
            href={`/work/${project.linkSlug}`} 
            variants={projectVariants}
            className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100"
        >
            {/* Project Image */}
            <div className="relative overflow-hidden h-72">
                <img
                    src={project.imagePath}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] grayscale group-hover:grayscale-0"
                />
            </div>

            {/* Content Details */}
            <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1 block">
                    {project.client} / {project.focus}
                </span>
                
                <h3 
                    className="text-2xl font-bold mb-3 transition-colors"
                    style={{ color: NAVY_BLUE }}
                >
                    {project.title}
                </h3>

                {/* Key Result Badge */}
                <div className="flex items-center gap-2 p-2 rounded-lg max-w-max" style={{ backgroundColor: NAVY_ACCENT_LIGHT }}>
                    <Zap size={16} style={{ color: NAVY_BLUE }} />
                    <p className="text-sm font-medium" style={{ color: NAVY_BLUE }}>
                        {project.result}
                    </p>
                </div>
                
                {/* CTA Link */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <span 
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:opacity-80"
                        style={{ color: NAVY_BLUE }}
                    >
                        View Case Study 
                        <ArrowRight size={16} />
                    </span>
                </div>
            </div>
        </motion.a>
    );
};


// --- Main Component: PortfolioPreview ---
export default function PortfolioPreview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section className="bg-gray-50 py-20 md:py-32" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="text-sm font-semibold uppercase tracking-wider mb-2 inline-block" style={{ color: NAVY_BLUE }}>
                        Our Best Work
                    </span>
                    <h2 
                        className="text-4xl md:text-5xl font-extrabold mb-4"
                        style={{ color: NAVY_BLUE }}
                    >
                        Success Built on Measurable Results
                    </h2>
                    <p className="text-lg text-gray-600">
                        We believe in showing, not just telling. Review our featured case studies that highlight our strategic approach and the real-world impact we deliver.
                    </p>
                </div>
                
                {/* Portfolio Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    {portfolioData.slice(0, 4).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
                
                {/* View More Button */}
                <div className="mt-16 text-center">
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        href="/work" 
                        className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-xl text-md font-semibold shadow-lg transition duration-200"
                        style={{ backgroundColor: NAVY_BLUE }} 
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = NAVY_HOVER_BG}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = NAVY_BLUE}
                    >
                        <Target size={20} />
                        View All Projects
                    </motion.a>
                </div>

            </div>
        </section>
    );
}