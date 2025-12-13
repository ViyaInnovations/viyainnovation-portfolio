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

// --- Custom Color Definitions (Ensuring high contrast on dark background) ---
const ACCENT_COLOR = "#00bcd4"; // A high-contrast Cyan/Teal accent
const NAVY_BLUE = "#0b132b"; // Your dark brand color
const GRAY_TEXT = "#a0aec0"; // Light gray text for readability

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
    { name: "Meet The Team", href: "#our-team" }, 
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
            id="contact"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                
                {/* Top Section: Logo, Links, and Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
                    
                    {/* Column 1: Logo and Brand Message */}
                    <div className="sm:col-span-2 lg:col-span-4"> 
                        <motion.div variants={footerVariants} className="flex items-center gap-3 mb-4">
                            <img 
                                src="/logo.png" 
                                alt="ViyaInnovations Logo" 
                                className="h-10 sm:h-12 w-auto" 
                            />
                        </motion.div>
                        <div className="font-extrabold text-xl sm:text-2xl tracking-tight mb-3 sm:mb-4">
                            ViyaInnovations
                        </div>
                        <motion.p 
                            variants={footerVariants} 
                            className="text-xs sm:text-sm max-w-xs leading-relaxed" 
                            style={{ color: GRAY_TEXT }}
                        >
                            Engineering memorable brands and high-performance digital platforms for global leaders. We build scalable solutions using technologies like NestJS and TypeORM.
                        </motion.p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="sm:col-span-1 lg:col-span-2"> 
                        <motion.h4 
                            variants={footerVariants} 
                            className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 uppercase tracking-wider" 
                            style={{ color: ACCENT_COLOR }}
                        >
                            Quick Links
                        </motion.h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {navLinks.map((link) => (
                                <motion.li key={link.name} variants={footerVariants}>
                                    <a 
                                        href={link.href} 
                                        className="text-gray-300 hover:text-white transition duration-150 text-xs sm:text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact & Location */}
                    <div className="sm:col-span-1 lg:col-span-3">
                        <motion.h4 
                            variants={footerVariants} 
                            className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 uppercase tracking-wider" 
                            style={{ color: ACCENT_COLOR }}
                        >
                            Contact Us
                        </motion.h4>
                        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                            <motion.li variants={footerVariants} className="flex items-start gap-2 sm:gap-3">
                                <Mail size={16} className="shrink-0 mt-0.5 sm:mt-1" style={{ color: ACCENT_COLOR }} />
                                <a 
                                    href="mailto:viyainnovations@gmail.com" 
                                    className="text-gray-300 hover:text-white transition duration-150 break-all"
                                >
                                    viyainnovations@gmail.com
                                </a>
                            </motion.li>
                            <motion.li variants={footerVariants} className="flex items-start gap-2 sm:gap-3">
                                <Phone size={16} className="shrink-0 mt-0.5 sm:mt-1" style={{ color: ACCENT_COLOR }} />
                                <span className="text-gray-300"> +91 799 4149 009 </span>
                            </motion.li>
                            <motion.li variants={footerVariants} className="flex items-start gap-2 sm:gap-3">
                                <MapPin size={16} className="shrink-0 mt-0.5 sm:mt-1" style={{ color: ACCENT_COLOR }} />
                                <span className="text-gray-300 leading-relaxed">
                                   Breeze Arcade First Floor, Kottoli, Chevayur Post, Kozhikode, Kerala, India
                                </span>
                            </motion.li>
                        </ul>
                    </div>
                    
                    {/* Column 4: Social Media */}
                    <div className="sm:col-span-2 lg:col-span-3"> 
                        <motion.h4 
                            variants={footerVariants} 
                            className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 uppercase tracking-wider" 
                            style={{ color: ACCENT_COLOR }}
                        >
                            Connect
                        </motion.h4>
                        <motion.div variants={footerVariants} className="flex space-x-4 sm:space-x-5">
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="LinkedIn" 
                                className="text-gray-400 hover:text-white transition duration-150"
                            >
                                <Linkedin size={22} className="sm:w-6 sm:h-6" />
                            </a>
                            <a 
                                href="https://twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Twitter" 
                                className="text-gray-400 hover:text-white transition duration-150"
                            >
                                <Twitter size={22} className="sm:w-6 sm:h-6" />
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Instagram" 
                                className="text-gray-400 hover:text-white transition duration-150"
                            >
                                <Instagram size={22} className="sm:w-6 sm:h-6" />
                            </a>
                        </motion.div>
                        <motion.a 
                            variants={footerVariants}
                            href="#contact" 
                            className="mt-5 sm:mt-6 inline-flex items-center text-xs sm:text-sm font-semibold hover:text-white transition duration-200"
                            style={{ color: ACCENT_COLOR }}
                        >
                            Start a Conversation 
                            <ArrowRight size={14} className="ml-1.5 sm:ml-2 sm:w-4 sm:h-4" />
                        </motion.a>
                    </div>
                </div>

                {/* --- Divider Line --- */}
                <hr className="my-8 sm:my-10 lg:my-12 border-gray-700/50" />

                {/* Bottom Section: Copyright and Legal */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm">
                    <motion.div 
                        variants={footerVariants} 
                        className="text-gray-500 text-center sm:text-left"
                    >
                        © {currentYear} ViyaInnovations. All rights reserved.
                    </motion.div>
                    
                    <motion.div 
                        variants={footerVariants} 
                        className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-500 text-center"
                    >
                        <a href="#terms" className="hover:text-white transition duration-150">
                            Terms of Service
                        </a>
                        <a href="#privacy" className="hover:text-white transition duration-150">
                            Privacy Policy
                        </a>
                    </motion.div>
                </div>

            </div>
        </motion.footer>
    );
}