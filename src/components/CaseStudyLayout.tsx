import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { ArrowRight, ArrowUpRight, ChevronRight, ExternalLink } from 'lucide-react';

interface Meta {
  label: string;
  value: string;
}

interface ResultItem {
  metric: string;
  label: string;
}

interface CaseStudyLayoutProps {
  division: string;
  divisionColor?: string;
  category: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  meta: Meta[];
  challenge: React.ReactNode;
  approach: React.ReactNode;
  solution: React.ReactNode;
  results: ResultItem[];
  resultsNote?: string;
  ctaHeading: string;
  ctaBody: string;
  externalLink?: { label: string; href: string };
  relatedService: { label: string; href: string };
  children?: React.ReactNode;
}

export default function CaseStudyLayout({
  division,
  divisionColor = 'text-gold',
  category,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  meta,
  challenge,
  approach,
  solution,
  results,
  resultsNote,
  ctaHeading,
  ctaBody,
  externalLink,
  relatedService,
}: CaseStudyLayoutProps) {
  return (
    <Layout>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0 texture-dots-light opacity-20 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-0 relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-cream/45">
            <Link href="/" className="hover:text-cream transition-colors">Humanix</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/case-studies" className="hover:text-cream transition-colors">Case Studies</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-cream/80 truncate max-w-[180px]">{title}</span>
          </nav>

          <div className="mt-8 max-w-3xl pb-14">
            <span className={`text-xs font-extrabold tracking-[0.2em] uppercase ${divisionColor}`}>
              {division} / {category}
            </span>
            <h1 className="font-display font-semibold text-[38px] sm:text-5xl leading-[1.08] mt-3 text-cream">
              {title}
            </h1>
            <p className="text-cream/60 mt-4 text-lg leading-relaxed max-w-2xl">{subtitle}</p>
          </div>
        </div>

        {/* Hero image — full bleed bottom */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-t-[28px] overflow-hidden border-2 border-cream/10 shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.4)]">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              width={1400}
              height={600}
              className="w-full h-[280px] sm:h-[420px] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── BODY ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-[1fr_280px] gap-14">

          {/* Main */}
          <div className="flex flex-col gap-12">

            {/* Meta strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {meta.map((m) => (
                <div key={m.label} className="bg-white rounded-2xl border-2 border-ink/10 p-5">
                  <p className="text-xs font-extrabold tracking-[0.18em] uppercase text-ink/40">{m.label}</p>
                  <p className="font-display text-base mt-1 leading-snug">{m.value}</p>
                </div>
              ))}
            </div>

            {/* Challenge */}
            <div>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl flex items-center gap-3">
                <span className="font-display text-5xl text-transparent select-none" style={{ WebkitTextStroke: '1.5px rgba(3,70,54,0.15)' }}>01</span>
                The Challenge
              </h2>
              <div className="prose-article mt-4">{challenge}</div>
            </div>

            {/* Approach */}
            <div>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl flex items-center gap-3">
                <span className="font-display text-5xl text-transparent select-none" style={{ WebkitTextStroke: '1.5px rgba(3,70,54,0.15)' }}>02</span>
                Our Approach
              </h2>
              <div className="prose-article mt-4">{approach}</div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl flex items-center gap-3">
                <span className="font-display text-5xl text-transparent select-none" style={{ WebkitTextStroke: '1.5px rgba(3,70,54,0.15)' }}>03</span>
                The Solution
              </h2>
              <div className="prose-article mt-4">{solution}</div>
            </div>

            {/* Results */}
            <div>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl flex items-center gap-3">
                <span className="font-display text-5xl text-transparent select-none" style={{ WebkitTextStroke: '1.5px rgba(3,70,54,0.15)' }}>04</span>
                Results & Impact
              </h2>
              {results.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  {results.map((r) => (
                    <div key={r.label} className="bg-ink text-cream rounded-3xl p-6 border-2 border-ink">
                      <p className="font-display text-3xl sm:text-4xl text-gold">{r.metric}</p>
                      <p className="text-sm font-bold text-cream/55 mt-2">{r.label}</p>
                    </div>
                  ))}
                </div>
              )}
              {resultsNote && (
                <p className="mt-5 text-sm text-ink/45 italic border-l-2 border-gold/40 pl-4">{resultsNote}</p>
              )}
            </div>

            {/* External link if provided */}
            {externalLink && (
              <div className="flex items-center gap-3 bg-white rounded-2xl border-2 border-ink/10 p-5 w-fit">
                <ExternalLink className="w-4 h-4 text-ink/40 shrink-0" />
                <span className="text-sm text-ink/55">View the live project:</span>
                <a
                  href={externalLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-extrabold text-ink hover:text-coral transition-colors inline-flex items-center gap-1"
                >
                  {externalLink.label} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-6">
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-ink/55 hover:text-ink transition-colors">
                ← All case studies
              </Link>

              {/* CTA card */}
              <div className="bg-ink text-cream rounded-3xl p-6 border-2 border-ink shadow-[4px_4px_0_0_#DBA444]">
                <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-gold">Facing a similar challenge?</p>
                <h3 className="font-display text-lg mt-2 leading-snug">{ctaHeading}</h3>
                <p className="text-cream/55 text-sm mt-2 leading-relaxed">{ctaBody}</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-ink text-sm font-extrabold hover:bg-cream transition-colors"
                >
                  Let's talk <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related service */}
              <div className="bg-white rounded-2xl border-2 border-ink/10 p-5">
                <p className="text-xs font-extrabold tracking-[0.18em] uppercase text-ink/40 mb-3">Related service</p>
                <Link
                  href={relatedService.href}
                  className="flex items-center justify-between text-sm font-bold text-ink hover:text-coral transition-colors group"
                >
                  {relatedService.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-gold rounded-[28px] border-2 border-ink shadow-[8px_8px_0_0_#034636] p-10 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-ink/55">Let's explore what's possible</p>
            <h3 className="font-display font-semibold text-2xl sm:text-3xl mt-1 leading-tight">
              Ready to bring your mission forward?
            </h3>
          </div>
          <div className="relative flex gap-3 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-ink text-cream font-extrabold border-2 border-ink shadow-[4px_4px_0_0_rgba(3,70,54,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm"
            >
              Start a conversation <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-transparent font-extrabold border-2 border-ink/30 hover:border-ink transition-colors text-sm"
            >
              More case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
