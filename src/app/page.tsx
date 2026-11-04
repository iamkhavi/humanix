'use client';

import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { SectionHeader } from '@/components/ui';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Sparkles,
  TrendingUp,
  HeartHandshake,
  Globe,
  Megaphone,
  Palette,
  BarChart3,
  Users,
  FileText,
} from 'lucide-react';

const partners = [
  'Water for All',
  'Bright Futures Trust',
  'MamaCare Foundation',
  'Green Belt Alliance',
  'TechSprouts',
  'Harvest Hope',
  'Climate Voices Africa',
  'Ujamaa Arts Collective',
];

const services = [
  {
    icon: Megaphone,
    title: 'Fundraising Campaigns',
    description:
      'End-to-end digital fundraising campaigns that move donors to action — from strategy to creative to optimisation.',
    color: 'bg-lime',
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description:
      'Stories, reports and content ecosystems that build trust, educate supporters and keep your mission top of mind.',
    color: 'bg-coral/15',
  },
  {
    icon: Globe,
    title: 'Digital Advertising',
    description:
      'Paid media that finds the right donors at the right moment — Google Grants, Meta, and programmatic across Africa.',
    color: 'bg-gold/20',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description:
      'Visual identity and brand strategy that communicates credibility, purpose and urgency to donors and partners.',
    color: 'bg-lime/60',
  },
  {
    icon: Users,
    title: 'Donor Engagement',
    description:
      'Email journeys, stewardship programs and community building that turn one-time donors into long-term champions.',
    color: 'bg-coral/15',
  },
  {
    icon: BarChart3,
    title: 'Impact Reporting',
    description:
      'Annual reports, dashboards and impact narratives that show donors exactly what their money achieved.',
    color: 'bg-gold/20',
  },
];

const stats = [
  { value: '120+', label: 'campaigns launched' },
  { value: '$48M', label: 'raised for partners' },
  { value: '14', label: 'African countries' },
];

export default function HomePage() {
  const doubledPartners = [...partners, ...partners];

  return (
    <Layout>
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 texture-dots opacity-60 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-lime/50 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-14 grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.18em] uppercase bg-ink text-cream px-4 py-2 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
              NGO Marketing Agency · Africa
            </span>
            <h1 className="font-display text-[44px] sm:text-6xl lg:text-[72px] leading-[1.04] mt-6">
              Digital marketing that moves{' '}
              <span className="italic text-coral">missions&nbsp;forward.</span>
            </h1>
            <p className="text-lg text-ink/65 leading-relaxed mt-6 max-w-xl">
              Humanix is the marketing agency built exclusively for African NGOs and nonprofits. We
              turn bold missions into funded movements - through fundraising campaigns, content and
              digital that donors cannot ignore.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
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
            {/* Stats */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10">
              {stats.map((stat) => (
                <div key={stat.value} className="flex items-center gap-2.5">
                  <BadgeCheck className="w-5 h-5 text-ink" aria-hidden="true" />
                  <p className="text-sm font-bold">
                    <span className="font-display text-lg">{stat.value}</span>{' '}
                    <span className="text-ink/55 font-semibold">{stat.label}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero image with floating cards */}
          <div className="relative">
            <div className="rounded-[28px] overflow-hidden border-2 border-ink shadow-[8px_8px_0_0_#034636] rotate-1">
              <Image
                src="/images/hero-community.jpg"
                alt="African community volunteers celebrating a fundraising campaign"
                width={640}
                height={520}
                className="w-full h-[420px] sm:h-[520px] object-cover"
                priority
              />
            </div>
            {/* Floating card: +212% */}
            <div className="absolute -left-3 sm:-left-8 top-8 bg-white rounded-2xl border-2 border-ink shadow-[4px_4px_0_0_#034636] px-5 py-4 flex items-center gap-3">
              <span className="w-11 h-11 grid place-items-center rounded-xl bg-lime">
                <TrendingUp className="w-6 h-6 text-ink" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-xl leading-none">+212%</p>
                <p className="text-xs font-bold text-ink/55 mt-1">online donations</p>
              </div>
            </div>
            {/* Floating card: Featured case study */}
            <div className="absolute -right-2 sm:-right-6 bottom-10 bg-ink text-cream rounded-2xl border-2 border-ink shadow-[4px_4px_0_0_#DBA444] px-5 py-4">
              <p className="text-xs font-bold text-lime tracking-wide uppercase">Featured case study</p>
              <p className="font-display text-base mt-1">Water for All · Kenya</p>
              <Link
                href="/work/water-for-all-flow"
                className="inline-flex items-center gap-1 text-sm font-bold text-cream/80 hover:text-lime mt-1"
              >
                View results <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <div className="bg-ink text-cream py-5 overflow-hidden border-y-2 border-ink">
        <div className="flex w-max animate-marquee">
          {doubledPartners.map((partner, i) => (
            <span
              key={i}
              className="flex items-center gap-3 px-6 font-display text-sm sm:text-base tracking-wide whitespace-nowrap"
            >
              <HeartHandshake className="w-4 h-4 text-lime shrink-0" aria-hidden="true" />
              {partner}
            </span>
          ))}
        </div>
      </div>

      {/* Services section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader
            label="What we do"
            labelColor="bg-coral"
            title={
              <>
                Everything your mission needs to{' '}
                <span className="text-coral">grow.</span>
              </>
            }
            description="Six specialist services, one obsession: measurable impact for African change-makers."
          />
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
                className="group p-7 rounded-3xl border-2 border-ink/10 bg-white/60 hover:border-ink hover:shadow-[4px_4px_0_0_#034636] transition-all"
              >
                <span className={`w-12 h-12 grid place-items-center rounded-xl ${service.color} border-2 border-ink/10`}>
                  <Icon className="w-6 h-6 text-ink" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl mt-5">{service.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed mt-3">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-bold mt-5 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Work/CTA section */}
      <section className="bg-ink text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-cream/20 text-cream/60">
              <span className="w-2 h-2 rounded-full bg-lime inline-block" />
              Our work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4">
              Missions we&apos;ve helped{' '}
              <span className="italic text-lime">move forward.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-cream/65">
              From water access in Kenya to maternal health in Nigeria — here are some of the
              African NGOs we&apos;ve partnered with to grow their impact.
            </p>
            <Link
              href="/work"
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-lime text-ink font-extrabold border-2 border-lime shadow-[4px_4px_0_0_#C8F04A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              View all case studies <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
