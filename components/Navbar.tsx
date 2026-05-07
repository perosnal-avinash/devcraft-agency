"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const services = [
  { slug: "web-development",        icon: "🌐", title: "Web Development",            tagline: "Fast, scalable web apps" },
  { slug: "mobile-app-development", icon: "📱", title: "Mobile App Development",     tagline: "Native & cross-platform" },
  { slug: "ai-machine-learning",    icon: "🤖", title: "AI & Machine Learning",      tagline: "Intelligent automation" },
  { slug: "cloud-devops",           icon: "☁️", title: "Cloud & DevOps",             tagline: "Infrastructure that scales" },
  { slug: "backend-api",            icon: "⚙️", title: "Backend & API",              tagline: "APIs built to last" },
  { slug: "cybersecurity",          icon: "🛡️", title: "Cybersecurity",              tagline: "Security built in" },
  { slug: "data-engineering",       icon: "📊", title: "Data Engineering",           tagline: "Raw data → decisions" },
  { slug: "enterprise-software",    icon: "🏢", title: "Enterprise Software",        tagline: "Complex systems, elegantly" },
  { slug: "ui-ux-design",           icon: "🎨", title: "UI/UX Design",               tagline: "Interfaces people enjoy" },
  { slug: "ecommerce",              icon: "🛒", title: "E-Commerce",                 tagline: "Stores that sell" },
  { slug: "qa-testing",             icon: "✅", title: "QA & Testing",               tagline: "Ship with confidence" },
  { slug: "maintenance-support",    icon: "🔧", title: "Maintenance & Support",      tagline: "Always at its best" },
  { slug: "fintech",                icon: "💳", title: "FinTech Development",        tagline: "Bank-grade software" },
];

const techCategories = [
  { label: "Frontend",      color: "from-indigo-500 to-purple-500", techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { label: "Backend",       color: "from-emerald-500 to-teal-500",  techs: ["Node.js", "Go", "Python", "Java", "Rust", "GraphQL", "REST APIs"] },
  { label: "Mobile",        color: "from-pink-500 to-rose-500",     techs: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"] },
  { label: "Database",      color: "from-orange-500 to-amber-500",  techs: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "Cassandra"] },
  { label: "Cloud & DevOps",color: "from-sky-500 to-cyan-500",      techs: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { label: "AI & Data",     color: "from-violet-500 to-blue-500",   techs: ["PyTorch", "TensorFlow", "OpenAI", "LangChain", "Spark", "Kafka", "dbt"] },
];

const fintechCapabilities = [
  { icon: "💳", title: "Payment Gateway",        tagline: "Stripe, Razorpay, PCI-DSS" },
  { icon: "🔍", title: "KYC / AML Systems",      tagline: "Auto identity & doc verification" },
  { icon: "📈", title: "Trading Platforms",       tagline: "Real-time order books & SEBI" },
  { icon: "🏦", title: "Lending & Credit",        tagline: "NBFC loans & AI credit scoring" },
  { icon: "🏛️", title: "Digital Banking",         tagline: "Core banking, UPI/IMPS/NEFT" },
  { icon: "🛡️", title: "Fraud Detection",         tagline: "ML scoring & velocity checks" },
  { icon: "🌐", title: "Cross-Border Payments",   tagline: "Multi-currency & SWIFT/SEPA" },
  { icon: "📋", title: "Regulatory Compliance",   tagline: "RBI, SEBI, GDPR, SOC 2" },
  { icon: "⚖️", title: "Reconciliation",          tagline: "Automated ledger & T+1 settlement" },
  { icon: "⚠️", title: "Risk Management",         tagline: "Real-time exposure & stress testing" },
  { icon: "🖥️", title: "Core Banking Modernisation", tagline: "Legacy to cloud-native microservices" },
  { icon: "💰", title: "InsurTech & WealthTech",  tagline: "Robo-advisors & policy platforms" },
];

const fintechStats = [
  { value: "$2B+",   label: "Transactions" },
  { value: "15+",    label: "Products Shipped" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "50ms",   label: "Avg API Latency" },
];

const fintechCerts = ["PCI-DSS", "ISO 27001", "SOC 2", "RBI", "SEBI", "GDPR"];

const otherLinks = [
  { label: "About",     href: "/about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact",   href: "/contact" },
];

const dropdownVariants = {
  hidden:  { opacity: 0, y: -8, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.22 } },
  exit:    { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.15 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 6 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.03, duration: 0.2 } }),
};

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [dropOpen,       setDropOpen]       = useState(false);
  const [techDropOpen,   setTechDropOpen]   = useState(false);
  const [fintechDropOpen,setFintechDropOpen]= useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTechOpen,     setMobileTechOpen]     = useState(false);
  const [mobileFintechOpen,  setMobileFintechOpen]  = useState(false);
  const dropRef         = useRef<HTMLLIElement>(null);
  const techDropRef     = useRef<HTMLLIElement>(null);
  const fintechDropRef  = useRef<HTMLLIElement>(null);
  const timerRef        = useRef<ReturnType<typeof setTimeout> | null>(null);
  const techTimerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fintechTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router   = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDrop      = () => { if (timerRef.current)     clearTimeout(timerRef.current);     setDropOpen(true);     };
  const closeDrop     = () => { timerRef.current     = setTimeout(() => setDropOpen(false),     120); };
  const openTechDrop    = () => { if (techTimerRef.current)    clearTimeout(techTimerRef.current);    setTechDropOpen(true);    };
  const closeTechDrop   = () => { techTimerRef.current    = setTimeout(() => setTechDropOpen(false),    120); };
  const openFintechDrop  = () => { if (fintechTimerRef.current) clearTimeout(fintechTimerRef.current); setFintechDropOpen(true); };
  const closeFintechDrop = () => { fintechTimerRef.current = setTimeout(() => setFintechDropOpen(false), 120); };

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setDropOpen(false);
    setTechDropOpen(false);
    setFintechDropOpen(false);
    if (href.startsWith("/")) {
      router.push(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">DevCraft</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {/* Services with mega-dropdown */}
            <li ref={dropRef} onMouseEnter={openDrop} onMouseLeave={closeDrop} className="relative">
              <button
                className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group cursor-pointer"
                onClick={() => setDropOpen((v) => !v)}
              >
                Services
                <motion.span animate={{ rotate: dropOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
              </button>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseEnter={openDrop}
                    onMouseLeave={closeDrop}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] glass rounded-2xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
                    style={{ transformOrigin: "top center" }}
                  >
                    {/* Header strip */}
                    <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">All Services</p>
                      <Link
                        href="/#services"
                        onClick={() => setDropOpen(false)}
                        className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                      >
                        View all <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-3 gap-px bg-white/5 p-px">
                      {services.map((s, i) => (
                        <motion.div key={s.slug} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                          <Link
                            href={`/services/${s.slug}`}
                            onClick={() => setDropOpen(false)}
                            className="flex items-start gap-3 px-4 py-3.5 bg-[#020817] hover:bg-indigo-500/10 transition-colors duration-150 group/item"
                          >
                            <span className="text-xl flex-shrink-0 mt-0.5">{s.icon}</span>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors leading-tight">
                                {s.title}
                              </p>
                              <p className="text-xs text-slate-500 group-hover/item:text-slate-400 transition-colors mt-0.5 truncate">
                                {s.tagline}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="px-5 py-3 border-t border-white/10 bg-indigo-500/5 flex items-center justify-between">
                      <p className="text-xs text-slate-500">Not sure which service fits? We'll guide you.</p>
                      <Link
                        href="/contact"
                        onClick={() => setDropOpen(false)}
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                      >
                        Get a Quote <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Technology dropdown */}
            <li ref={techDropRef} onMouseEnter={openTechDrop} onMouseLeave={closeTechDrop} className="relative">
              <button
                className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group cursor-pointer"
                onClick={() => setTechDropOpen((v) => !v)}
              >
                Technology
                <motion.span animate={{ rotate: techDropOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
              </button>

              <AnimatePresence>
                {techDropOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseEnter={openTechDrop}
                    onMouseLeave={closeTechDrop}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] glass rounded-2xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
                    style={{ transformOrigin: "top center" }}
                  >
                    {/* Header */}
                    <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technologies We Use</p>
                      <button
                        onClick={() => { setTechDropOpen(false); document.getElementById("tech")?.scrollIntoView({ behavior: "smooth" }); }}
                        className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium cursor-pointer"
                      >
                        See full stack <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Category grid */}
                    <div className="grid grid-cols-3 gap-px bg-white/5 p-px">
                      {techCategories.map((cat, i) => (
                        <motion.div
                          key={cat.label}
                          custom={i}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          className="bg-[#020817] px-4 py-4"
                        >
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${cat.color} mb-3`}>
                            {cat.label}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {cat.techs.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 hover:border-white/30 hover:text-white transition-colors cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="px-5 py-3 border-t border-white/10 bg-cyan-500/5 flex items-center justify-between">
                      <p className="text-xs text-slate-500">40+ technologies across 6 disciplines</p>
                      <Link
                        href="/contact"
                        onClick={() => setTechDropOpen(false)}
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                      >
                        Discuss Your Stack <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* FinTech dropdown */}
            <li ref={fintechDropRef} onMouseEnter={openFintechDrop} onMouseLeave={closeFintechDrop} className="relative">
              <button
                className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group cursor-pointer"
                onClick={() => setFintechDropOpen((v) => !v)}
              >
                FinTech
                <motion.span animate={{ rotate: fintechDropOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
              </button>

              <AnimatePresence>
                {fintechDropOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseEnter={openFintechDrop}
                    onMouseLeave={closeFintechDrop}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[700px] glass rounded-2xl border border-emerald-500/20 shadow-2xl shadow-black/40 overflow-hidden"
                    style={{ transformOrigin: "top center" }}
                  >
                    {/* Header */}
                    <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-emerald-500/5">
                      <div className="flex items-center gap-2">
                        <span className="text-base">💳</span>
                        <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider">FinTech Specialisation</p>
                      </div>
                      <Link
                        href="/services/fintech"
                        onClick={() => setFintechDropOpen(false)}
                        className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                      >
                        Full details <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Stats bar */}
                    <div className="grid grid-cols-4 divide-x divide-white/10 border-b border-white/10">
                      {fintechStats.map((s) => (
                        <div key={s.label} className="px-4 py-2.5 text-center bg-emerald-900/10">
                          <p className="text-sm font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{s.value}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Capabilities grid */}
                    <div className="grid grid-cols-3 gap-px bg-white/5 p-px">
                      {fintechCapabilities.map((cap, i) => (
                        <motion.div key={cap.title} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                          <Link
                            href="/services/fintech"
                            onClick={() => setFintechDropOpen(false)}
                            className="flex items-start gap-3 px-4 py-3 bg-[#020817] hover:bg-emerald-500/10 transition-colors duration-150 group/item"
                          >
                            <span className="text-lg flex-shrink-0 mt-0.5">{cap.icon}</span>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors leading-tight">
                                {cap.title}
                              </p>
                              <p className="text-xs text-slate-500 group-hover/item:text-slate-400 transition-colors mt-0.5 truncate">
                                {cap.tagline}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer — certs + CTA */}
                    <div className="px-5 py-3 border-t border-white/10 bg-emerald-500/5 flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {fintechCerts.map((c) => (
                          <span key={c} className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                            {c}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        onClick={() => setFintechDropOpen(false)}
                        className="flex-shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                      >
                        Talk to Expert <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Other links */}
            {otherLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNav("/contact")}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 glow-purple cursor-pointer"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 glass md:hidden overflow-y-auto"
          >
            <ul className="flex flex-col items-center gap-6 pt-10 pb-16 px-6">
              {/* Services accordion */}
              <li className="w-full text-center">
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex items-center justify-center gap-2 w-full text-2xl font-semibold text-slate-200 hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  Services
                  <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden mt-4"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-xl glass hover:bg-indigo-500/20 transition-colors text-left"
                          >
                            <span className="text-lg">{s.icon}</span>
                            <span className="text-sm text-slate-300 leading-tight">{s.title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Technology accordion */}
              <li className="w-full text-center">
                <button
                  onClick={() => setMobileTechOpen((v) => !v)}
                  className="flex items-center justify-center gap-2 w-full text-2xl font-semibold text-slate-200 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Technology
                  <motion.span animate={{ rotate: mobileTechOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileTechOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden mt-4"
                    >
                      <div className="space-y-3">
                        {techCategories.map((cat) => (
                          <div key={cat.label} className="glass rounded-xl p-3 text-left">
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${cat.color} mb-2`}>
                              {cat.label}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {cat.techs.map((tech) => (
                                <span key={tech} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* FinTech accordion */}
              <li className="w-full text-center">
                <button
                  onClick={() => setMobileFintechOpen((v) => !v)}
                  className="flex items-center justify-center gap-2 w-full text-2xl font-semibold text-slate-200 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  FinTech
                  <motion.span animate={{ rotate: mobileFintechOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileFintechOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden mt-4"
                    >
                      {/* Stats */}
                      <div className="grid grid-cols-4 gap-2 mb-3">
                        {fintechStats.map((s) => (
                          <div key={s.label} className="glass rounded-xl p-2 text-center">
                            <p className="text-sm font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{s.value}</p>
                            <p className="text-xs text-slate-500 leading-tight mt-0.5">{s.label}</p>
                          </div>
                        ))}
                      </div>
                      {/* Capabilities */}
                      <div className="grid grid-cols-2 gap-2">
                        {fintechCapabilities.map((cap) => (
                          <Link
                            key={cap.title}
                            href="/services/fintech"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-xl glass hover:bg-emerald-500/20 transition-colors text-left"
                          >
                            <span className="text-lg">{cap.icon}</span>
                            <span className="text-sm text-slate-300 leading-tight">{cap.title}</span>
                          </Link>
                        ))}
                      </div>
                      {/* Certs */}
                      <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                        {fintechCerts.map((c) => (
                          <span key={c} className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                            {c}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {otherLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-2xl font-semibold text-slate-200 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav("/contact")}
                  className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
