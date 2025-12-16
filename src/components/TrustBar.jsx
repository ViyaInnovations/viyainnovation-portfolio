import React from "react";
import { motion } from "framer-motion";

// --- Client Logos ---
const clientLogos = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  src: `/trust/${i + 1}.jpg`,
  alt: `Trusted brand logo ${i + 1}`,
}));

// Duplicate logos for seamless loop
const duplicatedLogos = [...clientLogos, ...clientLogos];

// --- Animation ---
const scrollVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      duration: 40,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export default function TrustBar() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="bg-white py-12 md:py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          id="trust-heading"
          className="text-center text-sm md:text-base font-semibold uppercase tracking-widest text-gray-500 mb-10"
        >
          Trusted by industry leaders worldwide
        </h2>

        {/* Marquee */}
        <div className="relative w-full">
          {/* Fade masks */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Track */}
          <motion.div
            className="flex items-center gap-x-1 md:gap-x-6 lg:gap-x-10 w-max"
            variants={scrollVariants}
            animate="animate"
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  justify-center
                  shrink-0
                  w-[120px]
                  sm:w-[140px]
                  md:w-[160px]
                  lg:w-[180px]
                  h-16
                  md:h-20
                "
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                  className="
                    max-h-full
                    max-w-full
                    object-contain
                    hover:grayscale-0
                    transition duration-300
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
