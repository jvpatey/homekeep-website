import type { Metadata } from "next";
import CtaButton from "@/app/components/CtaButton";
import Footer from "@/app/components/Footer";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn about how HomeKeep protects your privacy and handles your data. We're committed to keeping your home maintenance data secure and private.",
  openGraph: {
    title: "Privacy Policy — HomeKeep",
    description:
      "Learn about how HomeKeep protects your privacy and handles your data.",
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
          Privacy Policy
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Last updated: September 5, 2026
        </p>
      </Reveal>

      <main className="max-w-4xl mx-auto px-6 pb-16 md:pb-20">
        <Reveal as="article" className="hearth-card rounded-[22px] p-6 md:p-8 max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Overview
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              HomeKeep (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, and safeguard your information when you use
              the HomeKeep mobile application for iOS and our website
              at homekeep.app (together, the &quot;Services&quot;).
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              <strong>Simple summary:</strong> We use service providers such as
              Supabase to host your account and app data, and RevenueCat with
              the App Store to manage HomeKeep + subscriptions. We do not sell
              your personal information. We use additional providers only where
              needed to operate specific features (for example weather, optional
              address search, push notifications, household sharing, or our
              support form and website analytics), as described below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Information We Collect
            </h2>

            <h3 className="text-lg font-medium text-[var(--color-text)] mb-3">
              Account and authentication
            </h3>
            <ul className="text-[var(--color-text-secondary)] leading-relaxed space-y-2 mb-4">
              <li>
                • <strong>Email and password:</strong> If you register with
                email, your email address and credentials are processed through
                Supabase Auth.
              </li>
              <li>
                • <strong>Sign in with Apple:</strong> If you use Apple Sign-In,
                Apple may share an account identifier and, when permitted, your
                name or email with us via Supabase; we use that to create or
                link your account.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-[var(--color-text)] mb-3">
              App content and activity
            </h3>
            <ul className="text-[var(--color-text-secondary)] leading-relaxed space-y-2 mb-4">
              <li>
                • <strong>Tasks and maintenance data:</strong> Task names,
                descriptions, due dates, priorities, categories, completion
                status, recurring rules, notes, optional cost or labor type,
                optional completion photos, and who marked an item complete.
              </li>
              <li>
                • <strong>Guided plans and home systems:</strong> Data you
                generate when using seasonal or guided maintenance plans (for
                example questionnaire answers, applied routines, and home-system
                or zone selections).
              </li>
              <li>
                • <strong>Profile and settings:</strong> Display name and
                profile fields stored with your account; optional profile photo
                or avatar style; notification preferences; app customization;
                device timezone saved to help schedule reminders accurately.
              </li>
              <li>
                • <strong>Optional home address:</strong> Address fields and
                coordinates you choose to save for display and for local weather
                (see Location and address below).
              </li>
              <li>
                • <strong>Emergency facts:</strong> Optional notes and photos
                you save for this home (for example water shutoff, breaker
                panel, or gas shutoff) so they are easy to find later.
              </li>
              <li>
                • <strong>Household sharing:</strong> If you create or join a
                shared household, we store membership, roles (owner or member),
                and an invite code. Members can see the shared schedule, home
                details the owner has saved, equipment, and other members&apos;
                names, emails, and profile photos.
              </li>
              <li>
                • <strong>Push notifications:</strong> A push token associated
                with your device may be stored so we can send reminder
                notifications you have opted into, including household events
                such as someone joining or leaving.
              </li>
              <li>
                • <strong>Optional equipment files:</strong> PDF or photo
                manuals and purchase receipts, plus related metadata (such as
                equipment name, model, and purchase date) you upload to your
                account; if you attach an image, we process the image you select
                from your camera or photo library solely for that upload.
              </li>
              <li>
                • <strong>HomeKeep +:</strong> Subscription status (for example
                trial, active, or expired), product identifiers, and related
                dates so we can unlock the app after the free trial and share
                access with your current household.
              </li>
              <li>
                • <strong>Home summary export:</strong> When you generate a
                printable home summary, the app assembles a report from your
                stored tasks, optional address, and equipment data, then creates
                a PDF on your device. We do not upload that PDF to our servers
                unless you save or share it outside the app.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-[var(--color-text)] mb-3">
              Website
            </h3>
            <ul className="text-[var(--color-text-secondary)] leading-relaxed space-y-2 mb-4">
              <li>
                • <strong>Support form:</strong> Name, email, subject, and
                message when you contact us through homekeep.app.
              </li>
              <li>
                • <strong>Site analytics:</strong> Our website uses Vercel
                Analytics to collect privacy-focused, aggregate usage and
                performance metrics about visits to homekeep.app (not sold for
                advertising). See{" "}
                <a
                  href="https://vercel.com/docs/analytics"
                  className="text-[var(--color-primary)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel Analytics
                </a>{" "}
                and{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  className="text-[var(--color-primary)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel&apos;s privacy policy
                </a>
                .
              </li>
            </ul>

            <h3 className="text-lg font-medium text-[var(--color-text)] mb-3">
              Location and address
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              HomeKeep does <strong>not</strong> continuously track your GPS
              location in the background. If you choose to save a home address,
              we store the address and may store coordinates derived from it to
              show local weather on your dashboard.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              When you use address autocomplete (if enabled in the app), search
              text you type may be sent to{" "}
              <a
                href="https://www.mapbox.com/legal/privacy"
                className="text-[var(--color-primary)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mapbox
              </a>{" "}
              to return suggestions. When we resolve coordinates or fetch
              weather, limited location-related parameters (such as city or
              coordinates) are sent to{" "}
              <a
                href="https://open-meteo.com/en/terms"
                className="text-[var(--color-primary)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open-Meteo
              </a>{" "}
              over an encrypted connection.
            </p>

            <h3 className="text-lg font-medium text-[var(--color-text)] mb-3">
              What we don&apos;t do
            </h3>
            <ul className="text-[var(--color-text-secondary)] leading-relaxed space-y-2">
              <li>
                • We do not sell your personal information or use it for
                cross-app behavioral advertising.
              </li>
              <li>
                • We do not read your device contacts or access your photo
                library except when you explicitly choose a photo or PDF for an
                upload.
              </li>
              <li>
                • The mobile app does not embed third-party analytics or
                advertising SDKs for tracking your in-app behavior.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              We use the information above to operate the Services, including to:
            </p>
            <ul className="text-[var(--color-text-secondary)] leading-relaxed space-y-2">
              <li>
                • Authenticate you, sync your tasks and settings across devices,
                and maintain your account.
              </li>
              <li>
                • Send push or local notifications according to your preferences
                and schedules, including household events you have enabled.
              </li>
              <li>
                • Show optional dashboard features such as weather when you have
                saved location information.
              </li>
              <li>
                • Store optional equipment manuals, receipts, emergency facts,
                completion photos, and related attachments you upload.
              </li>
              <li>
                • Let you share one home and schedule with people you invite,
                and apply a HomeKeep + subscription to that household.
              </li>
              <li>
                • Process HomeKeep + purchases and restore subscription access
                through the App Store and RevenueCat.
              </li>
              <li>
                • Respond to support requests and improve reliability and
                security.
              </li>
              <li>
                • Measure aggregate traffic and performance on our website
                (Vercel Analytics).
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Data Storage and Security
            </h2>

            <h3 className="text-lg font-medium text-[var(--color-text)] mb-3">
              Cloud storage with Supabase
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Your account data, tasks, settings, household membership, HomeKeep
              + entitlement status, push token, address fields, emergency facts,
              profile photos, and uploaded equipment manuals, receipts, and
              completion photos are stored in Supabase (database and, for files,
              Supabase Storage). Supabase provides security measures including
              encryption in transit and at rest for data they host. See{" "}
              <a
                href="https://supabase.com/privacy"
                className="text-[var(--color-primary)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                Supabase&apos;s privacy policy
              </a>
              .
            </p>

            <h3 className="text-lg font-medium text-[var(--color-text)] mb-3">
              Encryption and access
            </h3>
            <ul className="text-[var(--color-text-secondary)] leading-relaxed space-y-2">
              <li>
                • Data is transmitted between the app and our servers using
                encryption in transit (for example TLS/HTTPS). This is not the
                same as end-to-end encryption where only you hold the keys; our
                service providers process data as needed to provide the Services.
              </li>
              <li>• Secure authentication and access controls on your account.</li>
              <li>• Industry-standard practices for hosting and backups.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Notifications
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              HomeKeep may send reminders using your device&apos;s notification
              system. Some reminders are delivered as{" "}
              <strong>remote push notifications</strong>: a push token tied to
              your device can be stored with your profile so our backend or
              scheduled jobs can trigger notifications you have enabled (for
              example due or summary reminders). On iOS, delivery uses{" "}
              <strong>Apple Push Notification service</strong> as part of the
              normal operation of your device platform.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              You can control notification permissions in your device settings
              and adjust notification preferences inside the app where
              available. Scheduled reminder notifications are part of HomeKeep +
              after the free trial.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              HomeKeep + and purchases
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              After a 7-day free trial, a HomeKeep + subscription is required to
              keep using core features such as completing tasks, reminders,
              sharing a household, and most edits. Without an active
              subscription you may still be able to view some information in
              the app.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Purchases are processed by Apple through the App Store. We use{" "}
              <a
                href="https://www.revenuecat.com/privacy"
                className="text-[var(--color-primary)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                RevenueCat
              </a>{" "}
              to recognize your subscription, restore purchases, and apply
              access to your current household. We do not receive your full
              payment card number. Apple charges your Apple ID; you manage or
              cancel in your App Store account settings.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Prices shown on our website are in CAD and may vary by region.
              The price you pay is the one shown in the App Store at checkout.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Household sharing
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              HomeKeep is organized around one home. If you invite others, they
              join that household with a short invite code. The household owner
              is the source of truth for the home address, systems, and
              emergency facts. Members can work the shared schedule and see
              shared equipment, but they cannot change those owner home fields.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              A HomeKeep + subscription purchased for a household applies to
              people currently in that household. If you leave a household, you
              stop seeing that home&apos;s shared plan.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Service providers (subprocessors)
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              We share personal information with vendors only as needed to
              operate the Services. These include:
            </p>
            <ul className="text-[var(--color-text-secondary)] leading-relaxed space-y-2 mb-4">
              <li>
                • <strong>Supabase</strong> — authentication, database, file
                storage, and related infrastructure.
              </li>
              <li>
                • <strong>Open-Meteo</strong> — geocoding and weather when you
                use address or weather features.
              </li>
              <li>
                • <strong>Mapbox</strong> — optional address search
                suggestions when that feature is configured in the app.
              </li>
              <li>
                • <strong>Apple</strong> — Sign in with Apple, App Store
                billing for HomeKeep +, and push delivery on Apple devices
                (Apple Push Notification service).
              </li>
              <li>
                • <strong>RevenueCat</strong> — subscription status,
                entitlements, and restore-purchase support for HomeKeep +.
              </li>
              <li>
                • <strong>Expo</strong> — push token registration and related
                notification infrastructure used by the app.
              </li>
              <li>
                • <strong>Vercel</strong> — hosting and analytics for
                homekeep.app.
              </li>
              <li>
                • <strong>Resend</strong> — delivering support emails when you
                use the website contact form.
              </li>
            </ul>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Each provider processes data under its own terms and privacy
              policy. We do not authorize them to use your personal information
              for their own marketing unrelated to providing their services to
              us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Analytics and advertising
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              The HomeKeep mobile app, as published, does not integrate
              third-party in-app analytics or advertising SDKs for behavioral
              tracking.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Our marketing website uses Vercel Analytics for aggregate visit and
              performance metrics, as described above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              HomeKeep is not directed to children under 13 years of age. We do
              not knowingly collect personal information from children under 13.
              If you are a parent or guardian and believe your child has
              provided information to us, please contact us through our support
              page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Your Rights
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Depending on where you live, you may have rights to access,
              correct, delete, or port your personal data. In general you can:
            </p>
            <ul className="text-[var(--color-text-secondary)] leading-relaxed space-y-2">
              <li>
                • <strong>Access and modify:</strong> View and edit tasks,
                settings, and profile information in the app.
              </li>
              <li>
                • <strong>Delete content:</strong> Remove individual tasks or
                other items you have created.
              </li>
              <li>
                • <strong>Delete your account:</strong> Use Delete account in
                Settings to remove your login, profile, tasks, notification
                data, and profile photos. Equipment files, household records, or
                subscription records may need extra cleanup. Contact support if
                you want us to confirm that related data has been removed.
                Cancelling HomeKeep + is done in your App Store account
                settings and is separate from deleting your HomeKeep account.
              </li>
              <li>
                • <strong>Export:</strong> Request a copy of your data by
                contacting support; we will respond subject to applicable law.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. When we do,
              we will post the updated policy on this page and update the
              &quot;Last updated&quot; date at the top.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Continued use of the Services after any changes constitutes
              acceptance of the updated Privacy Policy, to the extent permitted
              by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
              Contact Us
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or
              HomeKeep&apos;s privacy practices, please visit our support page to
              get in touch.
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
