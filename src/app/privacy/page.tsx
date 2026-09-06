import type { Metadata } from "next";
import CtaButton from "@/app/components/CtaButton";
import Footer from "@/app/components/Footer";
import Reveal from "@/app/components/Reveal";
import { APP_CONFIG } from "@/app/config/app";

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
          Last updated: 5 September 2026
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
              Home and schedule
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We store the home details you enter (address, climate-related
              location, equipment, manuals, emergency facts, tasks, and
              completion notes or photos). Address text may be sent to Mapbox to
              suggest places. Coordinates derived from your address are used to
              show weather-related reminders (Open-Meteo). We do not collect GPS
              from the device for this.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Household sharing
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              If you create or join a household, members can see that home’s
              schedule and related records. Invite codes are meant to be shared
              only with people you trust.
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
              Photos you choose for a profile, equipment, emergency facts, or a
              completed task are stored so they appear in the app. We do not use
              your photo library for advertising.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Service providers
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We use Supabase to host accounts and data, Mapbox for address
              search, Open-Meteo for weather, RevenueCat and Apple or Google for
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
              For privacy questions, use the HomeKeep contact email on the App
              Store product page, or email{" "}
              <a
                href={`mailto:${APP_CONFIG.contact.email}`}
                className="text-[var(--color-primary)] underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                {APP_CONFIG.contact.email}
              </a>
              .
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
