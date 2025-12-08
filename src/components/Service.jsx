import React from 'react'
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  Phone,
  Briefcase,
  Camera,
  Play,
  Monitor,
  TrendingUp,
  Image as ImageIcon,
} from "lucide-react";
export default function Service() {
      const services = [
    "Advertising",
    "Web Development",
    "Graphic Designing",
    "Motion Graphics",
    "Events",
    "Social Media Marketing",
    "Photography",
    "Branding",
    "YouTube Marketing",
    "Video Advertising",
    "SEO",
    "Campaigns",
  ];
  return (
<>
  <section id="services" className="bg-white py-16 border-t">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold">Our Services</h3>
            <p className="mt-2 text-slate-500 max-w-2xl">We cover every part of your company's digital presence — from brand identity to performance marketing.</p>

            <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, idx) => (
                <motion.div key={s} whileHover={{ y: -6 }} className="p-6 border rounded-lg bg-slate-50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-md bg-indigo-50 flex items-center justify-center">
                      <ImageIcon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{s}</h4>
                      <p className="text-sm text-slate-500 mt-1">Tailored solutions to meet your brand & business objectives.</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
</>  )
}
