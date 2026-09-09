import type { Metadata } from "next";
import ContactForm from "@/app/support/ContactForm";
import FaqItem from "@/app/components/FaqItem";
import Footer from "@/app/components/Footer";
import HoverLift from "@/app/components/HoverLift";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with HomeKeep. Find answers to frequently asked questions, troubleshooting tips, and contact our support team.",
  openGraph: {
    title: "Support — HomeKeep",
    description:
      "Get help with HomeKeep. Find answers to frequently asked questions, troubleshooting tips, and contact our support team.",
    url: "https://homekeep.app/support",
  },
};

export default function Support() {
  return (
    <div
      id="main"
      className="min-h-screen w-full min-w-0 bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <Reveal as="header" className="max-w-6xl mx-auto px-6 pt-12 pb-8 md:pt-16 md:pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-secondary)] mb-2">
          Help
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-3">
          Support
        </h1>
        <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
          Search common questions, try quick fixes, or send us a message—we
          typically reply within 24 hours.
        </p>
      </Reveal>

      <main className="max-w-6xl mx-auto px-6 pb-16 md:pb-20">
        <Reveal className="mb-10 md:mb-12">
        <HoverLift press={false}>
        <section
          className="hearth-card rounded-[22px] p-6 md:p-8"
          aria-labelledby="contact-heading"
        >
          <h2
            id="contact-heading"
            className="font-display text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-2"
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
              <dl className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-field)] divide-y divide-[var(--color-border)] overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)] shrink-0 sm:w-32">
                    Version
                  </dt>
                  <dd className="text-sm text-[var(--color-text)]">2.0.1</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)] shrink-0 sm:w-32">
                    Platform
                  </dt>
                  <dd className="text-sm text-[var(--color-text)]">
                    iPhone and iPad (iOS), available on the App Store.
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)] shrink-0 sm:w-32">
                    Compatibility
                  </dt>
                  <dd className="text-sm text-[var(--color-text)]">
                    iOS 16.4 or later.
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>
        </HoverLift>
        </Reveal>

        <Reveal className="mb-10 md:mb-12">
        <HoverLift press={false}>
        <section
          className="hearth-card rounded-[22px] p-6 md:p-8"
          aria-labelledby="faq-heading"
        >
          <h2
            id="faq-heading"
            className="font-display text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-2"
          >
            Common questions
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">
            Expand a question to read the answer.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-secondary)] mb-3">
                Tasks &amp; schedules
              </h3>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-field)] overflow-hidden px-3 md:px-4">
                <FaqItem title="How do I create a recurring task?">
                  <p className="pt-3">
                    Tap the &quot;+&quot; button, fill in your task details, then
                    choose an interval: Weekly, Monthly, Quarterly, Yearly, or
                    Custom (in days). HomeKeep schedules reminders from that
                    cadence.
                  </p>
                </FaqItem>
                <FaqItem title="How do I delete a task or reset my schedule?">
                  <p className="pt-3">
                    To delete one reminder series: open Profile → All reminders,
                    then tap the trash icon next to the task. To clear every
                    task for this home: open Profile → Settings → Reset this
                    home&apos;s schedule.
                  </p>
                </FaqItem>
                <FaqItem title="What categories are available?">
                  <p className="pt-3">
                    HomeKeep includes 9 categories: HVAC, Plumbing, Electrical,
                    Appliances, Exterior, Interior, Landscaping, Safety, and
                    General.
                  </p>
                </FaqItem>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-secondary)] mb-3">
                HomeKeep + &amp; sharing
              </h3>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-field)] overflow-hidden px-3 md:px-4">
                <FaqItem title="What is HomeKeep +?">
                  <p className="pt-3">
                    HomeKeep + is the subscription that unlocks completing
                    tasks, scheduled reminders, household sharing, home summary
                    export, and most edits after a 7-day free trial. Without an
                    active plan, some information may remain view-only. Manage
                    or cancel anytime in your App Store account settings;
                    restore purchases is available in the app.
                  </p>
                </FaqItem>
                <FaqItem title="How does household sharing work?">
                  <p className="pt-3">
                    Invite someone with a short invite code so they can see the
                    same home schedule and related records. The household owner
                    controls the address, systems, and emergency facts. Only
                    share codes with people you trust.
                  </p>
                </FaqItem>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-secondary)] mb-3">
                Notifications &amp; data
              </h3>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-field)] overflow-hidden px-3 md:px-4">
                <FaqItem title="How do notifications work?">
                  <p className="pt-3">
                    HomeKeep sends reminders based on your task schedules and
                    due dates. Open Profile → Settings → Notification settings
                    to use the master switch and per-category options for
                    Upcoming reminders, Overdue and due today, and Weekly
                    summary.
                  </p>
                </FaqItem>
                <FaqItem title="Is my data backed up?">
                  <p className="pt-3">
                    Yes. Your account and home data sync to the cloud (via
                    Supabase), so they stay available across your signed-in
                    devices and after you upgrade or restore a device.
                  </p>
                </FaqItem>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-secondary)] mb-3">
                Feedback
              </h3>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-field)] overflow-hidden px-3 md:px-4">
                <FaqItem title="How do I report a bug or request a feature?">
                  <p className="pt-3">
                    Please use the contact form with details about the issue or
                    your feature request. We read every message and use your
                    feedback to improve HomeKeep.
                  </p>
                </FaqItem>
              </div>
            </div>
          </div>
        </section>
        </HoverLift>
        </Reveal>

        <Reveal>
        <HoverLift press={false}>
        <section
          className="hearth-card rounded-[22px] p-6 md:p-8"
          aria-labelledby="troubleshoot-heading"
        >
          <h2
            id="troubleshoot-heading"
            className="font-display text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-2"
          >
            Fix an issue
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">
            Quick checks before you write in—especially for notifications (iOS
            steps below).
          </p>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-field)] overflow-hidden px-3 md:px-4">
            <FaqItem title="Notifications not working">
              <ul className="pt-3 list-disc pl-5 space-y-2 marker:text-[var(--color-secondary)]">
                <li>
                  Check that notifications are enabled in Profile → Settings →
                  Notification settings
                </li>
                <li>
                  Verify HomeKeep has notification permissions in iOS Settings
                </li>
                <li>Ensure Focus / Do Not Disturb is not blocking notifications</li>
                <li>Try restarting the app</li>
              </ul>
            </FaqItem>
            <FaqItem title="App crashes or feels slow">
              <ul className="pt-3 list-disc pl-5 space-y-2 marker:text-[var(--color-secondary)]">
                <li>Force close and restart the app</li>
                <li>Restart your device</li>
                <li>Check for app updates in the App Store</li>
                <li>
                  If issues persist, contact support with your device model and
                  iOS version
                </li>
              </ul>
            </FaqItem>
            <FaqItem title="Tasks not appearing">
              <ul className="pt-3 list-disc pl-5 space-y-2 marker:text-[var(--color-secondary)]">
                <li>Pull down on the schedule to refresh</li>
                <li>
                  Check that the task&apos;s due date is within your current view
                </li>
                <li>
                  Verify the task wasn&apos;t accidentally marked as complete
                </li>
                <li>
                  Open Profile → All reminders to confirm the series still exists
                </li>
              </ul>
            </FaqItem>
          </div>
        </section>
        </HoverLift>
        </Reveal>
      </main>

      <Footer current="support" />
    </div>
  );
}
