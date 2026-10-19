import type { Metadata } from "next";
import CtaButton from "@/app/components/CtaButton";
import Footer from "@/app/components/Footer";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "HomeKeep does not sell your personal information. This policy explains what we collect for accounts, home schedules, sharing, purchases, and notifications.",
  openGraph: {
    title: "Privacy Policy — HomeKeep",
    description:
      "What HomeKeep collects and why. We do not sell your personal information or use it for advertising.",
    url: "https://homekeep.app/privacy",
  },
};

export default function Privacy() {
  return (
    <div
      id="main"
      className="min-h-screen w-full min-w-0 bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <Reveal as="header" className="max-w-4xl mx-auto px-6 pt-12 pb-8 md:pt-16 md:pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-secondary)] mb-2">
          Legal
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-3">
          HomeKeep Privacy Policy
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Last updated: 18 October 2026
        </p>
      </Reveal>

      <main className="max-w-4xl mx-auto px-6 pb-16 md:pb-20">
        <Reveal as="article" className="hearth-card rounded-[22px] p-6 md:p-8 max-w-none">
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
            HomeKeep (“we”, “the app”) helps you keep a home maintenance
            schedule. This policy describes what we collect and why. We do not
            sell your personal information and we do not use it for advertising
            or tracking across other companies’ apps or websites.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Account
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              When you create an account we store your email address and, if you
              add them, your name and profile photo. Sign-in may use Apple or
              Google. We use this to authenticate you and sync your home.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Biometric sign-in
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Face ID or Touch ID is optional. If you turn it on, a refresh
              token is stored in the device Secure Store so you can unlock the
              app after a local sign-out. We do not receive your biometric
              data—Apple processes Face ID and Touch ID on the device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Home and schedule
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We store the home details you enter (address, climate-related
              location, equipment, emergency facts, tasks, completion notes or
              photos, and related home-record fields). Address text may be sent
              to Mapbox to suggest places. Coordinates derived from your address
              are used to show weather-related reminders (Open-Meteo). We do not
              collect GPS from the device for this.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Documents
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Manuals, receipts, warranties, inspection reports, permits, and
              other files you upload are stored with the home so they appear in
              the app for you and household members you invite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Keeper and AI features
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              When you use Keeper, label scan, or inspection import, relevant
              home data and/or images you submit are sent through our backend to
              Google Gemini to generate an answer or extract fields. That data
              is used only to fulfill the request. Use may be limited by free
              quotas or require HomeKeep +.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Recalls
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Equipment identifiers you save (for example brand, model, or
              serial) may be checked against recall sources for your country,
              such as Health Canada or United States recall data, so we can show
              alerts in the app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Calendar feeds
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              If you subscribe to a maintenance calendar feed, a private token
              lets your calendar app fetch due dates and task titles. Anyone
              with that link could read those details—treat it like a password
              and revoke or regenerate it in Settings if it is shared by
              mistake.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Widgets
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              The Home Screen widget reads a schedule snapshot written to an App
              Group on your device. That snapshot is not sent elsewhere for the
              widget.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Household sharing
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              If you create or join a household, members can see that home’s
              schedule and related records. Invite codes and QR invites are
              meant to be shared only with people you trust.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Purchases
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              HomeKeep + subscriptions are processed by Apple or Google. We
              receive entitlement status (for example trial or subscribed)
              through RevenueCat so we can unlock features. We do not store your
              full card number. Prices are charged in the currency of your store
              account (Canadian dollars for the Canadian App Store).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Notifications
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              If you allow notifications, we store a device push token so we can
              send reminders you opted into. You can turn these off in the app
              or in system settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Photos and camera
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Photos you choose for a profile, equipment, emergency facts, a
              completed task, or AI features (for example a nameplate or
              document scan) are stored or processed as described in this policy
              so they appear in the app or fulfill the request. We do not use
              your photo library for advertising.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Service providers
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We use Supabase to host accounts and data, Mapbox for address
              search, Open-Meteo for weather, Google (Gemini) for Keeper and
              related AI features, RevenueCat and Apple or Google for
              subscriptions, and Expo/Apple for push delivery. They process data
              only to provide those services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Retention and deletion
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We keep your data while your account exists. You can delete your
              account in Settings, which removes your HomeKeep data from our
              systems. Store subscriptions must be cancelled in your Apple or
              Google account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Children
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              HomeKeep is not directed at children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Contact
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              For privacy questions, visit our support page to get in touch.
            </p>
            <div className="flex justify-center">
              <CtaButton href="/support">Contact Support</CtaButton>
            </div>
          </section>
        </Reveal>
      </main>

      <Footer current="privacy" />
    </div>
  );
}
