"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$5,000",
    period: "/ project",
    tagline: "Perfect for MVPs and landing pages",
    features: [
      "Up to 5 pages / screens",
      "Responsive web or mobile app",
      "Basic authentication",
      "1 third-party integration",
      "2 weeks delivery",
      "30 days post-launch support",
    ],
    gradient: "from-slate-700 to-slate-600",
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$15,000",
    period: "/ project",
    tagline: "For startups & growing products",
    features: [
      "Unlimited pages / screens",
      "Full-stack web + mobile app",
      "Advanced auth & roles",
      "Up to 5 integrations",
      "Custom admin dashboard",
      "6–8 weeks delivery",
      "3 months post-launch support",
      "CI/CD pipeline setup",
    ],
    gradient: "from-indigo-600 to-cyan-600",
    cta: "Start Project",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    tagline: "For large-scale & mission-critical systems",
    features: [
      "Dedicated engineering team",
      "Multi-platform (web/iOS/Android)",
      "AI/ML features included",
      "Unlimited integrations",
      "24/7 SLA-backed support",
      "Security & compliance audits",
      "DevOps & cloud management",
      "Quarterly business reviews",
    ],
    gradient: "from-violet-600 to-purple-700",
    cta: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 glass mb-4">
            PRICING
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No hidden fees. No surprises. Fixed-scope projects or ongoing retainers — we have a
            plan for every stage of your journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`relative glass rounded-2xl p-8 flex flex-col ${
                plan.popular ? "border border-indigo-500/50 glow-purple" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold">
                    <Zap className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}

              <div
                className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white bg-gradient-to-r ${plan.gradient} mb-4`}
              >
                {plan.name}
              </div>

              <div className="mb-2">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-slate-400 ml-1 text-sm">{plan.period}</span>
              </div>
              <p className="text-slate-500 text-sm mb-6">{plan.tagline}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 cursor-pointer ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500"
                    : "glass hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          All plans include IP ownership, NDA, and source code delivery.{" "}
          <button onClick={scrollToContact} className="text-indigo-400 hover:underline cursor-pointer">
            Need a custom quote? Talk to us.
          </button>
        </motion.p>
      </div>
    </section>
  );
}
