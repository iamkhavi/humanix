import Link from 'next/link';
import Layout from '@/components/Layout';
import {
  ArrowRight, ArrowUpRight, ChevronRight,
  Megaphone, Palette, Sparkles, Share2, Heart, Radio, Mail, BarChart2,
  Activity, Map, Database, Zap, Link2, DollarSign, MessageCircle, Bot, Globe, Briefcase,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Humanix NGO Marketing Agency',
  description: 'Two disciplines. One mission. Greater impact. Strategic marketing and technology services built exclusively for African NGOs and nonprofits.',
};

/* ─── data ───────────────────────────────────────────────────── */

const marketingServices = [
  {
    id: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing & Campaigns',
    description: 'Reach the right audiences through targeted digital marketing strategies, SEO, paid advertising, and integrated campaigns that turn awareness into meaningful engagement.',
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Creative Design',
    description: 'Build a recognizable and credible organisational identity through brand strategy, visual design, messaging, and creative assets that reflect your mission and values.',
  },
  {
    id: 'content',
    icon: Sparkles,
    title: 'Content & Impact Storytelling',
    description: 'Transform programme achievements, beneficiary experiences, and milestones into compelling stories, videos, and digital content that inspire confidence and action.',
  },
  {
    id: 'social-media',
    icon: Share2,
    title: 'Social Media Management',
    description: 'Build and engage your community through social media strategy, content planning, campaign execution, audience engagement, and performance monitoring.',
  },
  {
    id: 'fundraising-marketing',
    icon: Heart,
    title: 'Fundraising Marketing & Donor Engagement',
    description: 'Develop compelling fundraising appeals, digital giving campaigns, donor communications, and supporter engagement journeys that turn interest into sustained support.',
  },
  {
    id: 'pr',
    icon: Radio,
    title: 'Strategic Communications & PR',
    description: "Strengthen your organisation's voice through communication strategies, media relations, public awareness initiatives, stakeholder messaging, and reputation management.",
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Email Marketing & Supporter Engagement',
    description: 'Keep donors, partners, and communities informed through newsletters, targeted email campaigns, audience segmentation, and personalised communication journeys.',
  },
  {
    id: 'analytics',
    icon: BarChart2,
    title: 'Marketing Analytics & Optimisation',
    description: 'Understand what works through campaign tracking, audience insights, conversion analysis, and performance reporting that supports smarter marketing decisions.',
  },
];

const techServices = [
  {
    id: 'meal',
    icon: Activity,
    title: 'MEAL & Programme Performance',
    description: 'Improve the flow from programme planning to monitoring, evaluation, accountability, learning, and reporting — including indicator tracking, dashboards, and results frameworks.',
  },
  {
    id: 'field',
    icon: Map,
    title: 'Field Operations',
    description: 'Strengthen field coordination through digital data collection, activity tracking, field team reporting, location-aware workflows, and operational visibility across distributed programmes.',
  },
  {
    id: 'data',
    icon: Database,
    title: 'Data Management, Analytics & Reporting',
    description: 'Move from scattered information to usable management intelligence through reporting systems, dashboards, and decision-support tools.',
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Workflow & Process Automation',
    description: 'Reduce repetitive work across forms, approvals, notifications, and reporting. We design automation workflows that improve consistency and free teams for higher-value work.',
  },
  {
    id: 'integrations',
    icon: Link2,
    title: 'Connected Systems & Integrations',
    description: 'Connect organisational applications, databases, cloud platforms, and third-party services to reduce duplication and improve information flow across your tools.',
  },
  {
    id: 'fundraising-tech',
    icon: DollarSign,
    title: 'Fundraising & Resource Mobilisation Systems',
    description: 'Support grant opportunity research, grant development workflows, donor databases, fundraising platforms, donation integrations, and resource mobilisation reporting.',
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    title: 'WhatsApp Operations & Automation',
    description: 'Turn a familiar channel into a structured operational interface for field reporting, beneficiary engagement, service requests, notifications, and organisational communication.',
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'Organisational AI',
    description: 'Apply artificial intelligence with appropriate control and governance — knowledge assistants, document processing, operational automation, and responsible AI integration.',
  },
  {
    id: 'digital-platforms',
    icon: Globe,
    title: 'Digital Services & Platforms',
    description: 'Design and develop websites, portals, digital service platforms, beneficiary-facing applications, and custom organisational tools.',
  },
  {
    id: 'enterprise',
    icon: Briefcase,
    title: 'Business Systems & Enterprise Applications',
    description: 'Implementation, configuration, integration, and improvement of CRM, ERP, finance, procurement, inventory, and organisational management systems.',
  },
];

const steps = [
  { num: '01', title: 'Discover', description: 'We understand your mission, organisational challenges, existing systems, stakeholders, and desired results.' },
  { num: '02', title: 'Design', description: 'We develop a practical approach that aligns communication, processes, technology, and available resources with your priorities.' },
  { num: '03', title: 'Implement', description: 'We deliver campaigns, digital experiences, system integrations, and operational improvements through the expertise best suited to each engagement.' },
  { num: '04', title: 'Improve', description: 'We measure performance, support adoption, and continuously improve the work based on evidence and organisational feedback.' },
];

/* ─── sub-components ─────────────────────────────────────────── */

function ServiceCard({ service, accent }: { service: typeof marketingServices[0]; accent: string }) {
  const Icon = service.icon;
  return (
    <div id={service.id} className="group bg-white rounded-3xl border-2 border-ink/10 p-7 hover:border-ink hover:shadow-[4px_4px_0_0_#034636] transition-all">
      <span className={`w-12 h-12 grid place-items-center rounded-xl ${accent}`}>
        <Icon className="w-6 h-6 text-ink" aria-hidden="true" />
      </span>
      <h3 className="font-display text-xl mt-5 leading-snug">{service.title}</h3>
      <p className="text-sm text-ink/60 leading-relaxed mt-3">{service.description}</p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-1 text-sm font-bold mt-5 hover:gap-2 transition-all"
      >
        Enquire <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}

/* ─── page ───────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0 texture-dots-light opacity-25 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-coral/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-cream/45">
            <Link href="/" className="hover:text-cream transition-colors">Humanix</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-cream/80">Services</span>
          </nav>

          <div className="mt-8 max-w-4xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-gold/40 text-gold">
              <span className="w-2 h-2 rounded-full bg-coral inline-block" />
              Two disciplines. One mission.
            </span>
            <h1 className="font-display text-[44px] sm:text-6xl lg:text-[64px] leading-[1.04] mt-5">
              Services built for<br />
              <span className="italic text-gold">African NGOs.</span>
            </h1>
            <p className="mt-5 text-cream/65 text-lg leading-relaxed max-w-2xl">
              From communicating your mission to strengthening the systems behind it, Humanix brings together strategic marketing and technology expertise to help organisations grow, operate effectively, and deliver measurable impact.
            </p>
          </div>

          {/* Two discipline pills */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#marketing" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold text-ink font-extrabold border-2 border-gold hover:bg-cream hover:border-cream transition-colors text-sm">
              Marketing & Communications <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#technology" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent text-cream font-extrabold border-2 border-cream/30 hover:border-cream transition-colors text-sm">
              Technology & Digital Transformation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="h-14 bg-cream" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </section>

      {/* ── MARKETING SERVICES ───────────────────────────────── */}
      <section id="marketing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
              <span className="w-2 h-2 rounded-full bg-coral inline-block" />
              Marketing & Communications
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4">
              Make your mission{' '}
              <span className="text-coral">seen, heard,<br />and supported.</span>
            </h2>
          </div>
          <p className="text-ink/60 leading-relaxed">
            We help NGOs, nonprofits, and mission-driven organisations build visibility, communicate their impact, engage supporters, and attract opportunities through purposeful marketing and strategic communications.
          </p>
        </div>

        {/* 8 service cards — first one featured full-width */}
        <div className="space-y-6">
          {/* Featured first card */}
          <div
            id={marketingServices[0].id}
            className="grid lg:grid-cols-2 gap-0 rounded-3xl border-2 border-ink overflow-hidden shadow-[6px_6px_0_0_#034636] bg-ink text-cream"
          >
            <div className="p-10 sm:p-12 flex flex-col justify-center">
              <span className="w-14 h-14 grid place-items-center rounded-2xl bg-gold">
                <Megaphone className="w-7 h-7 text-ink" />
              </span>
              <h3 className="font-display text-2xl sm:text-3xl mt-6 leading-snug">{marketingServices[0].title}</h3>
              <p className="text-cream/65 mt-4 leading-relaxed">{marketingServices[0].description}</p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink font-extrabold border-2 border-gold hover:bg-cream hover:border-cream transition-colors self-start text-sm"
              >
                Enquire <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-coal/60 p-10 sm:p-12 flex flex-col justify-center border-l border-cream/10">
              <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-gold mb-6">What this includes</p>
              <ul className="flex flex-col gap-3">
                {['Search engine optimisation (SEO)', 'Google Ads & Google Ad Grants', 'Social & programmatic advertising', 'Campaign strategy & execution', 'Audience research & targeting', 'Performance tracking & reporting'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-cream/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Remaining 7 in a 3-col grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {marketingServices.slice(1).map((service) => (
              <ServiceCard key={service.id} service={service} accent="bg-gold" />
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t-2 border-ink/10 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-cream px-4">
            <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-ink/30">+</span>
          </div>
        </div>
      </div>

      {/* ── TECHNOLOGY SERVICES ──────────────────────────────── */}
      <section id="technology" className="bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 texture-dots-light opacity-20 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-coral/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative">
          {/* Section header */}
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-gold/40 text-gold">
                <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                Technology & Digital Transformation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4 text-cream">
                Better systems.<br />
                <span className="text-gold italic">Stronger outcomes.</span>
              </h2>
            </div>
            <p className="text-cream/60 leading-relaxed">
              We help organisations improve how they collect information, manage programmes, coordinate teams, mobilise resources, and deliver services — with solutions that work within your existing environment.
            </p>
          </div>

          {/* 10 tech services — featured first + 9 grid */}
          <div className="space-y-5">
            {/* Featured MEAL */}
            <div
              id={techServices[0].id}
              className="grid lg:grid-cols-2 gap-0 rounded-3xl border-2 border-gold overflow-hidden"
            >
              <div className="bg-coal p-10 sm:p-12 flex flex-col justify-center">
                <span className="w-14 h-14 grid place-items-center rounded-2xl bg-gold">
                  <Activity className="w-7 h-7 text-ink" />
                </span>
                <h3 className="font-display text-2xl sm:text-3xl mt-6 leading-snug text-cream">{techServices[0].title}</h3>
                <p className="text-cream/65 mt-4 leading-relaxed">{techServices[0].description}</p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink font-extrabold border-2 border-gold hover:bg-cream hover:border-cream transition-colors self-start text-sm"
                >
                  Enquire <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-coal/40 p-10 sm:p-12 flex flex-col justify-center border-l border-cream/10">
                <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-gold mb-6">What this includes</p>
                <ul className="flex flex-col gap-3">
                  {['Indicator & results framework design', 'Programme dashboards & monitoring', 'Data collection tools & surveys', 'Evaluation design & analysis', 'Accountability & learning systems', 'Board-ready impact reporting'].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-cream/70">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Remaining 9 in a 3-col grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {techServices.slice(1).map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="group bg-coal border-2 border-cream/10 rounded-3xl p-7 hover:border-gold hover:shadow-[4px_4px_0_0_rgba(219,164,68,0.3)] transition-all"
                  >
                    <span className="w-12 h-12 grid place-items-center rounded-xl bg-gold/20 border border-gold/30">
                      <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-xl mt-5 leading-snug text-cream">{service.title}</h3>
                    <p className="text-sm text-cream/55 leading-relaxed mt-3">{service.description}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-sm font-bold mt-5 text-gold hover:gap-2 transition-all"
                    >
                      Enquire <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
            <span className="w-2 h-2 rounded-full bg-coral inline-block" />
            How we work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4">
            We start with your outcomes,{' '}
            <span className="text-coral italic">not the tools.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => (
            <div key={step.num} className="relative bg-white rounded-3xl border-2 border-ink/10 p-7">
              {idx < steps.length - 1 && (
                <ArrowRight
                  className="hidden lg:block w-5 h-5 absolute top-10 -right-4 text-ink/20"
                  aria-hidden="true"
                />
              )}
              <span
                className="font-display text-5xl text-transparent select-none"
                style={{ WebkitTextStroke: '2px rgb(3,70,54)' }}
              >
                {step.num}
              </span>
              <h3 className="font-display text-xl mt-3">{step.title}</h3>
              <p className="text-sm text-ink/55 mt-2 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONNECTED EXPERTISE ──────────────────────────────── */}
      <section className="border-y-2 border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
                <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                One mission. Connected expertise.
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4">
                Marketing <span className="text-coral">+</span> Technology<br />
                <span className="italic">= greater impact.</span>
              </h2>
              <p className="text-ink/65 leading-relaxed mt-6">
                Marketing helps your organisation communicate its value to the world. Technology helps your organisation deliver that value more effectively. Together, these capabilities help mission-driven organisations strengthen visibility, credibility, operational performance, and long-term sustainability.
              </p>
            </div>
            {/* Two discipline cards */}
            <div className="flex flex-col gap-5">
              <div className="bg-ink text-cream rounded-3xl p-7 border-2 border-ink">
                <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-gold mb-3">Marketing & Communications</p>
                <p className="text-cream/65 text-sm leading-relaxed">Visibility, credibility, donor engagement, fundraising, and strategic communications — helping the world discover and support your mission.</p>
                <a href="#marketing" className="inline-flex items-center gap-1 text-sm font-bold text-gold mt-4 hover:gap-2 transition-all">
                  Explore services <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="bg-white rounded-3xl p-7 border-2 border-ink/10">
                <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-ink/40 mb-3">Technology & Digital Transformation</p>
                <p className="text-ink/60 text-sm leading-relaxed">MEAL systems, data management, automation, AI, and digital platforms — helping your organisation operate with greater precision and impact.</p>
                <a href="#technology" className="inline-flex items-center gap-1 text-sm font-bold mt-4 hover:gap-2 transition-all">
                  Explore services <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-ink text-cream rounded-[32px] border-2 border-ink shadow-[8px_8px_0_0_#DBA444] p-10 sm:p-14 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 texture-dots-light opacity-20 pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-gold">Let's move your mission forward</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight">
                Whether your priority is reach, delivery, or fundraising — we can help.
              </h2>
              <p className="text-cream/60 mt-4 leading-relaxed max-w-lg">
                Let us help you identify the right approach for your organisation's next step.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#marketing"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gold text-ink font-extrabold border-2 border-gold hover:bg-cream hover:border-cream transition-colors"
              >
                Explore marketing services <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#technology"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent text-cream font-extrabold border-2 border-cream/30 hover:border-cream transition-colors"
              >
                Explore technology services <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-cream text-ink font-extrabold border-2 border-cream hover:bg-gold hover:border-gold transition-colors"
              >
                Talk to our team <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
