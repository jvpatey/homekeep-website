"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Wordmark } from "./HouseMark";
import { APP_CONFIG } from "../config/app";
import { duration, easeOutStandard, tapPress } from "../lib/motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

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
  const isSupport = pathname === "/support";

  const navItems = [
    !isHomePage ? { href: "/", label: "Home", id: "home" } : null,
    isHomePage ? { href: "#pricing", label: "Pricing", id: "pricing" } : null,
    { href: "/support", label: "Support", id: "support" },
  ].filter(Boolean) as { href: string; label: string; id: string }[];

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="inline-flex items-end transition-opacity duration-200 hover:opacity-80"
          >
            <Wordmark markSize={28} />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const active =
                (item.id === "support" && isSupport) ||
                (item.id === "home" && pathname === "/");
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="relative min-h-11 inline-flex items-center font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200"
                >
                  {item.label}
                  {active && !reduce ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-2 left-0 right-0 h-0.5 rounded-full bg-[var(--color-primary)]"
                      transition={{ duration: duration.fast, ease: easeOutStandard }}
                    />
                  ) : active ? (
                    <span className="absolute bottom-2 left-0 right-0 h-0.5 rounded-full bg-[var(--color-primary)]" />
                  ) : null}
                </Link>
              );
            })}
            <motion.a
              href={APP_CONFIG.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-11 px-4 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold shadow-[var(--shadow-key)]"
              whileHover={reduce ? undefined : { y: -2, filter: "brightness(1.06)" }}
              whileTap={reduce ? undefined : tapPress}
            >
              Get the app
            </motion.a>
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

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: duration.base, ease: easeOutStandard }}
            >
              <div className="px-2 pt-2 pb-4 space-y-1 border-t border-[var(--color-border)]">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block px-3 py-3 min-h-11 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--glass-tint)] rounded-xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={APP_CONFIG.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mx-3 mt-2 text-center py-3 min-h-11 rounded-full bg-[var(--color-primary)] text-white font-semibold"
                >
                  Get the app
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
