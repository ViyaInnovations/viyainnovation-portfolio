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
export default function Hero() {
  return (
   <>
      <section className="max-w-6xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              We build memorable brands & fast, scalable websites for international clients.
            </motion.h2>

            <motion.p className="mt-6 text-lg text-slate-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              Full‑service creative studio — branding, digital product design, motion, marketing and growth. We help companies move from idea to impact.
            </motion.p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-md shadow">Work with us</a>
              <a href="#work" className="inline-flex items-center gap-2 border px-4 py-3 rounded-md">See our work</a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <Briefcase size={20} />
                <div>
                  <div className="text-sm font-medium">200+</div>
                  <div className="text-xs">Projects</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <TrendingUp size={20} />
                <div>
                  <div className="text-sm font-medium">Global</div>
                  <div className="text-xs">Clients</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Monitor size={20} />
                <div>
                  <div className="text-sm font-medium">End-to-end</div>
                  <div className="text-xs">Design + Dev</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.25 }} className="rounded-xl overflow-hidden bg-white shadow-lg">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=60" alt="studio" className="w-full h-96 object-cover" />
          </motion.div>
        </section></>
  )
}
