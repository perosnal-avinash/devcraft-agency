"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck, Zap, BarChart3, CreditCard, Lock, Globe,
  TrendingUp, Banknote, AlertTriangle, FileText, RefreshCw, Server, ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    desc: "Stripe, Razorpay, PayU, Cashfree, and custom payment flows with PCI-DSS compliance.",
  },
  {
    icon: ShieldCheck,
    title: "KYC / AML Systems",
    desc: "Automated identity verification, document OCR, video KYC, and anti-money laundering pipelines.",
  },
  {
    icon: BarChart3,
    title: "Trading & Investment Platforms",
    desc: "Real-time order books, portfolio trackers, algorithmic trading engines, and SEBI-compliant apps.",
  },
  {
    icon: TrendingUp,
    title: "Lending & Credit Scoring",
    desc: "NBFC-grade loan origination systems, bureau integrations (CIBIL/Experian), and AI-based credit models.",
  },
  {
    icon: Banknote,
    title: "Digital Banking & Neobanks",
    desc: "Core banking APIs, virtual account management, UPI/IMPS/NEFT integration, and account aggregation.",
  },
  {
    icon: Lock,
    title: "Fraud Detection & Prevention",
    desc: "ML-powered fraud scoring, device fingerprinting, velocity checks, and real-time transaction monitoring.",
  },
  {
    icon: Globe,
    title: "Cross-Border Payments",
    desc: "Multi-currency wallets, SWIFT/SEPA integration, FX rate engines, and international remittance.",
  },
  {
    icon: FileText,
    title: "Regulatory Compliance",
    desc: "RBI, SEBI, PCI-DSS, GDPR, and SOC 2 compliance architecture built into every layer.",
  },
  {
    icon: RefreshCw,
    title: "Reconciliation & Settlement",
    desc: "Automated ledger reconciliation, T+1/T+2 settlement engines, and dispute management systems.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Management Systems",
    desc: "Real-time exposure monitoring, limit management, stress testing, and automated risk reporting.",
  },
  {
    icon: Server,
    title: "Core Banking Modernisation",
    desc: "Legacy system migration to cloud-native microservices, API-first architecture, and event-driven banking.",
  },
  {
    icon: Zap,
    title: "InsurTech & WealthTech",
    desc: "Policy management platforms, robo-advisors, mutual fund distribution, and premium calculation engines.",
  },
];

const certifications = [
  "PCI-DSS Level 1",
  "ISO 27001",
  "SOC 2 Type II",
  "RBI Compliant",
  "SEBI Registered",
  "GDPR Ready",
];

const stats = [
  { value: "$2B+", label: "Transactions Processed" },
  { value: "15+", label: "FinTech Products Shipped" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "50ms", label: "Avg API Latency" },
];

export default function FinTech() {
  return (
    <section id="fintech" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-300 glass mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            FINTECH SPECIALISATION
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Finance & Fintech
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We specialize in high-compliance, high-performance financial technology —
            from payment infrastructure and lending platforms to trading systems and
            neobanks. We speak the language of money.
          </p>
        </motion.div>

        {/* Certifications bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {certifications.map((cert, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold glass text-emerald-300 border border-emerald-500/30"
            >
              <ShieldCheck className="w-3 h-3" />
              {cert}
            </span>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-5 text-center border border-emerald-500/20 hover:border-emerald-500/50 transition-colors"
            >
              <div className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-sm text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Link key={i} href="/services/fintech">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass rounded-2xl p-5 group hover:border-emerald-500/40 transition-all duration-300 h-full cursor-pointer flex flex-col"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{cap.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed flex-1">{cap.desc}</p>
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors mt-3">
                    Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-3xl p-8 md:p-12 border border-emerald-500/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-cyan-900/30 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                Building a FinTech product?
              </h3>
              <p className="text-slate-400 max-w-xl">
                We've helped 15+ fintech startups and NBFCs go from idea to production — with
                regulatory compliance, bank-grade security, and the scalability to handle millions
                of transactions.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
                {[
                  "RBI-compliant architecture",
                  "End-to-end encryption",
                  "Audit-ready codebase",
                  "99.99% uptime SLA",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href="/services/fintech"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-full glass border border-emerald-500/40 text-emerald-300 font-semibold text-base hover:bg-emerald-500/10 hover:scale-105 transition-all duration-200"
              >
                View Full Details <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-emerald-500/30 cursor-pointer"
              >
                Talk to a FinTech Expert
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
