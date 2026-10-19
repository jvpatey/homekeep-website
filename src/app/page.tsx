"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import AppDownloadSection from "./components/AppDownloadSection";
import Footer from "./components/Footer";
import HouseMark, { Wordmark } from "./components/HouseMark";
import HoverLift from "./components/HoverLift";
import IPhoneDashboardPreview from "./components/IPhoneDashboardPreview";
import Reveal, { RevealItem } from "./components/Reveal";
import TextLink from "./components/TextLink";
import { APP_CONFIG } from "./config/app";
import { fadeUp, staggerChildren } from "./lib/motion";

/** Three steps: how HomeKeep works — plan, stay ahead, know the house. */
const STORY = [
  {
    text: "Plan this house",
    number: "01",
    line: "Setup builds a maintenance schedule from your systems and equipment—not a blank checklist.",
    stage: "feature-stage-sage",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    ),
  },
  {
    text: "Stay ahead",
    number: "02",
    line: "Reminders when work is due—on your phone, Home Screen widget, and Apple Calendar.",
    stage: "feature-stage-copper",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    text: "Know the house",
    number: "03",
    line: "Equipment, documents, and history live with the schedule. Ask Keeper, or share the plan with HomeShare.",
    stage: "feature-stage-ink",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
  },
] as const;

const PLUS_VALUES = [
  "Full history, spend tracking, and a home history PDF",
  "Documents, trusted pros, and HomeShare for the household",
  "Keeper, label scan, and inspection import",
];

function FeatureTile({
  text,
  number,
  line,
  stage,
  icon,
}: {
  text: string;
  number: string;
  line: string;
  stage: string;
  icon: ReactNode;
}) {
  return (
    <HoverLift className="group h-full">
      <article className="flex flex-col h-full">
        <div className={`feature-stage ${stage} mb-5`}>
          <div className="feature-stage-bars" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <span className="absolute top-4 left-4 text-xs font-semibold tracking-[0.16em] opacity-70">
            {number}
          </span>
          <svg
            className="relative w-14 h-14 transition-transform duration-200 group-hover:scale-105"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {icon}
          </svg>
        </div>
        <h3 className="font-display text-2xl font-semibold text-[var(--color-text)] mb-2 tracking-tight">
          {text}
        </h3>
        <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
          {line}
        </p>
      </article>
    </HoverLift>
  );
}

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen w-full min-w-0 relative overflow-x-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      <main id="main">
        <section className="relative w-full px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="hero-halo" aria-hidden />
          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <motion.div
              className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10 lg:gap-12"
              initial={reduce ? false : "hidden"}
              animate="visible"
              variants={staggerChildren}
            >
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full max-w-lg mx-auto lg:mx-0">
                <motion.div
                  className="mb-8"
                  aria-hidden
                  variants={fadeUp}
                >
                  <Wordmark
                    markSize={44}
                    textClassName="text-xl md:text-2xl"
                  />
                </motion.div>

                <motion.h1
                  className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[var(--color-text)] mb-5 leading-[1.08]"
                  variants={fadeUp}
                >
                  Home maintenance,
                  <br />
                  handled.
                </motion.h1>
                <motion.p
                  className="text-base sm:text-lg text-[var(--color-text-secondary)] mb-4 max-w-md lg:max-w-lg leading-relaxed"
                  variants={fadeUp}
                >
                  A schedule, a home record, and a shared household — without
                  the mental load.
                </motion.p>
                <motion.p
                  className="text-sm font-medium text-[var(--color-text-secondary)] mb-8 tracking-wide"
                  variants={fadeUp}
                >
                  Plan · Stay ahead · Know the house
                </motion.p>

                <motion.div
                  className="w-full flex justify-center lg:justify-start"
                  variants={fadeUp}
                >
                  <AppDownloadSection
                    appStoreUrl={APP_CONFIG.appStoreUrl}
                    variant="primary"
                    className="items-center lg:items-start"
                  />
                </motion.div>
              </div>

              <motion.div
                className="flex flex-col items-center shrink-0 w-full max-w-[min(100%,300px)] mx-auto lg:mx-0"
                variants={fadeUp}
              >
                <IPhoneDashboardPreview />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[var(--color-background)]">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
                How HomeKeep works
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
                One home, one plan—built once, remembered for you, and kept with
                everything that belongs to the house.
              </p>
            </Reveal>

            <Reveal
              stagger
              className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
            >
              {STORY.map((step) => (
                <RevealItem key={step.text}>
                  <FeatureTile {...step} />
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </section>

        <section
          id="pricing"
          className="py-16 md:py-24 bg-[var(--color-background)] scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="text-center mb-12 md:mb-14">
              <div className="flex justify-center mb-5">
                <HouseMark size={36} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-secondary)] mb-3">
                HomeKeep +
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
                Keep this home on schedule
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
                Start with a 7-day free trial. After that, HomeKeep + is
                required to keep using the app. One home, including anyone you
                invite. Cancel anytime.
              </p>
            </Reveal>

            <Reveal stagger as="ul" className="max-w-lg mx-auto mb-10 space-y-3">
              {PLUS_VALUES.map((line) => (
                <RevealItem key={line} as="li">
                  <div className="flex items-start gap-3 text-[var(--color-text)]">
                    <svg
                      className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[15px] leading-snug">{line}</span>
                  </div>
                </RevealItem>
              ))}
            </Reveal>

            <Reveal
              stagger
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto mb-10"
            >
              <RevealItem>
                <HoverLift emphasized className="h-full">
                  <article className="hearth-card rounded-[22px] p-6 md:p-8 relative ring-2 ring-[var(--color-primary)] h-full">
                    <span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)] bg-[var(--glass-tint)] px-2.5 py-1 rounded-full">
                      Best value
                    </span>
                    <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                      Yearly
                    </p>
                    <p className="font-display text-4xl font-bold tracking-tight text-[var(--color-text)] mb-1">
                      $39.99
                      <span className="text-lg font-semibold text-[var(--color-text-secondary)]">
                        /year
                      </span>
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                      About $3.33/mo · 7-day free trial, then this plan
                    </p>
                    <p className="text-sm text-[var(--color-text)]">
                      Subscribe in the App Store. Purchases happen in the app.
                    </p>
                  </article>
                </HoverLift>
              </RevealItem>

              <RevealItem>
                <HoverLift className="h-full">
                  <article className="hearth-card rounded-[22px] p-6 md:p-8 h-full">
                    <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                      Monthly
                    </p>
                    <p className="font-display text-4xl font-bold tracking-tight text-[var(--color-text)] mb-1">
                      $5.99
                      <span className="text-lg font-semibold text-[var(--color-text-secondary)]">
                        /month
                      </span>
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                      7-day free trial, then billed monthly
                    </p>
                    <p className="text-sm text-[var(--color-text)]">
                      Subscribe in the App Store. Purchases happen in the app.
                    </p>
                  </article>
                </HoverLift>
              </RevealItem>
            </Reveal>

            <Reveal className="flex justify-center mb-8">
              <AppDownloadSection appStoreUrl={APP_CONFIG.appStoreUrl} />
            </Reveal>

            <p className="text-xs text-[var(--color-text-secondary)] text-center max-w-xl mx-auto leading-relaxed">
              After the 7-day free trial, a HomeKeep + subscription is required
              to keep using the app. It renews automatically at the selected
              price until you cancel. Payment is charged to your Apple ID.
              Manage or cancel anytime in your App Store account settings.
              Prices shown in CAD; they may vary by region.{" "}
              <TextLink href="/privacy">Privacy Policy</TextLink>
              {" · "}
              <TextLink href="/terms">Terms of Service</TextLink>
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden py-16 md:py-24 bg-[var(--color-primary)] text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 50% 0%, rgba(255,255,255,0.18), transparent 62%)",
            }}
            aria-hidden
          />
          <Reveal className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-background)]">
                <HouseMark size={36} />
              </div>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Know this house. Keep it.
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
              Download HomeKeep and keep maintenance on a plan—without the
              mental load.
            </p>
            <AppDownloadSection
              appStoreUrl={APP_CONFIG.appStoreUrl}
              variant="secondary"
            />
          </Reveal>
        </section>
      </main>

      <Footer current="home" />
    </div>
  );
}
