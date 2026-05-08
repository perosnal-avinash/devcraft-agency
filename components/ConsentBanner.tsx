"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X, ChevronDown, ChevronUp, Check, ExternalLink } from "lucide-react";
import Link from "next/link";

/* ── Types ──────────────────────────────────────────────────── */
export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

const STORAGE_KEY = "cameto_dpdp_consent";
const VERSION = "1.0";

const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

/* ── Category definitions per DPDP Act ─────────────────────── */
const categories = [
  {
    key: "necessary" as const,
    label: "Strictly Necessary",
    required: true,
    badge: "Required",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    description:
      "Essential for the website to function. These cannot be disabled. They enable core security, session management, and basic functionality. No personal data is stored beyond what is strictly needed for site operation.",
    examples: ["Session token", "CSRF protection", "Load balancer routing"],
    legalBasis: "Legitimate interest / contractual necessity (§ 7(b) DPDP Act)",
  },
  {
    key: "analytics" as const,
    label: "Performance & Analytics",
    required: false,
    badge: "Optional",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    description:
      "Help us understand how visitors interact with our website by collecting and reporting information anonymously. Used to improve user experience and website performance.",
    examples: ["Pages visited", "Time on site", "Browser & device type", "Referral source"],
    legalBasis: "Consent (§ 6 DPDP Act)",
  },
  {
    key: "marketing" as const,
    label: "Marketing & Targeting",
    required: false,
    badge: "Optional",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    description:
      "Used to deliver relevant advertisements and track campaign performance across websites. May share data with third-party advertising partners.",
    examples: ["Ad retargeting", "Conversion tracking", "Social media pixels"],
    legalBasis: "Consent (§ 6 DPDP Act)",
  },
  {
    key: "functional" as const,
    label: "Functional & Preferences",
    required: false,
    badge: "Optional",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    description:
      "Enable enhanced functionality and personalisation, such as remembering your preferences, language settings, and chat history.",
    examples: ["Language preference", "UI theme", "Form auto-fill"],
    legalBasis: "Consent (§ 6 DPDP Act)",
  },
];

/* ── Helpers ────────────────────────────────────────────────── */
export function getStoredConsent(): (ConsentState & { version: string }) | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveConsent(state: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, version: VERSION, timestamp: Date.now() }));
  window.dispatchEvent(new CustomEvent("dpdp-consent-updated", { detail: state }));
}

/* ── Toggle switch ──────────────────────────────────────────── */
function Toggle({ checked, onChange, disabled }: { checked: boolean; onChange: (v: boolean) => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative w-10 h-5 rounded-full transition-colors duration-200 flex-shrink-0 ${
        checked ? "bg-indigo-500" : "bg-white/20"
      } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

/* ── Category row (expandable) ──────────────────────────────── */
function CategoryRow({
  cat,
  value,
  onChange,
}: {
  cat: typeof categories[number];
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-white/5">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 text-left flex-1 cursor-pointer"
        >
          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${cat.badgeColor}`}>
            {cat.badge}
          </span>
          <span className="text-sm font-semibold text-white">{cat.label}</span>
          {open ? (
            <ChevronUp className="w-3.5 h-3.5 text-slate-400 ml-auto" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-auto" />
          )}
        </button>
        <div className="ml-4">
          <Toggle checked={value} onChange={onChange} disabled={cat.required} />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2 border-t border-white/10">
              <p className="text-xs text-slate-400 leading-relaxed">{cat.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {cat.examples.map((ex) => (
                  <span key={ex} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400">
                    {ex}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 pt-1">
                <span className="text-slate-400 font-medium">Legal basis:</span> {cat.legalBasis}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Preferences Modal ──────────────────────────────────────── */
function PreferencesModal({
  consent,
  onChange,
  onSave,
  onClose,
}: {
  consent: ConsentState;
  onChange: (key: keyof ConsentState, val: boolean) => void;
  onSave: () => void;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="w-full max-w-lg glass rounded-2xl border border-white/10 shadow-2xl shadow-black/50 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-400" />
            <h2 className="text-base font-bold text-white">Privacy Preferences</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-5 py-4 space-y-3">
          {/* DPDP notice */}
          <div className="text-xs text-slate-400 leading-relaxed bg-indigo-500/5 border border-indigo-500/20 rounded-xl px-4 py-3">
            <p className="font-semibold text-indigo-300 mb-1">Notice under the Digital Personal Data Protection Act, 2023</p>
            <p>
              CameeTo ("Data Fiduciary") collects and processes personal data as described below. You may grant or
              withdraw consent for optional categories at any time. Withdrawal does not affect the lawfulness of
              processing before withdrawal. Essential cookies cannot be disabled as they are necessary for the
              website to function.
            </p>
          </div>

          {/* Category rows */}
          {categories.map((cat) => (
            <CategoryRow
              key={cat.key}
              cat={cat}
              value={consent[cat.key]}
              onChange={(v) => onChange(cat.key, v)}
            />
          ))}

          {/* Rights */}
          <div className="text-xs text-slate-500 space-y-1 pt-1">
            <p className="font-semibold text-slate-400">Your rights under the DPDP Act:</p>
            <p>Right to access · Right to correction · Right to erasure · Right to grievance redressal · Right to nominate</p>
            <p>
              To exercise your rights, contact our Data Protection Officer at{" "}
              <a href="mailto:info@cameeto.com" className="text-indigo-400 hover:underline">
                info@cameeto.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-t border-white/10">
          <div className="flex gap-2 text-xs">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-indigo-400 transition-colors inline-flex items-center gap-1">
              Privacy Policy <ExternalLink className="w-3 h-3" />
            </Link>
            <span className="text-slate-600">·</span>
            <Link href="/cookie-policy" className="text-slate-500 hover:text-indigo-400 transition-colors inline-flex items-center gap-1">
              Cookie Policy <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <button
            onClick={onSave}
            className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            <Check className="w-4 h-4" /> Save Preferences
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Banner ────────────────────────────────────────────── */
export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored || stored.version !== VERSION) {
      setVisible(true);
    }

    // Expose a global to re-open preferences (used by footer link)
    (window as unknown as Record<string, unknown>).openConsentManager = () => {
      const stored = getStoredConsent();
      if (stored) setConsent({ ...defaultConsent, ...stored });
      setModalOpen(true);
    };
  }, []);

  const handleAcceptAll = () => {
    const all: ConsentState = { necessary: true, analytics: true, marketing: true, functional: true };
    saveConsent(all);
    setVisible(false);
  };

  const handleRejectAll = () => {
    saveConsent(defaultConsent);
    setVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsent(consent);
    setVisible(false);
    setModalOpen(false);
  };

  const handleManage = () => {
    setModalOpen(true);
  };

  const handleChange = (key: keyof ConsentState, val: boolean) => {
    if (key === "necessary") return;
    setConsent((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      {/* Bottom Banner */}
      <AnimatePresence>
        {visible && !modalOpen && (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-0"
          >
            <div className="max-w-4xl mx-auto glass rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-5">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                {/* Icon + text */}
                <div className="flex items-start gap-3 flex-1">
                  <Shield className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      We value your privacy — DPDP Act 2023
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      CameeTo collects personal data to provide and improve our services. We require your
                      consent for analytics, marketing, and functional cookies as mandated under the{" "}
                      <span className="text-indigo-300 font-medium">Digital Personal Data Protection Act, 2023</span>.
                      Essential cookies are always active.{" "}
                      <Link href="/privacy-policy" className="text-indigo-400 hover:underline">
                        Learn more
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-2 flex-shrink-0">
                  <button
                    onClick={handleManage}
                    className="px-4 py-2 rounded-full glass border border-white/20 text-xs font-semibold text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all cursor-pointer"
                  >
                    Manage
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 rounded-full glass border border-white/20 text-xs font-semibold text-slate-300 hover:text-white hover:border-white/40 transition-all cursor-pointer"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences modal */}
      <AnimatePresence>
        {modalOpen && (
          <PreferencesModal
            consent={consent}
            onChange={handleChange}
            onSave={handleSavePreferences}
            onClose={() => {
              setModalOpen(false);
              // If user closes without saving and hasn't consented yet, keep banner visible
              const stored = getStoredConsent();
              if (!stored) setVisible(true);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
