import Image from "next/image";
import type { Metadata } from "next";
import AppDownloadSection from "./components/AppDownloadSection";
import QRCode from "./components/QRCode";
import { APP_CONFIG } from "./config/app";

export const metadata: Metadata = {
  title: "HomeKeep - Never forget home maintenance again!",
  description:
    "Track, schedule, and complete all your home maintenance tasks with reminders and organized task tracking. Never miss important home maintenance again!",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/homekeep-logo.png"
              alt="HomeKeep Logo"
              width={120}
              height={120}
              className="rounded-3xl shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            HomeKeep
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Never forget home maintenance again! Track, schedule, and complete
            all your home maintenance tasks with reminders and organized task
            tracking.
          </p>

          {/* App Store Button */}
          <div className="flex justify-center mb-16">
            <AppDownloadSection
              appStoreUrl={APP_CONFIG.appStoreUrl}
              variant="primary"
            />
          </div>

          {/* QR Code for Mobile Users */}
          <div className="flex justify-center mb-16">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Scan to download on your phone
              </h3>
              <QRCode
                url={APP_CONFIG.appStoreUrl}
                size={150}
                className="items-center"
              />
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="max-w-sm mx-auto">
            <div className="bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
              <div className="bg-black rounded-[2rem] aspect-[9/19.5] w-full overflow-hidden relative">
                {/* Light mode screenshot */}
                <Image
                  src="/homekeeper-light.png"
                  alt="HomeKeep App - Light Mode"
                  width={390}
                  height={844}
                  className="w-full h-full object-contain rounded-[1.75rem] block dark:hidden"
                />
                {/* Dark mode screenshot */}
                <Image
                  src="/homekeeper-dark.png"
                  alt="HomeKeep App - Dark Mode"
                  width={390}
                  height={844}
                  className="w-full h-full object-contain rounded-[1.75rem] hidden dark:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to maintain your home
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Simple tools to create lasting home care habits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Organize
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create, organize, and manage all your home maintenance tasks in
                one place. Set priorities, due dates, and categories to keep
                everything organized.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Schedule
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Set up recurring maintenance schedules with flexible intervals
                from daily to yearly. HomeKeep automatically reminds you when
                tasks are due, so you&apos;ll never miss important home
                maintenance again.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Track
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Celebrate your achievements and track your home maintenance
                progress. Build a complete history of completed tasks and
                maintenance milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features List */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Powerful features for every homeowner
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Recurring Task Schedules
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Customizable intervals from daily to yearly
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  9 Comprehensive Categories
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  HVAC, Plumbing, Electrical, and more
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Priority-Based Organization
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Low, medium, and high priority tasks
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Smart Notifications
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Customizable preferences per category
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Progress Tracking
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete maintenance history
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Clean Interface
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Modern design for daily use
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to keep your home in perfect condition?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Download HomeKeep today and experience the peace of mind that comes
            with a perfectly maintained home.
          </p>

          {/* App Store Button */}
          <AppDownloadSection
            appStoreUrl={APP_CONFIG.appStoreUrl}
            variant="secondary"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/homekeep-logo.png"
                alt="HomeKeep Logo"
                width={60}
                height={60}
                className="rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">HomeKeep</h3>
            <p className="text-gray-400 mb-8">
              Never forget home maintenance again!
            </p>

            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/support" className="hover:text-white transition-colors">
                Support
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © 2025 HomeKeep. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
