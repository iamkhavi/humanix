import React from 'react';

interface SectionHeaderProps {
  label: string;
  labelColor?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeader({ label, labelColor = 'bg-coral', title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border-2 border-ink/15 text-ink/70 bg-white/60">
        <span className={`w-2 h-2 rounded-full ${labelColor} inline-block`} />
        {label}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mt-4 text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink/65">{description}</p>
      )}
    </div>
  );
}
