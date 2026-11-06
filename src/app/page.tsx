'use client';

import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Sparkles,
  TrendingUp,
  Search,
  Megaphone,
  Share2,
  Mail,
  Leaf,
  BarChart2,
} from 'lucide-react';

/* ─── data ──────────────────────────────────────────────────── */

const marqueeServices = [
  // Marketing
  'Digital Marketing & Campaigns',
  'Fundraising Marketing',
  'Branding & Creative Design',
  'Content & Impact Storytelling',
  'Social Media Management',
  'Strategic Communications & PR',
  'Email Marketing',
  'Marketing Analytics',
  // Technology
  'MEAL & Programme Performance',
  'Field Operations',
  'Data Management & Analytics',
  'Workflow Automation',
  'Connected Systems & Integrations',
  'Fundraising & Resource Mobilisation',
  'WhatsApp Operations',
  'Organisational AI',
  'Digital Platforms & Websites',
  'Business Systems & ERP',
];

const services = [
  {
    icon: Megaphone,
    title: 'Fundraising Campaigns',
    description: 'Appeals that fill funding gaps.',
  },
  {
    icon: Share2,
    title: 'Social Media & Community',
    description: 'Communities that give, share, repeat.',
  },
  {
    icon: Search,
    title: 'SEO & Content Marketing',
    description: 'Get found. Get funded.',
  },
  {
    icon: Mail,
    title: 'Email & Donor Journeys',
    description: 'Donor journeys that keep on giving.',
  },
  {
    icon: Leaf,
    title: 'Brand Identity & Design',
    description: 'Look like the change you lead.',
  },
  {
    icon: BarChart2,
    title: 'Data & Analytics',
    description: 'Proof your board will love.',
  },
];

const impactStats = [
  { value: '120+', label: 'Campaigns launched' },
  { value: '$48M', label: 'Raised for partners' },
  { value: '14', label: 'African countries' },
  { value: '92%', label: 'Partner retention' },
];

const caseStudies = [
  {
    tag: 'Fundraising',
    title: 'Mir Hope Foundation',
    country: 'Kenya',
    metric: '90%',
    metricLabel: 'donations reach direct impact',
    href: 'https://mirhopefoundation.com',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80',
    imageAlt: 'Healthcare workers supporting a community in Kenya',
  },
  {
    tag: 'Content',
    title: 'PEAS',
    country: 'Uganda',
    metric: '250K+',
    metricLabel: 'young people supported',
    href: 'https://www.peas.org.uk',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    imageAlt: 'Students in an African school classroom',
  },
  {
    tag: 'Brand',
    title: 'Green Belt Alliance',
    country: 'Kenya',
    metric: '$2.1M',
    metricLabel: 'raised in 60 days',
    href: '/work/green-belt',
    image: '/images/green-belt.avif',
    imageAlt: 'Volunteers planting trees in an African reforestation project',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Discover',
    description: 'Audience research, digital audits and donor interviews across your markets.',
  },
  {
    num: '02',
    title: 'Design',
    description: 'Strategy, messaging and creative built with your team - never handed down.',
  },
  {
    num: '03',
    title: 'Deploy',
    description: 'Campaigns launched and managed across social, search, email and mobile money.',
  },
  {
    num: '04',
    title: 'Deepen',
    description: 'Testing, optimisation and board-ready reporting that compounds results.',
  },
];

const insightPosts = [
  {
    tag: 'Digital Marketing',
    title: 'Why African NGOs Need More Than Just a Website',
    readTime: '6 min read',
    href: '/insights/african-ngos-need-more-than-a-website',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    imageAlt: 'African NGO team collaborating on a digital campaign',
  },
  {
    tag: 'Fundraising',
    title: '5 Digital Fundraising Strategies African NGOs Can Use in 2027',
    readTime: '7 min read',
    href: '/insights/digital-fundraising-strategies-2027',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
    imageAlt: 'African community members gathered at a fundraising event',
  },
  {
    tag: 'Storytelling',
    title: 'How to Tell Impact Stories That Build Donor Confidence',
    readTime: '7 min read',
    href: '/insights/impact-stories-donor-confidence',
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&q=80',
    imageAlt: 'Person writing a story on a laptop at a desk',
  },
];

/* ─── component ─────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <Layout>

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* texture dot pattern */}
        <div className="absolute inset-0 texture-dots opacity-60 pointer-events-none" />
        {/* gold radial glow top-right */}
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-gold/40 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-14 grid lg:grid-cols-[55%_45%] gap-12 items-center relative">

          {/* Left */}
          <div className="min-w-0">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.18em] uppercase bg-ink text-cream px-4 py-2 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
                NGO Marketing Agency · Africa
              </span>
            </div>
            <h1 className="font-display font-semibold text-[44px] sm:text-6xl lg:text-[69px] leading-[1.04] mt-6">
              Digital marketing that moves{' '}
              <span className="italic text-coral">missions&nbsp;forward.</span>
            </h1>
            <p className="text-base text-ink/65 leading-relaxed mt-4 max-w-xl">
              Humanix is the marketing agency built exclusively for African NGOs and nonprofits. We
              turn bold missions into funded movements - through fundraising campaigns, content and
              digital that donors cannot ignore.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-ink text-cream font-extrabold border-2 border-ink shadow-[4px_4px_0_0_#DBA444] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                Start a project <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/70 font-extrabold border-2 border-ink/20 hover:border-ink transition-colors"
              >
                See our work
              </Link>
            </div>
            {/* Stats row */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
              {[
                { val: '120+', label: 'campaigns launched' },
                { val: '$48M', label: 'raised for partners' },
                { val: '14', label: 'African countries' },
              ].map((s) => (
                <div key={s.val} className="flex items-center gap-2.5">
                  <BadgeCheck className="w-5 h-5 text-ink" aria-hidden="true" />
                  <p className="text-sm font-bold">
                    <span className="font-display text-lg">{s.val}</span>{' '}
                    <span className="text-ink/55 font-semibold">{s.label}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image + floating cards */}
          <div className="relative isolate">
            <div className="rounded-[28px] overflow-hidden border-2 border-ink shadow-[8px_8px_0_0_#034636] rotate-1">
              <Image
                src="https://mirhopefoundation.com/uploads/1ac9d6933bcf5ca1cf8f725d.jpeg"
                alt="African community volunteers celebrating a fundraising campaign"
                width={560}
                height={520}
                className="w-full h-[420px] sm:h-[520px] object-cover"
                priority
              />
            </div>
            {/* Floating: +212% */}
            <div className="absolute -left-3 sm:-left-8 top-8 bg-white rounded-2xl border-2 border-ink shadow-[4px_4px_0_0_#034636] px-5 py-4 flex items-center gap-3">
              <span className="w-11 h-11 grid place-items-center rounded-xl bg-gold">
                <TrendingUp className="w-6 h-6 text-white" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-xl leading-none text-coral">+212%</p>
                <p className="text-xs font-bold text-coral mt-1">online donations</p>
              </div>
            </div>
            {/* Floating: case study */}
            <div className="absolute -right-2 sm:-right-6 bottom-10 bg-ink text-cream rounded-2xl border-2 border-ink shadow-[4px_4px_0_0_#DBA444] px-5 py-4">
              <p className="text-xs font-bold text-lime tracking-wide uppercase">Featured case study</p>
              <p className="font-display text-base mt-1">Mir Hope Foundation · Kenya</p>
              <Link
                href="https://mirhopefoundation.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-bold text-cream/80 hover:text-lime mt-1"
              >
                View website <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MARQUEE TICKER ───────────────────────────────── */}
      <div className="bg-ink text-cream py-5 overflow-hidden border-y-2 border-ink">
        <div className="flex w-max animate-marquee">
          {[...marqueeServices, ...marqueeServices].map((service, i) => (
            <span
              key={i}
              className="flex items-center gap-3 px-6 font-display text-sm sm:text-base tracking-wide whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* ── 3. SERVICES ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
              <span className="w-2 h-2 rounded-full bg-coral inline-block" />
              What we do
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4 text-ink">
              Everything your mission needs to{' '}
              <span className="text-coral">grow.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink/65">
              Six specialist services, one obsession: measurable impact for African change-makers.
            </p>
          </div>
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-extrabold text-sm border-b-2 border-ink pb-1 hover:gap-3 transition-all"
            >
              All services <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-7 rounded-3xl border border-ink/10 bg-white"
              >
                <span className="w-12 h-12 grid place-items-center rounded-xl bg-gold">
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-bold mt-5">{service.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed mt-2">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-bold mt-5 hover:gap-2 transition-all"
                >
                  Explore <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 4. WORK / CASE STUDIES ──────────────────────────── */}
      <section className="border-y-2 border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
                <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                Proof, not promises
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4 text-ink">
                Work that moved{' '}
                <span className="bg-gold px-2 rounded-lg">missions.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink/65">
                Real campaigns, real numbers, real change - from Nairobi to Lagos to Cape Town.
              </p>
            </div>
            <div>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-extrabold text-sm border-b-2 border-ink pb-1 hover:gap-3 transition-all"
              >
                All case studies <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => {
              const isExternal = cs.href.startsWith('http');
              return (
              <Link
                key={cs.title}
                href={cs.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className="group block rounded-3xl border-2 border-ink/10 bg-white overflow-hidden hover:border-ink hover:shadow-[4px_4px_0_0_#034636] transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-extrabold tracking-[0.18em] uppercase text-ink/50">
                    {cs.tag}
                  </span>
                  <h3 className="font-display text-xl mt-2">
                    {cs.title} · {cs.country}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-4">
                    <span className="font-display text-3xl text-coral">{cs.metric}</span>
                    <span className="text-sm text-ink/55 font-semibold">{cs.metricLabel}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-bold mt-4 group-hover:gap-2 transition-all">
                    View case study <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. IMPACT STATS ─────────────────────────────────── */}
      <section className="bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 texture-dots-light opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 grid lg:grid-cols-2 gap-14 relative">

          {/* Left: stats */}
          <div>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-lime/60 text-lime">
                <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                Our impact
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4 text-cream">
                Numbers that mean{' '}
                <span className="text-lime">something.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-cream/70">
                Behind every metric is a classroom built, a clinic funded, a forest restored.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-10">
              {impactStats.map((stat) => (
                <div key={stat.value} className="bg-coal border border-cream/15 rounded-3xl p-6">
                  <p className="font-display text-4xl sm:text-5xl text-lime">{stat.value}</p>
                  <p className="text-sm font-bold text-cream/60 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: testimonial */}
          <div className="flex flex-col justify-center bg-coal/60 border border-cream/15 rounded-3xl p-8 sm:p-10">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-cream/50 mb-6">
              Partners say it best
            </p>
            <blockquote className="flex flex-col gap-6">
              <p className="font-display text-xl sm:text-2xl leading-snug text-cream">
                &ldquo;Humanix didn&apos;t just run our campaign — they taught our team how to move
                donors. Our online giving is up 212% and it&apos;s sustainable.&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-lime grid place-items-center font-display text-ink text-lg font-bold">
                  A
                </span>
                <div>
                  <p className="font-bold text-cream">Amara Diallo</p>
                  <p className="text-sm text-cream/55">Executive Director, Water for All · Kenya</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── 6. PROCESS STEPS ────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
            <span className="w-2 h-2 rounded-full bg-coral inline-block" />
            How we work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4 text-ink">
            From first call to{' '}
            <span className="text-coral">funded.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink/65">
            A proven four-step process, refined across 120+ campaigns with African nonprofits.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {processSteps.map((step, idx) => (
            <div key={step.num} className="relative bg-white rounded-3xl border-2 border-ink/12 p-7 h-full">
              <span
                className="font-display text-5xl text-transparent"
                style={{ WebkitTextStroke: '2px rgb(3, 70, 54)' }}
              >
                {step.num}
              </span>
              <h3 className="font-display text-xl mt-3">{step.title}</h3>
              <p className="text-sm text-ink/60 mt-2 leading-relaxed">{step.description}</p>
              {idx < processSteps.length - 1 && (
                <ArrowRight
                  className="hidden lg:block w-5 h-5 absolute top-1/2 -right-4 text-ink/30"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold text-ink font-extrabold border-2 border-ink shadow-[4px_4px_0_0_#034636] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            Book a free strategy call <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── 7. INSIGHTS ─────────────────────────────────────── */}
      <section className="border-y-2 border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
                <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                Insights
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4 text-ink">
                Learn to move your{' '}
                <span className="bg-gold px-2 rounded-lg">own mission.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink/65">
                Practical playbooks on fundraising, content and digital - written for African NGO teams.
              </p>
            </div>
            <div>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 font-extrabold text-sm border-b-2 border-ink pb-1 hover:gap-3 transition-all"
              >
                All insights <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group block bg-white rounded-3xl border-2 border-ink/10 overflow-hidden hover:border-ink hover:shadow-[4px_4px_0_0_#034636] transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <span className="text-xs font-extrabold tracking-[0.18em] uppercase text-ink/50">
                    {post.tag}
                  </span>
                  <h3 className="font-display text-lg mt-3 leading-snug">{post.title}</h3>
                  <p className="text-xs text-ink/40 font-semibold mt-4">{post.readTime}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold mt-4 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. NEWSLETTER ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="bg-gold rounded-[32px] border-2 border-ink shadow-[8px_8px_0_0_#034636] p-8 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/30 rounded-full blur-3xl pointer-events-none" />
          {/* Copy */}
          <div className="relative">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-ink/60">
              The Mission Memo
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight">
              One email a month. Missions moved daily.
            </h2>
            <p className="text-ink/65 mt-4 max-w-md">
              Fundraising tactics, campaign breakdowns and donor trends for African nonprofits -
              read by 8,000+ changemakers.
            </p>
          </div>
          {/* Form */}
          <div className="relative">
            <form className="w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="you@yourorganisation.org"
                  className="flex-1 px-5 py-3.5 rounded-full text-sm font-semibold outline-none border-2 transition-colors bg-white border-ink/15 text-ink placeholder:text-ink/35 focus:border-ink"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink text-cream text-sm font-extrabold hover:bg-coal transition-colors"
                >
                  Subscribe <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
              <p className="text-xs mt-2 text-ink/45">
                One practical email a month. No spam, unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </section>

    </Layout>
  );
}
