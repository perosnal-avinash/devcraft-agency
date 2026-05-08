"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, Star, Zap } from "lucide-react";

/* ── Data ─────────────────────────────────────────────────── */

const words = ["Web Apps", "Mobile Apps", "AI Solutions", "FinTech Products", "Cloud Systems", "Enterprise Software"];

const stats = [
  { value: "200+", label: "Projects Delivered", num: 200, suffix: "+" },
  { value: "50+",  label: "Happy Clients",      num: 50,  suffix: "+" },
  { value: "8+",   label: "Years Experience",   num: 8,   suffix: "+" },
  { value: "99%",  label: "Client Satisfaction",num: 99,  suffix: "%" },
];

const floatingBadges = [
  { text: "React / Next.js",  top: "18%", left: "4%",   delay: 0,   color: "text-blue-300",   dot: "bg-blue-400",   yOffset: 12 },
  { text: "Node.js API",      top: "62%", left: "3%",   delay: 0.6, color: "text-green-300",  dot: "bg-green-400",  yOffset: 10 },
  { text: "React Native",     top: "40%", left: "0.5%", delay: 1.2, color: "text-pink-300",   dot: "bg-pink-400",   yOffset: 14 },
  { text: "AI & Machine Learning", top: "20%", right: "4%",  delay: 0.3, color: "text-purple-300", dot: "bg-purple-400", yOffset: 11 },
  { text: "Cloud & DevOps",   top: "65%", right: "3%",  delay: 0.9, color: "text-cyan-300",   dot: "bg-cyan-400",   yOffset: 13 },
  { text: "TypeScript",       top: "42%", right: "1%",  delay: 1.5, color: "text-indigo-300", dot: "bg-indigo-400", yOffset: 9  },
];

const particles = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.5 + 0.5,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 6,
  opacity: Math.random() * 0.35 + 0.08,
}));

const orbs = [
  { top: "20%", left: "15%",  w: 420, color: "bg-indigo-600/20", dx: [0, 40, -25, 15, 0], dy: [0, -30, 40, -15, 0], dur: 18 },
  { bottom: "20%", right: "15%", w: 360, color: "bg-cyan-600/20", dx: [0, -30, 20, -10, 0], dy: [0, 25, -35, 10, 0], dur: 22 },
  { top: "50%", left: "45%",  w: 500, color: "bg-violet-600/8",  dx: [0, 20, -15, 5, 0],  dy: [0, -10, 20, -5, 0], dur: 26 },
];

/* ── Count-up hook ────────────────────────────────────────── */
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ── Stat card with count-up ─────────────────────────────── */
function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [active, setActive] = useState(false);
  const count = useCountUp(stat.num, 1600, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
      onViewportEnter={() => setActive(true)}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.05 }}
      className="glass rounded-2xl p-4 relative overflow-hidden group cursor-default"
    >
      {/* hover shimmer */}
      <motion.div
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
      />
      <div className="text-3xl font-extrabold gradient-text tabular-nums">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-slate-400 mt-1 group-hover:text-slate-300 transition-colors">{stat.label}</div>
    </motion.div>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  // Subtle mouse-tracking spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const spotY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  // Word cycle
  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center hero-gradient grid-pattern overflow-hidden pt-20"
    >
      {/* Mouse spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${spotX}px ${spotY}px, rgba(99,102,241,0.06), transparent 70%)`,
        }}
      />

      {/* Animated orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={{ x: orb.dx, y: orb.dy }}
          transition={{ duration: orb.dur, repeat: Infinity, ease: "linear" }}
          className={`absolute rounded-full blur-3xl ${orb.color}`}
          style={{
            width: orb.w,
            height: orb.w,
            top: (orb as { top?: string }).top,
            bottom: (orb as { bottom?: string }).bottom,
            left: (orb as { left?: string }).left,
            right: (orb as { right?: string }).right,
          }}
        />
      ))}

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-indigo-300 pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, opacity: p.opacity }}
          animate={{ y: [0, -60, 0], opacity: [p.opacity, p.opacity * 2, p.opacity] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Floating tech badges */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -badge.yOffset, 0] }}
          transition={{
            opacity:  { delay: badge.delay + 1.4, duration: 0.4 },
            scale:    { delay: badge.delay + 1.4, duration: 0.4, type: "spring" },
            rotate:   { delay: badge.delay + 1.4, duration: 0.4 },
            y:        { duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: badge.delay },
          }}
          whileHover={{ scale: 1.1, y: 0 }}
          className={`absolute hidden xl:flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold ${badge.color} border border-white/10 shadow-lg cursor-default`}
          style={{
            top:   badge.top,
            left:  (badge as { left?: string }).left,
            right: (badge as { right?: string }).right,
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            className={`w-2 h-2 rounded-full ${badge.dot} flex-shrink-0`}
          />
          {badge.text}
        </motion.div>
      ))}

      {/* ── Main content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8 text-sm text-indigo-300 border border-indigo-500/20 shadow-lg shadow-indigo-500/10"
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
            <Zap className="w-4 h-4 text-indigo-400" />
          </motion.div>
          Trusted by 50+ companies worldwide
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.08, type: "spring" }}>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Headline */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
          >
            We Build
          </motion.div>

          {/* Animated cycling word */}
          <div className="h-[3.25em] flex items-center justify-center overflow-hidden my-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 40, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -40, rotateX: 30 }}
                transition={{ duration: 0.45 }}
                className="text-3xl sm:text-5xl md:text-7xl font-extrabold gradient-text inline-block"
                style={{ transformOrigin: "center" }}
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
          >
            That Drive{" "}
            <span className="relative inline-block">
              Growth
              {/* underline draw */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                style={{ transformOrigin: "left" }}
                className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
              />
            </span>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full-service software development agency specializing in web apps, mobile apps,
          AI/ML solutions, cloud infrastructure, and enterprise software —{" "}
          <span className="text-slate-200 font-medium">from idea to launch.</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="relative group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-lg overflow-hidden shadow-xl shadow-indigo-500/30 cursor-pointer"
          >
            {/* shimmer sweep */}
            <motion.span
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
            />
            Start Your Project
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold text-lg border border-white/10 hover:border-indigo-500/40 transition-colors cursor-pointer"
          >
            View Portfolio
          </motion.button>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-indigo-400 transition-colors group cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: [0, 1, 0], y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 2.5 }}
          className="text-xs font-medium tracking-widest uppercase"
        >
          scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
