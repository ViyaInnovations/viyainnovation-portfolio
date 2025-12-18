import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor,
  Lightbulb,
  Code,
  Users,
  Film,
  Camera,
  Layers,
  Search,
  Megaphone,
  Calendar,
  Wrench,
} from "lucide-react";

/* ---------------- COLORS ---------------- */
const NAVY_BLUE = "#0b132b";
const NAVY_ACCENT_LIGHT = "#e0f2f1";

/* ---------------- ICON MAP ---------------- */
const serviceIcons = {
  Strategy: Monitor,
  Branding: Layers,
  "Graphic Designing": Lightbulb,
  "Motion & Video": Film,
  Photography: Camera,
  "Web Development": Code,
  "SEO & Campaigns": Search,
  "Social Media Marketing": Users,
  Advertising: Megaphone,
  Events: Calendar,
};

/* ---------------- SERVICES DATA ---------------- */
const groupedServices = {
  Strategy: [
    {
      title: "Branding",
      description:
        "Complete brand identity development, voice, and strategy that makes your business stand out.",
      icon: "Branding",
    },
    {
      title: "SEO & Campaigns",
      description:
        "Advanced search optimization (SEO) strategies to improve rankings and integrated campaigns for measurable business objectives.",
      icon: "SEO & Campaigns",
    },
    {
      title: "Advertising",
      description:
        "Strategic advertising campaigns that capture attention and drive conversions across platforms.",
      icon: "Advertising",
    },
  ],
  Creative: [
    {
      title: "Graphic Designing",
      description:
        "Creative visual designs including UI/UX concepts that communicate your brand effectively.",
      icon: "Graphic Designing",
    },
    {
      title: "Motion & Video",
      description:
        "Dynamic motion graphics and professional video production for digital storytelling.",
      icon: "Motion & Video",
    },
    {
      title: "Photography",
      description:
        "Professional photography services for product, lifestyle, and corporate branding.",
      icon: "Photography",
    },
  ],
  Technology: [
    {
      title: "Web Development",
      description:
        "Custom, high-performance websites and web applications built with modern technologies.",
      icon: "Web Development",
    },
    {
      title: "Social Media Marketing",
      description:
        "Content creation, strategy, and management to grow engagement and brand presence.",
      icon: "Social Media Marketing",
    },
  ],
  // Events: [
  //   {
  //     title: "Events",
  //     description:
  //       "End-to-end event planning, management, and execution for memorable experiences.",
  //     icon: "Events",
  //   },
  // ],
};

/* ---------------- ANIMATIONS ---------------- */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

/* ---------------- SERVICE CARD ---------------- */
function ServiceCard({ service }) {
  const IconComponent = serviceIcons[service.icon] || Wrench;

  return (
    <motion.article
      variants={item}
      className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 overflow-hidden"
    >
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full mb-6"
        style={{ backgroundColor: NAVY_ACCENT_LIGHT }}
      >
        <IconComponent size={24} style={{ color: NAVY_BLUE }} />
      </div>

      {/* ✅ H4 for individual service */}
      <h4 className="text-2xl font-bold mb-3" style={{ color: NAVY_BLUE }}>
        {service.title}
      </h4>

      <p className="text-gray-600 leading-relaxed text-base">
        {service.description}
      </p>

      <div className="mt-6 border-t border-gray-100">
        <span
          className="text-sm font-semibold"
          style={{ color: NAVY_BLUE }}
        >
          Explore {service.title} →
        </span>
      </div>
    </motion.article>
  );
}

/* ---------------- MAIN SERVICES SECTION ---------------- */
export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const categoryTitles = {
    Strategy: "Brand & Digital Strategy",
    Creative: "Visual & Content Creation",
    Technology: "Development & Digital Growth",
    Events: "Experiences & Execution",
  };

  return (
    <section
      id="service"
      aria-labelledby="services-heading"
      className="min-h-screen bg-gray-50"
    >
      <div className="container mx-auto px-4">

        {/* ✅ Section Heading */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-wider mb-2 inline-block"
            style={{ color: NAVY_BLUE }}
          >
            Core Offerings
          </span>

          {/* ✅ H2 instead of H1 */}
          <h2
            id="services-heading"
            className="text-3xl letter-spacing: -0.02em DM Sans sans-serif mb-6"
            style={{ color: NAVY_BLUE }}
          >
            Our Digital Solutions
          </h2>

          <p className="text-xl to-black-600 DM Sans sans-serif">
            We transform concepts into digital realities through strategy,
            creativity, and technology.
          </p>
        </header>

        {/* Categories */}
        <div ref={ref}>
          {Object.keys(groupedServices).map((categoryKey, index) => (
            <div key={categoryKey} className="mb-20">
              <motion.header
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="max-w-4xl mx-auto mb-10 text-center"
              >
                {/* ✅ H3 for category */}
                <h3 className="text-3xl mb-2 letter-spacing: -0.02em DM Sans sans-serif" style={{ color: NAVY_BLUE }}>
                  {categoryTitles[categoryKey]}
                </h3>

                <p className="text-lg to-black-500 DM Sans sans-serif">
                  {categoryKey === "Strategy" &&
                    "Laying the foundation for success with insights and positioning."}
                  {categoryKey === "Creative" &&
                    "Bringing your vision to life through visuals and motion."}
                  {categoryKey === "Technology" &&
                    "Building scalable digital platforms and online growth."}
                  {categoryKey === "Events" &&
                    "Seamless execution for impactful real-world experiences."}
                </p>
              </motion.header>

              <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              >
                {groupedServices[categoryKey].map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
