"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, Send, Mail, Phone, MapPin,
  Clock, CheckCircle2, Code2, ChevronDown, ChevronUp,
  MessageSquare, CalendarDays, Zap, Shield, Star,
} from "lucide-react";

/* ─── Data ───────────────────────────────────────────────── */

const contactMethods = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hell@gamil.com",
    sub: "We reply within 24 hours",
    gradient: "from-indigo-500 to-purple-600",
    href: "mailto:hell@gamil.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon–Fri, 9 AM – 7 PM IST",
    gradient: "from-emerald-500 to-teal-600",
    href: "tel:+919876543210",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+91 98765 43210",
    sub: "Quick replies on WhatsApp",
    gradient: "from-green-500 to-emerald-600",
    href: "https://wa.me/919876543210",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "Bangalore, India",
    sub: "Remote-first · Serving worldwide",
    gradient: "from-cyan-500 to-blue-600",
    href: "#",
  },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Backend & API Development",
  "Cybersecurity",
  "Data Engineering & Analytics",
  "Enterprise Software",
  "UI/UX Design",
  "E-Commerce Solutions",
  "QA & Testing",
  "Maintenance & Support",
  "FinTech Development",
  "Other",
];

const budgets = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $200,000",
  "$200,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP (within 2 weeks)",
  "1–2 months",
  "2–4 months",
  "4–6 months",
  "6+ months",
  "Flexible",
];

const faqs = [
  {
    q: "How quickly do you respond to enquiries?",
    a: "We respond to all enquiries within 24 hours on business days. For urgent projects, mark your message as 'Urgent' and we'll prioritise it.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes — 40% of our clients are international. We serve clients across the US, UK, Europe, Southeast Asia, and the Middle East. We adapt to your timezone for calls.",
  },
  {
    q: "What happens after I submit the form?",
    a: "Our team reviews your submission and assigns a relevant specialist. We'll schedule a 30-minute discovery call to understand your project in detail, then prepare a proposal within 3–5 business days.",
  },
  {
    q: "Is the initial consultation free?",
    a: "Yes. The discovery call and initial proposal are completely free. We invest this time to understand your project so we can give you an accurate scope and timeline.",
  },
  {
    q: "Can I sign an NDA before sharing project details?",
    a: "Absolutely. We're happy to sign an NDA before any detailed discussion. Just mention it in your message and we'll send it over immediately.",
  },
  {
    q: "Do you take on small projects?",
    a: "We work on projects starting from $3,000. If you have a smaller budget, we can suggest a phased approach to get you started.",
  },
];

const reasons = [
  { icon: Clock, text: "Reply within 24 hours" },
  { icon: Shield, text: "NDA signed on request" },
  { icon: Zap, text: "Free discovery call" },
  { icon: Star, text: "No-obligation proposal" },
];

const offices = [
  { city: "Bangalore", country: "India (HQ)", timezone: "IST (UTC+5:30)" },
  { city: "Mumbai", country: "India", timezone: "IST (UTC+5:30)" },
  { city: "Remote", country: "Worldwide", timezone: "Flexible to your TZ" },
];

/* ─── Main Component ─────────────────────────────────────── */

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    nda: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setSent(true);
    } catch {
      setSubmitError("Something went wrong. Please email us directly at hell@gamil.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020817] text-slate-100 overflow-x-hidden">

      {/* ── Sticky nav ──────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold gradient-text text-lg">DevCraft</span>
          </Link>
          <Link href="/#services" className="px-5 py-2 rounded-full glass text-slate-300 text-sm font-semibold hover:text-white hover:bg-white/10 transition-all">
            Our Services
          </Link>
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-20 px-6 hero-gradient grid-pattern overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyan-600/20 blur-3xl" />

        <div className="relative max-w-3xl mx-auto text-center pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-6">
              <CalendarDays className="w-3.5 h-3.5" /> Free Discovery Call Available
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold mb-5 leading-tight"
          >
            Let's Build <span className="gradient-text">Something Great</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Tell us about your project. We'll review your requirements, propose a plan, and
            get back to you within <span className="text-white font-semibold">24 hours</span>.
          </motion.p>

          {/* Quick-trust row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <span key={i} className="flex items-center gap-1.5 px-4 py-2 rounded-full glass text-sm text-slate-300 border border-white/10">
                  <Icon className="w-3.5 h-3.5 text-indigo-400" /> {r.text}
                </span>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Contact methods ─────────────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={i}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-5 flex items-start gap-4 hover:border-indigo-500/40 transition-all group"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">{method.label}</div>
                  <div className="text-sm font-bold text-white">{method.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{method.sub}</div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* ── Main form + sidebar ─────────────────────────────── */}
      <section className="py-10 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">

          {/* ── Form ──────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-extrabold text-white mb-2">Send Us a Message</h2>
              <p className="text-slate-400 text-sm mb-8">Fill in the details below and we'll get back to you within 24 hours.</p>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="glass rounded-2xl p-14 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white mb-3">Message Sent!</h3>
                    <p className="text-slate-400 mb-2">Thanks for reaching out, <span className="text-white font-semibold">{form.name || "there"}</span>.</p>
                    <p className="text-slate-400 mb-8">Our team will review your project and get back to you at <span className="text-indigo-400">{form.email}</span> within 24 hours.</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", company: "", service: "", budget: "", timeline: "", message: "", nda: false }); }}
                        className="px-6 py-3 rounded-xl glass text-slate-300 text-sm hover:bg-white/10 transition-colors"
                      >
                        Send Another
                      </button>
                      <Link href="/#services" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                        Explore Services <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Company / Startup</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Acme Inc."
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Service Required *</label>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>

                    {/* Budget + Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Budget Range</label>
                        <select
                          value={form.budget}
                          onChange={(e) => setForm({ ...form, budget: e.target.value })}
                          className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        >
                          <option value="">Select budget</option>
                          {budgets.map((b) => <option key={b}>{b}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Timeline</label>
                        <select
                          value={form.timeline}
                          onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                          className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((t) => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Project Details *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Describe your project — what you're building, the problem it solves, key features, any technical constraints, and anything else that helps us understand your vision..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                      />
                    </div>

                    {/* NDA checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex-shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={form.nda}
                          onChange={(e) => setForm({ ...form, nda: e.target.checked })}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-md border transition-all ${form.nda ? "bg-indigo-500 border-indigo-500" : "border-white/20 bg-white/5"} flex items-center justify-center`}>
                          {form.nda && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                        </div>
                      </div>
                      <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        I'd like to sign an NDA before sharing detailed project information
                      </span>
                    </label>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-base hover:opacity-90 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending your message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Send Message
                        </>
                      )}
                    </button>

                    {submitError && (
                      <p className="text-xs text-red-400 text-center bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                        {submitError}
                      </p>
                    )}

                    <p className="text-xs text-slate-600 text-center">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy-policy" className="text-indigo-400 hover:underline">Privacy Policy</Link>.
                      We never share your information.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* ── Sidebar ───────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-6">

            {/* What happens next */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-indigo-400" /> What Happens Next
              </h3>
              <ol className="space-y-4">
                {[
                  { step: "1", title: "We review your submission", desc: "Within 24 hours — a specialist matched to your project reads it carefully." },
                  { step: "2", title: "Discovery call scheduled", desc: "30-minute call to understand your goals, constraints, and timeline." },
                  { step: "3", title: "Proposal delivered", desc: "Detailed scope, timeline, team composition, and fixed-price quote within 3–5 days." },
                  { step: "4", title: "Kick off", desc: "Once agreed, we start immediately — no delays, no committee approvals." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Office hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" /> Our Locations
              </h3>
              <div className="space-y-3">
                {offices.map((o, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div>
                      <div className="text-sm font-semibold text-white">{o.city}</div>
                      <div className="text-xs text-slate-500">{o.country}</div>
                    </div>
                    <span className="text-xs text-indigo-300 glass px-2.5 py-1 rounded-full">{o.timezone}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  Working hours: Mon–Fri, 9 AM – 7 PM IST
                </div>
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass rounded-2xl p-6 border border-indigo-500/20"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-sm font-bold text-white ml-1">5.0</span>
              </div>
              <p className="text-sm text-slate-300 italic mb-4">
                "DevCraft replied within 2 hours of my enquiry, had a proposal ready in 3 days, and delivered our MVP in exactly 8 weeks as promised. Exceptional."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">RS</div>
                <div>
                  <div className="text-xs font-semibold text-white">Rahul Sharma</div>
                  <div className="text-xs text-slate-500">CTO, FinFlow Technologies</div>
                </div>
              </div>
            </motion.div>

            {/* Trusted by */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Trusted by companies in</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["FinTech", "HealthTech", "E-Commerce", "Logistics", "SaaS", "EdTech"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-xs text-slate-300 bg-white/5 border border-white/10">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-16 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-4">FAQ</span>
            <h2 className="text-3xl font-extrabold">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white pr-4 text-sm">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  }
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-sm text-slate-400 leading-relaxed border-t border-white/10 pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────── */}
      <section className="py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 border border-indigo-500/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-cyan-900/30 pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Not ready to share details yet?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              That's fine. Browse our work, read about our team, or explore our services.
              We'll be here when you're ready.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#portfolio" className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all">
                View Portfolio <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about" className="flex items-center gap-2 px-7 py-3.5 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all">
                Meet the Team
              </Link>
              <Link href="/#services" className="flex items-center gap-2 px-7 py-3.5 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all">
                Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
