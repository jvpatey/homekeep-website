import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactForm from "@/app/support/ContactForm";

export const metadata: Metadata = {
  title: "Support - HomeKeep",
  description:
    "Get help with HomeKeep. Find answers to frequently asked questions, troubleshooting tips, and contact our support team.",
};

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="group border-b border-[var(--color-border)] last:border-b-0 open:bg-[var(--glass-tint)]/30 rounded-lg px-1 -mx-1 transition-colors">
      <summary className="cursor-pointer list-none py-4 pr-2 text-[var(--color-text)] font-medium leading-snug select-none marker:hidden [&::-webkit-details-marker]:hidden flex items-center justify-between gap-3">
        <span>{title}</span>
        <span className="shrink-0 text-[var(--color-text-secondary)] text-lg leading-none group-open:rotate-180 transition-transform duration-200">
          ▼
        </span>
      </summary>
      <div className="pb-4 pl-0.5 text-sm text-[var(--color-text-secondary)] leading-relaxed">
        {children}
      </div>
    </details>
  );
}

export default function Support() {
  return (
    <div className="min-h-screen w-full min-w-0 bg-[var(--color-background)] text-[var(--color-text)]">
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-8 md:pt-16 md:pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-secondary)] mb-2">
          Help
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-3">
          Support
        </h1>
        <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
          Search common questions, try quick fixes, or send us a message—we
          typically reply within 24 hours.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16 md:pb-20">
        {/* Contact + app info */}
        <section
          className="glass-card rounded-3xl p-6 md:p-8 mb-10 md:mb-12 border border-[var(--glass-stroke)]"
          aria-labelledby="contact-heading"
        >
          <h2
            id="contact-heading"
            className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-2"
          >
            Contact us
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8 max-w-2xl">
            Use the form for bugs, account issues, or ideas. Include steps to
            reproduce when reporting a bug.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-7 min-w-0">
              <ContactForm />
            </div>

            <aside className="lg:col-span-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] mb-4">
                App information
              </h3>
              <dl className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 divide-y divide-[var(--color-border)] overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)] shrink-0 sm:w-32">
                    Version
                  </dt>
                  <dd className="text-sm text-[var(--color-text)]">1.3.0</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)] shrink-0 sm:w-32">
                    Platform
                  </dt>
                  <dd className="text-sm text-[var(--color-text)]">
                    iPhone (iOS), available on the App Store.
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)] shrink-0 sm:w-32">
                    Compatibility
                  </dt>
                  <dd className="text-sm text-[var(--color-text)]">
                    iOS 14.0 or later.
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="glass-card rounded-3xl p-6 md:p-8 mb-10 md:mb-12 border border-[var(--glass-stroke)]"
          aria-labelledby="faq-heading"
        >
          <h2
            id="faq-heading"
            className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-2"
          >
            Common questions
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">
            Expand a question to read the answer.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-primary)] mb-3">
                Tasks &amp; schedules
              </h3>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 overflow-hidden px-3 md:px-4">
                <DetailBlock title="How do I create a recurring task?">
                  <p className="pt-3">
                    Tap the &quot;+&quot; button, fill in your task details, then
                    select your desired interval from daily to yearly. HomeKeep
                    will automatically create reminders based on your schedule.
                  </p>
                </DetailBlock>
                <DetailBlock title="How do I delete a task?">
                  <p className="pt-3">
                    To delete individual tasks: Go to Profile Menu → Total
                    Tasks, then tap the garbage icon next to any task. To delete
                    all tasks: Go to Profile Menu → Settings → Delete All Tasks.
                  </p>
                </DetailBlock>
                <DetailBlock title="What categories are available?">
                  <p className="pt-3">
                    HomeKeep includes 9 comprehensive categories: HVAC,
                    Plumbing, Electrical, Appliances, Exterior, Interior,
                    Landscaping, Safety, and General maintenance tasks.
                  </p>
                </DetailBlock>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-primary)] mb-3">
                Notifications &amp; data
              </h3>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 overflow-hidden px-3 md:px-4">
                <DetailBlock title="How do notifications work?">
                  <p className="pt-3">
                    HomeKeep sends you reminders based on your task schedules
                    and due dates. You can enable or disable notifications for
                    different categories in Settings → Notification Preferences
                    to control which types of tasks send you alerts.
                  </p>
                </DetailBlock>
                <DetailBlock title="Is my data backed up?">
                  <p className="pt-3">
                    Yes. Your tasks and settings are securely stored in the
                    cloud using Supabase, so your data is automatically backed
                    up and synced across your devices. You won&apos;t lose your
                    data when you upgrade or restore your device.
                  </p>
                </DetailBlock>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-primary)] mb-3">
                Feedback
              </h3>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 overflow-hidden px-3 md:px-4">
                <DetailBlock title="How do I report a bug or request a feature?">
                  <p className="pt-3">
                    Please use the contact form with details about the issue or
                    your feature request. We read every message and use your
                    feedback to improve HomeKeep.
                  </p>
                </DetailBlock>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section
          className="glass-card rounded-3xl p-6 md:p-8 border border-[var(--glass-stroke)]"
          aria-labelledby="troubleshoot-heading"
        >
          <h2
            id="troubleshoot-heading"
            className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-2"
          >
            Fix an issue
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">
            Quick checks before you write in—especially for notifications (iOS
            steps below).
          </p>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 overflow-hidden px-3 md:px-4">
            <DetailBlock title="Notifications not working">
              <ul className="pt-3 list-disc pl-5 space-y-2 marker:text-[var(--color-primary)]">
                <li>
                  Check that notifications are enabled in Settings →
                  Notifications
                </li>
                <li>
                  Verify HomeKeep has notification permissions in iOS Settings
                </li>
                <li>Ensure Do Not Disturb is not blocking notifications</li>
                <li>Try restarting the app</li>
              </ul>
            </DetailBlock>
            <DetailBlock title="App crashes or feels slow">
              <ul className="pt-3 list-disc pl-5 space-y-2 marker:text-[var(--color-primary)]">
                <li>Force close and restart the app</li>
                <li>Restart your device</li>
                <li>Check for app updates in the App Store</li>
                <li>
                  If issues persist, contact support with your device model and
                  iOS version
                </li>
              </ul>
            </DetailBlock>
            <DetailBlock title="Tasks not appearing">
              <ul className="pt-3 list-disc pl-5 space-y-2 marker:text-[var(--color-primary)]">
                <li>Pull down on the task list to refresh</li>
                <li>
                  Check that the task&apos;s due date is within your current view
                </li>
                <li>
                  Verify the task wasn&apos;t accidentally marked as complete
                </li>
                <li>
                  Try switching between different views (Upcoming, All Tasks)
                </li>
              </ul>
            </DetailBlock>
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-12 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/homekeep-logo.png"
              alt="HomeKeep Logo"
              width={56}
              height={56}
              className="rounded-2xl border border-[var(--glass-stroke)]"
            />
          </div>
          <p className="text-xl font-bold text-[var(--color-text)] mb-1">
            Home
            <span className="text-[var(--color-accent)]">Keep</span>
          </p>
          <p className="text-[var(--color-text-secondary)] mb-8 text-sm">
            Never forget home maintenance again!
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[var(--color-text-secondary)]">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
              Home
            </Link>
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
              className="text-[var(--color-primary)] font-medium"
              aria-current="page"
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
      </footer>
    </div>
  );
}
