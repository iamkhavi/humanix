'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { ArrowRight, ChevronRight, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';

const caseStudies = [
  {
    slug: 'digital-fundraising-campaign',
    division: 'Marketing',
    category: 'Fundraising & Digital Campaigns',
    title: 'Connecting Community Causes With Supporters',
    description: 'How a structured digital campaign turns community needs into clear fundraising opportunities — with campaign strategy, donor engagement, and measurable outcomes.',
    tags: ['Campaign Strategy', 'Donor Engagement'],
    image: 'https://mirhopefoundation.com/uploads/18542e213590e51253fb4917.jpeg',
    imageAlt: 'Mir Hope Foundation community programme in Kenya',
    org: 'Mir Hope Foundation',
    orgHref: 'https://mirhopefoundation.com',
    filter: 'marketing',
  },
  {
    slug: 'meal-data-systems',
    division: 'Technology',
    category: 'MEAL & Data Systems',
    title: 'From Fragmented Field Data to Actionable Insights',
    description: 'Bringing field data collection, programme monitoring, and reporting into a connected workflow that gives programme managers visibility and evidence.',
    tags: ['MEAL', 'Reporting', 'Dashboards'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt: 'Data dashboard and analytics on screen',
    org: 'PEAS UK',
    orgHref: 'https://www.peas.org.uk',
    filter: 'technology',
  },
  {
    slug: 'impact-storytelling-communications',
    division: 'Marketing',
    category: 'Impact Storytelling',
    title: 'Turning Programme Results Into Stories That Inspire',
    description: 'Transforming technical reports and project achievements into accessible, donor-facing communications that build credibility and inspire continued support.',
    tags: ['Content', 'Storytelling', 'Communications'],
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&q=80',
    imageAlt: 'NGO team creating impact communications',
    org: 'Illustrative',
    orgHref: null,
    filter: 'marketing',
  },
  {
    slug: 'field-reporting-automation',
    division: 'Technology',
    category: 'WhatsApp & Automation',
    title: 'Simplifying Field Reporting Through WhatsApp',
    description: 'How familiar messaging tools can improve field updates, data collection, and coordination for distributed programme teams.',
    tags: ['WhatsApp', 'Automation', 'Field Operations'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    imageAlt: 'Field worker using mobile phone for reporting',
    org: 'Illustrative',
    orgHref: null,
    filter: 'technology',
  },
];

const filters = [
  { id: 'all', label: 'All Studies' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'technology', label: 'Technology' },
];

export default function CaseStudiesPage() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? caseStudies : caseStudies.filter((c) => c.filter === active);

  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0 texture-dots-light opacity-20 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-cream/45">
            <Link href="/" className="hover:text-cream transition-colors">Humanix</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-cream/80">Case Studies</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-gold/40 text-gold">
              <span className="w-2 h-2 rounded-full bg-coral inline-block" />
              Proof of impact
            </span>
            <h1 className="font-display font-semibold text-[44px] sm:text-6xl leading-[1.04] mt-5">
              Real challenges.<br />
              <span className="italic text-gold">Practical solutions.</span>
            </h1>
            <p className="text-cream/65 mt-5 text-lg leading-relaxed max-w-2xl">
              Explore how strategic communications, creative campaigns, and technology help mission-driven organizations solve challenges and achieve measurable outcomes.
            </p>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-8 mt-10">
            {[
              { val: '120+', label: 'Campaigns delivered' },
              { val: '$48M', label: 'Raised for partners' },
              { val: '14', label: 'African countries' },
              { val: '2', label: 'Service divisions' },
            ].map((s) => (
              <div key={s.val}>
                <p className="font-display text-3xl text-gold">{s.val}</p>
                <p className="text-xs font-bold text-cream/45 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-12 bg-cream" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </section>

      {/* ── FILTERS + GRID ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 border-b-2 border-ink/10 pb-5 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                active === f.id ? 'bg-ink text-cream' : 'text-ink/55 hover:text-ink hover:bg-ink/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {filtered.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group block bg-white rounded-3xl border-2 border-ink/10 overflow-hidden hover:border-ink hover:shadow-[6px_6px_0_0_#034636] transition-all"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={cs.image}
                  alt={cs.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Division badge */}
                <span className={`absolute top-4 left-4 text-xs font-extrabold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full ${
                  cs.filter === 'marketing' ? 'bg-gold text-ink' : 'bg-ink text-cream'
                }`}>
                  {cs.division}
                </span>
              </div>

              {/* Copy */}
              <div className="p-7">
                <p className="text-xs font-extrabold tracking-[0.15em] uppercase text-ink/40">{cs.category}</p>
                <h2 className="font-display text-xl mt-2 leading-snug">{cs.title}</h2>
                <p className="text-sm text-ink/55 leading-relaxed mt-3">{cs.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {cs.tags.map((t) => (
                    <span key={t} className="text-xs font-bold text-ink/50 border border-ink/10 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-5">
                  {cs.orgHref ? (
                    <span className="text-xs font-semibold text-ink/40">{cs.org}</span>
                  ) : (
                    <span className="text-xs font-semibold text-ink/30 italic">Illustrative concept</span>
                  )}
                  <span className="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all">
                    Read case study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── DIVISION OVERVIEW ────────────────────────────────── */}
      <section className="border-t-2 border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-ink text-cream rounded-3xl p-8 border-2 border-ink">
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-gold">Division 01</span>
              <h3 className="font-display text-2xl mt-3 leading-snug">Marketing & Communications</h3>
              <p className="text-cream/60 text-sm mt-3 leading-relaxed">
                Digital fundraising, awareness campaigns, branding, impact storytelling, and donor engagement for African NGOs and nonprofits.
              </p>
              <Link href="/services#marketing" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold hover:gap-3 transition-all">
                Explore marketing services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-3xl p-8 border-2 border-ink/10">
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-ink/40">Division 02</span>
              <h3 className="font-display text-2xl mt-3 leading-snug">Technology & Digital Transformation</h3>
              <p className="text-ink/60 text-sm mt-3 leading-relaxed">
                MEAL, field operations, data systems, automation, WhatsApp workflows, organisational AI, and digital platforms.
              </p>
              <Link href="/services#technology" className="mt-5 inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all">
                Explore technology services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-gold rounded-[28px] border-2 border-ink shadow-[8px_8px_0_0_#034636] p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-ink/55">Your mission, next</p>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl mt-1 leading-tight max-w-lg">
              Ready to explore what Humanix can do for your organisation?
            </h2>
          </div>
          <Link
            href="/contact"
            className="relative shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-cream font-extrabold border-2 border-ink hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-sm"
          >
            Start a conversation <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </Layout>
  );
}
