import CaseStudyLayout from '@/components/CaseStudyLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impact Storytelling & Communications | Humanix Case Studies',
  description: 'Transforming technical programme reports and project achievements into accessible, donor-facing communications that build credibility and inspire support.',
};

export default function Page() {
  return (
    <CaseStudyLayout
      division="Marketing & Communications"
      divisionColor="text-gold"
      category="Impact Storytelling & Communications"
      title="Turning Programme Results Into Stories That Inspire"
      subtitle="Transforming technical reports and project achievements into accessible donor-facing communications that build credibility and inspire continued support."
      heroImage="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1400&q=85"
      heroImageAlt="NGO communications team reviewing impact content"
      meta={[
        { label: 'Organisation', value: 'Illustrative' },
        { label: 'Sector', value: 'Development NGO' },
        { label: 'Geography', value: 'Sub-Saharan Africa' },
        { label: 'Division', value: 'Marketing' },
      ]}
      challenge={
        <>
          <p>Many NGOs produce detailed programme reports — full of indicators, outputs, and activity records — that are essential for internal accountability but difficult for external audiences to interpret.</p>
          <p>The problem is not a lack of impact. It is a communication gap between what the programme team knows and what donors, partners, and the public actually understand.</p>
          <p>A community health organisation may have trained 200 health workers, delivered 15,000 consultations, and documented improved outcomes in three districts. But without accessible storytelling — a clear narrative, community voices, and visual evidence — those achievements struggle to create the donor confidence and institutional trust the organisation needs to sustain its work.</p>
        </>
      }
      approach={
        <>
          <p>The starting point is the programme data the organisation already has. Monitoring reports, field notes, photographs, and beneficiary feedback are all raw material for impact communications — they just need to be transformed into formats that non-technical audiences can engage with.</p>
          <p>The approach involves working with programme and MEAL teams to identify the most significant achievements, select appropriate stories with proper consent, and develop a communication structure that connects activities to outcomes in a way that is both honest and compelling.</p>
          <p>All content development is guided by ethical storytelling principles: dignity, consent, accuracy, and a commitment to representing community members as active participants rather than passive recipients.</p>
        </>
      }
      solution={
        <>
          <p>A suite of donor-facing content assets built from verified programme evidence — combining accessible narrative, community perspectives, visual content, and clear data presentation.</p>
          <ul>
            <li>Impact report design and content writing</li>
            <li>Beneficiary story development with consent frameworks</li>
            <li>Campaign content for fundraising appeals</li>
            <li>Social media storytelling series</li>
            <li>Donor newsletter templates and content</li>
            <li>Video script and production brief development</li>
          </ul>
          <p>The deliverables are adapted for different audiences — institutional donors receive structured results briefs while individual supporters receive accessible narrative-led content — using the same verified evidence base throughout.</p>
        </>
      }
      results={[
        { metric: '4×', label: 'Donor email open rate vs. sector average' },
        { metric: '68%', label: 'Increase in repeat giving' },
        { metric: '3', label: 'New institutional partnerships initiated' },
        { metric: '12', label: 'Stories documented and published' },
      ]}
      resultsNote="These are illustrative outcomes based on typical results from structured impact storytelling engagements. Verified client outcomes will be published with permission."
      ctaHeading="Tell your impact story with confidence."
      ctaBody="Humanix helps African NGOs transform programme evidence into communications that donors and partners actually engage with."
      relatedService={{ label: 'Content & Impact Storytelling', href: '/services#content' }}
    />
  );
}
