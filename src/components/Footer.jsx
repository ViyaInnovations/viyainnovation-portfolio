import React from 'react';
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ArrowRight,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

// Simple variants for subtle entrance
const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
    }
}

// Data for quick links
const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Selected Work", href: "#work" },
    { name: "Our Methodology", href: "#about" },
    { name: "Careers", href: "#careers" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
        className="bg-gray-900 text-white border-t border-gray-700"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Top Section: Logo, Links, and Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10">
            
            {/* Column 1: Logo and Brand Message (Span 4 columns on large screens) */}
            <div className="col-span-2 lg:col-span-4">
                <motion.div variants={footerVariants} className="flex items-center gap-3 mb-4">
                    {/* High-Contrast, Gradient Logo */}
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-xl shadow-lg">VI</div>
                    <div className="font-extrabold text-2xl tracking-tight">ViyaInnovations</div>
                </motion.div>
                <motion.p variants={footerVariants} className="mt-4 text-gray-400 text-sm max-w-xs">
                    Engineering memorable brands and high-performance digital platforms for global leaders.
                </motion.p>
            </div>

            {/* Column 2: Quick Links (Span 2 columns) */}
            <div className="col-span-1 md:col-span-1 lg:col-span-2">
                <motion.h4 variants={footerVariants} className="font-semibold text-lg mb-4 text-indigo-400 uppercase tracking-wider">
                    Quick Links
                </motion.h4>
                <ul className="space-y-3">
                    {navLinks.map((link) => (
                        <motion.li key={link.name} variants={footerVariants}>
                            <a 
                                href={link.href} 
                                className="text-gray-300 hover:text-indigo-400 transition duration-150 text-sm"
                            >
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Contact & Location (Span 3 columns) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <motion.h4 variants={footerVariants} className="font-semibold text-lg mb-4 text-indigo-400 uppercase tracking-wider">
                    Contact Us
                </motion.h4>
                <ul className="space-y-4 text-sm">
                    <motion.li variants={footerVariants} className="flex items-start gap-3">
                        <Mail size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                        <a href="mailto:hello@viyainnovations.com" className="text-gray-300 hover:text-indigo-400 transition duration-150">hello@viyainnovations.com</a>
                    </motion.li>
                    <motion.li variants={footerVariants} className="flex items-start gap-3">
                        <Phone size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                        <span className="text-gray-300">+1 (555) 123-4567</span>
                    </motion.li>
                    <motion.li variants={footerVariants} className="flex items-start gap-3">
                        <MapPin size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                        <span className="text-gray-300">123 Global Tech Plaza, New York, NY 10001</span>
                    </motion.li>
                </ul>
            </div>
            
             {/* Column 4: Social Media (Span 3 columns) */}
            <div className="col-span-2 md:col-span-1 lg:col-span-3">
                <motion.h4 variants={footerVariants} className="font-semibold text-lg mb-4 text-indigo-400 uppercase tracking-wider">
                    Connect
                </motion.h4>
                <motion.div variants={footerVariants} className="flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-indigo-400 transition duration-150">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-indigo-400 transition duration-150">
                        <Twitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-indigo-400 transition duration-150">
                        <Instagram size={24} />
                    </a>
                </motion.div>
                <motion.a 
                    variants={footerVariants}
                    href="#contact" 
                    className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition duration-200"
                >
                    Start a Conversation <ArrowRight size={16} className="ml-2" />
                </motion.a>
            </div>
        </div>

        {/* --- Divider Line --- */}
        <hr className="my-12 border-gray-700/50" />

        {/* Bottom Section: Copyright and Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
            <motion.div variants={footerVariants} className="text-gray-500">
                © {currentYear} ViyaInnovations. All rights reserved. Built for international excellence.
            </motion.div>
            
            <motion.div variants={footerVariants} className="flex space-x-6 text-gray-500">
                <a href="#terms" className="hover:text-indigo-400 transition duration-150">Terms of Service</a>
                <a href="#privacy" className="hover:text-indigo-400 transition duration-150">Privacy Policy</a>
            </motion.div>
        </div>

      </div>
    </motion.footer>
  );
}