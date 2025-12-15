import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Let’s Build Something Together</h2>
                    <p className="mt-4 text-gray-600">Tell us about your project. We respond within one business day.</p>
                </motion.div>

                {/* Content */}
                <div className="mt-16 grid md:grid-cols-2 gap-10">
                    {/* LEFT — Primary CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-xl font-bold text-gray-900">Quickest Way to Reach Us</h3>

                        <p className="mt-3 text-gray-600">
                            Prefer instant communication? Chat with us directly on WhatsApp.
                        </p>

                        <a
                            href="https://wa.me/917994159009?text=Hello%20I%20would%20like%20to%20discuss%20a%20project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-green-500 text-white font-semibold text-lg hover:bg-green-600 transition"
                        >
                            <FaWhatsapp size={22} />
                            Chat on WhatsApp
                        </a>

                        <p className="mt-4 text-sm text-gray-500 text-center">
                            Average reply time: under 1 hour (business hours)
                        </p>
                    </motion.div>

                    {/* RIGHT — Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h4 className="font-semibold text-gray-900">Email & Phone</h4>

                            <div className="mt-4 space-y-3 text-gray-700 text-sm">
                                <div className="flex items-center gap-3">
                                    <Mail size={16} />
                                    info@viyainnovations.com
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={16} />
                                    +91 7994159009
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h4 className="font-semibold text-gray-900">Office Location</h4>
                            <div className="mt-3 flex items-start gap-3 text-sm text-gray-600">
                                <MapPin size={16} />
                                Breeze Arcade First Floor, Kottoli, Chevayur Post, Kozhikode, Kerala, India{" "}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h4 className="font-semibold text-gray-900">What Happens Next?</h4>
                            <p className="mt-2 text-sm text-gray-600">
                                • We review your request
                                <br />
                                • Propose an approach & timeline
                                <br />• Share an estimate within 24 hours
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
