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
export default function Contac() {
  return (
<>
 <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold">Let's build something together</h3>
          <p className="mt-2 text-slate-500">Tell us about your project — we'll reply within one business day.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <form className="space-y-4 bg-white p-6 rounded-lg shadow">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input className="mt-1 w-full border px-3 py-2 rounded-md" placeholder="Your name" />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input className="mt-1 w-full border px-3 py-2 rounded-md" placeholder="you@company.com" />
              </div>

              <div>
                <label className="text-sm font-medium">Project brief</label>
                <textarea className="mt-1 w-full border px-3 py-2 rounded-md" rows={5} placeholder="Brief description of your needs" />
              </div>

              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-md bg-indigo-600 text-white">Send message</button>
                <button type="button" className="px-4 py-2 rounded-md border">Request a call</button>
              </div>
            </form>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold">Contact</h4>
                <p className="mt-3 text-slate-600">Have questions? Reach out directly.</p>

                <div className="mt-4 text-sm text-slate-700 space-y-2">
                  <div className="flex items-center gap-2"><Mail size={16} /> hello@viyaexample.com</div>
                  <div className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold">Offices</h4>
                <p className="mt-2 text-sm text-slate-600">Cochin, India — open to remote international clients.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold">Start a project</h4>
                <p className="mt-2 text-sm text-slate-600">Share a one‑page brief and we'll propose an approach & estimate.</p>
              </div>
            </div>
          </div>
        </section>
</>  )
}
