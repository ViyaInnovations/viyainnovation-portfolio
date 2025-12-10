import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Linkedin, Briefcase } from "lucide-react";

// JSON Data
import teamData from "../data/teamData.json";

// Colors
const NAVY_BLUE = "#0b132b";
const NAVY_ACCENT_LIGHT = "#e0f2f1";

// Helper
const wrap = (min, max, value) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

// Animation Variants
const sliderVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 }
};

// Team Card
const TeamCard = ({ member }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 max-w-3xl mx-auto"
      whileHover={{ scale: 1.005 }}
    >
      <div className="flex flex-col md:flex-row">
        
        {/* Image */}
        <div className="md:w-2/5 h-56 md:h-full overflow-hidden">
          <img
            src={member.imagePath}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Content */}
        <div className="md:w-3/5 p-5 md:p-7 flex flex-col justify-between">
          <p
            className="text-sm md:text-base text-gray-700 italic border-l-4 pl-3 mb-4"
            style={{ borderColor: NAVY_ACCENT_LIGHT }}
          >
            "{member.bio}"
          </p>

          <div>
            <h3
              className="text-xl md:text-2xl font-bold mb-1"
              style={{ color: NAVY_BLUE }}
            >
              {member.name}
            </h3>
            <p className="text-gray-500 text-sm md:text-base mb-3">
              {member.title}
            </p>
          </div>

          <div className="border-t pt-3 flex justify-end">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full transition-transform hover:scale-110"
              style={{ background: NAVY_ACCENT_LIGHT, color: NAVY_BLUE }}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Auto Carousel
const TeamCarousel = ({ members }) => {
  const [[page], setPage] = useState([0]);
  const memberIndex = wrap(0, members.length, page);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPage(([p]) => [p + 1]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = useCallback((index) => {
    setPage([index]);
  }, []);

  return (
    <div className="relative">

      {/* Slider */}
      <div className="relative min-h-[420px] flex items-center justify-center overflow-hidden py-6">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={page}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55 }}
            className="absolute w-full px-3 md:px-8"
          >
            <TeamCard member={members[memberIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-2">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all`}
            style={{
              backgroundColor:
                memberIndex === index ? NAVY_BLUE : NAVY_ACCENT_LIGHT
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Main Component
export default function MeetTheTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-white py-16 md:py-20" id="our-team">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span
            className="text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-1"
            style={{ color: NAVY_BLUE }}
          >
            <Briefcase size={16} /> OUR CORE TEAM
          </span>

          <h2
            className="text-3xl md:text-4xl font-bold mt-2"
            style={{ color: NAVY_BLUE }}
          >
            Meet the Innovators Behind the Code
          </h2>

          <p className="text-gray-600 text-sm md:text-base mt-2">
            A dynamic team delivering modern web, mobile, and cloud solutions.
          </p>
        </motion.div>

        <TeamCarousel members={teamData} />
      </div>
    </section>
  );
}
