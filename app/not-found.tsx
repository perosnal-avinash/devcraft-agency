"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home, Mail } from "lucide-react";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
  opacity: Math.random() * 0.3 + 0.1,
}));

const glitchVariants = {
  animate: {
    x: [0, -3, 3, -2, 2, 0],
    transition: { duration: 0.4, repeat: Infinity, repeatDelay: 3 },
  },
};

export default function NotFound() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const t = setInterval(() => {
      setCount((n) => {
        if (n <= 1) { clearInterval(t); window.location.href = "/"; return 0; }
        return n - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020817] px-6">

      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-600/8 blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-indigo-300 pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, opacity: p.opacity }}
          animate={{ y: [0, -50, 0], opacity: [p.opacity, p.opacity * 2.5, p.opacity] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl glass rounded-3xl border border-white/10 p-10 md:p-14 text-center overflow-hidden"
      >
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-cyan-500 to-violet-500" />

        {/* Scan shimmer on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 pointer-events-none" />

        {/* 404 number */}
        <motion.div
          variants={glitchVariants}
          animate="animate"
          className="relative mb-4"
        >
          <span
            className="text-[9rem] md:text-[12rem] font-black leading-none select-none"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 40%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(99,102,241,0.4))",
            }}
          >
            404
          </span>
          {/* Ghost copies for glitch effect */}
          <span
            className="absolute inset-0 text-[9rem] md:text-[12rem] font-black leading-none select-none pointer-events-none"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.15,
              transform: "translate(4px, -4px)",
            }}
            aria-hidden
          >
            404
          </span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass border border-indigo-500/20 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Page Not Found
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight"
        >
          Oops! You've wandered into{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            uncharted territory
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-indigo-500/30"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </Link>
          <button
            onClick={() => history.back()}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full glass border border-white/10 text-slate-300 font-semibold text-sm hover:border-indigo-500/40 hover:text-white transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="border-t border-white/10 pt-8"
        >
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-4">
            Or explore
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Services", href: "/#services" },
              { label: "Portfolio", href: "/#portfolio" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-medium glass border border-white/10 text-slate-400 hover:text-indigo-300 hover:border-indigo-500/30 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Auto-redirect countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          {/* Circular progress */}
          <div className="relative w-10 h-10 flex-shrink-0">
            <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="3" className="text-white/10" />
              <circle
                cx="20" cy="20" r="16"
                fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round"
                className="text-indigo-400 transition-all duration-1000 ease-linear"
                strokeDasharray={2 * Math.PI * 16}
                strokeDashoffset={2 * Math.PI * 16 * (1 - count / 10)}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
              {count}
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Redirecting to homepage in <span className="text-indigo-400 font-medium">{count}s</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom branding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="relative z-10 mt-8 flex items-center gap-2 text-slate-600 text-sm"
      >
        <Mail className="w-3.5 h-3.5" />
        <span>Need help?</span>
        <a href="mailto:info@cameeto.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
          info@cameeto.com
        </a>
      </motion.div>
    </div>
  );
}
