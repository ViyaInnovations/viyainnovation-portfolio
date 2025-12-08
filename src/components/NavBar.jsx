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
export default function NavBar() {
  return (
 <>
   {/* Navbar */}
       <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b">
         <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-lg bg-linear-to-br from-indigo-600 to-emerald-400 flex items-center justify-center text-white font-bold">VI</div>
             <div>
               <h1 className="text-lg font-semibold">ViyaInnovations</h1>
               <p className="text-xs text-slate-500">Branding • Web • Motion</p>
             </div>
           </div>
 
           <nav className="hidden md:flex items-center gap-6 text-sm">
             <a className="hover:text-indigo-600" href="#services">Services</a>
             <a className="hover:text-indigo-600" href="#work">Work</a>
             <a className="hover:text-indigo-600" href="#about">About</a>
             <a className="hover:text-indigo-600" href="#contact">Contact</a>
             <a className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">Get a Quote</a>
           </nav>
 
           <div className="md:hidden">
             <button aria-label="menu" className="p-2 rounded-md border">
               <Menu size={18} />
             </button>
           </div>
         </div>
       </header></>
  )
}
