import React, { useRef, useEffect } from "react";
import teamData from "../data/teamData.json";
import { motion, useInView } from "framer-motion";
import { Linkedin, Briefcase } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

/* ---------------- COLORS ---------------- */
const NAVY_BLUE = "#0b132b";

/* ---------------- ANIMATION ---------------- */
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90 },
  },
};

/* ---------------- TEAM CARD ---------------- */
const TeamCard = ({ member }) => (
  <motion.article
    variants={cardVariants}
    whileHover={{ y: -4 }}
    className="
      bg-white border border-gray-100 rounded-2xl
      shadow-md hover:shadow-xl transition-all
      overflow-hidden h-full
    "
  >
    <div className="grid grid-cols-[40%_60%] h-full">
      {/* IMAGE */}
      <div className="relative bg-gray-100">
        <img
          src={member.imagePath}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold leading-tight" style={{ color: NAVY_BLUE }}>
            {member.name}
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            {member.title}
          </p>

          {member.specialty && (
            <p className="text-xs font-medium mt-1" style={{ color: NAVY_BLUE }}>
              {member.specialty}
            </p>
          )}

          {member.bio && (
            <p className="text-sm text-gray-700 leading-relaxed line-clamp-3 mt-2">
              {member.bio}
            </p>
          )}
        </div>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold mt-3"
            style={{ color: NAVY_BLUE }}
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

/* ---------------- MAIN SECTION ---------------- */
export default function MeetTheTeam() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  /* -------- EMBLA (ALL DEVICES) -------- */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  /* -------- AUTOPLAY -------- */
  const autoplayRef = useRef(null);
  const AUTOPLAY_DELAY = 3000;

  useEffect(() => {
    if (!emblaApi) return;

    const play = () => {
      autoplayRef.current = setInterval(() => {
        emblaApi.scrollNext();
      }, AUTOPLAY_DELAY);
    };

    const stop = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    play();

    emblaApi.on("pointerDown", stop);
    emblaApi.on("pointerUp", play);
    emblaApi.on("mouseEnter", stop);
    emblaApi.on("mouseLeave", play);

    return () => stop();
  }, [emblaApi]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 md:py-24"
      id="our-team"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider"
            style={{ color: NAVY_BLUE }}
          >
            <Briefcase size={16} />
            Our Core Team
          </span>

          <h2
            className="text-3xl md:text-5xl font-extrabold mt-4"
            style={{ color: NAVY_BLUE }}
          >
            People Behind the Products
          </h2>

          <p className="text-gray-600 text-base md:text-lg mt-3">
            Experienced professionals building scalable, real-world digital solutions.
          </p>
        </motion.div>

        {/* -------- ALL DEVICES: CAROUSEL -------- */}
        <div ref={emblaRef} className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {teamData.map((member) => (
              <div
                key={member.id}
                className="
                  min-w-[85%]
                  sm:min-w-[70%]
                  md:min-w-[45%]
                  lg:min-w-[32%]
                "
              >
                <TeamCard member={member} />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
