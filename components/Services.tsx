"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Globe, Smartphone, Brain, Cloud, ShieldCheck, BarChart3,
  Layers, Database, Zap, Code, Settings, Headphones, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    slug: "web-development",
    desc: "High-performance web apps with Next.js, React, Vue, Angular — pixel-perfect, SEO-ready, and blazing fast.",
    tags: ["React", "Next.js", "TypeScript"],
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    desc: "Native & cross-platform iOS/Android apps with React Native and Flutter. Smooth UX, offline support, real-time sync.",
    tags: ["React Native", "Flutter", "iOS/Android"],
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    desc: "Custom ML models, LLM integrations, chatbots, computer vision, NLP, and intelligent automation pipelines.",
    tags: ["LLMs", "Python", "TensorFlow"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    desc: "AWS, GCP, Azure infrastructure setup, CI/CD pipelines, Docker, Kubernetes, and 24/7 monitoring.",
    tags: ["AWS", "Docker", "Kubernetes"],
    color: "from-sky-500 to-cyan-600",
  },
  {
    icon: Database,
    title: "Backend & API Development",
    slug: "backend-api",
    desc: "Scalable REST & GraphQL APIs, microservices, real-time systems with Node.js, Go, Python, and Java.",
    tags: ["Node.js", "Go", "PostgreSQL"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    slug: "cybersecurity",
    desc: "Security audits, penetration testing, OWASP compliance, data encryption, and secure coding practices.",
    tags: ["Pentesting", "OWASP", "Compliance"],
    color: "from-red-500 to-orange-600",
  },
  {
    icon: BarChart3,
    title: "Data Engineering & Analytics",
    slug: "data-engineering",
    desc: "Data pipelines, ETL, BI dashboards, real-time analytics, and data warehouse architecture at scale.",
    tags: ["Spark", "Kafka", "Tableau"],
    color: "from-orange-500 to-yellow-600",
  },
  {
    icon: Layers,
    title: "Enterprise Software",
    slug: "enterprise-software",
    desc: "ERP, CRM, HRMS, and bespoke enterprise platforms — built for scale, security, and complex workflows.",
    tags: ["ERP", "CRM", "Microservices"],
    color: "from-violet-500 to-indigo-600",
  },
  {
    icon: Zap,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    desc: "Research-led design — wireframes, prototypes, design systems, and pixel-perfect Figma handoffs.",
    tags: ["Figma", "Design System", "UX"],
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Code,
    title: "E-Commerce Solutions",
    slug: "ecommerce",
    desc: "Custom storefronts, payment integrations, inventory management, and headless commerce with Shopify/WooCommerce.",
    tags: ["Shopify", "WooCommerce", "Stripe"],
    color: "from-teal-500 to-green-600",
  },
  {
    icon: Settings,
    title: "QA & Testing",
    slug: "qa-testing",
    desc: "Automated testing, regression suites, load testing, and QA strategy to ship with confidence.",
    tags: ["Cypress", "Jest", "Selenium"],
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    slug: "maintenance-support",
    desc: "Ongoing support, performance monitoring, upgrades, bug fixes, and SLA-backed managed services.",
    tags: ["24/7 Support", "SLA", "Monitoring"],
    color: "from-blue-500 to-indigo-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-4">
            WHAT WE DO
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            All-in-One <span className="gradient-text">Software Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From idea to deployment — we cover every dimension of modern software development
            so you can focus on growing your business.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link key={i} href={`/services/${service.slug}`}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass rounded-2xl p-6 group hover:border-indigo-500/40 transition-all duration-300 flex flex-col h-full cursor-pointer"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed flex-1">{service.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
