import CaseStudyLayout from '@/components/CaseStudyLayout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Fundraising Campaign — Mir Hope Foundation | Humanix Case Studies',
  description: 'How a structured digital fundraising campaign connects community causes with supporters — campaign strategy, donor engagement, and measurable outcomes.',
};

export default function Page() {
  return (
    <CaseStudyLayout
      division="Marketing & Communications"
      divisionColor="text-gold"
      category="Fundraising & Digital Campaigns"
      title="Connecting Community Causes With Supporters"
      subtitle="How a structured digital campaign turns community needs into clear fundraising opportunities — with campaign strategy, donor engagement, and measurable outcomes."
      heroImage="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1400&q=85"
      heroImageAlt="African community members gathered at a fundraising event"
      meta={[
        { label: 'Organisation', value: 'Mir Hope Foundation' },
        { label: 'Sector', value: 'Humanitarian & Health' },
        { label: 'Geography', value: 'Kenya' },
        { label: 'Division', value: 'Marketing' },
      ]}
      challenge={
        <>
          <p>For many community-focused NGOs, online fundraising falls short not because of a lack of mission, but because of a lack of structure. Campaigns often launch without a specific goal, a defined audience, or a clear plan for turning interest into completed donations.</p>
          <p>Mir Hope Foundation operates humanitarian programmes in Kenya — including healthcare access, WASH, and livelihood support. With strong field impact but limited digital fundraising capacity, the organization needed a campaign approach that could communicate urgency, reach relevant supporters, and build a foundation for ongoing donor relationships.</p>
          <p>The challenge was not just raising funds for one campaign. It was building a replicable campaign process that the organization could use going forward.</p>
        </>
      }
      approach={
        <>
          <p>Rather than launching a broad general appeal, the approach focused on a single, specific campaign objective: funding targeted interventions in underserved communities in Kenya — with a defined goal, a realistic budget, and clear reporting commitments to donors.</p>
          <p>The campaign was structured in three phases: audience development and pre-launch content, active campaign execution across digital channels, and a structured post-campaign donor engagement sequence.</p>
          <p>Impact storytelling was central to the creative approach. Programme documentation, community context, and verified activity records formed the foundation of campaign content — ensuring that all claims reflected genuine field realities.</p>
        </>
      }
      solution={
        <>
          <p>A dedicated campaign landing page replaced the general donations page — providing campaign-specific context, a clear funding goal, and a streamlined mobile-optimized donation experience.</p>
          <p>Campaign content was distributed across email, Facebook, Instagram, and Google Search — including Google Ad Grants where applicable. Each channel served a distinct role: email engaged existing supporters, social media extended reach to new audiences, and search captured people already looking for relevant organizations.</p>
          <p>A structured post-donation communication journey included an immediate acknowledgment, a mid-campaign progress update, and a final impact summary — building donor confidence and laying the groundwork for repeat giving.</p>
          <ul>
            <li>Campaign strategy and message development</li>
            <li>Mobile-optimized donation landing page</li>
            <li>Multi-channel campaign execution</li>
            <li>Post-donation engagement sequence</li>
            <li>Campaign performance reporting</li>
          </ul>
        </>
      }
      results={[
        { metric: '+212%', label: 'Online donation growth' },
        { metric: '90%', label: 'Donations reach direct impact' },
        { metric: '3×', label: 'Donor retention vs. baseline' },
        { metric: '6 wks', label: 'To reach funding target' },
      ]}
      resultsNote="Results are based on the Mir Hope Foundation campaign model. Individual campaign outcomes will vary based on audience size, budget, and programme context."
      ctaHeading="Let's build your fundraising campaign."
      ctaBody="Humanix helps African NGOs develop campaign strategies, donor-facing content, and digital giving experiences."
      externalLink={{ label: 'Visit Mir Hope Foundation', href: 'https://mirhopefoundation.com' }}
      relatedService={{ label: 'Fundraising Marketing & Donor Engagement', href: '/services#fundraising-marketing' }}
    />
  );
}
