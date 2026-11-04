import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { ArrowRight, ArrowUpRight, BadgeCheck, Eye, Heart, TrendingUp, Globe, Users, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Humanix NGO Marketing Agency',
  description: 'We help African NGOs and nonprofits turn bold missions into visible, trusted, and funded movements.',
};

const principles = [
  {
    icon: Eye,
    title: 'Visibility',
    description: 'Helping organisations and their causes reach the audiences that matter — locally and internationally.',
  },
  {
    icon: BadgeCheck,
    title: 'Credibility',
    description: 'Communicating impact with clarity, consistency, and authenticity to strengthen stakeholder confidence.',
  },
  {
    icon: TrendingUp,
    title: 'Support',
    description: 'Turning awareness and engagement into meaningful opportunities for fundraising, partnerships, and sustainable growth.',
  },
];

const services = [
  {
    icon: Globe,
    title: 'Digital Marketing & Visibility',
    description: 'We help organisations establish a professional online presence, reach relevant audiences, and communicate their missions through strategic digital campaigns.',
  },
  {
    icon: Heart,
    title: 'Fundraising Campaigns',
    description: 'We develop compelling campaigns that communicate urgent needs, inspire supporters, and encourage contributions toward meaningful causes.',
  },
  {
    icon: Sparkles,
    title: 'Content & Impact Storytelling',
    description: 'We transform achievements, community experiences, and project outcomes into engaging content that helps supporters understand the impact of their contributions.',
  },
  {
    icon: BadgeCheck,
    title: 'Brand Positioning & Credibility',
    description: 'We help NGOs communicate who they are, what they stand for, and why their work matters — building confidence among donors, partners, and communities.',
  },
  {
    icon: Users,
    title: 'Digital Engagement',
    description: 'We help organisations strengthen relationships through social media, email campaigns, digital communications, and audience engagement strategies.',
  },
];

const stats = [
  { value: '120+', label: 'Campaigns launched' },
  { value: '$48M', label: 'Raised for partners' },
  { value: '14', label: 'African countries' },
  { value: '92%', label: 'Partner retention' },
];

export default function AboutPage() {
  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-cream">
        {/* dot texture */}
        <div className="absolute inset-0 texture-dots-light opacity-30 pointer-events-none" />
        {/* gold glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gold/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative">
          {/* Label */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-4 py-2 rounded-full border-2 border-lime/40 text-lime">
              <span className="w-2 h-2 rounded-full bg-gold inline-block" />
              Our Story
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-[72px] leading-[1.04] mt-6 text-center max-w-4xl mx-auto">
            Digital marketing that moves{' '}
            <span className="italic text-gold">missions forward.</span>
          </h1>
          <p className="text-center text-cream/65 text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
            We help African NGOs and nonprofits turn bold missions into visible, trusted, and funded movements.
          </p>

          {/* Hero image — large rounded, centrally placed */}
          <div className="mt-12 mx-auto max-w-4xl">
            <div className="rounded-[40px] overflow-hidden border-2 border-cream/15 shadow-[0_32px_80px_-12px_rgba(0,0,0,0.5)]">
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1400&q=85"
                alt="African NGO team collaborating on a digital campaign"
                width={1400}
                height={700}
                className="w-full h-[360px] sm:h-[500px] object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Curved bottom edge */}
        <div className="h-16 bg-cream" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
              <span className="w-2 h-2 rounded-full bg-coral inline-block" />
              Who we are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4">
              Built for Africa.<br />
              <span className="text-coral">Focused on impact.</span>
            </h2>
            <p className="mt-6 text-ink/65 leading-relaxed">
              At Humanix, we believe that organisations doing meaningful work deserve to be seen, heard, and supported. Across Africa, thousands of NGOs, nonprofits, and community-based organisations are creating real change — yet many struggle to communicate their impact and attract the funding they need.
            </p>
            <p className="mt-4 text-ink/65 leading-relaxed">
              We are a digital marketing agency built exclusively for African NGOs and nonprofits. We combine strategic communication, compelling storytelling, and fundraising campaigns to help mission-driven organisations strengthen their visibility, inspire trust, and connect with those who can support their work.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-ink text-cream font-extrabold border-2 border-ink shadow-[4px_4px_0_0_#DBA444] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              Work with us <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.value} className="bg-ink text-cream rounded-3xl p-7 border-2 border-ink">
                <p className="font-display text-4xl sm:text-5xl text-gold">{stat.value}</p>
                <p className="text-sm font-bold text-cream/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────── */}
      <section className="bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 texture-dots-light opacity-20 pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="bg-coal border border-cream/15 rounded-3xl p-8 sm:p-10">
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-gold">Our Mission</span>
              <h2 className="font-display text-2xl sm:text-3xl mt-4 leading-snug">
                To empower African NGOs with the marketing strategies they need to grow their influence.
              </h2>
              <p className="text-cream/60 mt-4 leading-relaxed">
                We provide mission-driven organisations with the digital presence, communication tools, and fundraising capabilities needed to mobilize support for lasting impact.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gold text-ink rounded-3xl p-8 sm:p-10 border-2 border-ink shadow-[6px_6px_0_0_rgba(3,70,54,0.4)]">
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-ink/60">Our Vision</span>
              <h2 className="font-display text-2xl sm:text-3xl mt-4 leading-snug">
                An Africa where every impactful mission has the visibility it deserves.
              </h2>
              <p className="text-ink/65 mt-4 leading-relaxed">
                A nonprofit sector where organisations are recognised not only for the causes they champion, but for the measurable difference they make in the communities they serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
            <span className="w-2 h-2 rounded-full bg-coral inline-block" />
            What we do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4">
            Turning meaningful work into{' '}
            <span className="text-coral">compelling stories.</span>
          </h2>
          <p className="mt-4 text-ink/65 leading-relaxed">
            Our services are designed around the communication and fundraising needs of NGOs and nonprofits.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isFeatured = idx === 0;
            return (
              <div
                key={service.title}
                className={`rounded-3xl p-8 border-2 ${isFeatured ? 'bg-ink text-cream border-ink lg:col-span-1 lg:row-span-1' : 'bg-white border-ink/10'}`}
              >
                <span className={`w-12 h-12 grid place-items-center rounded-xl ${isFeatured ? 'bg-gold' : 'bg-gold'}`}>
                  <Icon className={`w-6 h-6 ${isFeatured ? 'text-ink' : 'text-ink'}`} aria-hidden="true" />
                </span>
                <h3 className={`font-display text-xl mt-5 ${isFeatured ? 'text-cream' : 'text-ink'}`}>{service.title}</h3>
                <p className={`text-sm leading-relaxed mt-3 ${isFeatured ? 'text-cream/65' : 'text-ink/60'}`}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── THREE PRINCIPLES ─────────────────────────────────── */}
      <section className="border-y-2 border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
              <span className="w-2 h-2 rounded-full bg-coral inline-block" />
              Why Humanix
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4">
              Because impact deserves{' '}
              <span className="italic text-coral">attention.</span>
            </h2>
            <p className="mt-4 text-ink/65 leading-relaxed">
              Our approach is built around three principles that guide every campaign we run.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="relative bg-white rounded-3xl border-2 border-ink/10 p-8">
                  {/* Large outline number */}
                  <span
                    className="font-display text-[80px] leading-none text-transparent absolute top-4 right-6 select-none"
                    style={{ WebkitTextStroke: '1.5px rgba(3,70,54,0.08)' }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="w-12 h-12 grid place-items-center rounded-xl bg-gold relative z-10">
                    <Icon className="w-6 h-6 text-ink" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-2xl mt-5 relative z-10">{p.title}</h3>
                  <p className="text-sm text-ink/60 mt-3 leading-relaxed relative z-10">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AFRICA SECTION ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden border-2 border-ink shadow-[8px_8px_0_0_#034636]">
              <Image
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=900&q=85"
                alt="African community leaders working together"
                width={900}
                height={600}
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-gold text-ink rounded-2xl border-2 border-ink shadow-[4px_4px_0_0_#034636] px-6 py-4">
              <p className="font-display text-3xl leading-none">14</p>
              <p className="text-xs font-bold text-ink/65 mt-1">African countries</p>
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
              <span className="w-2 h-2 rounded-full bg-coral inline-block" />
              Built for Africa
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4">
              An Africa-focused perspective<br />on{' '}
              <span className="text-coral">digital marketing.</span>
            </h2>
            <p className="mt-6 text-ink/65 leading-relaxed">
              Africa's nonprofit sector is diverse, ambitious, and essential to the continent's development. From grassroots community initiatives to established NGOs, organisations across the continent need stronger ways to communicate their value and engage with the wider world.
            </p>
            <p className="mt-4 text-ink/65 leading-relaxed">
              Humanix brings an Africa-focused perspective to digital marketing, recognising the unique opportunities, challenges, and funding environments in which these organisations operate. Our ambition is to help African missions gain the recognition and support they need — locally and internationally.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-ink text-cream rounded-[32px] border-2 border-ink shadow-[8px_8px_0_0_#DBA444] p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 texture-dots-light opacity-20 pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-gold">Let's move your mission forward</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 leading-tight max-w-2xl mx-auto">
              Your organisation is already doing important work.
            </h2>
            <p className="text-cream/65 mt-4 max-w-xl mx-auto leading-relaxed">
              Let us help more people discover it, understand it, and support it. Make your mission visible. Build trust. Inspire support.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-ink font-extrabold border-2 border-gold hover:bg-cream hover:border-cream transition-colors"
            >
              Let&apos;s work together <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
