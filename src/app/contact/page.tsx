'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import {
  ArrowRight, ArrowUpRight, ChevronRight, Check,
  MapPin, Mail, Phone, MessageCircle,
} from 'lucide-react';

/* ─── FAQ data ────────────────────────────────────────────── */
const faqs = [
  {
    q: 'What types of organizations does Humanix work with?',
    a: 'We primarily support NGOs, nonprofits, humanitarian organizations, development institutions, and other mission-driven organizations seeking to improve their communications, fundraising, and digital operations.',
  },
  {
    q: 'Can Humanix support both marketing and technology projects?',
    a: 'Yes. Humanix brings together marketing and communications expertise with specialist technology and digital transformation capabilities, allowing organizations to address both external engagement and internal operational needs.',
  },
  {
    q: 'Do you work with organizations outside your home country?',
    a: 'Our services are designed to support organizations across Africa, including those working across multiple countries and regions.',
  },
  {
    q: 'Can we discuss our needs before committing to a project?',
    a: 'Absolutely. An initial conversation helps us understand your goals, challenges, and priorities before recommending an appropriate approach.',
  },
  {
    q: 'Do you support ongoing projects and long-term engagements?',
    a: 'Yes. Depending on organizational needs and project scope, engagements may involve individual campaigns, defined implementation projects, or ongoing support arrangements.',
  },
];

const services = [
  'Digital Marketing & Campaigns',
  'Fundraising Marketing & Donor Engagement',
  'Branding & Creative Design',
  'Content & Impact Storytelling',
  'Social Media Management',
  'Strategic Communications & PR',
  'MEAL & Programme Performance',
  'Data Management & Analytics',
  'Workflow & Process Automation',
  'Organisational AI',
  'Digital Platforms & Websites',
  'Other / Not sure yet',
];

/* ─── component ───────────────────────────────────────────── */

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0 texture-dots-light opacity-20 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-cream/45">
            <Link href="/" className="hover:text-cream transition-colors">Humanix</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-cream/80">Contact</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-gold/40 text-gold">
                <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                Get in touch
              </span>
              <h1 className="font-display font-semibold text-[44px] sm:text-6xl leading-[1.04] mt-5">
                Let&apos;s move your<br />
                <span className="italic text-gold">mission forward.</span>
              </h1>
              <p className="text-cream/65 mt-5 leading-relaxed max-w-lg">
                Great partnerships begin with a conversation. Whether you&apos;re looking to strengthen visibility, launch a fundraising campaign, communicate your impact, or improve digital operations — we&apos;d love to hear from you.
              </p>
            </div>
            {/* Contact details */}
            <div className="flex flex-col gap-4 lg:pb-2">
              {[
                { Icon: MapPin, label: 'Riverside Drive, Nairobi, Kenya', href: null },
                { Icon: Mail, label: 'hello@humanix.africa', href: 'mailto:hello@humanix.africa' },
                { Icon: Phone, label: '+254 20 555 0134', href: 'tel:+254205550134' },
                { Icon: MessageCircle, label: 'WhatsApp available', href: 'https://wa.me/254205550134' },
              ].map(({ Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="w-10 h-10 grid place-items-center rounded-xl bg-gold/20 border border-gold/30 shrink-0">
                    <Icon className="w-4 h-4 text-gold" />
                  </span>
                  {href ? (
                    <a href={href} className="text-sm font-semibold text-cream/80 hover:text-gold transition-colors">{label}</a>
                  ) : (
                    <span className="text-sm font-semibold text-cream/80">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-12 bg-cream" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </section>

      {/* ── FORM + SIDEBAR ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_380px] gap-14">

          {/* Form */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
              <span className="w-2 h-2 rounded-full bg-coral inline-block" />
              Send us a message
            </span>
            <p className="mt-3 text-ink/55 text-sm leading-relaxed max-w-lg">
              Tell us a little about your organization and what you&apos;d like to achieve. We&apos;ll review your inquiry and get back to you as soon as possible.
            </p>

            {submitted ? (
              <div className="mt-10 bg-ink text-cream rounded-3xl p-10 text-center border-2 border-ink shadow-[6px_6px_0_0_#DBA444]">
                <span className="w-16 h-16 grid place-items-center rounded-full bg-gold mx-auto">
                  <Check className="w-8 h-8 text-ink" />
                </span>
                <h2 className="font-display text-2xl mt-5">Message received!</h2>
                <p className="text-cream/60 mt-2 leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. Our team will review your inquiry and get back to you within 1–2 business days.
                </p>
                <Link
                  href="/"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink font-extrabold text-sm hover:bg-cream transition-colors"
                >
                  Back to homepage <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-6">
                {/* Full name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-extrabold tracking-wide text-ink/50 uppercase">Full Name <span className="text-coral">*</span></label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Mwangi"
                    className="px-4 py-3 rounded-xl border-2 border-ink/10 bg-white text-sm font-semibold text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
                {/* Work email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-extrabold tracking-wide text-ink/50 uppercase">Work Email <span className="text-coral">*</span></label>
                  <input
                    required
                    type="email"
                    placeholder="jane@organisation.org"
                    className="px-4 py-3 rounded-xl border-2 border-ink/10 bg-white text-sm font-semibold text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
                {/* Organisation */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-extrabold tracking-wide text-ink/50 uppercase">Organisation Name <span className="text-coral">*</span></label>
                  <input
                    required
                    type="text"
                    placeholder="Your NGO or nonprofit"
                    className="px-4 py-3 rounded-xl border-2 border-ink/10 bg-white text-sm font-semibold text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
                {/* Country */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-extrabold tracking-wide text-ink/50 uppercase">Country</label>
                  <input
                    type="text"
                    placeholder="Kenya, Nigeria, South Africa…"
                    className="px-4 py-3 rounded-xl border-2 border-ink/10 bg-white text-sm font-semibold text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
                {/* Service of interest */}
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="text-xs font-extrabold tracking-wide text-ink/50 uppercase">Service of Interest</label>
                  <select
                    className="px-4 py-3 rounded-xl border-2 border-ink/10 bg-white text-sm font-semibold text-ink focus:outline-none focus:border-ink transition-colors appearance-none"
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                {/* Message */}
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="text-xs font-extrabold tracking-wide text-ink/50 uppercase">Your Message <span className="text-coral">*</span></label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your organization and what you'd like to achieve…"
                    className="px-4 py-3 rounded-xl border-2 border-ink/10 bg-white text-sm font-semibold text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink transition-colors resize-none"
                  />
                </div>
                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-cream font-extrabold border-2 border-ink shadow-[4px_4px_0_0_#DBA444] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  >
                    Send Inquiry <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-ink/40 mt-3">We&apos;ll review your inquiry and get back to you as soon as possible.</p>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            {/* Partnership card */}
            <div className="bg-ink text-cream rounded-3xl p-7 border-2 border-ink shadow-[4px_4px_0_0_#DBA444]">
              <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-gold">Partnership opportunities</p>
              <h3 className="font-display text-xl mt-2 leading-snug">Better outcomes through collaboration.</h3>
              <p className="text-cream/60 text-sm mt-3 leading-relaxed">
                We welcome opportunities to collaborate with NGOs, development institutions, and implementation partners on joint initiatives, specialist engagements, and long-term digital partnerships.
              </p>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-ink text-sm font-extrabold hover:bg-cream transition-colors"
              >
                Discuss a partnership <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Services quick links */}
            <div className="bg-white rounded-3xl border-2 border-ink/10 p-7">
              <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-ink/40 mb-4">Explore our services</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'Marketing & Communications', href: '/services#marketing' },
                  { label: 'Technology & Digital Transformation', href: '/services#technology' },
                  { label: 'Our Work & Case Studies', href: '/work' },
                  { label: 'Insights & Resources', href: '/insights' },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center justify-between text-sm font-semibold text-ink/60 hover:text-ink py-2 border-b border-ink/5 last:border-0 transition-colors group"
                  >
                    {l.label}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-2xl p-5">
              <span className="w-2 h-2 rounded-full bg-gold mt-1.5 shrink-0" />
              <p className="text-sm text-ink/65 leading-relaxed">
                <strong className="text-ink">Typical response time: 1–2 business days.</strong> For urgent matters, reach us directly at{' '}
                <a href="mailto:hello@humanix.africa" className="underline text-ink hover:text-coral transition-colors">
                  hello@humanix.africa
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="border-t-2 border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-[320px_1fr] gap-12">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
                <span className="w-2 h-2 rounded-full bg-coral inline-block" />
                FAQs
              </span>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl leading-tight mt-4">
                Frequently asked questions.
              </h2>
              <p className="text-ink/50 text-sm mt-3 leading-relaxed">
                Everything you need to know before getting in touch.
              </p>
            </div>
            <div className="divide-y divide-ink/10">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-4 text-left text-sm font-bold text-ink hover:text-coral transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <p className="pb-4 text-sm text-ink/60 leading-relaxed">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-ink text-cream rounded-[32px] border-2 border-ink shadow-[8px_8px_0_0_#DBA444] p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 texture-dots-light opacity-20 pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-gold">Let&apos;s build something meaningful</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl mt-4 max-w-2xl mx-auto leading-tight">
              Your mission matters. Let&apos;s help it go further.
            </h2>
            <p className="text-cream/60 mt-4 max-w-xl mx-auto leading-relaxed">
              From stronger visibility and donor engagement to better systems and operational performance, we&apos;re here to help turn your ambitions into action.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-ink font-extrabold border-2 border-gold hover:bg-cream hover:border-cream transition-colors"
            >
              Start a conversation <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </Layout>
  );
}
