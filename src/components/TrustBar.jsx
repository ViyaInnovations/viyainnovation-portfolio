import React from 'react';
import { motion } from "framer-motion";

// --- Custom Color Definitions ---
const NAVY_BLUE = "#0b132b";

// --- Client Logos ---
const clientLogos = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  src: `/trust/${i + 1}.jpg`,
  alt: `Trusted brand logo ${i + 1}`, // ✅ Improved SEO alt
}));

// Duplicate for seamless scroll
const duplicatedLogos = [...clientLogos, ...clientLogos];

// --- Framer Motion Variants ---
const scrollVariants = {
  animate: {
    x: ['0%', '-50%'],
    transition: {
      x: {
        ease: "linear",
        duration: 45,
        repeat: Infinity,
      },
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

        {/* ✅ Semantic Section Heading */}
        <h2
          id="trust-heading"
          className="text-center text-sm md:text-base font-semibold uppercase tracking-widest text-gray-500 mb-8"
        >
          Trusted by industry leaders worldwide
        </h2>

        {/* Logo Marquee */}
        <div className="relative w-full" aria-hidden="true">
          {/* Gradient Masks */}
          <div
            className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, white, rgba(255, 255, 255, 0))' }}
          />
          <div
            className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, white, rgba(255, 255, 255, 0))' }}
          />

          {/* Scrolling Track */}
          <motion.div
            className="flex flex-row flex-nowrap w-[200%]"
            variants={scrollVariants}
            animate="animate"
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="shrink-0 flex items-center justify-center w-[10%] px-6 h-16 md:h-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"               // ✅ Performance SEO
                  decoding="async"             // ✅ Rendering optimization
                  className="
                    max-h-full
                    max-w-full
                    object-contain
                    filter
                    grayscale
                    hover:grayscale-0
                    transition-all
                    duration-300
                  "
                  style={{ maxWidth: '120px' }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
