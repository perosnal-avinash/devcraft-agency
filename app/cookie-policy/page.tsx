import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy — DevCraft Agency",
  description: "How DevCraft uses cookies and similar tracking technologies.",
};

const p = (text: string) => (
  <p className="text-sm text-slate-400 leading-relaxed mb-3 last:mb-0">{text}</p>
);

const ul = (items: string[]) => (
  <ul className="space-y-2 mb-3 last:mb-0">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
        {item}
      </li>
    ))}
  </ul>
);

const h = (text: string) => (
  <p className="text-sm font-bold text-white mb-2 mt-4 first:mt-0">{text}</p>
);

type TableRow = { name: string; provider: string; purpose: string; expiry: string; type: string };

const CookieTable = ({ rows }: { rows: TableRow[] }) => (
  <div className="overflow-x-auto mt-3 mb-3 rounded-xl border border-white/10">
    <table className="w-full text-xs">
      <thead>
        <tr className="border-b border-white/10 bg-white/5">
          <th className="text-left px-3 py-2.5 text-slate-400 font-semibold">Cookie Name</th>
          <th className="text-left px-3 py-2.5 text-slate-400 font-semibold">Provider</th>
          <th className="text-left px-3 py-2.5 text-slate-400 font-semibold">Purpose</th>
          <th className="text-left px-3 py-2.5 text-slate-400 font-semibold">Expiry</th>
          <th className="text-left px-3 py-2.5 text-slate-400 font-semibold">Type</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5">
            <td className="px-3 py-2.5 text-indigo-300 font-mono">{r.name}</td>
            <td className="px-3 py-2.5 text-slate-400">{r.provider}</td>
            <td className="px-3 py-2.5 text-slate-400">{r.purpose}</td>
            <td className="px-3 py-2.5 text-slate-400">{r.expiry}</td>
            <td className="px-3 py-2.5">
              <span className="px-2 py-0.5 rounded-full text-xs bg-indigo-500/20 text-indigo-300">{r.type}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const sections = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    content: (
      <>
        {p("Cookies are small text files placed on your device (computer, tablet, or smartphone) when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide information to website owners.")}
        {p("Cookies can be 'session cookies' (deleted when you close your browser) or 'persistent cookies' (remain on your device until they expire or you delete them). They can be set by the website you're visiting ('first-party cookies') or by third-party services used by the website.")}
        {p("Similar technologies include web beacons (tiny images that track whether an email was opened), pixels, local storage, and fingerprinting. This policy covers all such technologies collectively.")}
      </>
    ),
  },
  {
    id: "cookies-we-use",
    title: "Cookies We Use",
    content: (
      <>
        {h("1. Strictly Necessary Cookies")}
        {p("These cookies are essential for the website to function and cannot be disabled. They are usually set in response to actions you take, such as setting privacy preferences, logging in, or filling forms.")}
        <CookieTable rows={[
          { name: "__session", provider: "DevCraft", purpose: "Maintains user session state", expiry: "Session", type: "Necessary" },
          { name: "csrf_token", provider: "DevCraft", purpose: "Prevents cross-site request forgery attacks", expiry: "Session", type: "Necessary" },
          { name: "cookie_consent", provider: "DevCraft", purpose: "Stores your cookie consent preferences", expiry: "1 year", type: "Necessary" },
        ]} />
        {h("2. Analytics & Performance Cookies")}
        {p("These cookies help us understand how visitors interact with our website, which pages are most visited, and where visitors come from. This helps us improve our website.")}
        <CookieTable rows={[
          { name: "_ga", provider: "Google Analytics", purpose: "Distinguishes unique users", expiry: "2 years", type: "Analytics" },
          { name: "_ga_*", provider: "Google Analytics", purpose: "Stores session state", expiry: "2 years", type: "Analytics" },
          { name: "_gid", provider: "Google Analytics", purpose: "Distinguishes users (24h)", expiry: "24 hours", type: "Analytics" },
          { name: "_gat", provider: "Google Analytics", purpose: "Throttles request rate", expiry: "1 minute", type: "Analytics" },
        ]} />
        {h("3. Functional Cookies")}
        {p("These cookies enable enhanced functionality and personalisation, such as remembering your language preference or timezone.")}
        <CookieTable rows={[
          { name: "user_pref", provider: "DevCraft", purpose: "Remembers UI preferences (theme, language)", expiry: "1 year", type: "Functional" },
          { name: "hs_*", provider: "HubSpot", purpose: "Live chat and contact form functionality", expiry: "13 months", type: "Functional" },
        ]} />
        {h("4. Marketing & Targeting Cookies")}
        {p("These cookies track your browsing to deliver targeted advertising and measure the effectiveness of our marketing campaigns. These are only set with your consent.")}
        <CookieTable rows={[
          { name: "_fbp", provider: "Meta (Facebook)", purpose: "Delivers targeted ads on Facebook and partners", expiry: "3 months", type: "Marketing" },
          { name: "IDE", provider: "Google (DoubleClick)", purpose: "Used for retargeting and ad frequency capping", expiry: "1 year", type: "Marketing" },
          { name: "_gcl_au", provider: "Google Ads", purpose: "Tracks ad conversions", expiry: "3 months", type: "Marketing" },
          { name: "li_fat_id", provider: "LinkedIn", purpose: "LinkedIn ad attribution and retargeting", expiry: "1 month", type: "Marketing" },
        ]} />
      </>
    ),
  },
  {
    id: "managing-cookies",
    title: "Managing Your Cookie Preferences",
    content: (
      <>
        {h("Cookie Consent Banner")}
        {p("When you first visit our website, you will see a cookie consent banner. You can accept all cookies, reject non-essential cookies, or customise your preferences by category. You can change your preferences at any time by clicking 'Cookie Settings' in the footer of any page.")}
        {h("Browser Settings")}
        {p("You can also control cookies through your browser settings. Most browsers allow you to:")}
        {ul([
          "View cookies stored on your device and delete them individually or in bulk",
          "Block third-party cookies",
          "Block all cookies (note: this will break many website features)",
          "Clear all cookies when you close your browser",
          "Set up exceptions for specific websites",
        ])}
        {p("Instructions for popular browsers: Chrome (Settings → Privacy → Cookies), Firefox (Settings → Privacy → Cookies and Site Data), Safari (Preferences → Privacy), Edge (Settings → Privacy → Cookies).")}
        {h("Opt-Out Links for Specific Providers")}
        {ul([
          "Google Analytics: tools.google.com/dlpage/gaoptout",
          "Google Ads: adssettings.google.com",
          "Meta / Facebook: facebook.com/settings?tab=ads",
          "LinkedIn: linkedin.com/psettings/guest-controls",
        ])}
        {p("Note that disabling certain cookies may affect the functionality of our website. Strictly necessary cookies cannot be disabled through the consent banner as they are required for the website to function.")}
      </>
    ),
  },
  {
    id: "third-party-cookies",
    title: "Third-Party Cookies",
    content: (
      <>
        {p("Some cookies on our website are set by third-party services that appear on our pages. We do not control these cookies. Please refer to the respective privacy policies of these third parties for more information:")}
        {ul([
          "Google: policies.google.com/privacy",
          "Meta (Facebook): facebook.com/privacy/policy",
          "LinkedIn: linkedin.com/legal/privacy-policy",
          "HubSpot: legal.hubspot.com/privacy-policy",
        ])}
      </>
    ),
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    content: (
      <>
        {p("We may update this Cookie Policy periodically to reflect changes in the cookies we use or for operational, legal, or regulatory reasons. When we make material changes, we will update the 'Last Updated' date at the top of this page and show a new consent banner if required.")}
        {p("We encourage you to review this policy periodically.")}
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        {p("If you have questions about our use of cookies or this policy, please contact us:")}
        {ul([
          "Email: privacy@devcraft.io",
          "Postal: DevCraft Agency, Koramangala, Bangalore – 560034, Karnataka, India",
        ])}
      </>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      badge="LEGAL"
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies on our website."
      lastUpdated="1 January 2025"
      effectiveDate="1 January 2025"
      sections={sections}
    />
  );
}
