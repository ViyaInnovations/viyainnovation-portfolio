import React, { useRef, useEffect } from "react";
import teamData from "../data/teamData.json";
import { motion, useInView } from "framer-motion";
import { Linkedin, Briefcase } from "lucide-react";
import teamData from "../data/teamData.json"; 

// --- Color Definitions ---
const COLORS = {
    primary: "#0b132b",
    accent: "#e0f2f1",
    muted: "#6b7280",
};

// Utility to wrap index for carousel
const wrap = (min, max, v) => ((((v - min) % (max - min)) + (max - min)) % (max - min)) + min;

// Animation variants
const slideVariants = {
    enter: { opacity: 0, x: 60 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -60 },
};

// --- Individual Team Member Card ---
const TeamCard = ({ member }) => (
    <motion.article
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden max-w-2xl mx-auto w-full"
        itemScope
        itemType="https://schema.org/Person"
    >
        <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Image Section */}
            <div className="md:col-span-2 bg-gray-100">
                <div className="aspect-4/5 md:aspect-square w-full overflow-hidden">
                    <img 
                        src={member.imagePath} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-top"
                        itemProp="image"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-3 p-4 md:p-6 flex flex-col justify-center gap-2 md:gap-3">
                <div>
                    <h3 className="text-lg md:text-xl font-bold leading-tight" style={{ color: COLORS.primary }} itemProp="name">
                        {member.name}
                    </h3>
                    <p className="text-xs md:text-sm font-medium mt-0.5 md:mt-1 uppercase tracking-wide" style={{ color: COLORS.muted }} itemProp="jobTitle">
                        {member.title}
                    </p>
                </div>
                
                {member.specialty && (
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest" style={{ color: COLORS.primary }} itemProp="description">
                        {member.specialty}
                    </p>
                )}
                
                {member.bio && (
                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-4 md:line-clamp-none" itemProp="description">
                        {member.bio}
                    </p>
                )}
            </div>
        </div>

        {/* Social Media Section */}
        {member.linkedin && (
            <div className="border-t bg-gray-50 px-4 py-2.5 flex justify-end">
                <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: COLORS.primary }}
                    aria-label={`${member.name} LinkedIn profile`}
                    itemProp="sameAs"
                >
                    <Linkedin size={16} /> LinkedIn
                </a>
            </div>
        )}
      
  </motion.article>
);

// --- Team Carousel ---
const TeamCarousel = ({ members }) => {
    const [[page], setPage] = useState([0]);
    const index = wrap(0, members.length, page);

    useEffect(() => {
        const id = setInterval(() => setPage(([p]) => [p + 1]), 5000);
        return () => clearInterval(id);
    }, []);

    const goTo = useCallback((i) => setPage([i]), []);

    return (
        <div className="relative w-full">
            <div className="relative min-h-[580px] sm:min-h-[500px] md:min-h-[400px] flex items-center justify-center overflow-visible">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={page}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute w-full px-2 md:px-8"
                    >
                        <TeamCard member={members[index]} />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-8">
                {members.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className="h-2 rounded-full transition-all duration-300"
                        style={{
                            width: index === i ? 24 : 8,
                            background: index === i ? COLORS.primary : COLORS.accent,
                        }}
                        aria-label={`Go to team member ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

// --- Main Section Component ---
export default function MeetTheTeam() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section 
            id="our-team" 
            className="py-16 md:py-24 bg-white overflow-hidden" 
            aria-label="Meet the Team Section"
            itemScope 
            itemType="https://schema.org/Organization"
        >
            <div className="max-w-6xl mx-auto px-4 md:px-8">

                {/* Header */}
                <motion.header
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
                >
                    <span
                        className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] inline-flex items-center gap-2 mb-2"
                        style={{ color: COLORS.primary }}
                    >
                        <Briefcase size={14} /> Our Core Team
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: COLORS.primary }}>
                        Meet the Innovators
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base mt-4 font-medium">
                        A dedicated team of experts focused on delivering high-performance digital solutions.
                    </p>
                </motion.header>

                {/* Carousel */}
                <TeamCarousel members={teamData} />
            </div>
        </section>
    );
}
