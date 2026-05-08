"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    desc: "We start with a deep dive into your goals, users, and constraints. We produce a detailed scope, timeline, and architecture proposal.",
    duration: "Week 1–2",
    color: "from-indigo-500 to-purple-500",
    glow: "shadow-indigo-500/30",
    dot: "bg-indigo-500",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    desc: "Wireframes, UX flows, and high-fidelity Figma designs — reviewed and iterated with you before any code is written.",
    duration: "Week 2–4",
    color: "from-violet-500 to-cyan-500",
    glow: "shadow-violet-500/30",
    dot: "bg-violet-500",
  },
  {
    number: "03",
    title: "Agile Development",
    desc: "2-week sprints with daily standups, working demos every Friday, and a shared Jira board so you always know what's happening.",
    duration: "Ongoing",
    color: "from-cyan-500 to-teal-500",
    glow: "shadow-cyan-500/30",
    dot: "bg-cyan-500",
  },
  {
    number: "04",
    title: "QA & Testing",
    desc: "Automated unit, integration, and E2E tests. Manual testing by our QA team. Performance and security audits before launch.",
    duration: "Parallel",
    color: "from-emerald-500 to-green-500",
    glow: "shadow-emerald-500/30",
    dot: "bg-emerald-500",
  },
  {
    number: "05",
    title: "Deployment & Launch",
    desc: "Zero-downtime deployment to your cloud of choice. CI/CD pipelines, monitoring dashboards, and runbooks handed over.",
    duration: "Day of Launch",
    color: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/30",
    dot: "bg-amber-500",
  },
  {
    number: "06",
    title: "Support & Growth",
    desc: "Ongoing maintenance, performance optimization, and feature development as your product scales and evolves.",
    duration: "Ongoing",
    color: "from-rose-500 to-pink-500",
    glow: "shadow-rose-500/30",
    dot: "bg-rose-500",
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-300 glass mb-4"
          >
            HOW WE WORK
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="gradient-text">Proven Process</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A structured yet flexible workflow that keeps you in control and delivers
            results on time, every time.
          </p>

          {/* Animated step counter strip */}
          <div className="flex items-center justify-center gap-1.5 mt-8 overflow-x-auto px-4 scrollbar-none">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 300 }}
                className="flex items-center gap-2"
              >
                <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg ${s.glow}`}>
                  <span className="text-white text-xs font-bold">{s.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                    style={{ transformOrigin: "left" }}
                    className="w-6 h-px bg-gradient-to-r from-white/20 to-white/10"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.2 }}
            style={{ transformOrigin: "top" }}
            className="hidden lg:block absolute left-1/2 -translate-x-px top-8 bottom-8 w-px bg-gradient-to-b from-indigo-500/60 via-cyan-500/40 to-rose-500/30"
          />

          <div className="space-y-14">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 pl-14 lg:pl-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`glass rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-colors duration-300 group relative overflow-hidden`}
                  >
                    {/* Hover shimmer */}
                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      whileHover={{ x: "100%", opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                    />

                    {/* Accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.3, duration: 0.4 }}
                      style={{ transformOrigin: i % 2 === 0 ? "right" : "left" }}
                      className={`absolute top-0 ${i % 2 === 0 ? "right-0" : "left-0"} w-16 h-0.5 bg-gradient-to-r ${step.color} rounded-full`}
                    />

                    {/* Duration badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.25, duration: 0.35 }}
                      className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}
                    >
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${step.color} bg-opacity-10 text-white/80 border border-white/10`}>
                        {step.duration}
                      </span>
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{step.desc}</p>
                  </motion.div>
                </div>

                {/* Center badge */}
                <div className="hidden lg:flex relative flex-shrink-0 z-10 items-center justify-center">
                  {/* Pulse rings */}
                  <motion.div
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${step.color} opacity-20`}
                  />
                  <motion.div
                    animate={{ scale: [1, 2.4, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 + 0.3 }}
                    className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${step.color} opacity-10`}
                  />

                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl ${step.glow} cursor-default`}
                  >
                    <span className="text-white font-extrabold text-lg">{step.number}</span>
                  </motion.div>

                  {/* Dot on the line */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.1, type: "spring" }}
                    className={`absolute w-3 h-3 rounded-full ${step.dot} ring-2 ring-[#020817] ring-offset-0`}
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />

                {/* Mobile badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 250 }}
                  className={`flex lg:hidden w-10 h-10 rounded-full bg-gradient-to-br ${step.color} items-center justify-center flex-shrink-0 absolute left-0 top-6 shadow-lg ${step.glow}`}
                >
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 mb-2 text-sm">Ready to start your project?</p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity glow-purple"
          >
            Start the Process →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
