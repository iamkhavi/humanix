import LeadMagnetLayout from '@/components/LeadMagnetLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Fundraising Campaign Planning Template | Humanix',
  description: 'A structured Google Doc template to plan, execute, and measure digital fundraising campaigns for African NGOs and nonprofits.',
};

export default function Page() {
  return (
    <LeadMagnetLayout
      category="Fundraising"
      headline="Plan your next fundraising campaign with confidence."
      subheadline="From strategy to results, in one template."
      description="A free structured template that guides African NGOs through every stage of a digital fundraising campaign — from defining your goal and audience to tracking performance and reporting to donors."
      benefits={[
        { text: 'Free Google Doc template' },
        { text: 'Covers strategy to reporting' },
        { text: 'Built for African NGOs' },
        { text: 'Copy and use immediately' },
      ]}
      formTitle="Get your free template"
      formSubtitle="We'll send you a Google Doc link you can copy and use immediately."
      ctaLabel="Email me the free template"
      format="Google Doc template"
      previewTitle="A structured plan. A manageable campaign."
      previewDescription="The template walks you through six campaign phases: objective setting, audience definition, messaging and creative, channel planning, budget allocation, and performance reporting. Each section includes guiding questions and example inputs to help you get started quickly."
      previewNote="This is the same campaign planning structure Humanix uses across client fundraising projects."
      mockPages={[
        {
          label: 'Phase 1 — Campaign Objective',
          items: [
            'Funding goal and deadline',
            'Campaign name and narrative',
            'Reporting commitments to donors',
          ],
        },
        {
          label: 'Phase 2 — Audience & Channels',
          items: [
            'Primary and secondary audiences',
            'Channel selection and rationale',
            'Mobile giving considerations',
          ],
        },
        {
          label: 'Phase 3 — Performance Tracking',
          items: [
            'KPIs and measurement approach',
            'Conversion rate targets',
            'Donor follow-up sequence',
          ],
        },
      ]}
      faqs={[
        { q: 'Is this template really free?', a: 'Yes. Enter your email and we will send you a link to copy the Google Doc template. No payment required.' },
        { q: 'Do I need a Google account to use it?', a: 'Yes — the template is shared as a Google Doc. You will need a free Google account to make your own copy. We can also send it as a Word document on request.' },
        { q: 'How experienced does my team need to be?', a: 'The template is designed for NGO teams with limited marketing experience. It includes guiding prompts and example entries throughout. A communications officer or programme manager can complete it without specialist knowledge.' },
        { q: 'Can I adapt the template for different types of campaigns?', a: 'Yes. The template is designed to be flexible — it works for emergency appeals, project funding campaigns, recurring giving drives, and awareness campaigns with fundraising components.' },
        { q: 'Will I receive other content after downloading?', a: 'We will send the template link and occasional practical updates from Humanix Insights. You can unsubscribe at any time.' },
      ]}
    />
  );
}
