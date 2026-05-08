import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — CameeTo Agency",
  description: "How CameeTo collects, uses, and protects your personal information.",
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
  <p className="text-sm font-bold text-white mb-2">{text}</p>
);

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        {p("CameeTo Agency ('CameeTo', 'we', 'us', or 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (cameeto.com) or engage our services.")}
        {p("By using our website or services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our website and services.")}
        {p("This policy applies to all information collected through our website, and any related services, sales, marketing, or events (collectively, the 'Services').")}
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        {h("Information You Provide Directly")}
        {ul([
          "Name, email address, phone number, and company name when you fill out contact forms",
          "Project details, requirements, and budget information shared during enquiries",
          "Communications including emails, messages, and feedback",
          "Payment and billing information processed through our secure payment partners",
          "Account credentials if you create an account on our client portal",
        ])}
        {h("Information Collected Automatically")}
        {ul([
          "IP address, browser type, operating system, and device information",
          "Pages visited, time spent, and navigation patterns via cookies and analytics tools",
          "Referring URLs and search terms that led you to our website",
          "Crash reports and performance data to improve our services",
        ])}
        {h("Information from Third Parties")}
        {ul([
          "Business information from LinkedIn or other professional networks when you connect with us",
          "Referral information from partners or existing clients",
          "Publicly available information used for business development purposes",
        ])}
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: (
      <>
        {p("We use the information we collect for the following purposes:")}
        {ul([
          "To respond to your enquiries and communicate about potential or active projects",
          "To prepare, send, and manage project proposals, contracts, and invoices",
          "To deliver our software development and consulting services",
          "To process payments and prevent fraudulent transactions",
          "To send service updates, project status notifications, and relevant communications",
          "To improve our website, services, and customer experience through analytics",
          "To comply with legal obligations and enforce our terms",
          "To send marketing communications where you have given consent (you may opt out at any time)",
          "To protect the security and integrity of our systems and services",
        ])}
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing Your Information",
    content: (
      <>
        {p("We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:")}
        {h("Service Providers")}
        {p("We work with trusted third-party service providers who assist us in operating our business. These include cloud hosting providers (AWS, GCP), project management tools (Jira, Linear), communication platforms (Slack), analytics providers (Google Analytics), and payment processors (Stripe, Razorpay). These providers are contractually obligated to protect your data.")}
        {h("Legal Requirements")}
        {p("We may disclose information if required by law, court order, or governmental authority, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.")}
        {h("Business Transfers")}
        {p("In the event of a merger, acquisition, or sale of all or part of our assets, your information may be transferred as part of that transaction. We will notify you of any such change.")}
        {h("With Your Consent")}
        {p("We may share information with third parties when you have explicitly consented, such as publishing a case study about your project (only with your written approval).")}
      </>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    content: (
      <>
        {p("We implement industry-standard security measures to protect your personal information:")}
        {ul([
          "TLS 1.3 encryption for all data transmitted to and from our website",
          "AES-256 encryption for sensitive data stored in our systems",
          "Role-based access controls ensuring staff only access data needed for their role",
          "Regular security audits and penetration testing of our infrastructure",
          "Multi-factor authentication for all internal systems containing client data",
          "Secure, access-controlled cloud infrastructure on AWS and GCP",
          "Regular employee security training and awareness programmes",
        ])}
        {p("While we use commercially reasonable security measures, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, and you provide information at your own risk.")}
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <>
        {p("We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law:")}
        {ul([
          "Enquiry and proposal data: 3 years from last contact",
          "Active client project data: Duration of project plus 5 years",
          "Financial and billing records: 7 years (as required by Indian tax law)",
          "Marketing communications preferences: Until you opt out or request deletion",
          "Website analytics data: 26 months (Google Analytics default)",
          "Employee and contractor data: Duration of engagement plus 7 years",
        ])}
        {p("You may request early deletion of your data at any time (subject to legal retention requirements) by contacting info@cameeto.com.")}
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: (
      <>
        {p("Depending on your location, you may have the following rights regarding your personal data:")}
        {ul([
          "Right to Access: Request a copy of the personal data we hold about you",
          "Right to Rectification: Request correction of inaccurate or incomplete data",
          "Right to Erasure: Request deletion of your personal data ('right to be forgotten')",
          "Right to Restriction: Request that we limit how we process your data",
          "Right to Portability: Receive your data in a structured, machine-readable format",
          "Right to Object: Object to processing based on legitimate interests or for direct marketing",
          "Right to Withdraw Consent: Withdraw consent at any time where processing is consent-based",
        ])}
        {p("To exercise any of these rights, contact us at info@cameeto.com. We will respond within 30 days. We may need to verify your identity before processing requests.")}
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <>
        {p("We use cookies and similar tracking technologies to enhance your experience on our website. Please refer to our Cookie Policy for full details on the types of cookies we use, their purposes, and how to manage your preferences.")}
        {p("In summary, we use essential cookies (required for the website to function), analytics cookies (to understand usage), and marketing cookies (for relevant advertising). You can manage your cookie preferences through our cookie banner or browser settings.")}
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    content: (
      <>
        {p("Our website may contain links to third-party websites, plugins, and applications. Clicking on these links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.")}
        {p("We encourage you to read the privacy policy of every website you visit.")}
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content: (
      <>
        {p("Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us at info@cameeto.com and we will delete such information.")}
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: (
      <>
        {p("CameeTo is headquartered in India. If you are located outside India, your information may be transferred to, stored, and processed in India or other countries where our service providers operate.")}
        {p("By using our services, you consent to this transfer. We ensure appropriate safeguards are in place, including standard contractual clauses or equivalent protections, when transferring data internationally.")}
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <>
        {p("We may update this Privacy Policy from time to time. When we make material changes, we will notify you by updating the 'Last Updated' date at the top of this page and, where appropriate, sending an email notification.")}
        {p("We encourage you to review this policy periodically. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.")}
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        {p("For any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer:")}
        {ul([
          "Email: info@cameeto.com",
          "Postal: CameeTo Agency, Koramangala, Bangalore – 560034, Karnataka, India",
          "Phone: +91 98765 43210 (Mon–Fri, 9 AM – 7 PM IST)",
        ])}
        {p("We take all privacy enquiries seriously and will respond within 30 business days.")}
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      badge="LEGAL"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      lastUpdated="1 January 2025"
      effectiveDate="1 January 2025"
      sections={sections}
    />
  );
}
