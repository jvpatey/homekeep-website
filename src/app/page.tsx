"use client";

import Image from "next/image";
import Link from "next/link";
import AppDownloadSection from "./components/AppDownloadSection";
import PromoVideo from "./components/PromoVideo";
import { APP_CONFIG } from "./config/app";
import { useState, useEffect, useRef } from "react";

const FEATURES = [
  {
    text: "Organize",
    subtitle: "Manage all tasks in one place",
    description:
      "Create, organize, and manage all your home maintenance tasks in one place. Set priorities, due dates, and categories to keep everything organized.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    ),
  },
  {
    text: "Schedule",
    subtitle: "Never miss important maintenance",
    description:
      "Never forget when to clean your gutters, change filters, or service your HVAC again. Get automatic reminders for all your home maintenance needs.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    text: "Track",
    subtitle: "See your maintenance progress",
    description:
      "Celebrate your achievements and track your home maintenance progress. Build a complete history of completed tasks and maintenance milestones.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
] as const;

const CHECKLIST = [
  {
    title: "Printable Home Summary",
    body: "Export a PDF with your address, equipment, and full completion history—handy for insurance, listings, or your records.",
  },
  {
    title: "Recurring Task Schedules",
    body: "Customizable intervals from daily to yearly",
  },
  {
    title: "9 Comprehensive Categories",
    body: "HVAC, Plumbing, Electrical, and more",
  },
  {
    title: "Priority-Based Organization",
    body: "Low, medium, and high priority tasks",
  },
  {
    title: "Smart Notifications",
    body: "Customizable preferences per category",
  },
  {
    title: "Progress Tracking",
    body: "Complete maintenance history",
  },
  {
    title: "Clean Interface",
    body: "Modern design for daily use",
  },
] as const;

/** lg grid column spans for bento rhythm (6-col subgrid); index 0 is full-width */
const BENTO_TILE_SPANS = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
] as const;

function getBentoSpan(index: number): string {
  if (index === 0) return "lg:col-span-6";
  return BENTO_TILE_SPANS[index - 1];
}

export default function Home() {
  const [modalFeatureIndex, setModalFeatureIndex] = useState<number | null>(
    null
  );
  const [visibleElements, setVisibleElements] = useState<Set<number>>(
    new Set([0])
  );
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featureDialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = featureDialogRef.current;
    if (!dialog) return;
    const onDialogClose = () => setModalFeatureIndex(null);
    dialog.addEventListener("close", onDialogClose);
    return () => dialog.removeEventListener("close", onDialogClose);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-section-index");
            if (index) {
              setVisibleElements((prev) => new Set([...prev, parseInt(index)]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const refs = sectionRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const openFeatureModal = (index: number) => {
    setModalFeatureIndex(index);
    requestAnimationFrame(() => {
      featureDialogRef.current?.showModal();
    });
  };

  const closeFeatureModal = () => {
    featureDialogRef.current?.close();
  };

  return (
    <div className="min-h-screen w-full min-w-0 relative overflow-x-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Hero — split layout (copy left, device preview right on lg+) */}
      <section className="relative w-full px-6 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-28 lg:pb-24">
        <div className="hero-halo" aria-hidden />
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10 lg:gap-12 xl:gap-14">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full max-w-lg shrink-0 mx-auto lg:mx-0">
              <div className="flex items-center gap-3 mb-7 md:mb-8 animate-hero-group">
                <Image
                  src="/homekeep-logo.png"
                  alt="HomeKeep app icon"
                  width={56}
                  height={56}
                  className="rounded-xl shadow-[var(--shadow-key)] border border-[var(--glass-stroke)] shrink-0"
                  priority
                />
                <div className="text-left">
                  <div
                    className="text-xl md:text-2xl font-extrabold tracking-tight text-[var(--color-text)]"
                    aria-hidden
                  >
                    Home
                    <span className="text-[var(--color-accent)]">Keep</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-[2.75rem] lg:text-5xl xl:text-[3.25rem] font-semibold tracking-tight text-[var(--color-text)] mb-4 md:mb-5 leading-[1.1] animate-hero-delay-1">
                Never miss home maintenance again.
              </h1>
              <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mb-6 max-w-md lg:max-w-none leading-relaxed animate-hero-delay-2">
                Your home, on schedule. Track tasks, get reminders, and stay
                ahead of costly surprises.
              </p>

              <a
                href="#promo"
                className="inline-flex text-sm font-semibold text-[var(--color-primary)] hover:opacity-90 underline-offset-4 hover:underline mb-6 md:mb-8 animate-hero-delay-2"
              >
                Watch the video
              </a>

              <div className="animate-hero-delay-2 w-full flex justify-center lg:justify-start">
                <AppDownloadSection
                  appStoreUrl={APP_CONFIG.appStoreUrl}
                  variant="primary"
                  className="items-center lg:items-start"
                />
              </div>
            </div>

            <div className="flex flex-col items-center shrink-0 w-full max-w-[min(100%,280px)] mx-auto lg:mx-0">
              <div className="w-full lg:w-[280px]">
                <div className="glass-card rounded-[2rem] p-1.5 sm:p-2 transition-transform duration-300 ease-out motion-safe:hover:scale-[1.02]">
                  <div className="bg-black rounded-[1.65rem] sm:rounded-[2rem] aspect-[9/19.5] w-full overflow-hidden relative">
                    <Image
                      src="/homekeeper-light.png"
                      alt="HomeKeep app preview in light mode"
                      width={390}
                      height={844}
                      className="w-full h-full object-contain rounded-[1.35rem] sm:rounded-[1.75rem] block dark:hidden"
                    />
                    <Image
                      src="/homekeeper-dark.png"
                      alt="HomeKeep app preview in dark mode"
                      width={390}
                      height={844}
                      className="w-full h-full object-contain rounded-[1.35rem] sm:rounded-[1.75rem] hidden dark:block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo film + download */}
      <section
        id="promo"
        className="w-full bg-[#0a0a0a] text-neutral-200 border-y border-white/[0.08]"
      >
        <div
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          data-section-index="1"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24"
        >
          <p
            className={`text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/45 mb-4 fade-on-scroll ${visibleElements.has(1) ? "visible" : ""}`}
          >
            See it in action
          </p>
          <h2
            className={`text-2xl md:text-3xl font-semibold text-white text-center tracking-tight mb-10 md:mb-12 max-w-2xl mx-auto leading-snug fade-on-scroll ${visibleElements.has(1) ? "visible" : ""}`}
            style={{ transitionDelay: "60ms" }}
          >
            Schedules, reminders, and progress—built for homeowners.
          </h2>

          <div
            className={`fade-on-scroll ${visibleElements.has(1) ? "visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <PromoVideo className="max-w-5xl mx-auto" />
          </div>
        </div>
      </section>

      {/* Features bento — pillars + capability tiles */}
      <section className="py-16 md:py-24 bg-[var(--color-background)] border-y border-[var(--color-border)]">
        <div
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
          data-section-index="2"
          className="max-w-6xl mx-auto px-6"
        >
          <div
            className={`text-center mb-12 md:mb-14 slide-up-on-scroll ${visibleElements.has(2) ? "visible" : ""}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
              Everything your home needs
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Simple habits for homeowners—organize what matters, see what&apos;s
              due, and stay ahead without the spreadsheet.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6 fade-on-scroll ${visibleElements.has(2) ? "visible" : ""}`}
          >
            {/* Tall pillar: Organize / Schedule / Track */}
            <div className="lg:col-span-5 flex">
              <div className="glass-card rounded-3xl overflow-hidden w-full flex flex-col min-h-0">
                <div className="px-5 pt-5 pb-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
                    At a glance
                  </p>
                </div>
                <div className="flex-1 flex flex-col">
                  {FEATURES.map((feature, index) => (
                    <div key={feature.text} className="flex-1 flex flex-col">
                      <button
                        type="button"
                        onClick={() => openFeatureModal(index)}
                        className="w-full flex flex-1 items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-[var(--glass-tint)] active:bg-[var(--glass-tint)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                      >
                        <div className="glass-icon-chip">
                          <svg
                            className="w-[18px] h-[18px]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden
                          >
                            {feature.icon}
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[var(--color-text)]">
                            {feature.text}
                          </div>
                          <div className="text-sm text-[var(--color-text-secondary)] truncate">
                            {feature.subtitle}
                          </div>
                        </div>
                        <svg
                          className="w-4 h-4 shrink-0 text-[var(--color-text-secondary)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                      {index < FEATURES.length - 1 ? (
                        <div
                          className="h-px mx-5 bg-[var(--glass-stroke)]"
                          aria-hidden
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bento tiles */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
              {CHECKLIST.map((item, i) => (
                <div
                  key={item.title}
                  className={`glass-card rounded-2xl p-5 md:p-6 flex flex-col h-full min-h-[140px] transition-[transform,box-shadow] duration-200 ease-out motion-safe:hover:-translate-y-0.5 ${getBentoSpan(i)}`}
                  style={{ transitionDelay: `${40 + i * 35}ms` }}
                >
                  <svg
                    className="w-6 h-6 text-[var(--color-primary)] shrink-0 mb-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="font-semibold text-[var(--color-text)] text-base leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-auto">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <dialog
        ref={featureDialogRef}
        onClick={(e) => {
          if (e.target === featureDialogRef.current) closeFeatureModal();
        }}
        className="max-w-[min(100vw-2rem,22rem)] w-full rounded-[22px] border border-[var(--glass-stroke)] bg-[var(--glass-fill-strong)] p-0 text-[var(--color-text)] shadow-2xl"
      >
        {modalFeatureIndex !== null ? (
          <div
            className="p-6"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <div className="flex gap-3 mb-4">
              <div className="glass-icon-chip w-11 h-11 rounded-2xl">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  {FEATURES[modalFeatureIndex].icon}
                </svg>
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="font-semibold text-lg leading-tight">
                  {FEATURES[modalFeatureIndex].text}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] truncate">
                  {FEATURES[modalFeatureIndex].subtitle}
                </p>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {FEATURES[modalFeatureIndex].description}
            </p>
            <button
              type="button"
              onClick={closeFeatureModal}
              className="w-full py-3 rounded-xl font-semibold text-white bg-[var(--color-primary)] transition-[filter,transform] duration-200 hover:brightness-105 active:scale-[0.99]"
            >
              Got it
            </button>
          </div>
        ) : null}
      </dialog>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[var(--color-primary)] text-white">
        <div
          ref={(el) => {
            sectionRefs.current[3] = el;
          }}
          data-section-index="3"
          className="max-w-7xl mx-auto text-center px-6"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 slide-up-on-scroll ${visibleElements.has(3) ? "visible" : ""}`}
          >
            Ready to keep your home in perfect condition?
          </h2>
          <p
            className={`text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed fade-on-scroll ${visibleElements.has(3) ? "visible" : ""}`}
            style={{ transitionDelay: "150ms" }}
          >
            Download HomeKeep today and experience the peace of mind that comes
            with a perfectly maintained home.
          </p>

          <div
            className={`fade-on-scroll ${visibleElements.has(3) ? "visible" : ""}`}
            style={{ transitionDelay: "300ms" }}
          >
            <AppDownloadSection
              appStoreUrl={APP_CONFIG.appStoreUrl}
              variant="secondary"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/homekeep-logo.png"
                alt="HomeKeep Logo"
                width={60}
                height={60}
                className="rounded-2xl border border-[var(--glass-stroke)]"
              />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-1">
              Home
              <span className="text-[var(--color-accent)]">Keep</span>
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Never forget home maintenance again!
            </p>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[var(--color-text-secondary)]">
              <Link
                href="/privacy"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/support"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                Support
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
              <p className="text-[var(--color-text-secondary)] text-sm">
                © 2026 HomeKeep. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
