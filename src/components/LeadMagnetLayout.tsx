'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from './Layout';
import { ArrowRight, Check, ChevronDown, ChevronRight, Download } from 'lucide-react';

interface Benefit {
  text: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface LeadMagnetLayoutProps {
  category: string;
  headline: string;
  subheadline: string;
  description: string;
  benefits: Benefit[];
  formTitle: string;
  formSubtitle: string;
  ctaLabel: string;
  previewTitle: string;
  previewDescription: string;
  previewNote: string;
  faqs: FaqItem[];
  mockPages: { label: string; items: string[] }[];
  format: string;
}

function MockDocument({ pages }: { pages: { label: string; items: string[] }[] }) {
  return (
    <div className="bg-ink text-cream rounded-2xl overflow-hidden shadow-[6px_6px_0_0_rgba(219,164,68,0.4)] w-full max-w-[280px] text-[9px] leading-tight">
      {/* doc header */}
      <div className="bg-gold px-4 py-3 flex items-center gap-2">
        <div className="w-5 h-5 rounded bg-ink grid place-items-center shrink-0">
          <span className="font-display text-gold text-[10px] font-bold">h</span>
        </div>
        <span className="text-ink font-extrabold tracking-wide text-[8px] uppercase">Humanix · Free Guide</span>
      </div>
      {/* pages */}
      <div className="p-4 flex flex-col gap-3">
        {pages.map((page) => (
          <div key={page.label}>
            <p className="text-gold font-extrabold text-[8px] uppercase tracking-wider mb-1.5">{page.label}</p>
            {page.items.map((item) => (
              <div key={item} className="flex items-start gap-1.5 mb-1">
                <span className="mt-0.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                <p className="text-cream/70">{item}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="px-4 pb-3 text-cream/30 text-[7px]">humanix.africa · Free resource</div>
    </div>
  );
}

function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col divide-y divide-ink/10">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 py-4 text-left text-sm font-bold text-ink hover:text-coral transition-colors"
          >
            <span>{faq.q}</span>
            {open === i ? <ChevronDown className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
          </button>
          {open === i && (
            <p className="pb-4 text-sm text-ink/60 leading-relaxed">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function LeadMagnetLayout({
  category,
  headline,
  subheadline,
  description,
  benefits,
  formTitle,
  formSubtitle,
  ctaLabel,
  previewTitle,
  previewDescription,
  previewNote,
  faqs,
  mockPages,
  format,
}: LeadMagnetLayoutProps) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      {/* ── HERO: left copy + right form ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_440px] gap-12 items-start">

          {/* Left */}
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-ink/40 mb-8">
              <Link href="/" className="hover:text-ink transition-colors">Humanix</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/insights" className="hover:text-ink transition-colors">Insights</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-ink/70">Free Resource</span>
            </nav>

            {/* Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[2px] bg-gold inline-block" />
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-ink/50">
                Free Guide · {category}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-semibold text-[38px] sm:text-5xl leading-[1.08]">
              {headline}
            </h1>
            <p className="font-display italic text-coral text-2xl sm:text-3xl mt-2 leading-snug">
              {subheadline}
            </p>
            <p className="text-ink/60 mt-5 leading-relaxed max-w-lg">{description}</p>

            {/* Benefit pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              {benefits.map((b) => (
                <span key={b.text} className="inline-flex items-center gap-1.5 text-xs font-bold text-ink/70 bg-white border border-ink/10 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                  {b.text}
                </span>
              ))}
            </div>

            {/* Mock document preview */}
            <div className="mt-10 flex items-end gap-6">
              <MockDocument pages={mockPages} />
              <p className="text-xs text-ink/35 italic pb-1">A look inside the free guide ↗</p>
            </div>
          </div>

          {/* Right: form card */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-ink text-cream rounded-3xl p-8 border-2 border-ink shadow-[6px_6px_0_0_#DBA444]">
              {submitted ? (
                <div className="text-center py-8">
                  <span className="w-16 h-16 grid place-items-center rounded-full bg-gold mx-auto">
                    <Check className="w-8 h-8 text-ink" />
                  </span>
                  <h2 className="font-display text-2xl mt-4">Check your inbox!</h2>
                  <p className="text-cream/60 mt-2 text-sm leading-relaxed">
                    We've sent the {format} to your email. It should arrive within a few minutes.
                  </p>
                  <Link
                    href="/insights"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink font-extrabold text-sm hover:bg-cream transition-colors"
                  >
                    Back to Insights <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-xl leading-snug">{formTitle}</h2>
                  <p className="text-cream/55 text-sm mt-1">{formSubtitle}</p>

                  <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-extrabold tracking-wide text-gold uppercase">First name</label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your first name"
                        className="bg-transparent border-b border-cream/20 pb-2 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-extrabold tracking-wide text-gold uppercase">Email address</label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@yourorganisation.org"
                        className="bg-transparent border-b border-cream/20 pb-2 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-extrabold tracking-wide text-gold uppercase">Organisation name</label>
                      <input
                        type="text"
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        placeholder="Your NGO or nonprofit"
                        className="bg-transparent border-b border-cream/20 pb-2 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gold text-ink font-extrabold text-sm hover:bg-cream transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      {ctaLabel}
                    </button>
                    <p className="text-center text-xs text-cream/35">Free guide. No payment details needed.</p>
                  </form>

                  <p className="text-xs text-cream/30 mt-4 leading-relaxed">
                    We use your details to deliver the guide. Read our{' '}
                    <Link href="/contact" className="underline text-cream/50 hover:text-cream">privacy policy</Link>.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOOK INSIDE ──────────────────────────────────────── */}
      <section className="border-y-2 border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Doc preview larger */}
            <div className="flex justify-center">
              <div className="relative">
                <MockDocument pages={mockPages} />
                {/* second page peeking behind */}
                <div className="absolute -bottom-3 -right-3 w-full h-full bg-gold/20 rounded-2xl -z-10" />
              </div>
            </div>
            {/* Copy */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-[2px] bg-gold inline-block" />
                <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-ink/50">A look inside</span>
              </div>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight">{previewTitle}</h2>
              <p className="text-ink/60 mt-4 leading-relaxed">{previewDescription}</p>
              <p className="text-xs text-ink/35 italic mt-3">{previewNote}</p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-ink font-extrabold text-sm border-2 border-ink shadow-[4px_4px_0_0_#034636] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                Get the complete free guide <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          <div>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl leading-tight">
              Frequently asked questions
            </h2>
            <p className="text-ink/50 text-sm mt-3 leading-relaxed">
              Everything you need to know about this free resource.
            </p>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-ink text-cream rounded-[28px] border-2 border-ink p-10 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 texture-dots-light opacity-20 pointer-events-none" />
          <div className="relative">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-gold">Ready for more?</p>
            <h3 className="font-display text-2xl sm:text-3xl mt-1">Let Humanix help move your mission forward.</h3>
          </div>
          <Link
            href="/contact"
            className="relative shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold text-ink font-extrabold border-2 border-gold hover:bg-cream hover:border-cream transition-colors"
          >
            Book a strategy call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
