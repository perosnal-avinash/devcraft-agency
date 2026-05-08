"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";
import Image from "next/image";

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

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socials = [
  { icon: TwitterIcon, href: "https://twitter.com/devcraft", label: "Twitter / X" },
  { icon: LinkedInIcon, href: "https://linkedin.com/company/devcraft", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hell@gamil.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.png" alt="Logo" width={130} height={36} className="h-9 w-auto" />
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
            © {new Date().getFullYear()} CameeTo. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
