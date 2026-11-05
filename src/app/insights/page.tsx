'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { ArrowRight, ArrowUpRight, BookOpen, Download, Search, Clock, ChevronRight } from 'lucide-react';

/* ─── data ──────────────────────────────────────────────────── */

const categories = [
  { id: 'all', label: 'All Insights' },
  { id: 'digital', label: 'Digital Marketing' },
  { id: 'fundraising', label: 'Fundraising' },
  { id: 'storytelling', label: 'Storytelling' },
  { id: 'sector', label: 'NGO Sector' },
  { id: 'technology', label: 'Technology' },
  { id: 'case-studies', label: 'Case Studies' },
];

const featured = {
  category: 'Digital Marketing',
  categoryId: 'digital',
  title: 'Why African NGOs Need More Than Just a Website',
  summary: 'Having an online presence is only the beginning. Explore why visibility, trust, and supporter engagement require a full digital strategy — and how organisations across Africa are getting it right.',
  readTime: '6 min read',
  date: 'October 2026',
  href: '/insights/african-ngos-need-more-than-a-website',
  image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=85',
};

const articles = [
  {
    id: 1,
    category: 'Fundraising',
    categoryId: 'fundraising',
    title: '5 Digital Fundraising Strategies African NGOs Can Use in 2027',
    summary: 'Practical ways to reach supporters, communicate funding needs, and build sustainable fundraising campaigns.',
    readTime: '6 min read',
    date: 'November 2026',
    href: '/insights/digital-fundraising-strategies-2027',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
  },
  {
    id: 2,
    category: 'Storytelling',
    categoryId: 'storytelling',
    title: 'How to Tell Impact Stories That Build Donor Confidence',
    summary: 'Transform project activities and measurable results into stories that communicate meaningful change to the people who fund your mission.',
    readTime: '8 min read',
    date: 'October 2026',
    href: '/insights/impact-stories-donor-confidence',
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&q=80',
  },
  {
    id: 3,
    category: 'NGO Sector',
    categoryId: 'sector',
    title: 'What International Donors Look for in an NGO\'s Digital Presence',
    summary: 'A practical guide to communicating transparency, professionalism, and evidence of impact to international funding institutions.',
    readTime: '5 min read',
    date: 'September 2026',
    href: '/insights/what-donors-look-for-digital-presence',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80',
  },
  {
    id: 4,
    category: 'Digital Marketing',
    categoryId: 'digital',
    title: 'Google Ad Grants: The Underused $10,000/Month Tool Every African NGO Should Claim',
    summary: 'Most eligible NGOs never apply. Here is how to qualify, what to expect, and how to turn free ad spend into donor growth.',
    readTime: '5 min read',
    date: 'August 2026',
    href: '/insights/google-ad-grants-africa',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 5,
    category: 'Technology',
    categoryId: 'technology',
    title: 'AI Tools African NGOs Can Use Today Without a Tech Team',
    summary: 'From content creation to donor segmentation — practical AI tools that work for resource-constrained nonprofits in Africa.',
    readTime: '6 min read',
    date: 'July 2026',
    href: '/insights/ai-tools-for-african-ngos',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
  },
  {
    id: 6,
    category: 'Case Studies',
    categoryId: 'case-studies',
    title: 'How Water for All Grew Online Donations by 212% in One Campaign',
    summary: 'A breakdown of the strategy, creative, and digital channels behind one of our most successful fundraising campaigns in Kenya.',
    readTime: '9 min read',
    date: 'June 2026',
    href: '/insights/water-for-all-campaign-breakdown',
    image: '/images/water-for-all.avif',
  },
];

const resources = [
  {
    title: 'NGO Digital Visibility Checklist',
    description: '12-point checklist to audit and improve your organisation\'s online presence.',
    format: 'PDF · Free',
    href: '/resources/ngo-digital-visibility-checklist',
  },
  {
    title: 'Fundraising Campaign Planning Template',
    description: 'A structured template to plan, execute, and measure digital fundraising campaigns.',
    format: 'Google Doc · Free',
    href: '/resources/fundraising-campaign-planning-template',
  },
  {
    title: 'Impact Storytelling Framework',
    description: 'A step-by-step guide to turning project outcomes into donor-ready narratives.',
    format: 'PDF · Free',
    href: '/resources/impact-storytelling-framework',
  },
];

/* ─── component ─────────────────────────────────────────────── */

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? articles
    : articles.filter((a) => a.categoryId === activeCategory);

  return (
    <Layout>

      {/* ── BREADCRUMB + HERO ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0 texture-dots-light opacity-25 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-cream/45">
            <Link href="/" className="hover:text-cream transition-colors">Humanix</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-cream/80">Insights</span>
          </nav>

          {/* Heading */}
          <div className="mt-8 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-lime/40 text-lime">
              <BookOpen className="w-3 h-3" />
              Insights & Resources
            </span>
            <h1 className="font-display text-[44px] sm:text-6xl leading-[1.04] mt-5">
              Ideas to move{' '}
              <span className="italic text-gold">African missions</span>{' '}
              forward.
            </h1>
            <p className="mt-5 text-cream/65 text-lg leading-relaxed max-w-2xl">
              Practical insights on nonprofit marketing, fundraising, digital transformation, and impact communication — to help your organisation reach more people and grow its influence.
            </p>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="h-12 bg-cream" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </section>

      {/* ── FEATURED ARTICLE ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Link
          href={featured.href}
          className="group grid lg:grid-cols-2 gap-8 bg-white rounded-[28px] border-2 border-ink/10 overflow-hidden hover:border-ink hover:shadow-[6px_6px_0_0_#034636] transition-all"
        >
          {/* Image */}
          <div className="relative h-64 lg:h-auto overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Category pill over image */}
            <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 text-xs font-extrabold tracking-[0.15em] uppercase bg-gold text-ink px-3 py-1.5 rounded-full">
              {featured.category}
            </span>
          </div>
          {/* Copy */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <span className="text-xs font-extrabold tracking-[0.15em] uppercase text-ink/40">Featured Insight</span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.1] mt-3">{featured.title}</h2>
            <p className="text-ink/60 leading-relaxed mt-4">{featured.summary}</p>
            <div className="flex items-center gap-4 mt-6 text-xs font-semibold text-ink/45">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
              <span>{featured.date}</span>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold border-b-2 border-ink pb-0.5 w-fit group-hover:gap-3 transition-all">
              Read article <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* ── CATEGORY FILTER + ARTICLES ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 border-b-2 border-ink/10 pb-5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-ink text-cream'
                  : 'text-ink/60 hover:text-ink hover:bg-ink/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-ink/40 font-semibold">No articles in this category yet.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <Link
                key={article.id}
                href={article.href}
                className="group block bg-white rounded-3xl border-2 border-ink/10 overflow-hidden hover:border-ink hover:shadow-[4px_4px_0_0_#034636] transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-extrabold tracking-[0.15em] uppercase bg-gold text-ink px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                {/* Copy */}
                <div className="p-6">
                  <h3 className="font-display text-lg leading-snug">{article.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed mt-2 line-clamp-2">{article.summary}</p>
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-3 text-xs font-semibold text-ink/40">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                      <span>{article.date}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ── RESOURCES & GUIDES ───────────────────────────────── */}
      <section className="border-y-2 border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
                <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                Free resources
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4">
                Guides & templates<br />
                <span className="text-coral">you can use today.</span>
              </h2>
            </div>
            <p className="text-ink/60 max-w-xs leading-relaxed text-sm">
              Practical tools designed for African NGO teams. No sign-up required.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {resources.map((r) => (
              <a
                key={r.title}
                href={r.href}
                className="group flex flex-col justify-between bg-white rounded-3xl border-2 border-ink/10 p-7 hover:border-ink hover:shadow-[4px_4px_0_0_#034636] transition-all"
              >
                <div>
                  <span className="w-11 h-11 grid place-items-center rounded-xl bg-gold">
                    <Download className="w-5 h-5 text-ink" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg mt-5 leading-snug">{r.title}</h3>
                  <p className="text-sm text-ink/55 mt-2 leading-relaxed">{r.description}</p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-xs font-extrabold tracking-wide text-ink/40 uppercase">{r.format}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all">
                    Download <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="bg-gold rounded-[32px] border-2 border-ink shadow-[8px_8px_0_0_#034636] p-10 sm:p-14 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/25 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-ink/55">The Mission Memo</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight">
              Insights that help your mission grow.
            </h2>
            <p className="text-ink/65 mt-4 max-w-md">
              Practical nonprofit marketing, fundraising, and communications insights — delivered to your inbox once a month.
            </p>
          </div>
          <div className="relative">
            <form className="w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="you@yourorganisation.org"
                  className="flex-1 px-5 py-3.5 rounded-full text-sm font-semibold outline-none border-2 bg-white border-ink/15 text-ink placeholder:text-ink/35 focus:border-ink transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink text-cream text-sm font-extrabold hover:bg-coal transition-colors"
                >
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs mt-2 text-ink/45">One practical email a month. No spam, unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-ink text-cream rounded-[32px] border-2 border-ink p-10 sm:p-14 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden">
          <div className="absolute inset-0 texture-dots-light opacity-20 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-gold">Ready to turn insights into action?</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight">
              Let&apos;s move your mission forward.
            </h2>
            <p className="text-cream/60 mt-4 leading-relaxed">
              Humanix helps African NGOs and nonprofits strengthen visibility, communicate impact, and inspire support.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row lg:flex-col gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gold text-ink font-extrabold border-2 border-gold hover:bg-cream hover:border-cream transition-colors"
            >
              Book a strategy call <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent text-cream font-extrabold border-2 border-cream/30 hover:border-cream transition-colors"
            >
              Explore our services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
