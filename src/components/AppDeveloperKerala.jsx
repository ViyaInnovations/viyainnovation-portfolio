import React from "react";
import { motion } from "framer-motion";
import useSEO from "../../public/hooks/useSEO";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Code, Smartphone, MapPin, CheckCircle } from "lucide-react";

const NAVY_BLUE = "#0b132b";
const NAVY_ACCENT_LIGHT = "#e0f2f1";

export default function AppDeveloperKerala() {
  useSEO({
    title: "App Developer in Kerala | ViyaInnovations",
    description:
      "Looking for a reliable app developer in Kerala? ViyaInnovations builds scalable mobile and web applications for startups and businesses across Kerala.",
  });

  return (
    <>
      <NavBar />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
            style={{ color: NAVY_BLUE }}
          >
            App Developer in Kerala
          </motion.h1>
          <p className="text-xl text-gray-600">
            ViyaInnovations is a trusted app development company in Kerala,
            delivering high‑performance mobile and web applications for startups,
            SMEs, and growing businesses.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            Kerala has emerged as a strong technology hub with startups and
            enterprises rapidly adopting digital solutions. As an experienced
            <strong> app developer in Kerala</strong>, ViyaInnovations helps
            businesses turn ideas into scalable digital products. From mobile app
            development to custom web platforms, we focus on performance,
            usability, and long‑term growth.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: NAVY_BLUE }}>
            Mobile App Development Services in Kerala
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Android App Development", "iOS App Development", "Cross‑Platform Apps"].map(
              (title) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: NAVY_ACCENT_LIGHT }}
                  >
                    <Smartphone style={{ color: NAVY_BLUE }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: NAVY_BLUE }}>
                    {title}
                  </h3>
                  <p className="text-gray-600">
                    Custom‑built applications optimized for performance,
                    scalability, and user experience.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: NAVY_BLUE }}>
            Why Choose ViyaInnovations
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {["Local expertise in Kerala", "Startup‑friendly approach", "Modern technology stack", "End‑to‑end support"].map(
              (point) => (
                <div key={point} className="flex items-start gap-4">
                  <CheckCircle style={{ color: NAVY_BLUE }} />
                  <p className="text-lg text-gray-700">{point}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-10" style={{ color: NAVY_BLUE }}>
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["React Native", "Flutter", "Node.js", "Firebase", "PostgreSQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 bg-white rounded-full shadow font-semibold"
                  style={{ color: NAVY_BLUE }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-6" style={{ color: NAVY_BLUE }}>
            Serving Businesses Across Kerala
          </h2>
          <p className="text-lg text-gray-700">
            We work with clients in Kochi, Trivandrum, Calicut, Thrissur, and
            across Kerala. Whether you are a startup or an established company,
            our app development services help you scale faster.
          </p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <Contact />
      <Footer />
    </>
  );
}
