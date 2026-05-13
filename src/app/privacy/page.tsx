import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - HomeKeep",
  description:
    "Learn about how HomeKeep protects your privacy and handles your data. We're committed to keeping your home maintenance data secure and private.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-100 to-orange-100 dark:from-blue-950 dark:via-teal-950 dark:to-orange-950">
      <main className="max-w-4xl mx-auto px-6 py-12 animate-fade-in-up">
        <div className="glass-card rounded-lg p-8 prose max-w-none animate-scale-in animation-delay-150">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Last updated: May 11, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              HomeKeep (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, and safeguard your information when you use
              the HomeKeep mobile application (iOS and Android) and our website
              at homekeep.app (together, the &quot;Services&quot;).
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Simple summary:</strong> We use service providers such as
              Supabase to host your account and app data. We do not sell your
              personal information. We use additional providers only where needed
              to operate specific features (for example weather, optional address
              search, push notifications, or our support form and website
              analytics), as described below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Information We Collect
            </h2>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Account and authentication
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
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

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              App content and activity
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li>
                • <strong>Tasks and maintenance data:</strong> Task names,
                descriptions, due dates, priorities, categories, completion
                status, recurring rules, and related maintenance information.
              </li>
              <li>
                • <strong>Guided plans and routines:</strong> Data you generate
                when using seasonal or guided maintenance plans (for example
                questionnaire answers and applied routines).
              </li>
              <li>
                • <strong>Profile and settings:</strong> Display name and
                profile fields stored with your account; notification
                preferences; app customization; device timezone saved to help
                schedule reminders accurately.
              </li>
              <li>
                • <strong>Optional home address:</strong> Address fields and
                coordinates you choose to save for display and for local weather
                (see Location and address below).
              </li>
              <li>
                • <strong>Push notifications:</strong> A push token associated
                with your device may be stored so we can send reminder
                notifications you have opted into.
              </li>
              <li>
                • <strong>Optional equipment manuals:</strong> PDF files and
                related metadata you upload to your account; if you attach an
                image, we process the image you select from your camera or photo
                library solely for that upload.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Website
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
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
                  className="text-teal-700 dark:text-teal-400 underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel Analytics
                </a>{" "}
                and{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  className="text-teal-700 dark:text-teal-400 underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel&apos;s privacy policy
                </a>
                .
              </li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Location and address
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              HomeKeep does <strong>not</strong> continuously track your GPS
              location in the background. If you choose to save a home address,
              we store the address and may store coordinates derived from it to
              show local weather on your dashboard.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When you use address autocomplete (if enabled in the app), search
              text you type may be sent to{" "}
              <a
                href="https://www.mapbox.com/legal/privacy"
                className="text-teal-700 dark:text-teal-400 underline hover:no-underline"
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
                className="text-teal-700 dark:text-teal-400 underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open-Meteo
              </a>{" "}
              over an encrypted connection.
            </p>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              What we don&apos;t do
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use the information above to operate the Services, including to:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>
                • Authenticate you, sync your tasks and settings across devices,
                and maintain your account.
              </li>
              <li>
                • Send push or local notifications according to your preferences
                and schedules.
              </li>
              <li>
                • Show optional dashboard features such as weather when you have
                saved location information.
              </li>
              <li>• Store optional manuals and attachments you upload.</li>
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Storage and Security
            </h2>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Cloud storage with Supabase
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your account data, tasks, settings, push token, address fields, and
              uploaded manuals are stored in Supabase (database and, for files,
              Supabase Storage). Supabase provides security measures including
              encryption in transit and at rest for data they host. See{" "}
              <a
                href="https://supabase.com/privacy"
                className="text-teal-700 dark:text-teal-400 underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Supabase&apos;s privacy policy
              </a>
              .
            </p>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Encryption and access
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Notifications
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              HomeKeep may send reminders using your device&apos;s notification
              system. Some reminders are delivered as{" "}
              <strong>remote push notifications</strong>: a push token tied to
              your device can be stored with your profile so our backend or
              scheduled jobs can trigger notifications you have enabled (for
              example due or summary reminders). Delivery may involve{" "}
              <strong>Apple Push Notification service</strong> (iOS) or{" "}
              <strong>Firebase Cloud Messaging</strong> (Android) as part of the
              normal operation of your device platform.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              You can control notification permissions in your device settings
              and adjust notification preferences inside the app where
              available.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Service providers (subprocessors)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We share personal information with vendors only as needed to
              operate the Services. These include:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
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
                • <strong>Apple</strong> — Sign in with Apple and push
                delivery on Apple devices.
              </li>
              <li>
                • <strong>Google</strong> — push delivery on Android devices
                (Firebase Cloud Messaging), when you use the app on Android.
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
            <p className="text-gray-600 dark:text-gray-300">
              Each provider processes data under its own terms and privacy
              policy. We do not authorize them to use your personal information
              for their own marketing unrelated to providing their services to
              us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Analytics and advertising
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The HomeKeep mobile app, as published, does not integrate
              third-party in-app analytics or advertising SDKs for behavioral
              tracking.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Our marketing website uses Vercel Analytics for aggregate visit and
              performance metrics, as described above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              HomeKeep is not directed to children under 13 years of age. We do
              not knowingly collect personal information from children under 13.
              If you are a parent or guardian and believe your child has
              provided information to us, please contact us through our support
              page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Depending on where you live, you may have rights to access,
              correct, delete, or port your personal data. In general you can:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>
                • <strong>Access and modify:</strong> View and edit tasks,
                settings, and profile information in the app.
              </li>
              <li>
                • <strong>Delete content:</strong> Remove individual tasks or
                other items you have created.
              </li>
              <li>
                • <strong>Delete your account:</strong> Use the account deletion
                option in the app, when available, to request deletion of your
                account and associated data processed through our backend. You
                may also contact support for assistance.
              </li>
              <li>
                • <strong>Export:</strong> Request a copy of your data by
                contacting support; we will respond subject to applicable law.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may update this Privacy Policy from time to time. When we do,
              we will post the updated policy on this page and update the
              &quot;Last updated&quot; date at the top.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Continued use of the Services after any changes constitutes
              acceptance of the updated Privacy Policy, to the extent permitted
              by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or
              HomeKeep&apos;s privacy practices, please visit our support page to
              get in touch.
            </p>
            <div className="flex justify-center">
              <Link
                href="/support"
                className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Contact Support
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/homekeep-logo.png"
              alt="HomeKeep Logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
          </div>
          <p className="text-gray-400 mb-4">
            HomeKeep - Never forget home maintenance again!
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/support"
              className="hover:text-white transition-colors"
            >
              Support
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
