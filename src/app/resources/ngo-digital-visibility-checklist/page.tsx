import LeadMagnetLayout from '@/components/LeadMagnetLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free NGO Digital Visibility Checklist | Humanix',
  description: 'A free 12-point checklist to audit and improve your NGO\'s online presence. Designed for African nonprofits. No sign-up required.',
};

export default function Page() {
  return (
    <LeadMagnetLayout
      category="Digital Marketing"
      headline="Audit your NGO's digital presence in 30 minutes."
      subheadline="Know exactly where you stand."
      description="A free 12-point checklist that helps African NGOs and nonprofits identify gaps in their online visibility, credibility, and donor-facing communications — and prioritize what to fix first."
      benefits={[
        { text: 'Free 12-point checklist' },
        { text: 'Covers SEO, website & social' },
        { text: 'Designed for African NGOs' },
        { text: 'Actionable next steps' },
      ]}
      formTitle="Get your free checklist"
      formSubtitle="Delivered to your inbox as a PDF. No payment details needed."
      ctaLabel="Email me the free checklist"
      format="PDF checklist"
      previewTitle="A practical audit. A clear place to start."
      previewDescription="The checklist walks you through 12 areas of digital visibility — from your website structure and search presence to social media and donor communications. Each point includes a yes/no check and a recommended action if the answer is no."
      previewNote="This is the actual checklist used in Humanix digital audits with African NGO clients."
      mockPages={[
        {
          label: 'Section 1 — Website Foundations',
          items: [
            'Mission is clear on homepage',
            'Mobile-responsive design',
            'Fast loading on 3G connections',
            'Contact page with accurate info',
          ],
        },
        {
          label: 'Section 2 — Search Visibility',
          items: [
            'Google Business / Maps listing',
            'Page titles include location & sector',
            'Programme pages indexed by Google',
          ],
        },
        {
          label: 'Section 3 — Credibility Signals',
          items: [
            'Annual report or impact summary published',
            'Leadership profiles visible',
            'Safeguarding policy accessible',
          ],
        },
      ]}
      faqs={[
        { q: 'Is this checklist really free?', a: 'Yes. No payment, no credit card, no hidden subscription. Just your email address so we can send it to you.' },
        { q: 'Who is this checklist designed for?', a: 'NGOs, nonprofits, and community-based organisations across Africa — particularly those looking to improve their online presence without a large marketing budget.' },
        { q: 'Do I need technical knowledge to use it?', a: 'No. The checklist is designed for programme managers, communications officers, and executive directors — not developers. Each item is written in plain language with a clear action step.' },
        { q: 'How long will the audit take?', a: 'Most organisations complete it in 20–30 minutes. Some items may require input from a web developer or IT contact, but the majority can be checked without technical access.' },
        { q: 'Will Humanix follow up with sales emails?', a: 'We will send you the checklist and occasional practical updates from the Humanix Insights newsletter. You can unsubscribe at any time.' },
      ]}
    />
  );
}
