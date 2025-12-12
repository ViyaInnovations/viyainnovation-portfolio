import React from 'react';
import { motion } from "framer-motion";

// --- Custom Color Definitions (Re-used for consistency) ---
const NAVY_BLUE = "#0b132b";

// --- Data: Client Logo Paths ---
// Since the logos are in public/trust/1.png to 10.png, we generate the paths.
const clientLogos = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `/trust/${i + 1}.jpg`,
    alt: `Client Logo ${i + 1}`,
}));

// We duplicate the list to ensure seamless, continuous scrolling
const duplicatedLogos = [...clientLogos, ...clientLogos];

// --- Framer Motion Variants for Continuous Scroll ---
const scrollVariants = {
    animate: {
        // Calculate the total width of the logos * number of copies (2)
        // We use translate X of -50% to move exactly half the track length (the original list)
        x: ['0%', '-50%'], 
        transition: {
            x: {
                ease: "linear",
                duration: 45, // Adjust duration to control speed
                repeat: Infinity,
            },
        },
    },
};


export default function TrustBar() {
    return (
        <section className="bg-white py-12 md:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Text */}
                <h2 className="text-center text-sm md:text-base font-semibold uppercase tracking-widest text-gray-500 mb-8">
                    Trusted by industry leaders worldwide
                </h2>

                {/* --- Logo Scroller Container --- */}
                <div className="relative w-full">
                    {/* Fading Gradients (Masks the start and end of the scroll) */}
                    <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" 
                         style={{ background: 'linear-gradient(to right, white, rgba(255, 255, 255, 0))' }}
                    />
                    <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" 
                         style={{ background: 'linear-gradient(to left, white, rgba(255, 255, 255, 0))' }}
                    />

                    {/* Scrolling Track */}
                    <motion.div
                        className="flex flex-row flex-nowrap w-[200%]" // Double width to hold duplicated list
                        variants={scrollVariants}
                        animate="animate"
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div 
                                key={index} 
                                className="shrink-0 flex items-center justify-center w-[10%] px-6 h-16 md:h-20"
                                // Since we have 10 original logos, each takes 10% of the 100% width
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    // Tailwind classes to style the logos
                                    className="max-h-full max-w-full object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
                                    style={{ 
                                        // Max width set to prevent stretching on screens larger than needed
                                        maxWidth: '120px' 
                                    }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}