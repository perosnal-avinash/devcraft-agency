"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  effectiveDate: string;
  sections: Section[];
  accentColor?: string;
}

export default function LegalLayout({
  badge,
  title,
  subtitle,
  lastUpdated,
  effectiveDate,
  sections,
  accentColor = "indigo",
}: LegalLayoutProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#020817] text-slate-100 overflow-x-hidden">

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <Link href="/">
            <Image src="/logo.png" alt="CameeTo" width={120} height={34} className="h-8 w-auto" />
          </Link>
          <Link href="/contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6 hero-gradient overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-indigo-600/15 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center pt-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-5">
              {badge}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-slate-400 text-lg max-w-xl mx-auto mb-6"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-4 text-xs text-slate-500"
          >
            <span className="glass px-3 py-1.5 rounded-full">Last Updated: {lastUpdated}</span>
            <span className="glass px-3 py-1.5 rounded-full">Effective: {effectiveDate}</span>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-4 gap-10">

        {/* Sticky ToC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 glass rounded-2xl p-5">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Contents</p>
            <ul className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo(s.id)}
                    className="text-xs text-slate-400 hover:text-indigo-400 transition-colors text-left leading-snug w-full"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <main className="lg:col-span-3 space-y-12">
          {sections.map((s, i) => (
            <motion.section
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <h2 className="text-xl font-extrabold text-white">{s.title}</h2>
              </div>
              <div className="glass rounded-2xl p-6 prose-custom">
                {s.content}
              </div>
            </motion.section>
          ))}

          {/* Bottom links */}
          <div className="glass rounded-2xl p-6 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white">Have questions about this policy?</p>
              <p className="text-xs text-slate-400 mt-1">Our team is happy to clarify anything.</p>
            </div>
            <Link href="/contact" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all flex-shrink-0">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
      </div>

      {/* Legal footer links */}
      <div className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} CameeTo Agency. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-xs">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Cookie Policy", href: "/cookie-policy" },
              { label: "NDA Template", href: "/nda-template" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-500 hover:text-indigo-400 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
