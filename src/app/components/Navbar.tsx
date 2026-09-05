"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "./HouseMark";
import { APP_CONFIG } from "../config/app";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";

  const linkClass =
    "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium min-h-11 inline-flex items-center";

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="inline-flex items-end group transition-opacity duration-200 hover:opacity-90"
          >
            <Wordmark markSize={28} />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {!isHomePage && (
              <Link href="/" className={linkClass}>
                Home
              </Link>
            )}
            {isHomePage && (
              <a href="#pricing" className={linkClass}>
                Pricing
              </a>
            )}
            <Link href="/support" className={linkClass}>
              Support
            </Link>
            <a
              href={APP_CONFIG.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-11 px-4 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold shadow-[var(--shadow-key)] hover:brightness-105 active:scale-[0.97] transition-[filter,transform] duration-200"
            >
              Get the app
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] rounded-md p-2 min-h-11 min-w-11 inline-flex items-center justify-center"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-slide-in">
            <div className="px-2 pt-2 pb-4 space-y-1 border-t border-[var(--color-border)]">
              {!isHomePage && (
                <Link
                  href="/"
                  className="block px-3 py-3 min-h-11 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--glass-tint)] rounded-xl font-medium"
                >
                  Home
                </Link>
              )}
              {isHomePage && (
                <a
                  href="#pricing"
                  className="block px-3 py-3 min-h-11 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--glass-tint)] rounded-xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
              )}
              <Link
                href="/support"
                className="block px-3 py-3 min-h-11 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--glass-tint)] rounded-xl font-medium"
              >
                Support
              </Link>
              <a
                href={APP_CONFIG.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 mt-2 text-center py-3 min-h-11 rounded-full bg-[var(--color-primary)] text-white font-semibold"
              >
                Get the app
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
