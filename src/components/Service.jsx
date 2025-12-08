import React from 'react';
import { motion } from "framer-motion";
import {
  Monitor, // Web Development
  Palette, // Graphic Designing
  Film,    // Motion Graphics, Video Advertising
  Megaphone, // Advertising, Campaigns
  Users,   // Events, Social Media Marketing
  Camera,  // Photography
  Sparkles, // Branding
  Youtube, // YouTube Marketing
  Search,  // SEO
  Award,   // General for a campaign/event if specific not found
  Mail,    // For a general marketing icon if needed
  Briefcase, // Another general icon
  ArrowRight
} from "lucide-react";

// --- Framer Motion Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

// --- Service Data Array with Icons, Descriptions, and Images ---
const serviceData = [
  {
    name: "Web Development",
    icon: Monitor,
    description: "Crafting high-performance, scalable websites and web applications.",
    image: "https://images.unsplash.com/photo-1593642532781-0309919c6463?auto=format&fit=crop&q=80&w=1978&h=300&blur=3", // Code on screens
  },
  {
    name: "Branding & Identity",
    icon: Sparkles,
    description: "Developing strong, memorable brand identities that resonate globally.",
    image: "https://images.unsplash.com/photo-1549032338-7bb79e5e7df9?auto=format&fit=crop&q=80&w=1978&h=300&blur=3", // Branding elements
  },
  {
    name: "Graphic Designing",
    icon: Palette,
    description: "Visually stunning designs for all your digital and print needs.",
    image: "https://images.unsplash.com/photo-1522204523234-87295a78f598?auto=format&fit=crop&q=80&w=1978&h=300&blur=3", // Design studio/creative tools
  },
  {
    name: "Motion Graphics",
    icon: Film, // Using Film for motion/video
    description: "Engaging animated visuals to tell your story dynamically.",
    image: "https://images.unsplash.com/photo-1557997380-60a6ae578278?auto=format&fit=crop&q=80&w=1978&h=300&blur=3", // Abstract motion/lights
  },
  {
    name: "Digital Advertising",
    icon: Megaphone,
    description: "Strategic campaigns to maximize your reach and conversion rates.",
    image: "https://images.unsplash.com/photo-1528642392095-2dd8b8160212?auto=format&fit=crop&q=80&w=1978&h=300&blur=3", // Digital ads/growth charts
  },
  {
    name: "Social Media Marketing",
    icon: Users,
    description: "Building vibrant online communities and driving engagement.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1978&h=300&blur=3", // Social media icons/people interacting
  },
  {
    name: "Photography",
    icon: Camera,
    description: "Capturing high-quality visuals that tell your brand's story.",
    image: "https://images.unsplash.com/photo-1457460835848-f608947f6487?auto=format&fit=crop&q=80&w=1978&h=300&blur=3", // Camera lens/photo shoot
  },
  {
    name: "YouTube Marketing",
    icon: Youtube,
    description: "Optimizing content and channels for maximum video audience engagement.",
    image: "https://images.unsplash.com/photo-1616400619175-5be81fe0166d?auto=format&fit=crop&q=80&w=1978&h=300&blur=3", // YouTube interface/content creation
  },
  {
    name: "SEO Campaigns",
    icon: Search,
    description: "Boosting your search engine rankings for organic visibility and traffic.",
    image: "https://images.unsplash.com/photo-1616075196588-410c55ff111a?auto=format&fit=crop&q=80&w=1978&h=300&blur=3", // SEO terms/magnifying glass
  },
  // Added "Events" and "Video Advertising" to match initial list with new descriptions/icons
  {
    name: "Events Management",
    icon: Award, // Or a more specific 'CalendarCheck' icon if desired
    description: "Expert planning and execution for impactful brand events.",
    image: "https://images.unsplash.com/photo-1505373877845-8c2aace4d817?auto=format&fit=crop&q=80&w=1978&h=300&blur=3", // Event setup/audience
  },
  {
    name: "Video Advertising",
    icon: Film, // Reusing Film, but could use PlayCircle if more generic play is desired
    description: "Compelling video ad creation and strategic placement for maximum ROI.",
    image: "https://images.unsplash.com/photo-1536922246289-ce43422201d8?auto=format&fit=crop&q=80&w=1978&h=300&blur=3", // Video editor/ads on screen
  },
  // Note: "Campaigns" is now covered by "Digital Advertising" and "SEO Campaigns" for better specificity.
  // If "Campaigns" is meant as a separate, overarching service, it would need its own entry.
];


export default function Service() {
  return (
    <motion.section 
      id="services" 
      className="bg-gray-50 py-20 lg:py-28 border-t border-gray-100"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Animate when section comes into view
      viewport={{ once: true, amount: 0.2 }} // Only animate once, when 20% visible
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-indigo-600 text-sm font-semibold uppercase tracking-wider mb-2"
            variants={cardVariants} // Using cardVariants for simple text animation
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            variants={cardVariants}
          >
            Comprehensive Digital Services for Global Impact
          </motion.h3>
          <motion.p 
            className="mt-6 text-lg text-gray-600"
            variants={cardVariants}
          >
            From conceptualization to execution, we cover every aspect of your brand's digital journey to ensure measurable success and lasting growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service, idx) => (
            <motion.div 
              key={service.name} 
              variants={cardVariants}
              whileHover="hover"
              className="relative p-8 rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100 flex flex-col justify-end min-h-[280px]" // Min height for consistency
            >
              {/* Blurred Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                style={{ 
                  backgroundImage: `url(${service.image})`,
                  filter: 'blur(3px)', // Apply blur directly
                  transform: 'scale(1.05)' // Slightly scale up base image to fill blurred edges
                }}
              ></div>
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 text-white">
                <div className="w-14 h-14 rounded-full bg-indigo-500/90 flex items-center justify-center mb-4 shadow-lg">
                  <service.icon size={28} className="text-white" />
                </div>
                <h4 className="font-bold text-2xl mb-2">{service.name}</h4>
                <p className="text-sm opacity-90 leading-relaxed">
                  {service.description}
                </p>
                {/* Optional: Add a "Learn More" link here with animation */}
                <motion.a 
                    href={`#${service.name.toLowerCase().replace(/\s/g, '-')}`} // Example link
                    className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-300 hover:text-indigo-100 transition duration-200"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0, textDecoration: 'underline' }}
                    transition={{ duration: 0.2 }}
                >
                    Learn More <ArrowRight size={16} className="ml-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}