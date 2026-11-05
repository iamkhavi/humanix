import ArticleLayout from '@/components/ArticleLayout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Water for All Grew Online Donations by 212% | Humanix',
  description: 'A breakdown of the strategy, creative, and digital channels behind one of our most successful fundraising campaigns in Kenya.',
};

const related = [
  { title: '5 Digital Fundraising Strategies African NGOs Can Use in 2027', href: '/insights/digital-fundraising-strategies-2027', category: 'Fundraising', readTime: '7 min read' },
  { title: 'How to Tell Impact Stories That Build Donor Confidence', href: '/insights/impact-stories-donor-confidence', category: 'Storytelling', readTime: '7 min read' },
  { title: 'Why African NGOs Need More Than Just a Website', href: '/insights/african-ngos-need-more-than-a-website', category: 'Digital Marketing', readTime: '6 min read' },
];

export default function Article() {
  return (
    <ArticleLayout
      category="Case Studies"
      title="How Water for All Grew Online Donations by 212% in One Campaign"
      description="A breakdown of the strategy, creative, and digital channels behind one of our most successful fundraising campaigns in Kenya."
      readTime="9 min read"
      date="June 2026"
      related={related}
    >
      <h2>The Challenge</h2>
      <p>Water for All is a Kenyan nonprofit committed to sustainable access to safe drinking water in rural and underserved communities. Despite strong field results and a committed team, their online fundraising was underperforming — donation page visits were low, conversion rates were inconsistent, and donor retention was a persistent concern.</p>
      <p>They approached Humanix with a clear objective: build a digital fundraising campaign that would generate meaningful online donations and lay the groundwork for ongoing supporter engagement.</p>

      <h2>The Strategy</h2>
      <p>Rather than launching a broad awareness campaign, we focused on a single, specific campaign objective: funding the installation of community water points in three target communities in western Kenya.</p>
      <p>The campaign was built around a clear funding goal, a defined timeline, verifiable project costs, and a compelling narrative about the communities involved.</p>
      <p>We developed the campaign across three phases: pre-launch audience building, active campaign execution, and post-campaign donor engagement.</p>

      <h2>The Creative Approach</h2>
      <p>Impact storytelling was central to the campaign. We worked with the Water for All programme team to document the situation in the target communities — the daily distances travelled to collect water, the health implications, and the voices of community members describing what access to a local water point would mean.</p>
      <p>This content formed the foundation of the campaign's digital materials: a campaign landing page, email series, social media content, and a short video produced with the field team.</p>
      <p>All content was reviewed for accuracy, appropriate consent, and alignment with the dignity of the communities involved.</p>

      <h2>The Channels</h2>
      <p>The campaign ran across email, Facebook, Instagram, and Google Search — including Google Ad Grants. Each channel served a specific role: email engaged existing supporters, social media extended reach to new audiences, and search captured people already looking for water access organizations in Kenya.</p>
      <p>A dedicated campaign landing page replaced the organization's general donation page, providing campaign-specific context and a streamlined donation experience optimized for mobile.</p>

      <h2>The Results</h2>
      <p>Across the campaign period, online donations increased by 212% compared to the equivalent period in the previous year. The campaign exceeded its funding target within six weeks, with the remainder of the campaign period used to build a foundation of recurring donors.</p>
      <p>Donor retention from the campaign has continued to outperform the organization's previous baseline, supported by a structured post-campaign communication journey.</p>

      <h2>What Made the Difference</h2>
      <p>Several factors contributed to the campaign's performance: a specific and credible funding goal, content grounded in genuine community evidence, a mobile-optimized donation experience, and consistent follow-through with donors after the campaign closed.</p>
      <p>The results were not simply the product of increased advertising spend. They reflected a coherent campaign strategy applied consistently across every touchpoint.</p>

      <h3>How Humanix Can Help</h3>
      <p>Humanix helps African NGOs design, execute, and measure digital fundraising campaigns that connect compelling missions with the supporters who care about them.</p>
      <p><strong>Ready to build your next campaign?</strong></p>
      <p><Link href="/services">Explore Humanix Fundraising Marketing Services</Link> or <Link href="/contact">contact our team</Link> to discuss your goals.</p>
    </ArticleLayout>
  );
}
