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
      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="glass-card rounded-lg p-8 prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By downloading, installing, or using the HomeKeep mobile
              application (&quot;the App&quot;), you agree to be bound by these
              Terms of Service (&quot;Terms&quot;). If you do not agree to these
              Terms, please do not use the App.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              These Terms constitute a legal agreement between you and HomeKeep
              regarding your use of the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Description of Service
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              HomeKeep is a mobile application designed to help you organize,
              schedule, and track home maintenance tasks. The App provides
              features including:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Task creation and management</li>
              <li>• Recurring task scheduling</li>
              <li>• Notification reminders</li>
              <li>• Progress tracking and completion history</li>
              <li>
                • Nine maintenance categories (HVAC, Plumbing, Electrical, etc.)
              </li>
            </ul>
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
              non-transferable, revocable license to use HomeKeep for personal,
              non-commercial purposes on your iOS device.
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
              <li>• Use the App for any illegal or unauthorized purpose</li>
              <li>• Distribute, sell, or sublicense the App</li>
              <li>• Remove or alter any proprietary notices in the App</li>
              <li>
                • Use the App in a way that could damage or impair our services
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              User Data and Privacy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your use of HomeKeep is also governed by our Privacy Policy. By
              using the App, you acknowledge that you have read and understood
              our Privacy Policy.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Key Points:</strong> Your task data is stored securely in
              our cloud database (Supabase) to enable syncing across devices. We
              only collect information necessary for app functionality and do
              not share your data with third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Disclaimers and Limitations
            </h2>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              App Availability
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              HomeKeep is provided &quot;as is&quot; without warranties of any
              kind. We do not guarantee that the App will be available at all
              times or free from errors, bugs, or interruptions.
            </p>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Maintenance Responsibility
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>Important:</strong> HomeKeep is a tool to help you
              organize and remember maintenance tasks. You are solely
              responsible for:
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
              <li>• Use or inability to use the App</li>
              <li>• Property damage due to missed or inadequate maintenance</li>
              <li>• Data loss or corruption</li>
              <li>• Any errors or omissions in the App</li>
              <li>• Any other matter relating to the App</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Updates and Changes
            </h2>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              App Updates
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may release updates to improve the App&apos;s functionality,
              security, or performance. You are responsible for downloading and
              installing updates to ensure optimal performance.
            </p>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Terms Updates
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We reserve the right to modify these Terms at any time. Updated
              Terms will be posted on this page with a new &quot;Last
              updated&quot; date. Continued use of the App after changes
              constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Termination
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You may stop using HomeKeep at any time by deleting the App from
              your device. We may terminate or suspend your access to the App if
              you violate these Terms.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Upon termination, your license to use the App ends immediately.
              You may request deletion of your account and all associated data
              by contacting support, or your data will be retained according to
              our data retention policies outlined in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Governing Law
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              These Terms are governed by and construed in accordance with the
              laws of your jurisdiction, without regard to conflict of law
              principles. Any disputes shall be resolved through binding
              arbitration or in the courts of competent jurisdiction.
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
              By using HomeKeep, you acknowledge that you have read, understood,
              and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
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
