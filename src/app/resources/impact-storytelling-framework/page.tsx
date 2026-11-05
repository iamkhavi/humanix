import LeadMagnetLayout from '@/components/LeadMagnetLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Impact Storytelling Framework for NGOs | Humanix',
  description: 'A step-by-step guide to turning project outcomes into donor-ready narratives. Designed for African NGOs and nonprofits.',
};

export default function Page() {
  return (
    <LeadMagnetLayout
      category="Impact Storytelling"
      headline="Turn your programme results into stories donors actually read."
      subheadline="A step-by-step framework."
      description="A free practical guide that shows African NGOs how to transform monitoring data, community experiences, and project milestones into compelling impact stories that strengthen donor confidence and organizational credibility."
      benefits={[
        { text: 'Free PDF guide' },
        { text: 'Story structure + examples' },
        { text: 'Ethical storytelling principles' },
        { text: 'Audience adaptation guide' },
      ]}
      formTitle="Get your free framework"
      formSubtitle="A PDF guide delivered to your inbox. No payment details needed."
      ctaLabel="Email me the free framework"
      format="PDF guide"
      previewTitle="A practical framework. Stories that build trust."
      previewDescription="The framework covers six elements of a strong impact story: the problem, the response, the people, the evidence, the challenges, and what comes next. Each element includes practical guidance on what to include, how to verify it, and how to adapt it for different audiences including donors, government partners, and communities."
      previewNote="This framework reflects the storytelling approach Humanix applies across content, campaign, and reporting projects with African NGO clients."
      mockPages={[
        {
          label: 'Part 1 — Story Structure',
          items: [
            'The six-element story framework',
            'Starting with the problem',
            'Evidence vs. output distinction',
          ],
        },
        {
          label: 'Part 2 — Ethical Principles',
          items: [
            'Consent and dignity guidelines',
            'Avoiding poverty narratives',
            'Community voice and agency',
          ],
        },
        {
          label: 'Part 3 — Audience Adaptation',
          items: [
            'Institutional donor version',
            'Individual supporter version',
            'Community-facing version',
          ],
        },
      ]}
      faqs={[
        { q: 'Who is this framework designed for?', a: 'Communications officers, programme managers, and executive directors at African NGOs and nonprofits who want to improve how they communicate their work to donors and stakeholders.' },
        { q: 'Do I need a communications background to use it?', a: 'No. The framework is designed for people who understand their programmes but are not professional writers or marketers. It provides a clear structure and practical prompts.' },
        { q: 'Does the framework cover ethical storytelling?', a: 'Yes. A dedicated section covers consent, dignity, avoiding exploitative narratives, and ensuring that community members are represented with agency and respect.' },
        { q: 'Can I use this for donor reports as well as campaigns?', a: 'Yes. The audience adaptation section shows how to apply the same core story to different formats — including donor reports, website content, social media, and annual publications.' },
        { q: 'Will I receive follow-up emails after downloading?', a: 'We will send you the framework and occasional practical insights from Humanix. You can unsubscribe at any time.' },
      ]}
    />
  );
}
