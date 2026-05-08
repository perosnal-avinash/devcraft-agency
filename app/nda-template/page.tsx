import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "NDA Template — CameeTo Agency",
  description: "CameeTo's standard Non-Disclosure Agreement template for client engagements.",
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

const Field = ({ label }: { label: string }) => (
  <span className="inline-block border-b border-dashed border-indigo-400/60 text-indigo-300 min-w-32 mx-1 text-sm italic">[{label}]</span>
);

const Clause = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => (
  <div className="mb-4 last:mb-0">
    <p className="text-sm font-bold text-white mb-1.5">{number}. {title}</p>
    <div className="pl-4 border-l border-white/10">{children}</div>
  </div>
);

const sections = [
  {
    id: "about",
    title: "About This NDA",
    content: (
      <>
        {p("This is CameeTo's standard Mutual Non-Disclosure Agreement (NDA). We use this agreement before sharing detailed project information, proprietary data, or confidential business details with prospective or active clients.")}
        {p("This template is provided for reference. When you request an NDA, our team will send you a pre-filled version via DocuSign or equivalent e-signature platform for review and signing within 24 hours.")}
        {ul([
          "This is a mutual NDA — both parties' confidential information is protected equally",
          "It covers the evaluation period and any resulting engagement",
          "Typical signing time: 15–30 minutes via e-signature",
          "To request a signed NDA, email legal@cameetoo.com or indicate it in your contact form",
        ])}
      </>
    ),
  },
  {
    id: "template",
    title: "NDA Template",
    content: (
      <>
        <div className="text-center mb-6 pb-6 border-b border-white/10">
          <p className="text-base font-extrabold text-white mb-1">MUTUAL NON-DISCLOSURE AGREEMENT</p>
          <p className="text-xs text-slate-500">Effective as of the date of last signature below</p>
        </div>

        {p("This Mutual Non-Disclosure Agreement ('Agreement') is entered into as of")}
        <p className="text-sm text-slate-400 mb-3">
          <Field label="Effective Date" />, by and between:
        </p>

        <div className="glass rounded-xl p-4 mb-4 space-y-3">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Party A (CameeTo)</p>
            <p className="text-sm text-slate-300">
              <strong>CameeTo Agency</strong>, a company registered in India, having its principal place of business at Koramangala, Bangalore – 560034, Karnataka, India (<strong>"CameeTo"</strong>); and
            </p>
          </div>
          <div className="border-t border-white/10 pt-3">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Party B (Client)</p>
            <p className="text-sm text-slate-400">
              <Field label="Company/Individual Name" />, a <Field label="Company Type (e.g., Private Limited Company)" /> incorporated/registered in <Field label="Country/State" />, having its principal place of business at <Field label="Address" /> (<strong>"Client"</strong>).
            </p>
          </div>
        </div>

        {p("CameeTo and Client are each referred to herein as a 'Party' and collectively as the 'Parties'.")}

        {h("RECITALS")}
        {p("WHEREAS, the Parties desire to explore a potential business relationship involving software development services (the 'Purpose'), and in connection with such exploration, each Party may disclose to the other certain confidential and proprietary information;")}
        {p("NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the Parties agree as follows:")}
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    content: (
      <>
        <Clause number="1" title="Confidential Information">
          {p("'Confidential Information' means any non-public information disclosed by one Party ('Disclosing Party') to the other Party ('Receiving Party') in connection with the Purpose, whether disclosed in writing, orally, electronically, or by any other means, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and circumstances of disclosure.")}
          {p("Confidential Information includes, without limitation: business plans and strategies, financial information, customer and supplier lists, technical specifications and source code, product roadmaps, pricing information, trade secrets, and any other proprietary business information.")}
        </Clause>
        <Clause number="2" title="Exclusions">
          {p("Confidential Information does not include information that:")}
          {ul([
            "(a) Is or becomes publicly available through no breach of this Agreement by the Receiving Party",
            "(b) Was rightfully known to the Receiving Party prior to disclosure, as evidenced by written records",
            "(c) Is rightfully received from a third party without restriction on disclosure",
            "(d) Is independently developed by the Receiving Party without use of Confidential Information",
            "(e) Is required to be disclosed by applicable law, regulation, or court order (subject to Clause 5)",
          ])}
        </Clause>
      </>
    ),
  },
  {
    id: "obligations",
    title: "Obligations of Receiving Party",
    content: (
      <>
        <Clause number="3" title="Confidentiality Obligations">
          {p("Each Party, as Receiving Party, agrees to:")}
          {ul([
            "Hold the Confidential Information of the Disclosing Party in strict confidence",
            "Use the Confidential Information solely for the Purpose and for no other purpose",
            "Not disclose Confidential Information to any third party without the prior written consent of the Disclosing Party",
            "Protect the Confidential Information using at least the same degree of care used to protect its own confidential information, but in no event less than reasonable care",
            "Limit access to Confidential Information to employees, contractors, and advisors who have a need to know and are bound by confidentiality obligations at least as restrictive as those in this Agreement",
            "Promptly notify the Disclosing Party in writing upon becoming aware of any actual or suspected unauthorised use or disclosure of Confidential Information",
          ])}
        </Clause>
        <Clause number="4" title="No Licence">
          {p("Nothing in this Agreement grants either Party any licence or right under any patent, trademark, copyright, trade secret, or other intellectual property right, except as expressly set forth herein. All Confidential Information remains the property of the Disclosing Party.")}
        </Clause>
        <Clause number="5" title="Legally Required Disclosure">
          {p("If the Receiving Party is required by law, regulation, or court order to disclose Confidential Information, it shall: (a) provide the Disclosing Party with prompt written notice (to the extent legally permitted) so that the Disclosing Party may seek a protective order or other remedy; (b) cooperate with the Disclosing Party in seeking such remedy; and (c) disclose only the minimum amount of Confidential Information legally required.")}
        </Clause>
      </>
    ),
  },
  {
    id: "term-termination",
    title: "Term & Termination",
    content: (
      <>
        <Clause number="6" title="Term">
          {p("This Agreement shall commence on the Effective Date and continue for a period of")}
          <Field label="2 (two) years" />
          {p(", unless terminated earlier by either Party upon 30 days' written notice.")}
        </Clause>
        <Clause number="7" title="Survival of Obligations">
          {p("The confidentiality obligations under this Agreement shall survive termination for a period of 3 (three) years from the date of termination, except with respect to trade secrets, which shall be protected for as long as they remain trade secrets under applicable law.")}
        </Clause>
        <Clause number="8" title="Return or Destruction">
          {p("Upon termination of this Agreement or upon the request of the Disclosing Party, the Receiving Party shall promptly return or destroy all tangible materials embodying Confidential Information (including all copies and summaries thereof) and certify in writing that it has done so.")}
        </Clause>
      </>
    ),
  },
  {
    id: "remedies",
    title: "Remedies & Enforcement",
    content: (
      <>
        <Clause number="9" title="Injunctive Relief">
          {p("The Parties acknowledge that any breach of this Agreement may cause irreparable harm to the Disclosing Party for which monetary damages would be an inadequate remedy. Accordingly, either Party shall be entitled to seek equitable relief, including injunction and specific performance, in addition to all other remedies available at law or equity, without the requirement of posting a bond or other security.")}
        </Clause>
        <Clause number="10" title="Liability">
          {p("Each Party shall be liable for any breach of this Agreement by its employees, contractors, or advisors to whom it disclosed Confidential Information.")}
        </Clause>
      </>
    ),
  },
  {
    id: "general-provisions",
    title: "General Provisions",
    content: (
      <>
        <Clause number="11" title="Governing Law">
          {p("This Agreement shall be governed by and construed in accordance with the laws of India. Any disputes arising under this Agreement shall be subject to the exclusive jurisdiction of the courts of Bangalore, Karnataka, India.")}
        </Clause>
        <Clause number="12" title="Entire Agreement">
          {p("This Agreement constitutes the entire agreement between the Parties with respect to the subject matter hereof and supersedes all prior and contemporaneous agreements, representations, and understandings of the Parties relating to confidentiality.")}
        </Clause>
        <Clause number="13" title="Amendments">
          {p("This Agreement may only be amended by a written instrument signed by authorised representatives of both Parties.")}
        </Clause>
        <Clause number="14" title="Severability">
          {p("If any provision of this Agreement is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.")}
        </Clause>
        <Clause number="15" title="Counterparts & Electronic Signatures">
          {p("This Agreement may be executed in counterparts, each of which shall be deemed an original. Electronic signatures (including via DocuSign or equivalent platforms) shall be deemed valid and binding.")}
        </Clause>
      </>
    ),
  },
  {
    id: "signatures",
    title: "Signatures",
    content: (
      <>
        {p("IN WITNESS WHEREOF, the Parties have executed this Mutual Non-Disclosure Agreement as of the Effective Date.")}
        <div className="grid sm:grid-cols-2 gap-6 mt-4">
          <div className="glass rounded-xl p-5 border border-indigo-500/20">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">DEVCRAFT AGENCY</p>
            <div className="space-y-3">
              {[
                { label: "Signature", field: "Authorised Signature" },
                { label: "Name", field: "Printed Name" },
                { label: "Title", field: "Title / Designation" },
                { label: "Date", field: "DD / MM / YYYY" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 w-14 flex-shrink-0">{row.label}:</span>
                  <div className="flex-1 border-b border-dashed border-white/20 pb-0.5">
                    <span className="text-xs text-slate-600 italic">{row.field}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-xl p-5 border border-cyan-500/20">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">CLIENT</p>
            <div className="space-y-3">
              {[
                { label: "Signature", field: "Authorised Signature" },
                { label: "Name", field: "Printed Name" },
                { label: "Title", field: "Title / Designation" },
                { label: "Date", field: "DD / MM / YYYY" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 w-14 flex-shrink-0">{row.label}:</span>
                  <div className="flex-1 border-b border-dashed border-white/20 pb-0.5">
                    <span className="text-xs text-slate-600 italic">{row.field}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-600 mt-4 text-center italic">
          This template is provided for informational purposes. Please consult a legal professional before executing. CameeTo will provide a pre-filled, ready-to-sign version upon request.
        </p>
      </>
    ),
  },
  {
    id: "request-nda",
    title: "Request a Signed NDA",
    content: (
      <>
        {p("To request a signed NDA before your project discussion, simply:")}
        {ul([
          "Email legal@cameetoo.com with subject 'NDA Request — [Your Company Name]'",
          "Or tick the 'NDA' checkbox on our contact form at cameetoo.com/contact",
          "We'll send a pre-filled DocuSign link within 24 hours",
          "Once both parties sign, the NDA is in effect immediately",
        ])}
        {p("We take confidentiality seriously. Many of our clients share highly sensitive business plans, technical specifications, and financial data with us — and we have never had a confidentiality breach in 8+ years of operation.")}
      </>
    ),
  },
];

export default function NdaTemplatePage() {
  return (
    <LegalLayout
      badge="LEGAL"
      title="NDA Template"
      subtitle="Our standard Mutual Non-Disclosure Agreement for client engagements."
      lastUpdated="1 January 2025"
      effectiveDate="Upon signature by both parties"
      sections={sections}
    />
  );
}
