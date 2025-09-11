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
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/homekeep-logo.png"
              alt="HomeKeep Logo"
              width={32}
              height={32}
              className="rounded-lg border border-gray-100 dark:border-gray-600"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {pageTitle || "HomeKeep"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {!isHomePage && (
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-slate-700 dark:hover:text-slate-300 transition-colors font-medium mr-6"
              >
                Home
              </Link>
            )}
            <Link
              href="/support"
              className="text-gray-600 dark:text-gray-300 hover:text-slate-700 dark:hover:text-slate-300 transition-colors font-medium"
            >
              Support
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-md p-2"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-700">
              {!isHomePage && (
                <Link
                  href="/"
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <Link
                href="/support"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors font-medium"
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
