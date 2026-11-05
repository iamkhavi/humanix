'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Menu, X, MapPin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      {/* Announcement bar */}
      <div className="bg-ink text-cream text-center text-xs sm:text-sm font-semibold py-2 px-4">
        Now onboarding mission partners for 2027 across Africa{' '}
        <Link
          href="/contact"
          className="underline underline-offset-2 decoration-lime decoration-2 hover:text-lime"
        >
          Book a strategy call
        </Link>
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b-2 border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-bold transition-colors text-ink/70 hover:text-ink hover:bg-ink/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-ink text-sm font-extrabold border-2 border-ink shadow-[3px_3px_0_0_#034636] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#034636] transition-all"
            >
              Start a project <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-11 h-11 grid place-items-center rounded-xl border-2 border-ink/15"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-cream border-t-2 border-ink/10 px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-xl text-sm font-bold text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold text-ink text-sm font-extrabold border-2 border-ink shadow-[3px_3px_0_0_#034636]"
              onClick={() => setMenuOpen(false)}
            >
              Start a project <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-ink text-cream mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

          {/* CTA banner */}
          <div className="bg-coal border-2 border-cream/15 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center gap-8 justify-between relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/15 blur-2xl pointer-events-none" />
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] text-gold uppercase">Ready when you are</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight">Have a mission to move?</h2>
              <p className="text-cream/65 mt-3 max-w-xl">Tell us where you want your mission to go. We will map the fastest digital route to get there - and walk it with you.</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold text-ink font-extrabold border-2 border-gold hover:bg-cream hover:border-cream transition-colors"
            >
              Start a project <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>

          {/* Footer columns */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">

            {/* Col 1: Logo + description + socials */}
            <div>
              <Logo variant="dark" />
              <p className="text-cream/60 text-sm mt-4 leading-relaxed">Africa&apos;s NGO marketing agency. Digital campaigns, content and fundraising growth for organisations changing the continent.</p>
              <div className="flex gap-2 mt-5">
                {[
                  {
                    href: 'https://www.facebook.com', label: 'Facebook',
                    path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
                  },
                  {
                    href: 'https://www.x.com', label: 'X',
                    path: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
                  },
                  {
                    href: 'https://www.instagram.com', label: 'Instagram',
                    path: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></>,
                  },
                  {
                    href: 'https://www.linkedin.com', label: 'LinkedIn',
                    path: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>,
                  },
                  {
                    href: 'https://www.youtube.com', label: 'YouTube',
                    path: <><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></>,
                  },
                ].map(({ href, label, path }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 grid place-items-center rounded-full border border-cream/20 text-cream/70 hover:bg-lime hover:text-ink hover:border-lime transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {path}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Explore */}
            <div>
              <h3 className="text-xs font-extrabold tracking-[0.2em] uppercase text-cream/50">Explore</h3>
              <ul className="mt-4 space-y-2.5 text-sm font-semibold">
                {[
                  { href: '/services', label: 'Services' },
                  { href: '/work', label: 'Work' },
                  { href: '/about', label: 'About' },
                  { href: '/insights', label: 'Insights' },
                  { href: '/contact', label: 'Contact' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-cream/75 hover:text-lime transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h3 className="text-xs font-extrabold tracking-[0.2em] uppercase text-cream/50">Services</h3>
              <ul className="mt-4 space-y-2.5 text-sm font-semibold">
                {[
                  { href: '/services#fundraising-campaigns', label: 'Fundraising Campaigns' },
                  { href: '/services#social-media', label: 'Social Media & Community' },
                  { href: '/services#seo-content', label: 'SEO & Content' },
                  { href: '/services#email-donors', label: 'Email & Donor Journeys' },
                  { href: '/services#brand-identity', label: 'Brand Identity & Design' },
                  { href: '/services#data-analytics', label: 'Data & Analytics' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-cream/75 hover:text-lime transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Talk to us */}
            <div>
              <h3 className="text-xs font-extrabold tracking-[0.2em] uppercase text-cream/50">Talk to us</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-2.5 text-cream/75">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-lime" aria-hidden="true" />
                  237 Garden City, Nairobi, Kenya, 00618
                </li>
                <li>
                  <a href="mailto:hello@humanix.africa" className="flex gap-2.5 text-cream/75 hover:text-lime">
                    <Mail className="w-4 h-4 mt-0.5 shrink-0 text-lime" aria-hidden="true" />
                    hello@humanix.africa
                  </a>
                </li>
                <li>
                  <a href="tel:+254708122974" className="flex gap-2.5 text-cream/75 hover:text-lime">
                    <Phone className="w-4 h-4 mt-0.5 shrink-0 text-lime" aria-hidden="true" />
                    +254 708 122 974
                  </a>
                </li>
                <li>
                  <a href="tel:+40744621250" className="flex gap-2.5 text-cream/75 hover:text-lime">
                    <Phone className="w-4 h-4 mt-0.5 shrink-0 text-lime" aria-hidden="true" />
                    +40 744 621 250
                  </a>
                </li>
              </ul>
              <p className="text-xs text-cream/45 mt-5 leading-relaxed">
                A proud sister agency of <span className="text-cream/70 font-bold">Viontum</span> - the Viontum Group&apos;s home for mission-driven marketing.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-cream/15 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/45">
            <p>© 2026 Humanix NGO Marketing Agency. All rights reserved.</p>
            <p className="font-semibold">Proudly African · Nairobi · Lagos · Accra · Johannesburg</p>
          </div>

        </div>
      </footer>
    </div>
  );
}
