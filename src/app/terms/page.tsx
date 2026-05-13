import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - HomeKeep",
  description:
    "Read the terms of service for using HomeKeep. Learn about your rights and responsibilities when using our home maintenance tracking app.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-100 to-orange-100 dark:from-blue-950 dark:via-teal-950 dark:to-orange-950">
      <main className="max-w-4xl mx-auto px-6 py-12 animate-fade-in-up">
        <div className="glass-card rounded-lg p-8 prose max-w-none animate-scale-in animation-delay-150">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Last updated: May 11, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By downloading, installing, or using the HomeKeep mobile
              application (&quot;the App&quot;), or by accessing or using our
              website at homekeep.app (the &quot;Site&quot;), you agree to be
              bound by these Terms of Service (&quot;Terms&quot;). Together the
              App and the Site are the &quot;Services.&quot; If you do not agree
              to these Terms, please do not use the Services.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              These Terms constitute a legal agreement between you and HomeKeep
              regarding your use of the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Description of Service
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              HomeKeep helps you organize, schedule, and track home maintenance.
              The App may include, depending on version and configuration:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Task creation, editing, completion, and history</li>
              <li>• Recurring tasks and maintenance routines</li>
              <li>
                • Guided maintenance plans (for example seasonal or starter plans)
              </li>
              <li>
                • Reminders via push notifications and device notifications, based
                on your preferences
              </li>
              <li>
                • Optional home address and a weather summary on the dashboard
              </li>
              <li>
                • Optional equipment manuals (for example PDF storage and viewing)
              </li>
              <li>
                • Multiple maintenance categories (such as HVAC, Plumbing,
                Electrical, and related groupings)
              </li>
              <li>• Sync of your data across devices when you sign in</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              The Site provides information about HomeKeep, links to app stores,
              and a way to contact support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              License and Use
            </h2>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              License Grant
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subject to these Terms, we grant you a limited, non-exclusive,
              non-transferable, revocable license to use the App for personal,
              non-commercial purposes on supported mobile devices (including
              iOS and Android).
            </p>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Restrictions
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You agree not to:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>
                • Modify, reverse engineer, or attempt to extract source code
                from the App
              </li>
              <li>
                • Use the Services for any illegal or unauthorized purpose
              </li>
              <li>• Distribute, sell, or sublicense the App</li>
              <li>• Remove or alter any proprietary notices in the App</li>
              <li>
                • Use the Services in a way that could damage or impair our
                systems or other users
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              User Data and Privacy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your use of the Services is also governed by our{" "}
              <Link
                href="/privacy"
                className="text-teal-700 dark:text-teal-400 underline hover:no-underline"
              >
                Privacy Policy
              </Link>
              . By using the Services, you acknowledge that you have read and
              understood the Privacy Policy.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>Key points:</strong> We use service providers (such as
              Supabase for hosting your account and data, and others described in
              the Privacy Policy) to operate the Services. Those providers
              process personal information only as needed to provide their
              services to us. We do not sell your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Push notifications and platform services
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Push notifications depend on your device platform. Delivery may use
              services operated by Apple (for example Apple Push Notification
              service on iOS) or Google (for example Firebase Cloud Messaging on
              Android), subject to those companies&apos; terms and policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Disclaimers and Limitations
            </h2>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Availability
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The Services are provided &quot;as is&quot; without warranties of
              any kind, to the fullest extent permitted by law. We do not
              guarantee uninterrupted or error-free operation.
            </p>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Maintenance Responsibility
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>Important:</strong> HomeKeep is a tool to help you
              organize and remember maintenance tasks. You are solely responsible
              for:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Performing actual maintenance on your property</li>
              <li>
                • Ensuring the safety and proper functioning of your home
                systems
              </li>
              <li>• Following manufacturer guidelines and local codes</li>
              <li>• Seeking professional help when needed</li>
              <li>
                • Verifying the accuracy and completeness of your maintenance
                schedules
              </li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              No Professional Advice
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              HomeKeep does not provide professional maintenance, repair, or
              safety advice. Always consult qualified professionals for complex
              maintenance tasks, safety concerns, or when in doubt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              To the maximum extent permitted by law, HomeKeep and its
              developers shall not be liable for any direct, indirect,
              incidental, special, or consequential damages resulting from:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Use or inability to use the Services</li>
              <li>• Property damage due to missed or inadequate maintenance</li>
              <li>• Data loss or corruption</li>
              <li>• Any errors or omissions in the Services</li>
              <li>• Any other matter relating to the Services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Updates and Changes
            </h2>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              App and Site Updates
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may release updates to improve functionality, security, or
              performance. You are responsible for installing App updates from
              your app store when prompted.
            </p>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Terms Updates
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We may modify these Terms at any time. Updated Terms will be
              posted on this page with a new &quot;Last updated&quot; date.
              Continued use of the Services after changes constitutes acceptance
              of the updated Terms, to the extent permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Termination
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You may stop using the App at any time by deleting it from your
              device. You may stop using the Site by closing your browser. We may
              suspend or terminate access to the Services if you violate these
              Terms.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Upon termination, your license to use the App ends. You may delete
              your account and associated data through the App where that
              feature is offered, or contact support for assistance. Retention of
              certain records may apply as described in our Privacy Policy or as
              required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Governing Law and Disputes
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              These Terms are governed by applicable law. If you have a concern,
              please contact us first through our support page so we can try to
              resolve it.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Specific rules for governing law, venue, arbitration, class actions,
              or similar matters may depend on your location and applicable
              regulations. Those details may be updated here after review by
              qualified legal counsel.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please
              visit our support page to get in touch.
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

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Acceptance
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              By using the Services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service.
            </p>
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
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
