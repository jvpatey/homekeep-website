"use client";

import type { ReactNode } from "react";

export default function FaqItem({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="group border-b border-[var(--color-border)] last:border-b-0 open:bg-[var(--glass-tint)] rounded-lg px-1 -mx-1 transition-colors duration-200">
      <summary className="cursor-pointer list-none py-4 pr-2 text-[var(--color-text)] font-medium leading-snug select-none marker:hidden [&::-webkit-details-marker]:hidden flex items-center justify-between gap-3 min-h-11">
        <span>{title}</span>
        <svg
          className="shrink-0 w-4 h-4 text-[var(--color-secondary)] transition-transform duration-200 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className="faq-body pb-4 pl-0.5 text-sm text-[var(--color-text-secondary)] leading-relaxed">
        {children}
      </div>
    </details>
  );
}
