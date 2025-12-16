import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  LayoutGrid,
  Code,
  Rocket,
  CheckCircle,
} from "lucide-react";

const NAVY_BLUE = "#0b132b";
const NAVY_ACCENT_LIGHT = "#e0f2f1";

/* -----------------------------------
   DATA
----------------------------------- */
const processSteps = [
  {
    icon: Target,
    title: "1. Define & Strategize",
    description:
      "We initiate with deep discovery sessions to align on goals, define the user journey, and architect a technical roadmap tailored to your market.",
  },
  {
    icon: LayoutGrid,
    title: "2. Design & Prototype",
    description:
      "Our creative team crafts wireframes, visual mockups, and interactive prototypes, ensuring full design approval and flawless UX/UI before coding begins.",
  },
  {
    icon: Code,
    title: "3. Build & Iterate",
    description:
      "Development runs on transparent, agile sprints. We test rigorously across devices and integrate continuous feedback, ensuring robust quality.",
  },
  {
    icon: Rocket,
    title: "4. Launch & Optimize",
    description:
      "We handle deployment end-to-end, followed by monitoring, improvements, and dedicated post-launch support.",
  },
];

/* -----------------------------------
   ANIMATION VARIANTS
----------------------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

/* -----------------------------------
   MOBILE STEP
----------------------------------- */
const MobileStep = ({ step, isLast }) => {
  const Icon = step.icon;

  return (
    <motion.article
      variants={stepVariants}
      className="flex relative pl-10 w-full"
      itemScope
      itemType="https://schema.org/HowToStep"
    >
      {!isLast && (
        <div
          className="absolute top-0 bottom-0 left-[21px] w-0.5"
          style={{ backgroundColor: NAVY_ACCENT_LIGHT }}
          aria-hidden="true"
        />
      )}

      <div
        className="absolute left-0 w-10 h-10 flex items-center justify-center rounded-full z-10"
        style={{ backgroundColor: NAVY_BLUE }}
        aria-hidden="true"
      >
        <Icon size={20} className="text-white" />
      </div>

      <div className="pl-6 pb-12">
        <h3
          className="text-xl font-bold mb-2"
          style={{ color: NAVY_BLUE }}
          itemProp="name"
        >
          {step.title}
        </h3>

        <p className="text-gray-600" itemProp="text">
          {step.description}
        </p>
      </div>
    </motion.article>
  );
};

/* -----------------------------------
   DESKTOP STEP
----------------------------------- */
const DesktopStep = ({ step }) => {
  const Icon = step.icon;

  return (
    <motion.article
      variants={stepVariants}
      className="hidden md:flex flex-col items-center text-center px-6"
      itemScope
      itemType="https://schema.org/HowToStep"
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md"
        style={{ backgroundColor: NAVY_BLUE }}
        aria-hidden="true"
      >
        <Icon size={24} className="text-white" />
      </div>

      <h3
        className="text-xl font-bold mb-3"
        style={{ color: NAVY_BLUE }}
        itemProp="name"
      >
        {step.title}
      </h3>

      <p className="text-gray-600 max-w-sm" itemProp="text">
        {step.description}
      </p>
    </motion.article>
  );
};

/* -----------------------------------
   MAIN COMPONENT
----------------------------------- */
export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="process"
      className="bg-white py-20 md:py-32"
      aria-labelledby="process-heading"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span
            className="text-sm font-semibold uppercase tracking-wider mb-2 inline-block"
            style={{ color: NAVY_BLUE }}
          >
            Our Systematic Approach
          </span>

          <h2
            id="process-heading"
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: NAVY_BLUE }}
            itemProp="name"
          >
            Our Method to Guaranteed Success
          </h2>

          <p className="text-lg text-gray-600" itemProp="description">
            A transparent, structured, and high-impact process engineered to
            deliver results.
          </p>
        </header>

        {/* Steps */}
        <div ref={ref}>
          {/* Mobile */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="md:hidden"
          >
            {processSteps.map((step, i) => (
              <MobileStep
                key={step.title}
                step={step}
                isLast={i === processSteps.length - 1}
              />
            ))}
          </motion.div>

          {/* Desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="hidden md:grid grid-cols-4 gap-10 mt-10"
          >
            {processSteps.map((step) => (
              <DesktopStep key={step.title} step={step} />
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div
          className="mt-16 md:mt-20 text-center max-w-2xl mx-auto p-6 rounded-xl"
          style={{ backgroundColor: NAVY_ACCENT_LIGHT }}
        >
          <p className="text-lg font-medium text-gray-700 flex items-center justify-center gap-3">
            <CheckCircle size={24} style={{ color: NAVY_BLUE }} />
            Ready to move your project forward?
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-xl text-md font-semibold shadow-lg transition duration-200"
            style={{ backgroundColor: NAVY_BLUE }}
            aria-label="Start a new project with our team"
          >
            Start a Project Today
          </motion.a>
        </div>
      </div>
    </section>
  );
}
