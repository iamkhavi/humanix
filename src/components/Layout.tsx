'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
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
              className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime text-ink text-sm font-extrabold border-2 border-ink shadow-[3px_3px_0_0_#034636] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#034636] transition-all"
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
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-lime text-ink text-sm font-extrabold border-2 border-ink shadow-[3px_3px_0_0_#034636]"
              onClick={() => setMenuOpen(false)}
            >
              Start a project <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-ink text-cream border-t-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <span className="block font-display text-[24px] italic text-cream">
                humanix<span className="text-coral not-italic">.</span>
              </span>
              <p className="mt-3 text-sm text-cream/65 leading-relaxed max-w-xs">
                Africa&apos;s NGO marketing agency. Digital marketing that moves missions forward.
              </p>
            </div>
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-cream/40 mb-4">Services</p>
              <ul className="flex flex-col gap-2">
                {['Fundraising Campaigns', 'Content Strategy', 'Digital Advertising', 'Brand Identity', 'Donor Engagement', 'Impact Reporting'].map((s) => (
                  <li key={s}>
                    <Link href="/services" className="text-sm text-cream/70 hover:text-cream transition-colors">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-cream/40 mb-4">Company</p>
              <ul className="flex flex-col gap-2">
                {[{ label: 'About', href: '/about' }, { label: 'Work', href: '/work' }, { label: 'Insights', href: '/insights' }, { label: 'Contact', href: '/contact' }].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-cream/70 hover:text-cream transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-cream/40 mb-4">Contact</p>
              <p className="text-sm text-cream/70">hello@humanix.africa</p>
              <p className="text-sm text-cream/70 mt-1">Africa-wide · Remote-first</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t-2 border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream/40">&copy; {new Date().getFullYear()} Humanix. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service'].map((t) => (
                <Link key={t} href="#" className="text-xs text-cream/40 hover:text-cream/70 transition-colors">{t}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
