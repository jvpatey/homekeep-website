import Link from "next/link";
import AppDownloadSection from "./components/AppDownloadSection";
import Footer from "./components/Footer";
import HouseMark, { Wordmark } from "./components/HouseMark";
import IPhoneDashboardPreview from "./components/IPhoneDashboardPreview";
import { APP_CONFIG } from "./config/app";

const FEATURES = [
  {
    text: "Organize",
    subtitle: "Everything this house needs, in one place",
    description:
      "Create, organize, and manage home maintenance tasks with priorities, due dates, and categories—without the spreadsheet.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    ),
  },
  {
    text: "Schedule",
    subtitle: "Reminders that keep the cycle moving",
    description:
      "Never forget gutters, filters, or HVAC service. Recurring schedules from daily to yearly, with notifications you actually want.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    text: "Track",
    subtitle: "A history you can hand someone",
    description:
      "See what got done, when, and by whom. Build a complete record for insurance, listings, or the next person who lives here.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
] as const;

const CHECKLIST = [
  {
    title: "Printable home summary",
    body: "Export a PDF with your address, equipment, and completion history—handy for insurance, listings, or your records.",
  },
  {
    title: "Recurring schedules",
    body: "Custom intervals from daily to yearly, so the next cycle starts itself.",
  },
  {
    title: "Nine home categories",
    body: "HVAC, plumbing, electrical, appliances, and more—organized the way a house actually works.",
  },
  {
    title: "Priority that reads at a glance",
    body: "Low, medium, and high—so you know what cannot wait.",
  },
  {
    title: "Smart notifications",
    body: "Preferences per category, so the right reminders reach you.",
  },
  {
    title: "Shared household",
    body: "Invite the people who live here. One home, one plan.",
  },
] as const;

const PLUS_VALUES = [
  "Personalized reminders for this home",
  "Equipment manuals and a shared household",
  "The next cycle of the schedule, automatically",
];

const BENTO_SPANS = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
] as const;

export default function Home() {
  return (
    <div className="min-h-screen w-full min-w-0 relative overflow-x-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      <main id="main">
        <section className="relative w-full px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="hero-halo" aria-hidden />
          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10 lg:gap-12">
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full max-w-lg mx-auto lg:mx-0">
                <div className="mb-8 animate-hero-group" aria-hidden>
                  <Wordmark
                    markSize={44}
                    textClassName="text-xl md:text-2xl"
                  />
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[var(--color-text)] mb-5 leading-[1.08] animate-hero-delay-1">
                  Home maintenance,
                  <br />
                  handled.
                </h1>
                <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mb-4 max-w-md lg:max-w-lg leading-relaxed animate-hero-delay-2">
                  Reminders, history, and a plan — without the mental load.
                </p>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-8 tracking-wide animate-hero-delay-2">
                  Organize · Schedule · Track
                </p>

                <div className="animate-hero-delay-2 w-full flex justify-center lg:justify-start">
                  <AppDownloadSection
                    appStoreUrl={APP_CONFIG.appStoreUrl}
                    variant="primary"
                    className="items-center lg:items-start"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center shrink-0 w-full max-w-[min(100%,300px)] mx-auto lg:mx-0 animate-hero-delay-2">
                <IPhoneDashboardPreview />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[var(--color-background)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
                A plan for the whole house
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
                Organize what matters, see what&apos;s due, and stay ahead
                without the spreadsheet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-5 md:mb-6">
              {FEATURES.map((feature) => (
                <article
                  key={feature.text}
                  className="hearth-card rounded-[22px] p-6 md:p-7 flex flex-col"
                >
                  <div className="glass-icon-chip mb-5 w-11 h-11 rounded-2xl">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[var(--color-text)] mb-1">
                    {feature.text}
                  </h3>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">
                    {feature.subtitle}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
              {CHECKLIST.map((item, i) => (
                <article
                  key={item.title}
                  className={`hearth-card hearth-hover rounded-2xl p-5 md:p-6 flex flex-col min-h-[140px] ${BENTO_SPANS[i]}`}
                >
                  <svg
                    className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mb-3"
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
                  <h3 className="font-semibold text-[var(--color-text)] text-base leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-auto">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="py-16 md:py-24 bg-[var(--color-background)] scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-14">
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
            </div>

            <ul className="max-w-lg mx-auto mb-10 space-y-3">
              {PLUS_VALUES.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-[var(--color-text)]"
                >
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
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto mb-10">
              <article className="hearth-card rounded-[22px] p-6 md:p-8 relative ring-2 ring-[var(--color-primary)]">
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

              <article className="hearth-card rounded-[22px] p-6 md:p-8">
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
            </div>

            <div className="flex justify-center mb-8">
              <AppDownloadSection appStoreUrl={APP_CONFIG.appStoreUrl} />
            </div>

            <p className="text-xs text-[var(--color-text-secondary)] text-center max-w-xl mx-auto leading-relaxed">
              After the 7-day free trial, a HomeKeep + subscription is required
              to keep using the app. It renews automatically at the selected
              price until you cancel. Payment is charged to your Apple ID.
              Manage or cancel anytime in your App Store account settings.
              Prices shown in USD; they may vary by region.{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 hover:text-[var(--color-primary)]"
              >
                Privacy Policy
              </Link>
              {" · "}
              <Link
                href="/terms"
                className="underline underline-offset-2 hover:text-[var(--color-primary)]"
              >
                Terms of Service
              </Link>
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[var(--color-primary)] text-white">
          <div className="max-w-3xl mx-auto text-center px-6">
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
          </div>
        </section>
      </main>

      <Footer current="home" />
    </div>
  );
}
