import Link from 'next/link';
import Layout from './Layout';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, Calendar, ChevronRight } from 'lucide-react';

interface RelatedArticle {
  title: string;
  href: string;
  category: string;
  readTime: string;
}

interface ArticleLayoutProps {
  category: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
  children: React.ReactNode;
  related?: RelatedArticle[];
}

export default function ArticleLayout({
  category,
  title,
  description,
  readTime,
  date,
  children,
  related = [],
}: ArticleLayoutProps) {
  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 texture-dots-light opacity-20 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-cream/45">
            <Link href="/" className="hover:text-cream transition-colors">Humanix</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/insights" className="hover:text-cream transition-colors">Insights</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-cream/80 truncate max-w-[200px]">{title}</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-gold/40 text-gold">
              {category}
            </span>
            <h1 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mt-4">
              {title}
            </h1>
            <p className="text-cream/60 mt-4 text-lg leading-relaxed max-w-2xl">{description}</p>
            <div className="flex items-center gap-5 mt-6 text-xs font-semibold text-cream/45">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {date}
              </span>
            </div>
          </div>
        </div>

        <div className="h-10 bg-cream" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-[1fr_300px] gap-14">

          {/* Main content */}
          <article className="prose-article">
            {children}
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-6">

              {/* Back to insights */}
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-bold text-ink/60 hover:text-ink transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Insights
              </Link>

              {/* CTA card */}
              <div className="bg-ink text-cream rounded-3xl p-6 border-2 border-ink">
                <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-gold">Ready to act?</p>
                <h3 className="font-display text-xl mt-2 leading-snug">Strengthen your digital presence.</h3>
                <p className="text-cream/60 text-sm mt-2 leading-relaxed">Humanix helps African NGOs build visibility, credibility, and donor engagement.</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-ink text-sm font-extrabold hover:bg-cream transition-colors"
                >
                  Talk to us <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div>
                  <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-ink/40 mb-4">Related reading</p>
                  <div className="flex flex-col gap-4">
                    {related.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="group block bg-white rounded-2xl border-2 border-ink/10 p-4 hover:border-ink transition-all"
                      >
                        <span className="text-xs font-extrabold tracking-[0.15em] uppercase text-coral">{r.category}</span>
                        <p className="font-display text-sm mt-1 leading-snug group-hover:text-coral transition-colors">{r.title}</p>
                        <span className="text-xs text-ink/40 font-semibold mt-2 block">{r.readTime}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* ── BACK + CTA STRIP ──────────────────────────────────── */}
      <section className="border-t-2 border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-extrabold text-sm border-b-2 border-ink pb-0.5 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            All insights
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-cream font-extrabold border-2 border-ink shadow-[4px_4px_0_0_#DBA444] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm"
          >
            Book a strategy call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
