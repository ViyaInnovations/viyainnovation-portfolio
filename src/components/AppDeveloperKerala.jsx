import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useSEO from "../../public/hooks/useSEO";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Smartphone, CheckCircle } from "lucide-react";
import appDeveloperKeralaSchema from "../seo/appDeveloperKerala.schema";



const NAVY_BLUE = "#0b132b";
const NAVY_ACCENT_LIGHT = "#e0f2f1";

export default function AppDeveloperKerala() {
  useSEO({
  title: "App Developer in Kerala | ViyaInnovations",
  description:
    "Looking for a reliable app developer in Kerala? ViyaInnovations builds scalable Android, iOS, and web applications for startups and businesses across Kerala.",
  schema: appDeveloperKeralaSchema, // ✅ THIS
});

  /* ================= FAQ SCHEMA ================= */
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does app development cost in Kerala?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "App development cost in Kerala depends on features, platform, design complexity, and integrations. ViyaInnovations offers flexible pricing suitable for startups and enterprises."
          }
        },
        {
          "@type": "Question",
          "name": "Do you develop both Android and iOS apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, we develop Android, iOS, and cross-platform applications using modern frameworks like React Native and Flutter."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide post-launch support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Absolutely. We offer ongoing maintenance, updates, and technical support to ensure long-term success."
          }
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <NavBar />

      {/* ================= HERO ================= */}
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
            delivering high-performance mobile and web applications for startups,
            SMEs, and growing businesses.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            Kerala has emerged as a strong technology hub with startups and
            enterprises rapidly adopting digital solutions. As an experienced{" "}
            <strong>app developer in Kerala</strong>, ViyaInnovations helps
            businesses transform ideas into scalable digital products.
          </p>

          <p className="mt-6 text-lg text-gray-700">
            Have a project in mind?{" "}
            <Link
              to="/contact"
              className="text-blue-600 font-semibold underline"
            >
              Contact our app developers in Kerala
            </Link>{" "}
            to get started.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: NAVY_BLUE }}>
            Mobile App Development Services in Kerala
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Android App Development",
              "iOS App Development",
              "Cross-Platform App Development",
            ].map((title) => (
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
                  Custom-built applications optimized for speed, scalability,
                  security, and excellent user experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: NAVY_BLUE }}>
            Why Choose ViyaInnovations
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              "Local expertise in Kerala market",
              "Startup-friendly and scalable solutions",
              "Modern technology stack",
              "End-to-end development & support",
            ].map((point) => (
              <div key={point} className="flex items-start gap-4">
                <CheckCircle style={{ color: NAVY_BLUE }} />
                <p className="text-lg text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ (VISIBLE CONTENT) ================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-10" style={{ color: NAVY_BLUE }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                How much does app development cost in Kerala?
              </h3>
              <p className="text-gray-700">
                App development cost in Kerala depends on features, platform,
                design complexity, and integrations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do you develop both Android and iOS apps?
              </h3>
              <p className="text-gray-700">
                Yes, we develop Android, iOS, and cross-platform applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do you provide post-launch support?
              </h3>
              <p className="text-gray-700">
                Absolutely. We offer ongoing maintenance and technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}
