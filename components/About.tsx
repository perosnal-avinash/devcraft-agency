"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Target, Users, Award, ArrowRight } from "lucide-react";

const values = [
  "Agile delivery with 2-week sprints",
  "Transparent communication & daily updates",
  "Dedicated project manager for every client",
  "NDA-protected & IP ownership to client",
  "Post-launch support included",
  "100% on-time delivery commitment",
];

const pillars = [
  {
    icon: Target,
    title: "Mission-Driven",
    desc: "We align with your business goals — not just deliverables. Every line of code serves a purpose.",
  },
  {
    icon: Users,
    title: "Team of Experts",
    desc: "50+ senior engineers, designers, and architects across domains — all in-house.",
  },
  {
    icon: Award,
    title: "Quality First",
    desc: "Rigorous code reviews, automated testing, and performance benchmarks before every release.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-6">
            WHO WE ARE
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            More Than a Dev Shop —<br />
            <span className="gradient-text">Your Tech Partner</span>
          </h2>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            CameeTo has been building software since 2016. We've shipped 200+ products across
            fintech, healthtech, e-commerce, logistics, and SaaS — from early-stage MVPs to
            enterprise platforms serving millions of users.
          </p>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            We don't just write code — we architect solutions that are scalable, maintainable,
            and optimized for real-world performance. Our engineers are T-shaped: deep expertise
            in their domain, broad understanding across the stack.
          </p>

          {/* Checklist */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {values.map((v, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-2 text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                {v}
              </motion.li>
            ))}
          </ul>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            Meet the Full Team <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Right — pillars + decorative */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ x: 8 }}
                className="glass rounded-2xl p-6 flex items-start gap-5 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}

          {/* Decorative card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass rounded-2xl p-6 border border-indigo-500/30 glow-purple"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-300">Project Delivery Rate</span>
              <span className="text-2xl font-extrabold gradient-text">99.2%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "99.2%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
              />
            </div>
            <p className="text-xs text-slate-500 mt-3">Based on 200+ completed projects (2016–2024)</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
