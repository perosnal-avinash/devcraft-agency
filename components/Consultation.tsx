"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, Clock, MessageSquare, ArrowRight, CheckCircle2,
  X, User, Mail, Phone, ChevronRight, Sparkles,
} from "lucide-react";

/* ── Data ────────────────────────────────────────────────────── */
const perks = [
  { icon: Clock,         text: "30-minute focused session" },
  { icon: MessageSquare, text: "Answer all your questions" },
  { icon: CheckCircle2,  text: "No commitment required" },
  { icon: Calendar,      text: "Flexible scheduling" },
];

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const services = [
  "Web Development", "Mobile App", "AI & Machine Learning",
  "Cloud & DevOps", "FinTech", "Enterprise Software",
  "UI/UX Design", "Other",
];

/* ── Step indicator ──────────────────────────────────────────── */
const steps = ["Your Details", "Preferred Time", "Project Brief"];

function StepBar({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {steps.map((label, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                i < current
                  ? "bg-indigo-500 text-white"
                  : i === current
                  ? "bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/40"
                  : "bg-white/10 text-slate-500"
              }`}
            >
              {i < current ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
            </div>
            <span className={`text-xs hidden sm:block ${i === current ? "text-white" : "text-slate-500"}`}>
              {label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`w-10 sm:w-16 h-px mb-4 transition-colors duration-300 ${i < current ? "bg-indigo-500" : "bg-white/10"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Input ───────────────────────────────────────────────────── */
function Input({ label, icon: Icon, ...props }: { label: string; icon: React.ElementType } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          {...props}
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
        />
      </div>
    </div>
  );
}

/* ── Slot pill ───────────────────────────────────────────────── */
function Pill({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all cursor-pointer ${
        selected
          ? "bg-indigo-500/20 border-indigo-500 text-indigo-300"
          : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

/* ── Booking Modal ───────────────────────────────────────────── */
function BookingModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    days: [] as string[], time: "",
    service: "", message: "",
  });

  const set = (key: string, val: unknown) => setForm((f) => ({ ...f, [key]: val }));

  const toggleDay = (d: string) =>
    set("days", form.days.includes(d) ? form.days.filter((x) => x !== d) : [...form.days, d]);

  const canNext = [
    form.name && form.email,
    form.days.length > 0 && form.time,
    form.service,
  ][step];

  const submit = async () => {
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "consultation", submittedAt: new Date().toISOString() }),
      });
      setDone(true);
    } finally {
      setLoading(false);
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };
  const [dir, setDir] = useState(1);

  const next = () => {
    if (step < 2) { setDir(1); setStep((s) => s + 1); }
    else submit();
  };
  const back = () => { setDir(-1); setStep((s) => s - 1); };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 60, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="w-full max-w-md glass rounded-2xl border border-white/10 shadow-2xl shadow-black/60 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-bold text-white">Book a Discovery Call</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-6">
          {done ? (
            /* ── Success ── */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle2 className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">You're all set!</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-2">
                We've received your request. Our team will reach out within{" "}
                <span className="text-white font-medium">24 hours</span> to confirm your call.
              </p>
              <p className="text-xs text-slate-500">A confirmation will be sent to <span className="text-indigo-400">{form.email}</span></p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Done
              </button>
            </motion.div>
          ) : (
            <>
              <StepBar current={step} />

              <div className="overflow-hidden">
                <AnimatePresence custom={dir} mode="wait">
                  <motion.div
                    key={step}
                    custom={dir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.22 }}
                  >
                    {/* Step 0 — Details */}
                    {step === 0 && (
                      <div className="space-y-4">
                        <Input label="Full Name *" icon={User} placeholder="Avinash Kumar" value={form.name} onChange={(e) => set("name", e.target.value)} />
                        <Input label="Email Address *" icon={Mail} type="email" placeholder="you@company.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
                        <Input label="Phone (optional)" icon={Phone} type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                      </div>
                    )}

                    {/* Step 1 — Schedule */}
                    {step === 1 && (
                      <div className="space-y-5">
                        <div>
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Preferred Day(s) *</p>
                          <div className="flex flex-wrap gap-2">
                            {days.map((d) => (
                              <Pill key={d} label={d} selected={form.days.includes(d)} onClick={() => toggleDay(d)} />
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Preferred Time (IST) *</p>
                          <div className="grid grid-cols-4 gap-2">
                            {timeSlots.map((t) => (
                              <Pill key={t} label={t} selected={form.time === t} onClick={() => set("time", t)} />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2 — Project Brief */}
                    {step === 2 && (
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Service Interested In *</p>
                          <div className="flex flex-wrap gap-2">
                            {services.map((s) => (
                              <Pill key={s} label={s} selected={form.service === s} onClick={() => set("service", s)} />
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Brief Description (optional)</label>
                          <textarea
                            rows={3}
                            placeholder="Tell us a bit about your project..."
                            value={form.message}
                            onChange={(e) => set("message", e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer nav */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={back}
                  className={`text-sm text-slate-400 hover:text-white transition-colors cursor-pointer ${step === 0 ? "invisible" : ""}`}
                >
                  ← Back
                </button>
                <button
                  onClick={next}
                  disabled={!canNext || loading}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? "Submitting…" : step === 2 ? (
                    <><Sparkles className="w-4 h-4" /> Confirm Booking</>
                  ) : (
                    <>Next <ChevronRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
export default function Consultation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl border border-white/10 p-10 md:p-14 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-300 glass border border-cyan-500/20 mb-6"
            >
              <Calendar className="w-3.5 h-3.5" />
              FREE CONSULTATION
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            >
              Book a <span className="gradient-text">30-Min Discovery Call</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              We'll review your requirements, answer questions, and outline next steps —
              no commitment required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-10"
            >
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-slate-300">
                    <Icon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    {perk.text}
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.button
                onClick={() => setOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-lg shadow-xl shadow-indigo-500/30 hover:opacity-90 transition-opacity cursor-pointer cta-glow-animation"
              >
                Schedule a Call
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {open && <BookingModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
