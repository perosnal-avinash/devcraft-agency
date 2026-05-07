"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Mail } from "lucide-react";

const linkGroups: { section: string; items: { label: string; href: string }[] }[] = [
  {
    section: "Services",
    items: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "AI & Machine Learning", href: "/services/ai-machine-learning" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "Enterprise Software", href: "/services/enterprise-software" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
    ],
  },
  {
    section: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Portfolio", href: "/#portfolio" },
    ],
  },
  {
    section: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "NDA Template", href: "/nda-template" },
    ],
  },
];

const socials = [
  { icon: Mail, href: "mailto:infra@paymeindia.in", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">DevCraft</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Full-service software development agency. We turn ambitious ideas into
              production-ready digital products — on time and on budget.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all cursor-pointer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {linkGroups.map(({ section, items }) => (
            <div key={section}>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10"
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} DevCraft Agency. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js · Framer Motion · Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
