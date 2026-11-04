import Link from 'next/link';

export default function Logo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const isDark = variant === 'dark';

  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Humanix home">
      <span className="relative grid place-items-center w-12 h-12 shrink-0">
        {/* Animated outer circle */}
        <svg
          viewBox="0 0 48 48"
          className="absolute inset-0 w-12 h-12 transition-transform duration-500 group-hover:rotate-90"
          role="img"
          aria-hidden="true"
        >
          <circle
            cx="24"
            cy="24"
            r="22.5"
            fill="none"
            stroke={isDark ? '#034636' : '#DBA444'}
            strokeWidth="2"
            strokeDasharray="100 42"
            strokeLinecap="round"
          />
        </svg>
        {/* Inner rect with h + arrow */}
        <svg
          viewBox="0 0 48 48"
          className="w-9 h-9 transition-transform duration-300 group-hover:scale-105"
          role="img"
          aria-hidden="true"
        >
          <rect width="48" height="48" rx="14" fill={isDark ? '#DBA444' : '#034636'} />
          <text
            x="24"
            y="33.5"
            textAnchor="middle"
            fontFamily="Fraunces, Georgia, serif"
            fontWeight="600"
            fontSize="24"
            fill={isDark ? '#034636' : '#FAF7F0'}
          >
            h
          </text>
          <path d="M31.5 15.5 L37 21 L31.5 26.5 Z" fill={isDark ? '#034636' : '#DBA444'} />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[24px] italic ${isDark ? 'text-cream' : 'text-ink'}`}>
          humanix<span className="text-coral not-italic">.</span>
        </span>
        <span className="mt-1 flex items-center gap-1.5">
          <span className="h-[3px] w-4 shrink-0 rounded-full bg-gold" />
          <span className={`block text-[10px] font-bold tracking-[0.22em] ${isDark ? 'text-cream/60' : 'text-ink/55'}`}>
            NGO MARKETING AGENCY
          </span>
        </span>
      </span>
    </Link>
  );
}
