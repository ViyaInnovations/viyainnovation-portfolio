import React, { useRef } from "react";
import portfolioData from "../data/portfolioData.json";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Zap, Target } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Colors
const NAVY_BLUE = "#0b132b";
const NAVY_HOVER_BG = "#1e293b";
const NAVY_ACCENT_LIGHT = "#e0f2f1";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
};

const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80 },
    },
};

// Project Card
const ProjectCard = ({ project }) => (
    <motion.a
        href={`/work/${project.linkSlug}`}
        variants={projectVariants}
        className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100"
    >
        <div className="relative overflow-hidden h-64 md:h-72 rounded-xl bg-gray-100">
            <img
                src={project.imagePath}
                alt={project.title}
                loading="lazy"
                className="
            w-full h-full object-cover 
            transition-all duration-500 
            group-hover:scale-[1.05] 
            group-hover:brightness-110 
            group-hover:saturate-125
        "
                style={{
                    imageRendering: "high-quality",
                    filter: "contrast(1.05) brightness(1.03)",
                }}
            />

            {/* Soft gradient overlay bottom for depth */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        <div className="p-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1 block">
                {project.client} / {project.focus}
            </span>

            <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: NAVY_BLUE }}>
                {project.title}
            </h3>

            <div
                className="flex items-center gap-2 p-1.5 rounded-md max-w-max"
                style={{ backgroundColor: NAVY_ACCENT_LIGHT }}
            >
                <Zap size={16} style={{ color: NAVY_BLUE }} />
                <p className="text-sm font-medium" style={{ color: NAVY_BLUE }}>
                    {project.result}
                </p>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100">
                <a
                    href={project.caseStudyUrl || `/work/${project.linkSlug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80"
                    style={{ color: NAVY_BLUE }}
                >
                    site visit
                    <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </motion.a>
);

// Main Component
export default function PortfolioPreview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Mobile Carousel
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

    return (
        <section className="bg-gray-50 py-16 md:py-28" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <span
                        className="text-sm font-semibold uppercase tracking-wider mb-2 inline-block"
                        style={{ color: NAVY_BLUE }}
                    >
                        Our Best Work
                    </span>

                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ color: NAVY_BLUE }}>
                        Success Built on Measurable Results
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg">
                        We believe in showing, not telling. Explore our featured case studies showcasing strategy, design,
                        tech, and impact.
                    </p>
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden overflow-hidden mb-12" ref={emblaRef}>
                    <div className="flex gap-5">
                        {portfolioData.map((project) => (
                            <div key={project.id} className="min-w-[85%]">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    {portfolioData.slice(0, 4).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>

                {/* Button */}
                <div className="mt-12 text-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        href="/work"
                        className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-xl text-md font-semibold shadow-lg transition duration-200"
                        style={{ backgroundColor: NAVY_BLUE }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = NAVY_HOVER_BG)}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = NAVY_BLUE)}
                    >
                        <Target size={20} />
                        View All Projects
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
