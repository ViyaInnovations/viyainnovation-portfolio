import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp } from "lucide-react";

// --- Custom Color Definitions (Theme Consistency) ---
const NAVY_BLUE = "#0b132b";
const NAVY_HOVER = "#1e293b"; // darker hover shade

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 15px 40px rgba(11, 19, 43, 0.25)", // navy-based shadow
    transition: { duration: 0.3 },
  }
};

// --- Case Study Data ---
const caseStudies = [
  {
    id: 1,
    title: "Enterprise Brand Relaunch for Acumen Global",
    tag: "Branding & Web Development",
    metrics: "48% Conversion Increase",
    metricIcon: TrendingUp,
    desc: "Executed a comprehensive global rebrand, including strategy, identity, and high-performance web build.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=70&h=800",
  },
  {
    id: 2,
    title: "International E-Commerce Platform Deployment",
    tag: "E-Commerce & Digital Marketing",
    metrics: "Global Market Reach",
    metricIcon: Globe,
    desc: "Built a scalable, multi-currency e-commerce solution exceeding revenue targets in under 90 days.",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=70&h=800",
  },
  {
    id: 3,
    title: "Full-Scale Performance Marketing Strategy",
    tag: "Advertising & SEO",
    metrics: "5.2X ROI Achieved",
    metricIcon: TrendingUp,
    desc: "Delivered targeted video + search campaigns with deep SEO integration to achieve massive ROI.",
    img: "https://images.unsplash.com/photo-1522881451253-dd11e039487c?auto=format&fit=crop&w=1200&q=70&h=800",
  },
];

export default function CaseStudies() {
  return (
    <motion.section
      id="work"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >

      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2
          className="text-sm font-semibold uppercase tracking-widest mb-2"
          style={{ color: NAVY_BLUE }}
        >
          Selected Work
        </h2>

        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Design Thinking, Measurable Outcomes
        </h3>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio that demonstrates strategy, scale, and powerful results.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="mt-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((c) => (
          <motion.article
            key={c.id}
            variants={cardItemVariants}
            whileHover="hover"
            className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg cursor-pointer transition-all duration-300"
          >

            {/* Image */}
            <div className="w-full h-64 overflow-hidden">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col grow">

              {/* Tag */}
              <div
                className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider"
                style={{ color: NAVY_BLUE }}
              >
                <c.metricIcon size={14} style={{ color: NAVY_BLUE }} />
                {c.tag}
              </div>

              {/* Title */}
              <h4 className="font-extrabold text-xl mb-2 text-gray-900">
                {c.title}
              </h4>

              {/* Description */}
              <p className="text-base text-gray-600 grow">
                {c.desc}
              </p>

              {/* Metrics + Link */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="font-bold text-sm text-gray-800 flex items-center gap-2">
                  <TrendingUp size={16} className="text-green-500" />
                  {c.metrics}
                </span>

                {/* Navy Styled Link */}
                <a
                  href={`#study-${c.id}`}
                  className="inline-flex items-center text-sm font-semibold transition duration-150"
                  style={{ color: NAVY_BLUE }}
                  onMouseEnter={e => e.currentTarget.style.color = NAVY_HOVER}
                  onMouseLeave={e => e.currentTarget.style.color = NAVY_BLUE}
                >
                  View Case Study
                  <ArrowRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* View All CTA */}
      <div className="mt-16 text-center">
        <a
          href="#all-work"
          className="inline-flex items-center justify-center gap-2 border border-gray-300 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-50 transition duration-200 shadow-md"
          style={{ color: NAVY_BLUE }}
        >
          View All Projects (20+)
          <ArrowRight size={20} />
        </a>
      </div>

    </motion.section>
  );
}
