import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/app/support/ContactForm";

export const metadata: Metadata = {
  title: "Support - HomeKeep",
  description:
    "Get help with HomeKeep. Find answers to frequently asked questions, troubleshooting tips, and contact our support team.",
};

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="relative flex items-center justify-center">
            {/* Back Button - Left */}
            <div className="absolute left-0">
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 hover:text-teal-600 transition-all duration-200 shadow-sm"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Home
              </Link>
            </div>

            {/* Centered Content */}
            <div className="flex items-center space-x-4">
              <Image
                src="/homekeep-logo.png"
                alt="HomeKeep Logo"
                width={60}
                height={60}
                className="rounded-2xl"
              />
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  HomeKeep Support
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  We&apos;re here to help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Contact Information */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Get Support
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ContactForm />
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                App Information
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Current Version:</strong> 1.0.0
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Platform:</strong> iOS
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Compatibility:</strong> iOS 14.0 or later
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                How do I create a recurring task?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tap the &quot;+&quot; button, fill in your task details, then
                select your desired interval from daily to yearly. HomeKeep will
                automatically create reminders based on your schedule.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                How do notifications work?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                HomeKeep sends you reminders based on your task schedules and
                due dates. You can enable or disable notifications for different
                categories in Settings → Notification Preferences to control
                which types of tasks send you alerts.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                How do I delete a task?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To delete individual tasks: Go to Profile Menu → Total Tasks,
                then tap the garbage icon next to any task. To delete all tasks:
                Go to Profile Menu → Settings → Delete All Tasks.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                What categories are available?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                HomeKeep includes 9 comprehensive categories: HVAC, Plumbing,
                Electrical, Appliances, Exterior, Interior, Landscaping, Safety,
                and General maintenance tasks.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Is my data backed up?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! Your tasks and settings are securely stored in the cloud
                using Supabase, so your data is automatically backed up and
                synced across your devices. You won&apos;t lose your data when
                you upgrade or restore your device.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                How do I report a bug or request a feature?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Please use the contact form above with details about the issue
                or your feature request. We read every message and use your
                feedback to improve HomeKeep.
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Troubleshooting
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Notifications Not Working
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                <li>
                  • Check that notifications are enabled in Settings →
                  Notifications
                </li>
                <li>
                  • Verify HomeKeep has notification permissions in iOS Settings
                </li>
                <li>• Ensure Do Not Disturb is not blocking notifications</li>
                <li>• Try restarting the app</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                App Crashes or Performance Issues
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                <li>• Force close and restart the app</li>
                <li>• Restart your device</li>
                <li>• Check for app updates in the App Store</li>
                <li>
                  • If issues persist, contact support with your device model
                  and iOS version
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Tasks Not Appearing
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                <li>• Pull down on the task list to refresh</li>
                <li>
                  • Check that the task&apos;s due date is within your current
                  view
                </li>
                <li>
                  • Verify the task wasn&apos;t accidentally marked as complete
                </li>
                <li>
                  • Try switching between different views (Upcoming, All Tasks)
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black py-8">
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
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
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
