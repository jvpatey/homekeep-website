import Image from "next/image";

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 dark:bg-gray-800 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="relative flex items-center justify-center">
            {/* Back Button - Left */}
            <div className="absolute left-0">
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-50 hover:text-teal-600 transition-all duration-200 shadow-sm"
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
              </a>
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
                  We're here to help!
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
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Send us a Message
              </h3>
              <form
                action="mailto:jeffreyvpatey@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  >
                    <option value="">Select a topic...</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Account Issue">Account Issue</option>
                    <option value="General Question">General Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Describe your issue or question..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-4 flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                <svg
                  className="w-4 h-4 text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>We typically respond within 24 hours</span>
              </div>
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
                Tap the "+" button, fill in your task details, then select your
                desired interval from daily to yearly. HomeKeep will
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
                synced across your devices. You won't lose your data when you
                upgrade or restore your device.
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
                  • Check that the task's due date is within your current view
                </li>
                <li>
                  • Verify the task wasn't accidentally marked as complete
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
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
