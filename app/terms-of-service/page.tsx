import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — CameeTo Agency",
  description: "Read CameeTo's terms of service outlining the conditions that govern your use of our software development services and website.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: false, follow: false },
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

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <>
        {p("By accessing our website, requesting a proposal, or engaging CameeTo Agency ('CameeTo', 'we', 'us', 'our') for any services, you ('Client', 'you') agree to be bound by these Terms of Service and all applicable laws and regulations.")}
        {p("If you do not agree with any of these terms, you are prohibited from using our services. These terms may be updated from time to time; continued use of our services constitutes acceptance of the revised terms.")}
        {p("These Terms of Service form part of, and should be read together with, any project-specific Statement of Work (SOW), Master Service Agreement (MSA), or other agreements signed between the parties.")}
      </>
    ),
  },
  {
    id: "services",
    title: "Our Services",
    content: (
      <>
        {p("CameeTo provides custom software development, design, consulting, and related technology services. The specific scope, timeline, deliverables, and pricing for each engagement are defined in a separate Statement of Work (SOW) or project proposal, which becomes legally binding upon both parties' written agreement.")}
        {h("Service Modifications")}
        {p("We reserve the right to modify, suspend, or discontinue any aspect of our services with reasonable notice. For active project engagements, material changes to scope require written agreement from both parties.")}
        {h("Subcontracting")}
        {p("CameeTo may engage trusted subcontractors or freelancers to assist in delivering services. We remain responsible for the quality and confidentiality of subcontracted work and ensure all subcontractors are bound by appropriate confidentiality agreements.")}
      </>
    ),
  },
  {
    id: "payment",
    title: "Payment Terms",
    content: (
      <>
        {h("Invoicing and Payment")}
        {ul([
          "Standard payment terms: 50% upfront, 50% on delivery (unless otherwise agreed in the SOW)",
          "Invoices are due within 14 days of issuance unless otherwise agreed in writing",
          "Accepted payment methods: Bank transfer (NEFT/RTGS/SWIFT), Stripe, Razorpay",
          "All prices are exclusive of applicable taxes (GST, VAT, or local equivalents)",
        ])}
        {h("Late Payments")}
        {p("Invoices not paid within 14 days of the due date will accrue interest at 1.5% per month (18% per annum) on the outstanding balance. CameeTo reserves the right to suspend work on active projects until overdue invoices are settled.")}
        {h("Refunds")}
        {p("Payments made for work already completed are non-refundable. For prepaid milestones not yet started, refunds may be issued at CameeTo's discretion, less any reasonable administrative costs incurred.")}
        {h("Dispute Resolution for Invoices")}
        {p("If you dispute an invoice, you must notify us in writing within 7 days of receipt. Undisputed portions of the invoice remain payable on the original due date.")}
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        {h("Client Ownership")}
        {p("Upon receipt of full payment, CameeTo assigns to the Client all intellectual property rights in the custom work product specifically created for the Client under the SOW, including source code, designs, and documentation.")}
        {h("CameeTo IP and Pre-existing Materials")}
        {p("CameeTo retains ownership of all pre-existing intellectual property, tools, frameworks, libraries, and methodologies used in delivering services ('CameeTo IP'). To the extent CameeTo IP is incorporated into deliverables, CameeTo grants the Client a non-exclusive, perpetual, royalty-free licence to use such CameeTo IP solely as part of the deliverables.")}
        {h("Open Source")}
        {p("Some deliverables may include open-source software components. Such components remain subject to their respective open-source licences. CameeTo will disclose all open-source components used in a project.")}
        {h("Portfolio Rights")}
        {p("CameeTo reserves the right to display the project in our portfolio and marketing materials (website, case studies, social media) unless the Client expressly requests otherwise in writing before project commencement.")}
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: (
      <>
        {p("Both parties agree to keep confidential all non-public information disclosed by the other party in connection with the services ('Confidential Information'). Confidential Information includes, but is not limited to, business plans, technical specifications, source code, financial data, and customer information.")}
        {h("Obligations")}
        {ul([
          "Use Confidential Information only for the purpose of the engagement",
          "Not disclose Confidential Information to third parties without prior written consent",
          "Protect Confidential Information with at least the same care used for own confidential information",
          "Promptly notify the other party of any actual or suspected breach",
        ])}
        {h("Exceptions")}
        {p("Confidentiality obligations do not apply to information that is publicly available through no fault of the receiving party, independently developed without use of Confidential Information, or required to be disclosed by law (in which case prior notice must be given where legally permitted).")}
        {p("These confidentiality obligations survive termination of the engagement for 3 years. A separate NDA may be signed upon request before any detailed project discussions.")}
      </>
    ),
  },
  {
    id: "warranties",
    title: "Warranties & Representations",
    content: (
      <>
        {h("CameeTo Warrants That:")}
        {ul([
          "We have the right and authority to enter into agreements and deliver the services",
          "Services will be performed in a professional and workmanlike manner",
          "Deliverables, to our knowledge, will not infringe any third-party intellectual property rights",
          "We will maintain appropriate security measures to protect Client data",
        ])}
        {h("Client Warrants That:")}
        {ul([
          "You have the right and authority to enter into agreements and provide materials shared with us",
          "Materials provided to CameeTo do not infringe any third-party rights",
          "Information provided is accurate and complete to the best of your knowledge",
          "You will obtain all necessary licences and permissions for third-party integrations you request",
        ])}
        {h("Disclaimer")}
        {p("EXCEPT AS EXPRESSLY STATED, SERVICES ARE PROVIDED 'AS IS' WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT DELIVERABLES WILL BE ERROR-FREE OR MEET ALL REQUIREMENTS.")}
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <>
        {p("TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DEVCRAFT'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR ANY ENGAGEMENT SHALL NOT EXCEED THE TOTAL FEES PAID BY CLIENT TO DEVCRAFT IN THE 3 MONTHS PRECEDING THE CLAIM.")}
        {p("IN NO EVENT SHALL DEVCRAFT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS OPPORTUNITIES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.")}
        {p("These limitations reflect a fair allocation of risk and form an essential basis of the bargain between the parties. They apply even if any limited remedy fails of its essential purpose.")}
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <>
        {h("By Either Party")}
        {p("Either party may terminate an engagement with 14 days' written notice. Upon termination, CameeTo will deliver all completed work to date, and the Client will pay for all work completed and reasonable costs incurred up to the termination date.")}
        {h("For Cause")}
        {p("Either party may terminate immediately upon written notice if the other party materially breaches these terms and fails to cure such breach within 7 days of receiving written notice.")}
        {h("By CameeTo")}
        {p("CameeTo may suspend or terminate services immediately if Client fails to make payment when due, provides false information, or requests work that violates applicable law.")}
        {h("Effect of Termination")}
        {ul([
          "Client pays for all completed work and reasonable costs to date",
          "CameeTo delivers all completed work product",
          "Confidentiality and IP provisions survive termination",
          "Each party returns or destroys the other's Confidential Information",
        ])}
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: (
      <>
        {p("You agree not to engage CameeTo for, or use our deliverables for, any of the following:")}
        {ul([
          "Any unlawful purpose or in violation of any applicable laws or regulations",
          "Building systems designed to harm, harass, or defraud individuals",
          "Creating malware, spyware, or other malicious software",
          "Infringing on intellectual property rights of any third party",
          "Violating the privacy or data protection rights of individuals",
          "Any activity that constitutes a cyberattack or unauthorized system access",
          "Circumventing security measures or export controls",
        ])}
        {p("CameeTo reserves the right to refuse any engagement or terminate an existing engagement if we determine, in our reasonable judgement, that the requested work violates these principles.")}
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    content: (
      <>
        {p("These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.")}
        {h("Dispute Resolution")}
        {p("Before initiating formal proceedings, both parties agree to attempt to resolve any dispute through good-faith negotiation for at least 30 days. If negotiation fails, disputes shall be resolved through binding arbitration under the Arbitration and Conciliation Act, 1996, with a single arbitrator appointed by mutual agreement. The seat of arbitration shall be Noida, Uttar Pradesh.")}
        {p("Notwithstanding the above, either party may seek injunctive or equitable relief in any competent court where necessary to prevent irreparable harm.")}
      </>
    ),
  },
  {
    id: "general",
    title: "General Provisions",
    content: (
      <>
        {h("Entire Agreement")}
        {p("These Terms, together with any applicable SOW, MSA, or NDA, constitute the entire agreement between the parties and supersede all prior negotiations, representations, or agreements.")}
        {h("Amendments")}
        {p("Any amendment to these terms must be in writing and signed by authorised representatives of both parties.")}
        {h("Severability")}
        {p("If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.")}
        {h("Waiver")}
        {p("Failure by either party to enforce any provision shall not constitute a waiver of that provision or the right to enforce it in the future.")}
        {h("Force Majeure")}
        {p("Neither party shall be liable for delays or failures in performance resulting from circumstances beyond their reasonable control, including natural disasters, government actions, internet outages, or pandemics.")}
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        {p("For questions about these Terms of Service, please contact:")}
        {ul([
          "Email: info@cameeto.com",
          "Postal: CameeTo Agency, Anthurium, Plot No. 3, Sector 73, Noida – 201301, Uttar Pradesh, India",
          "Phone: +91 98765 43210",
        ])}
      </>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      badge="LEGAL"
      title="Terms of Service"
      subtitle="The terms and conditions governing our services and your use of them."
      lastUpdated="1 January 2025"
      effectiveDate="1 January 2025"
      sections={sections}
    />
  );
}
