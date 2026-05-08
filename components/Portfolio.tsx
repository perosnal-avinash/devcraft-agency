"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Link2 } from "lucide-react";

const categories = ["All", "Web App", "Mobile", "AI/ML", "E-Commerce", "Enterprise"];

type Project = {
  title: string;
  category: string;
  desc: string;
  tech: string[];
  gradient: string;
  icon: string;
  result: string;
};

const projects = [
  {
    title: "Kreditzy – Lending Platform",
    category: "Web App",
    desc: "NBFC-grade loan origination system with CIBIL & Experian bureau pulls, video KYC, automated underwriting, and RBI-compliant audit trails. Disbursed ₹500 Cr+ within 8 months of launch.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    gradient: "from-indigo-600 to-violet-700",
    icon: "🏦",
    result: "₹500 Cr+ disbursed",
  },
  {
    title: "MedPulse – Hospital Management",
    category: "Enterprise",
    desc: "End-to-end HMS deployed across 80+ hospitals — OPD/IPD workflows, HL7 FHIR-compliant patient records, pharmacy, billing, and a patient-facing app with appointment booking and teleconsultation.",
    tech: ["React", "Node.js", "PostgreSQL", "React Native", "AWS"],
    gradient: "from-cyan-600 to-blue-700",
    icon: "🏥",
    result: "80+ hospitals live",
  },
  {
    title: "SalesIQ – B2B Intelligence",
    category: "AI/ML",
    desc: "AI-powered sales platform with GPT-based lead scoring, intent detection from LinkedIn & web signals, automated outreach sequences, and CRM sync. Improved pipeline conversion by 3.2× for SaaS clients.",
    tech: ["Next.js", "Python", "OpenAI", "Pinecone", "HubSpot API"],
    gradient: "from-violet-600 to-pink-700",
    icon: "🎯",
    result: "3.2× pipeline growth",
  },
  {
    title: "ZeptoShop – Quick Commerce",
    category: "E-Commerce",
    desc: "10-minute grocery delivery platform with dark store management, 15K+ SKU catalogue, dynamic slot pricing, and a driver app with live route optimisation. Scaled to 25K daily orders in 6 months.",
    tech: ["Flutter", "Node.js", "MongoDB", "Redis", "Google Maps"],
    gradient: "from-rose-600 to-orange-700",
    icon: "⚡",
    result: "25K daily orders",
  },
  {
    title: "FreightOS – Logistics ERP",
    category: "Enterprise",
    desc: "Full-stack freight management for a pan-India logistics company — 3PL billing, GST e-invoicing, FASTag integration, live vehicle tracking across 2,000+ trucks, and automated POD capture via OCR.",
    tech: ["React", "Go", "Kafka", "PostgreSQL", "Google Maps"],
    gradient: "from-emerald-600 to-teal-700",
    icon: "🚛",
    result: "2,000+ trucks tracked",
  },
  {
    title: "LearnSphere – EdTech Platform",
    category: "Web App",
    desc: "Live K-12 learning platform with adaptive quizzes, teacher dashboards, parent progress reports, and recorded content delivery via CDN. Onboarded 90,000 students across 6 states in Year 1.",
    tech: ["Next.js", "WebRTC", "MongoDB", "Python", "CloudFront"],
    gradient: "from-amber-600 to-yellow-600",
    icon: "🎓",
    result: "90K students onboarded",
  },
  {
    title: "ClaimBot – Insurance AI",
    category: "AI/ML",
    desc: "Computer-vision pipeline that assesses motor vehicle damage from photos, estimates repair cost, and auto-settles low-value claims without human review. Achieved 87% auto-settlement rate with <2% fraud slip-through.",
    tech: ["Python", "PyTorch", "FastAPI", "AWS S3", "Kafka"],
    gradient: "from-sky-600 to-indigo-700",
    icon: "🛡️",
    result: "87% auto-settlement",
  },
  {
    title: "RetailEdge – POS & Inventory",
    category: "Enterprise",
    desc: "Offline-first retail POS with GST-compliant billing, multi-warehouse inventory, supplier portal, and a Power BI-style analytics dashboard. Deployed across 350+ stores for a fashion retail chain.",
    tech: ["React", "Electron", "SQLite", "Node.js", "Power BI"],
    gradient: "from-pink-600 to-rose-700",
    icon: "🏪",
    result: "350+ stores deployed",
  },
  {
    title: "GrowthPilot – D2C Analytics",
    category: "Web App",
    desc: "Unified analytics dashboard for D2C brands — pulls data from Shopify, Amazon, Flipkart, Meta Ads, and Google Ads into one view with AI-generated insights, cohort analysis, and inventory forecasting.",
    tech: ["Next.js", "Python", "BigQuery", "dbt", "Metabase"],
    gradient: "from-teal-600 to-cyan-700",
    icon: "📈",
    result: "15+ D2C brands",
  },
  {
    title: "RideX – Ride-Hailing App",
    category: "Mobile",
    desc: "Full ride-hailing platform with driver and rider apps, dynamic fare engine, surge pricing, real-time ETA, background location tracking, and in-app UPI & wallet payments. Launched in 3 Tier-2 cities.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Redis", "Razorpay"],
    gradient: "from-orange-600 to-red-700",
    icon: "🚖",
    result: "3 cities launched",
  },
  {
    title: "PharmaLink – B2B Marketplace",
    category: "E-Commerce",
    desc: "B2B pharma procurement platform connecting 1,200+ chemists with 40+ distributors — live inventory, credit line management, GST purchase orders, and a mobile app for field sales reps.",
    tech: ["Next.js", "Node.js", "MySQL", "Elasticsearch", "Flutter"],
    gradient: "from-green-600 to-emerald-700",
    icon: "💊",
    result: "1,200+ chemists onboarded",
  },
  {
    title: "TalentHive – Recruitment SaaS",
    category: "Web App",
    desc: "AI-assisted ATS with JD-to-candidate matching, automated screening calls via Twilio, interview scheduling, offer letter generation, and HRMS integrations. Used by 60+ companies for high-volume hiring.",
    tech: ["Next.js", "Python", "OpenAI", "Twilio", "PostgreSQL"],
    gradient: "from-purple-600 to-violet-700",
    icon: "👥",
    result: "60+ companies using",
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
                  className={`h-36 bg-gradient-to-br ${(project as Project).gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <span className="text-5xl">{project.icon}</span>
                  {/* Result badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-black/30 text-white backdrop-blur-sm border border-white/20">
                    ✦ {(project as Project).result}
                  </span>
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
