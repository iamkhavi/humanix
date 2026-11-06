import CaseStudyLayout from '@/components/CaseStudyLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MEAL & Data Systems — PEAS UK | Humanix Case Studies',
  description: 'From fragmented field data to actionable insights — bringing programme monitoring, data collection, and reporting into a connected workflow.',
};

export default function Page() {
  return (
    <CaseStudyLayout
      division="Technology & Digital Transformation"
      divisionColor="text-lime"
      category="MEAL & Data Systems"
      title="From Fragmented Field Data to Actionable Insights"
      subtitle="Bringing field data collection, programme monitoring, and reporting into a connected workflow that gives programme managers visibility and evidence for decision-making."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85"
      heroImageAlt="Data dashboard and analytics showing programme performance"
      meta={[
        { label: 'Organisation', value: 'PEAS UK' },
        { label: 'Sector', value: 'Education' },
        { label: 'Geography', value: 'Uganda & Africa' },
        { label: 'Division', value: 'Technology' },
      ]}
      challenge={
        <>
          <p>PEAS supports over 250,000 young people annually through a network of 46 schools across Africa. Delivering education programmes at this scale requires robust data on attendance, learning outcomes, teacher performance, and community engagement — across multiple geographies and school sites.</p>
          <p>The challenge common to education-focused NGOs operating at scale is data fragmentation: field information collected through disconnected spreadsheets, paper forms, and informal reporting channels makes it difficult to monitor programme performance consistently or produce evidence-based reports for institutional partners and funders.</p>
          <p>Programme managers need timely, reliable data. Funders and partners need credible results. And field teams need reporting tools that work within their actual working conditions.</p>
        </>
      }
      approach={
        <>
          <p>The approach starts with understanding how data currently flows — from field collection to programme review to external reporting. Rather than replacing existing processes wholesale, the design identifies the highest-friction points and builds connected solutions around them.</p>
          <p>For an education-focused organisation like PEAS, this means aligning data collection tools with the indicators required by school performance frameworks, government reporting requirements, and institutional donor expectations.</p>
          <p>The goal is not to implement the most sophisticated system available. It is to implement the most appropriate system — one that field teams will actually use, programme managers will trust, and leadership can rely on for evidence-based decisions.</p>
        </>
      }
      solution={
        <>
          <p>A connected programme monitoring workflow combining digital data collection at school and community level, automated validation and deduplication, centralized data storage, and accessible dashboards for programme and senior management review.</p>
          <p>For an organisation with PEAS's geographic spread, mobile-first data collection tools — designed for variable connectivity environments — are integrated with a central reporting layer that surfaces attendance trends, learning outcome indicators, and programme reach by school and region.</p>
          <ul>
            <li>Indicator framework and results chain design</li>
            <li>Mobile data collection tools for field teams</li>
            <li>Automated validation and data quality checks</li>
            <li>Programme performance dashboards</li>
            <li>Board and funder reporting templates</li>
            <li>MEAL team training and system handover</li>
          </ul>
          <p>The system is designed to grow — additional programmes, geographies, and reporting requirements can be incorporated without rebuilding the core architecture.</p>
        </>
      }
      results={[
        { metric: '250K+', label: 'Young people tracked' },
        { metric: '46', label: 'Schools in the network' },
        { metric: '16+', label: 'Years of education expertise' },
        { metric: '97%', label: 'Locally led staff' },
      ]}
      resultsNote="Figures reflect PEAS's published programme reach. Technology implementation outcomes are specific to engagement scope and will be documented upon project completion."
      ctaHeading="Improve your programme data systems."
      ctaBody="Humanix helps NGOs connect field data collection, monitoring, and reporting into workflows that actually work."
      externalLink={{ label: 'Visit PEAS UK', href: 'https://www.peas.org.uk' }}
      relatedService={{ label: 'MEAL & Programme Performance', href: '/services#meal' }}
    />
  );
}
