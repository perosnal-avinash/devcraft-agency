"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, Check, ChevronDown, ChevronUp,
  Star, Zap, Shield, Clock,
} from "lucide-react";
import { ServiceData } from "@/lib/services-data";

export default function ServicePageClient({ service }: { service: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020817] text-slate-100 overflow-x-hidden">

      {/* ── Back nav ─────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={`relative pt-20 pb-24 px-6 bg-gradient-to-br ${service.heroGradient} overflow-hidden`}>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020817]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center pt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-7xl mb-6"
          >
            {service.icon}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold glass border ${service.badgeColor} mb-4`}>
              DEVCRAFT SERVICE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold mb-4"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl text-white/70 mb-4"
          >
            {service.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto mb-10"
          >
            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-semibold text-lg hover:bg-white/90 hover:scale-105 transition-all"
            >
              Start This Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#portfolio"
              className="flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all"
            >
              See Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {service.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:border-indigo-500/40 transition-colors"
            >
              <div className="text-3xl font-extrabold gradient-text">{stat.value}</div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── What We Offer ─────────────────────────────────────── */}
      <section className="py-16 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-4">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Full <span className="gradient-text">{service.title}</span> Capabilities
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Everything you need, delivered end-to-end by our specialist team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-5 group hover:border-indigo-500/40 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ────────────────────────────────────────── */}
      <section className="py-16 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-300 glass mb-4">
              TECHNOLOGY
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Our <span className="gradient-text">Tech Stack</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.techStack.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5"
              >
                <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-3">
                  {cat.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:border-indigo-500/50 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────── */}
      <section className="py-16 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-violet-300 glass mb-4">
              HOW WE WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Our <span className="gradient-text">Delivery Process</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-5 glass rounded-2xl p-5 hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us + Case Study ───────────────────────────────── */}
      <section className="py-16 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-300 glass mb-4 border border-emerald-500/30">
              WHY DEVCRAFT
            </span>
            <h2 className="text-2xl font-extrabold text-white mb-6">
              What Sets Our Work Apart
            </h2>
            <ul className="space-y-4">
              {service.benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm">{b}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Shield, label: "NDA Protected" },
                { icon: Clock, label: "On-Time Delivery" },
                { icon: Star, label: "5-Star Support" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                    <Icon className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
                    <span className="text-xs text-slate-400">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-indigo-500/30"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-4 border border-indigo-500/30">
              CASE STUDY
            </span>
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-xl font-extrabold text-white">{service.caseStudy.title}</h2>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex-shrink-0 ml-3">
                {service.caseStudy.industry}
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Challenge</div>
                <p className="text-sm text-slate-400 leading-relaxed">{service.caseStudy.challenge}</p>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Our Solution</div>
                <p className="text-sm text-slate-400 leading-relaxed">{service.caseStudy.solution}</p>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Results</div>
              <ul className="space-y-2.5">
                {service.caseStudy.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-16 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-pink-300 glass mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto text-center glass rounded-3xl p-12 border border-indigo-500/30 bg-gradient-to-br ${service.heroGradient} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-[#020817]/70" />
          <div className="relative">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to build your {service.title} solution?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Let's talk about your project. We'll get back to you within 24 hours with a
              tailored approach and realistic timeline.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all"
              >
                <ArrowLeft className="w-5 h-5" /> Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
