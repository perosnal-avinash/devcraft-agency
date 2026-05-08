"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Link2 } from "lucide-react";

const categories = ["All", "Web App", "Mobile", "AI/ML", "E-Commerce", "Enterprise"];

const projects = [
  {
    title: "FinFlow Dashboard",
    category: "Web App",
    desc: "Real-time financial analytics platform with live data streaming, risk scoring, and multi-portfolio management.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "WebSockets"],
    gradient: "from-indigo-600 to-purple-700",
    icon: "📊",
  },
  {
    title: "MediConnect",
    category: "Mobile",
    desc: "Telemedicine app connecting 50,000+ patients with doctors. Instant video calls, e-prescriptions, and appointments.",
    tech: ["React Native", "Node.js", "MongoDB", "WebRTC"],
    gradient: "from-cyan-600 to-blue-700",
    icon: "🏥",
  },
  {
    title: "SmartAssist AI",
    category: "AI/ML",
    desc: "LLM-powered customer support bot reducing support tickets by 70%. Trains on custom company knowledge base.",
    tech: ["Python", "LangChain", "OpenAI", "FastAPI"],
    gradient: "from-violet-600 to-pink-700",
    icon: "🤖",
  },
  {
    title: "ShopNest Pro",
    category: "E-Commerce",
    desc: "Headless commerce platform for luxury brands. 3D product viewer, AR try-on, and personalized recommendations.",
    tech: ["Next.js", "Shopify", "Stripe", "Three.js"],
    gradient: "from-rose-600 to-orange-700",
    icon: "🛍️",
  },
  {
    title: "LogiTrack Enterprise",
    category: "Enterprise",
    desc: "Fleet management and logistics ERP for 10,000+ vehicles. Real-time GPS tracking, route optimization, and billing.",
    tech: ["React", "Go", "Kafka", "PostgreSQL"],
    gradient: "from-emerald-600 to-teal-700",
    icon: "🚛",
  },
  {
    title: "HRNest",
    category: "Enterprise",
    desc: "Full HRMS with payroll, leave management, performance reviews, and AI-driven hiring recommendations.",
    tech: ["Vue.js", "Django", "Redis", "Docker"],
    gradient: "from-amber-600 to-yellow-700",
    icon: "👥",
  },
  {
    title: "PropVision AI",
    category: "AI/ML",
    desc: "Computer vision system for real estate — automatic property valuation from images with 94% accuracy.",
    tech: ["Python", "PyTorch", "FastAPI", "AWS"],
    gradient: "from-sky-600 to-indigo-700",
    icon: "🏠",
  },
  {
    title: "EduLaunch LMS",
    category: "Web App",
    desc: "Live learning platform with interactive classrooms, AI-adaptive quizzes, and progress analytics for 100K+ students.",
    tech: ["Next.js", "Node.js", "WebRTC", "MongoDB"],
    gradient: "from-pink-600 to-violet-700",
    icon: "🎓",
  },
  {
    title: "FoodieGo App",
    category: "Mobile",
    desc: "On-demand food delivery with real-time order tracking, smart restaurant matching, and loyalty rewards.",
    tech: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    gradient: "from-orange-600 to-red-700",
    icon: "🍕",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-violet-300 glass mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Work We're <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of projects that showcase our range, depth, and ability to deliver at any scale.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
                  : "glass text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Project header */}
                <div
                  className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <span className="text-6xl">{project.icon}</span>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                      <Link2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex-shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-0.5 rounded-lg text-xs bg-white/5 text-slate-400 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
