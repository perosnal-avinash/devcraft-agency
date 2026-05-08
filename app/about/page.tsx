"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, CheckCircle2, Target, Users, Award,
  Lightbulb, Globe, Heart, Rocket, Code2, TrendingUp,
  MapPin, Calendar, Star, Shield, Zap, Clock,
} from "lucide-react";

/* ─── Data ───────────────────────────────────────────────── */

const stats = [
  { value: "200+", label: "Projects Delivered", icon: Rocket },
  { value: "50+", label: "Happy Clients", icon: Heart },
  { value: "8+", label: "Years Experience", icon: Calendar },
  { value: "99%", label: "Client Satisfaction", icon: Star },
  { value: "15+", label: "Countries Served", icon: Globe },
  { value: "50+", label: "Team Members", icon: Users },
];

const timeline = [
  {
    year: "2016",
    title: "Founded in Bangalore",
    desc: "CameeTo started as a 3-person team building MVPs for early-stage startups. First client: a logistics startup that grew to 500K users.",
  },
  {
    year: "2018",
    title: "Expanded to FinTech",
    desc: "Launched a dedicated fintech practice after landing our first NBFC client. Built our first RBI-compliant lending platform.",
  },
  {
    year: "2020",
    title: "Remote-First Team",
    desc: "Transitioned to a fully distributed team across 8 cities. Grew to 25 engineers and shipped our first AI/ML product.",
  },
  {
    year: "2022",
    title: "Enterprise Practice",
    desc: "Opened an enterprise division serving large corporations. First $1M+ project delivered for a logistics conglomerate.",
  },
  {
    year: "2023",
    title: "AI & GenAI Unit",
    desc: "Dedicated AI engineering team formed. Shipped 10+ LLM-powered products including RAG systems and intelligent automation.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    desc: "Now serving clients in 15+ countries across 3 continents. 200+ projects delivered, $2B+ in client transaction volume processed.",
  },
];

const values = [
  {
    icon: Target,
    title: "Outcome-Oriented",
    desc: "We measure success by the business impact of our work — not lines of code shipped. Every decision is made with your goals in mind.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Integrity First",
    desc: "Honest timelines, transparent communication, and no hidden costs. We'd rather lose a deal than over-promise and under-deliver.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Craft & Quality",
    desc: "We take pride in the quality of our code. Clean architecture, comprehensive tests, and maintainable systems that your future team will thank you for.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    desc: "We act as an extension of your team, not a vendor. We invest in understanding your business deeply enough to make autonomous, sound decisions.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Zap,
    title: "Move Fast, Stay Safe",
    desc: "Speed matters — but not at the cost of security or stability. We've built the processes to ship quickly without compromising reliability.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Globe,
    title: "Diverse & Inclusive",
    desc: "Our team spans 8 cities and multiple backgrounds. Different perspectives make better products, and we actively cultivate that diversity.",
    color: "from-violet-500 to-indigo-600",
  },
];

const team = [
  {
    name: "Arjun Mehta",
    role: "Co-Founder & CEO",
    bio: "10+ years in product engineering. Previously at Razorpay and Flipkart. IIT Bombay CS graduate.",
    avatar: "AM",
    gradient: "from-indigo-500 to-purple-600",
    location: "Bangalore",
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder & CTO",
    bio: "Led infrastructure at a unicorn startup. Deep expertise in distributed systems, Kubernetes, and platform engineering.",
    avatar: "PS",
    gradient: "from-cyan-500 to-blue-600",
    location: "Hyderabad",
  },
  {
    name: "Rohan Kapoor",
    role: "VP Engineering",
    bio: "15+ years building enterprise software. Certified AWS Solutions Architect. Passionate about clean architecture.",
    avatar: "RK",
    gradient: "from-emerald-500 to-teal-600",
    location: "Mumbai",
  },
  {
    name: "Sneha Iyer",
    role: "Head of Design",
    bio: "Former design lead at a Series B fintech. Specialises in complex data-heavy UX and financial product design.",
    avatar: "SI",
    gradient: "from-pink-500 to-rose-600",
    location: "Chennai",
  },
  {
    name: "Vikram Nair",
    role: "Head of AI / ML",
    bio: "PhD in Machine Learning from IISc. Published researcher in NLP. Led AI teams at two YC-backed startups.",
    avatar: "VN",
    gradient: "from-violet-500 to-purple-600",
    location: "Bangalore",
  },
  {
    name: "Ananya Patel",
    role: "Head of FinTech",
    bio: "Ex-banker turned engineer. Deep domain expertise in payments, lending, and RBI regulatory compliance.",
    avatar: "AP",
    gradient: "from-amber-500 to-orange-600",
    location: "Pune",
  },
];

const perks = [
  "Fully remote-friendly team",
  "Competitive salaries + equity",
  "₹1L learning & conference budget",
  "Home office setup allowance",
  "Health insurance for family",
  "Flexible working hours",
  "Annual team retreat",
  "No-meeting Fridays",
];

const awards = [
  { title: "Top Software Dev Agency", body: "Clutch.co", year: "2023" },
  { title: "Best FinTech Solution", body: "India FinTech Awards", year: "2023" },
  { title: "Top 50 Tech Companies", body: "Inc. India", year: "2022" },
  { title: "5-Star Rating", body: "GoodFirms", year: "2022–24" },
];

/* ─── Component ──────────────────────────────────────────── */

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"story" | "team" | "culture">("story");

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
            <span className="font-bold gradient-text text-lg">CameeTo</span>
          </Link>
          <Link href="/#contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
            Work With Us
          </Link>
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-24 px-6 hero-gradient grid-pattern overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-600/20 blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-6">
              WHO WE ARE
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            More Than a Dev Shop —<br />
            <span className="gradient-text">Your Tech Partner</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Founded in 2016, CameeTo is a full-service software engineering agency that has shipped
            200+ digital products for startups, scaleups, and enterprises across 15+ countries.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/#contact" className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all">
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/#services" className="flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all">
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-5 text-center hover:border-indigo-500/40 transition-colors group"
              >
                <Icon className="w-5 h-5 text-indigo-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-extrabold gradient-text">{s.value}</div>
                <div className="text-xs text-slate-400 mt-1">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Tab switcher ────────────────────────────────────── */}
      <section className="py-4 px-6 sticky top-16 z-40 bg-[#020817]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-4xl mx-auto flex justify-center gap-2">
          {(["story", "team", "culture"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold capitalize transition-all duration-200 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
                  : "glass text-slate-400 hover:text-white"
              }`}
            >
              {tab === "story" ? "Our Story" : tab === "team" ? "The Team" : "Culture & Values"}
            </button>
          ))}
        </div>
      </section>

      {/* ── Our Story ───────────────────────────────────────── */}
      {activeTab === "story" && (
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-10 mb-16 border border-indigo-500/20 text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-4">OUR MISSION</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                "Build software that matters — <span className="gradient-text">on time, every time</span>"
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                We exist to close the gap between ambition and execution. Too many great ideas fail not because they were wrong,
                but because the execution was underfunded, under-engineered, or under-communicated. We fix that.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-16"
            >
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-300 glass mb-4">JOURNEY</span>
                <h2 className="text-3xl font-extrabold">Our <span className="gradient-text">Timeline</span></h2>
              </div>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/30 to-transparent hidden md:block" />
                <div className="space-y-6">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex gap-6 items-start"
                    >
                      <div className="hidden md:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 items-center justify-center flex-shrink-0 z-10">
                        <span className="text-white font-extrabold text-sm">{item.year}</span>
                      </div>
                      <div className="glass rounded-2xl p-6 flex-1 hover:border-indigo-500/30 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="md:hidden px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
                            {item.year}
                          </span>
                          <h3 className="text-base font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-amber-300 glass mb-4">RECOGNITION</span>
                <h2 className="text-3xl font-extrabold">Awards & <span className="gradient-text">Recognition</span></h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {awards.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl p-5 text-center border border-amber-500/20 hover:border-amber-500/40 transition-colors"
                  >
                    <Star className="w-6 h-6 text-amber-400 mx-auto mb-3 fill-amber-400" />
                    <div className="text-sm font-bold text-white mb-1">{a.title}</div>
                    <div className="text-xs text-slate-400">{a.body}</div>
                    <div className="text-xs text-amber-400 mt-1">{a.year}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-10 border border-indigo-500/20"
            >
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-4">HOW WE WORK</span>
                <h2 className="text-3xl font-extrabold">The <span className="gradient-text">CameeTo Way</span></h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Target,
                    title: "Aligned on Outcomes",
                    desc: "We start every engagement by agreeing on the metrics that define success — not just the feature list.",
                    gradient: "from-indigo-500 to-purple-600",
                  },
                  {
                    icon: Clock,
                    title: "Transparent Progress",
                    desc: "Weekly demos, shared Jira boards, daily Slack updates. You always know exactly where things stand.",
                    gradient: "from-emerald-500 to-teal-600",
                  },
                  {
                    icon: Award,
                    title: "Engineered to Last",
                    desc: "We write code as if we're handing it to a team of strangers in 3 years — because we probably are.",
                    gradient: "from-amber-500 to-orange-600",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      whileHover={{ y: -6 }}
                      className="glass rounded-2xl p-6 text-center"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Team ────────────────────────────────────────────── */}
      {activeTab === "team" && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-4">LEADERSHIP</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                Meet the <span className="gradient-text">Team</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                50+ engineers, designers, and domain experts — distributed across India and beyond.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="glass rounded-2xl p-6 group"
                >
                  {/* Avatar */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-lg font-extrabold flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {member.avatar}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{member.name}</h3>
                      <p className="text-xs text-indigo-400 font-semibold">{member.role}</p>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> {member.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>

            {/* Join us strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-10 border border-indigo-500/20 text-center"
            >
              <h2 className="text-2xl font-extrabold text-white mb-3">
                Want to join the team?
              </h2>
              <p className="text-slate-400 mb-6 max-w-xl mx-auto">
                We're always looking for exceptional engineers, designers, and domain experts.
                If you care about craft and want to work on challenging problems, we'd love to talk.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all"
              >
                View Open Roles <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Culture & Values ────────────────────────────────── */}
      {activeTab === "culture" && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">

            {/* Values grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-4">WHAT WE BELIEVE</span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                  Our <span className="gradient-text">Core Values</span>
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                  These aren't posters on the wall — they're the principles that guide every decision we make.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={{ y: -6 }}
                      className="glass rounded-2xl p-6 group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* What it's like to work here */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-10 mb-16"
            >
              <div className="glass rounded-2xl p-8">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-300 glass mb-4 border border-emerald-500/30">
                  PERKS & BENEFITS
                </span>
                <h2 className="text-2xl font-extrabold text-white mb-6">
                  What Working Here Looks Like
                </h2>
                <ul className="space-y-3">
                  {perks.map((perk, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {perk}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: TrendingUp,
                    title: "Growth & Learning",
                    desc: "Every team member gets ₹1L/year for courses, conferences, and books. We share knowledge internally through weekly tech talks and design crits.",
                    gradient: "from-indigo-500 to-purple-600",
                  },
                  {
                    icon: Heart,
                    title: "Work-Life Balance",
                    desc: "No-meeting Fridays. Flexible hours. We care about sustainable pace — burnout helps no one. We ship quality work, not long hours.",
                    gradient: "from-pink-500 to-rose-600",
                  },
                  {
                    icon: Globe,
                    title: "Remote-First",
                    desc: "Work from anywhere in India. Annual team retreat to meet in person. Fully async-friendly processes so no one is left out of the timezone.",
                    gradient: "from-cyan-500 to-blue-600",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      whileHover={{ x: 6 }}
                      className="glass rounded-2xl p-5 flex items-start gap-4"
                    >
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Delivery commitments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-10 border border-indigo-500/20"
            >
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-4">OUR PROMISE TO CLIENTS</span>
                <h2 className="text-2xl font-extrabold text-white">What We Commit To</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Agile delivery with 2-week sprints",
                  "Transparent communication & daily updates",
                  "Dedicated project manager for every client",
                  "NDA-protected & IP ownership to client",
                  "Post-launch support included",
                  "100% on-time delivery commitment",
                  "Security-first engineering practices",
                  "Full source code and documentation handover",
                  "No surprise costs — ever",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Final CTA ───────────────────────────────────────── */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 border border-indigo-500/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-cyan-900/30 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to build something <span className="gradient-text">great together?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Let's talk about your project. We'll respond within 24 hours with a thoughtful
              proposal tailored to your goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#contact" className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/#services" className="flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all">
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
