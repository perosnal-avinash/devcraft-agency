"use client";

import { motion } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Go", "Python", "Java", "Rust", "GraphQL", "REST APIs"],
  },
  {
    label: "Mobile",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  {
    label: "Database",
    techs: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "Cassandra"],
  },
  {
    label: "Cloud & DevOps",
    techs: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    label: "AI & Data",
    techs: ["PyTorch", "TensorFlow", "OpenAI", "LangChain", "Spark", "Kafka", "dbt"],
  },
];

const allTechs = categories.flatMap((c) => c.techs.map((t) => ({ name: t, category: c.label })));

const categoryColors: Record<string, string> = {
  Frontend: "from-indigo-500 to-purple-500",
  Backend: "from-emerald-500 to-teal-500",
  Mobile: "from-pink-500 to-rose-500",
  Database: "from-orange-500 to-amber-500",
  "Cloud & DevOps": "from-sky-500 to-cyan-500",
  "AI & Data": "from-violet-500 to-blue-500",
};

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-300 glass mb-4">
            TECH STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Modern <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We pick the right tool for the right job — staying current with the ecosystem while
            prioritizing battle-tested, production-grade choices.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6"
            >
              <div
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${categoryColors[cat.label]} mb-4`}
              >
                {cat.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05, duration: 0.3 }}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 hover:border-indigo-500/50 hover:text-white transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling tech ticker */}
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020817] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020817] to-transparent z-10" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {[...allTechs, ...allTechs].map((tech, i) => (
              <span
                key={i}
                className={`flex-shrink-0 px-4 py-2 rounded-full glass text-sm text-slate-300 border border-white/10`}
              >
                {tech.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
