import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { ArrowRight, ArrowUpRight, ChevronRight, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Humanix NGO Marketing Agency',
  description: 'Creative work. Meaningful missions. Lasting impact. Explore how Humanix helps African NGOs through digital marketing, storytelling, and strategic campaigns.',
};

/* ─── data ──────────────────────────────────────────────────── */

const featuredProject = {
  num: '01',
  tags: ['Digital Experience', 'Nonprofit Marketing', 'Campaign Innovation'],
  title: 'Beneficiary',
  description: 'An interactive digital marketing project exploring how technology and creative experiences can support mission-driven communication for African nonprofits.',
  note: 'Project details and outcomes to be added following review of the live experience.',
  href: 'https://benefitiary-marketing-kohl.vercel.app/',
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=85',
};

const projects = [
  {
    num: '02',
    tags: ['Fundraising Strategy', 'Campaign Design', 'Donor Engagement'],
    title: 'Digital Fundraising Campaigns',
    description: 'We create digital fundraising experiences designed to connect meaningful causes with potential supporters — from compelling campaign landing pages to donation journeys and supporter communications.',
    deliverables: [
      'Fundraising campaign strategy and messaging',
      'Donation-focused landing pages',
      'Email and social fundraising campaigns',
      'Donor engagement content',
      'Campaign performance measurement',
    ],
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&q=85',
    accent: 'bg-gold',
  },
  {
    num: '03',
    tags: ['Content Creation', 'Visual Storytelling', 'Impact Communications'],
    title: 'Impact Storytelling & Creative Campaigns',
    description: 'Behind every successful nonprofit initiative are people, communities, and stories that deserve recognition. We help organisations transform achievements into compelling digital narratives.',
    deliverables: [
      'Beneficiary and community impact stories',
      'Campaign videos and visual content',
      'Social media storytelling',
      'Project success stories',
      'Digital impact reports',
    ],
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=900&q=85',
    accent: 'bg-coral',
  },
  {
    num: '04',
    tags: ['Brand Strategy', 'Website Experiences', 'Digital Visibility'],
    title: 'NGO Brand Identity & Digital Presence',
    description: 'A strong digital identity helps organisations communicate professionalism, transparency, and purpose. We create cohesive digital experiences that make nonprofits easier to discover and support.',
    deliverables: [
      'NGO website design and development',
      'Brand identity and messaging',
      'Search engine optimisation',
      'Campaign landing pages',
      'Digital communication materials',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85',
    accent: 'bg-lime',
  },
  {
    num: '05',
    tags: ['Audience Engagement', 'Digital Advertising', 'Community Building'],
    title: 'Social Media & Awareness Campaigns',
    description: 'We help organisations bring important issues into public conversations through targeted awareness campaigns. Our campaigns are designed to turn awareness into participation.',
    deliverables: [
      'Social media campaign strategies',
      'Digital advertising creatives',
      'Awareness campaign development',
      'Audience engagement initiatives',
      'Campaign analytics and reporting',
    ],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=85',
    accent: 'bg-gold',
  },
  {
    num: '06',
    tags: ['Donor Relations', 'Email Marketing', 'Supporter Engagement'],
    title: 'Donor Communications & Engagement',
    description: 'Building donor relationships requires consistent communication and meaningful engagement. We help nonprofits create experiences that keep supporters informed, involved, and connected.',
    deliverables: [
      'Donor newsletters',
      'Email marketing campaigns',
      'Supporter engagement journeys',
      'Fundraising communications',
      'Donor-facing impact content',
    ],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&q=85',
    accent: 'bg-coral',
  },
];

const steps = [
  {
    num: '01',
    title: 'Understand the Mission',
    description: "We begin by understanding your organisation's goals, audiences, challenges, and desired outcomes.",
  },
  {
    num: '02',
    title: 'Shape the Story',
    description: 'We identify the messages, experiences, and creative approaches that will connect your mission with the people who matter.',
  },
  {
    num: '03',
    title: 'Bring It to Life',
    description: 'Through digital campaigns, content, websites, and strategic communications, we transform ideas into experiences designed to inspire action.',
  },
  {
    num: '04',
    title: 'Measure What Matters',
    description: 'We evaluate campaign reach, engagement, conversions, and other relevant indicators to understand performance and guide improvements.',
  },
];

/* ─── page ───────────────────────────────────────────────────── */

export default function WorkPage() {
  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0 texture-dots-light opacity-25 pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-cream/45">
            <Link href="/" className="hover:text-cream transition-colors">Humanix</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-cream/80">Our Work</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-gold/40 text-gold">
                <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                Our Work
              </span>
              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[64px] leading-[1.04] mt-5">
                Creative work.<br />
                <span className="italic text-gold">Meaningful missions.</span>
              </h1>
            </div>
            <div className="lg:pb-3">
              <p className="text-cream/65 text-lg leading-relaxed">
                We bring nonprofit missions to life through digital marketing, compelling storytelling, strategic campaigns, and innovative experiences. At Humanix, every project begins with a mission worth amplifying.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink font-extrabold border-2 border-gold hover:bg-cream hover:border-cream transition-colors text-sm"
              >
                Start a project <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="h-12 bg-cream" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </section>

      {/* ── FEATURED PROJECT ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-display text-xs text-ink/30 tracking-[0.2em] uppercase">Featured Work</span>
          <span className="flex-1 h-px bg-ink/10" />
        </div>

        <div className="grid lg:grid-cols-2 gap-0 rounded-[28px] border-2 border-ink overflow-hidden shadow-[8px_8px_0_0_#034636]">
          {/* Image */}
          <div className="relative h-72 lg:h-auto min-h-[400px] overflow-hidden">
            <Image
              src={featuredProject.image}
              alt={featuredProject.title}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent lg:from-transparent lg:to-ink/40" />
            {/* Number watermark */}
            <span
              className="absolute bottom-6 left-6 font-display text-[80px] leading-none text-white/10 select-none"
              aria-hidden="true"
            >
              {featuredProject.num}
            </span>
          </div>

          {/* Copy */}
          <div className="bg-ink text-cream p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-5">
              {featuredProject.tags.map((t) => (
                <span key={t} className="text-xs font-extrabold tracking-[0.15em] uppercase bg-gold/20 text-gold px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight">{featuredProject.title}</h2>
            <p className="text-cream/65 mt-4 leading-relaxed">{featuredProject.description}</p>
            <p className="text-cream/40 text-xs mt-4 italic">{featuredProject.note}</p>
            <a
              href={featuredProject.href}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-ink font-extrabold border-2 border-gold hover:bg-cream hover:border-cream transition-colors self-start"
            >
              Explore project <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── PROJECT LIST ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-display text-xs text-ink/30 tracking-[0.2em] uppercase">What we deliver</span>
          <span className="flex-1 h-px bg-ink/10" />
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.num}
                className="group grid lg:grid-cols-[1fr_1.2fr] gap-0 rounded-3xl border-2 border-ink/10 overflow-hidden hover:border-ink hover:shadow-[4px_4px_0_0_#034636] transition-all bg-white"
              >
                {/* Image — alternates side */}
                <div className={`relative h-56 lg:h-auto min-h-[280px] overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Accent colour strip */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${project.accent}`} />
                  {/* Number */}
                  <span
                    className="absolute top-5 left-5 font-display text-5xl leading-none text-white/20 select-none"
                    aria-hidden="true"
                  >
                    {project.num}
                  </span>
                </div>

                {/* Copy */}
                <div className={`p-8 sm:p-10 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((t) => (
                      <span key={t} className="text-xs font-extrabold tracking-[0.15em] uppercase text-ink/40 px-2.5 py-1 rounded-full border border-ink/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl leading-tight">{project.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed mt-3">{project.description}</p>

                  {/* Deliverables */}
                  <ul className="mt-5 flex flex-col gap-2">
                    {project.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-ink/65">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${project.accent}`} />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold border-b-2 border-ink pb-0.5 w-fit group-hover:gap-3 transition-all"
                  >
                    Start this project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── OUR APPROACH ─────────────────────────────────────── */}
      <section className="bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 texture-dots-light opacity-20 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-gold/40 text-gold">
              <span className="w-2 h-2 rounded-full bg-coral inline-block" />
              Our approach
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4">
              From mission to{' '}
              <span className="text-gold italic">measurable impact.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative bg-coal border border-cream/10 rounded-3xl p-7">
                {/* Connector arrow — desktop only */}
                {idx < steps.length - 1 && (
                  <ArrowRight
                    className="hidden lg:block w-5 h-5 absolute top-1/2 -right-4 text-cream/20 -translate-y-1/2"
                    aria-hidden="true"
                  />
                )}
                <span
                  className="font-display text-5xl text-transparent select-none"
                  style={{ WebkitTextStroke: '2px rgba(219,164,68,0.4)' }}
                >
                  {step.num}
                </span>
                <h3 className="font-display text-xl mt-3 text-cream">{step.title}</h3>
                <p className="text-sm text-cream/55 mt-2 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative bg-gold rounded-[32px] border-2 border-ink shadow-[8px_8px_0_0_#034636] overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center p-10 sm:p-14 lg:p-16">
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-ink/55">Let's create something meaningful</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight">
                Your mission deserves more than attention.
              </h2>
              <p className="text-ink/65 mt-4 leading-relaxed max-w-md">
                Whether you're launching a fundraising campaign, communicating project impact, or strengthening your digital presence, Humanix is ready to help you move forward.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-cream font-extrabold border-2 border-ink shadow-[4px_4px_0_0_rgba(3,70,54,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                Start a project <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent font-extrabold border-2 border-ink/30 hover:border-ink transition-colors"
              >
                View our services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
