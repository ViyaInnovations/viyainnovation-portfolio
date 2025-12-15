import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Linkedin, Briefcase } from "lucide-react";
import teamData from "../data/teamData.json";

const COLORS = {
    primary: "#0b132b",
    accent: "#e0f2f1",
    muted: "#6b7280",
};

const wrap = (min, max, v) => ((((v - min) % (max - min)) + (max - min)) % (max - min)) + min;

const slideVariants = {
    enter: { opacity: 0, x: 60 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -60 },
};

/* =========================
   TEAM CARD (REDUCED HEIGHT)
   ========================= */
const TeamCard = ({ member }) => (
    <motion.article
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden max-w-2xl mx-auto"
    >
        <div className="grid md:grid-cols-5">
            {/* IMAGE — FIXED SIZE & RATIO */}
            <div className="md:col-span-2 bg-gray-100">
                <div className="aspect-[1/1] w-full overflow-hidden">
                    <img src={member.imagePath} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
            </div>

            {/* Content */}

            <div className="md:col-span-3 p-3 md:p-4 flex flex-col gap-4">
                {/* Name & Role */}
                
                    <h3 className="text-lg font-bold leading-tight" style={{ color: COLORS.primary }}>
                        {member.name}
                    </h3>
                    <p className="text-sm leading-tight mt-0" style={{ color: COLORS.muted }}>
                        {member.title}
                    </p>
                    {member.specialty && (
                        <p className="text-xs leading-tight mt-0.5" style={{ color: COLORS.primary }}>
                            {member.specialty}
                        </p>
                    )}
                    {member.bio && (
                    // <p
                    // >
                    <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-2">{member.bio}</p>
                )}
            
            </div>
        </div>

        {/* Social Media Section (SEPARATE BOTTOM BAR) */}
        {member.linkedin && (
            <div className="border-t bg-gray-50 px-4 py-2 flex justify-end">
                <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: COLORS.primary }}
                >
                    <Linkedin size={18} /> LinkedIn
                </a>
            </div>
        )}
    </motion.article>
);

/* =========================
   CAROUSEL
   ========================= */
const TeamCarousel = ({ members }) => {
    const [[page], setPage] = useState([0]);
    const index = wrap(0, members.length, page);

    useEffect(() => {
        const id = setInterval(() => setPage(([p]) => [p + 1]), 4500);
        return () => clearInterval(id);
    }, []);

    const goTo = useCallback((i) => setPage([i]), []);

    return (
        <div className="relative">
            <div className="relative min-h-[300px] min-w-[900px] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={page}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="absolute w-full px-4 md:px-8"
                    >
                        <TeamCard member={members[index]} />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {members.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className="h-2 rounded-full transition-all"
                        style={{
                            width: index === i ? 16 : 8,
                            background: index === i ? COLORS.primary : COLORS.accent,
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

/* =========================
   MAIN SECTION
   ========================= */
export default function MeetTheTeam() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="our-team" className="py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <motion.header
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <span
                        className="text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-1"
                        style={{ color: COLORS.primary }}
                    >
                        <Briefcase size={16} /> Our Core Team
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: COLORS.primary }}>
                        Meet the Innovators Behind the Work
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base mt-3">
                        Experienced professionals delivering scalable digital solutions.
                    </p>
                </motion.header>

                <TeamCarousel members={teamData} />
            </div>
        </section>
    );
}
