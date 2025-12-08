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
export default function Studies() {
      const caseStudies = [
    {
      id: 1,
      title: "Brand Refresh for Acme Co.",
      desc: "Full rebrand and website rebuild that increased conversions by 48%.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 2,
      title: "E‑Commerce Launch",
      desc: "End-to-end e‑commerce site, 3rd month revenue crossed expectations.",
      img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=60",
    },
  ];
  return (

    
<>
    <section id="work" className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold">Selected Work</h3>
          <p className="mt-2 text-slate-500">Case studies that show design thinking, measurable outcomes and international reach.</p>

          <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2">
            {caseStudies.map((c) => (
              <article key={c.id} className="rounded-lg overflow-hidden bg-white shadow">
                <img src={c.img} alt={c.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h4 className="font-semibold text-lg">{c.title}</h4>
                  <p className="mt-2 text-slate-600">{c.desc}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <a className="text-indigo-600 text-sm">View case study →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

</>  )
}
