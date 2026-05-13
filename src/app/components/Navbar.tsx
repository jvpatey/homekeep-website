"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Get page title based on pathname
  const getPageTitle = () => {
    switch (pathname) {
      case "/support":
        return "Support";
      case "/privacy":
        return "Privacy Policy";
      case "/terms":
        return "Terms of Service";
      default:
        return null;
    }
  };

  const pageTitle = getPageTitle();
  const isHomePage = pathname === "/";

  return (
    <nav className="glass-nav sticky top-0 z-50 animate-slide-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group transition-opacity duration-200 hover:opacity-90"
          >
            <Image
              src="/homekeep-logo.png"
              alt="HomeKeep Logo"
              width={32}
              height={32}
              className="rounded-lg border border-[var(--glass-stroke)]"
            />
            <span className="text-xl font-bold text-[var(--color-text)] transition-colors duration-200">
              {pageTitle || (
                <>
                  Home<span className="text-[var(--color-accent)]">Keep</span>
                </>
              )}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {!isHomePage && (
              <Link
                href="/"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-200 group-hover:w-full" />
              </Link>
            )}
            <Link
              href="/support"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium relative group"
            >
              Support
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-200 group-hover:w-full" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)] rounded-md p-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-[var(--glass-stroke)]">
              {!isHomePage && (
                <Link
                  href="/"
                  className="block px-3 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--glass-tint)] rounded-md transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <Link
                href="/support"
                className="block px-3 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--glass-tint)] rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
