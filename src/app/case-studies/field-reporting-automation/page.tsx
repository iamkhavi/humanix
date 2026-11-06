import CaseStudyLayout from '@/components/CaseStudyLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Field Reporting Automation via WhatsApp | Humanix Case Studies',
  description: 'How familiar messaging tools can improve field updates, data collection, and coordination for distributed NGO programme teams.',
};

export default function Page() {
  return (
    <CaseStudyLayout
      division="Technology & Digital Transformation"
      divisionColor="text-lime"
      category="WhatsApp & Field Operations"
      title="Simplifying Field Reporting Through Digital Automation"
      subtitle="How familiar messaging tools can improve field updates, data collection, and coordination for distributed programme teams — without requiring new devices or technical training."
      heroImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=85"
      heroImageAlt="Field worker using a mobile phone to submit programme reports"
      meta={[
        { label: 'Organisation', value: 'Illustrative' },
        { label: 'Sector', value: 'Humanitarian & Development' },
        { label: 'Geography', value: 'East & West Africa' },
        { label: 'Division', value: 'Technology' },
      ]}
      challenge={
        <>
          <p>Field teams in distributed NGO programmes often rely on a patchwork of informal reporting — WhatsApp group messages, weekly phone calls, paper forms sent through field coordinators, and spreadsheets compiled at the end of each month.</p>
          <p>This creates familiar problems: programme managers lack real-time visibility, data arrives late and incomplete, and the administrative burden of compiling reports falls on already stretched coordination staff.</p>
          <p>For organizations operating across multiple districts or countries, the challenge compounds. Inconsistent reporting formats make cross-programme comparison difficult, and the absence of structured data collection makes evidence-based programme adaptation harder.</p>
          <p>The technical barrier is rarely the tool — most field officers already use WhatsApp daily. The barrier is structure: the absence of a defined reporting workflow that captures the right information at the right time, in a format that can be used for programme management.</p>
        </>
      }
      approach={
        <>
          <p>Rather than introducing new apps or hardware, the design approach starts with what field teams already use. WhatsApp is available, familiar, and works on basic smartphones with limited data connectivity — making it a practical foundation for a structured reporting workflow.</p>
          <p>The design phase maps the information that programme managers actually need against what field officers are currently able to report, and identifies the minimum structured inputs required to produce useful programme intelligence.</p>
          <p>Automated validation, confirmation messages, and escalation triggers are designed into the workflow — reducing the need for manual follow-up while making it clear to field officers when their submissions have been received and recorded.</p>
        </>
      }
      solution={
        <>
          <p>A WhatsApp-based structured reporting system that enables field officers to submit activity updates, beneficiary counts, and issue flags through a guided conversation flow — with automated routing, data storage, and management dashboard integration.</p>
          <ul>
            <li>WhatsApp reporting workflow design and configuration</li>
            <li>Automated validation and confirmation messaging</li>
            <li>Centralized data capture and storage</li>
            <li>Programme manager dashboard for real-time visibility</li>
            <li>Exception alerts for missing or anomalous submissions</li>
            <li>Integration with existing programme data systems</li>
          </ul>
          <p>The system operates within WhatsApp Business API infrastructure, requiring no app installation from field teams. Submissions are structured, timestamped, and automatically organized by programme, location, and reporting period.</p>
        </>
      }
      results={[
        { metric: '80%', label: 'Reduction in late reports' },
        { metric: '2 hrs', label: 'Average reporting time saved per officer/week' },
        { metric: '100%', label: 'Field teams using existing devices' },
        { metric: 'Real-time', label: 'Programme visibility for managers' },
      ]}
      resultsNote="These are illustrative outcomes based on comparable WhatsApp automation implementations. Verified results will be published with client permission upon project completion."
      ctaHeading="Streamline your field operations."
      ctaBody="Humanix helps NGOs design WhatsApp workflows and automation systems that improve data quality and reduce administrative burden."
      relatedService={{ label: 'WhatsApp Operations & Automation', href: '/services#whatsapp' }}
    />
  );
}
