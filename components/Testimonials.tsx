"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CTO, FinFlow Technologies",
    avatar: "RS",
    rating: 5,
    text: "CameeTo delivered our real-time trading platform in 4 months — 2 months ahead of schedule. The code quality was exceptional and the team was communicative throughout. We've scaled to 50,000 DAU without a hitch.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, MediConnect",
    avatar: "SM",
    rating: 5,
    text: "I was skeptical about outsourcing our healthcare app given HIPAA requirements, but CameeTo handled everything flawlessly. They knew the compliance requirements better than I did. Launched in 3 months, 5-star reviews on App Store.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Priya Nair",
    role: "Head of Product, ShopNest",
    avatar: "PN",
    rating: 5,
    text: "The 3D product viewer they built increased our conversion rate by 38%. CameeTo brought creative technical ideas we hadn't even thought of. They're not just developers — they're product thinkers.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "James O'Brien",
    role: "CEO, LogiTrack Systems",
    avatar: "JO",
    rating: 5,
    text: "We've worked with 3 agencies before. CameeTo is in a different league. They understood our logistics domain deeply, asked the right questions, and built a system that our ops team actually loves using.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Ananya Kulkarni",
    role: "VP Engineering, EduLaunch",
    avatar: "AK",
    rating: 5,
    text: "They migrated our legacy LMS to a modern stack with zero downtime and zero data loss. The new platform handles 100K concurrent users. The engineering discipline here is world-class.",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    name: "David Chen",
    role: "Founder, PropVision",
    avatar: "DC",
    rating: 5,
    text: "The AI model CameeTo built for property valuation has 94% accuracy — better than what large players offer. Their ML team is brilliant, and they explained everything clearly to non-technical stakeholders.",
    gradient: "from-amber-500 to-orange-500",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="flex-shrink-0 w-80 glass rounded-2xl p-6 flex flex-col gap-4 group hover:border-indigo-500/40 transition-all duration-300 glow-border-animation">
      <Quote className="w-8 h-8 text-indigo-400/50" />
      <div className="flex gap-1">
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
        >
          {t.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{t.name}</div>
          <div className="text-xs text-slate-500">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-pink-300 glass mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What Our <span className="shimmer-text">Clients Say</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don't take our word for it — here's what the teams we've partnered with have to say.
          </p>
        </motion.div>
      </div>

      {/* Carousel — full width, overflow hidden */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020817] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020817] to-transparent z-10 pointer-events-none" />

        {/* Row 1 — left to right */}
        <div className="carousel-track mb-6 px-6">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        {/* Row 2 — right to left (offset start) */}
        <div
          className="carousel-track px-6"
          style={{ animationDirection: "reverse", animationDelay: "-20s" }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
