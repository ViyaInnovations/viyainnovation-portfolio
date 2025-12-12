import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

// --- Custom Color Definitions (for consistency) ---
const NAVY_BLUE = "#0b132b";
const NAVY_HOVER_BG = "#1e293b"; 
const NAVY_ACCENT_LIGHT = "#e0f2f1"; 

// --- Data (Simulating import from src/data/testimonialsData.json) ---
const testimonialsData = [
  {
    id: 1,
    quote: "ViyaInnovations' strategic guidance was invaluable. They didn't just redesign our platform; they architected a growth engine that increased our weekly active users by 35% in the first quarter.",
    name: "Sarah Chen",
    title: "Head of Digital Transformation",
    company: "Ascend Global",
    imagePath: "https://images.unsplash.com/photo-1573496359142-b8d87734b584?q=80&w=200&auto=format&fit=facearea" 
  },
  {
    id: 2,
    quote: "The development team's transparency and technical depth were outstanding. We achieved a lightning-fast site speed score (98+ on mobile) which immediately lowered bounce rates and boosted SEO.",
    name: "David Al-Farsi",
    title: "Chief Technology Officer",
    company: "Horizon Financial",
    imagePath: "https://images.unsplash.com/photo-1560250097-fb5c4793082f?q=80&w=200&auto=format&fit=facearea"
  },
  {
    id: 3,
    quote: "Our brand identity needed a complete overhaul. ViyaInnovations captured our vision perfectly, creating a distinctive look and messaging that resonates strongly with our target enterprise clients.",
    name: "Maria Lopez",
    title: "VP of Marketing",
    company: "FuturePulse Analytics",
    imagePath: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=200&auto=format&fit=facearea"
  },
  {
    id: 4,
    quote: "We rely on them for all our motion graphics and video ad campaigns. The creative quality is consistently superb, leading directly to higher engagement rates than any previous vendor.",
    name: "Marcus Kane",
    title: "Creative Director",
    company: "Veloce Motors",
    imagePath: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=facearea"
  }
];

// Helper function to wrap index around array length (moved outside component)
const wrap = (min, max, value) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

// --- ANIMATION VARIANTS for the Slider ---
const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

// --- Component: TestimonialSlider ---
const TestimonialSlider = ({ testimonials }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  
  // Use useMemo to prevent recalculation on every render
  const testimonialIndex = React.useMemo(
    () => wrap(0, testimonials.length, page),
    [page, testimonials.length]
  );

  // Use useCallback to prevent function recreation
  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  const goToSlide = useCallback((index) => {
    setPage([index, index > testimonialIndex ? 1 : -1]);
  }, [testimonialIndex]);

  return (
    <div className="relative h-[450px] md:h-[400px] flex items-center justify-center">
      
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={page}
          custom={direction}
          variants={sliderVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="absolute w-full max-w-4xl px-4 md:px-0"
        >
          <TestimonialCard data={testimonials[testimonialIndex]} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg z-20 transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: NAVY_ACCENT_LIGHT, color: NAVY_BLUE }}
        aria-label="Next testimonial"
      >
        <ArrowRight size={24} />
      </button>
      <button
        onClick={() => paginate(-1)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg z-20 transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: NAVY_ACCENT_LIGHT, color: NAVY_BLUE }}
        aria-label="Previous testimonial"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 flex gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              testimonialIndex === index ? 'w-6' : 'w-2.5'
            }`}
            style={{ backgroundColor: testimonialIndex === index ? NAVY_BLUE : NAVY_ACCENT_LIGHT }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Component: Testimonial Card ---
const TestimonialCard = ({ data }) => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-4xl mx-auto">
      
      {/* Quote Icon and Text */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="shrink-0">
          <Quote size={48} style={{ color: NAVY_ACCENT_LIGHT }} className="opacity-70" />
        </div>
        
        <p className="text-xl md:text-2xl font-medium italic text-gray-700 leading-relaxed">
          "{data.quote}"
        </p>
      </div>

      {/* Client Details (Separator) */}
      <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Client Image/Placeholder */}
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-md">
            <img 
              src={data.imagePath} 
              alt={data.name} 
              className="w-full h-full object-cover"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src="https://via.placeholder.com/150/0b132b/e0f2f1?text=Client"; 
              }} 
            />
          </div>
          
          <div>
            <p className="text-lg font-bold" style={{ color: NAVY_BLUE }}>{data.name}</p>
            <p className="text-sm text-gray-500 font-medium">{data.title} at {data.company}</p>
          </div>
        </div>

        {/* Service/Project Mention */}
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" 
          style={{ backgroundColor: NAVY_ACCENT_LIGHT, color: NAVY_BLUE }}
        >
          Client Success
        </span>
      </div>
    </div>
  );
};

// --- Main Component: Testimonials ---
export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-gray-50 py-20 md:py-32" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider mb-2 inline-block" style={{ color: NAVY_BLUE }}>
            External Validation
          </span>
          <h2 
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: NAVY_BLUE }}
          >
            Don't Just Take Our Word For It
          </h2>
          <p className="text-lg text-gray-600">
            Hear directly from our partners about the measurable impact and exceptional experience of collaborating with ViyaInnovations.
          </p>
        </motion.div>
        
        {/* Testimonial Slider */}
        <div className="max-w-6xl mx-auto">
          <TestimonialSlider testimonials={testimonialsData} />
        </div>
      </div>
    </section>
  );
}