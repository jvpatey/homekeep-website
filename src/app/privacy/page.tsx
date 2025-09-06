import Image from "next/image";
import Link from "next/link";

export default function Privacy() {
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
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-teal-600 transition-all duration-200 shadow-sm"
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
                  Privacy Policy
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Last updated: September 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              HomeKeep (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, and safeguard your information when you use
              our mobile application.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Simple Summary:</strong> HomeKeep stores your tasks and
              data securely using Supabase, a trusted cloud database service. We
              only collect the information necessary to provide the app&apos;s
              functionality and do not share your personal data with third
              parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Information We Collect
            </h2>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Information You Provide
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li>
                • <strong>Task Information:</strong> Task names, descriptions,
                due dates, categories, and completion status
              </li>
              <li>
                • <strong>App Settings:</strong> Notification preferences, app
                customization settings
              </li>
              <li>
                • <strong>Support Communications:</strong> Information you
                provide when contacting support
              </li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Information We Don&apos;t Collect
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>
                • Personal identifying information beyond what&apos;s necessary
                for account creation
              </li>
              <li>• Location data</li>
              <li>• Device contacts or photos</li>
              <li>• Browsing history or activity outside the app</li>
              <li>• Marketing or advertising data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your task data and app settings are stored securely in our
              Supabase database. We use this information to:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>
                • Display your maintenance tasks and schedules across your
                devices
              </li>
              <li>• Sync your data when you sign in on multiple devices</li>
              <li>• Send you notifications based on your preferences</li>
              <li>• Maintain your app settings and customizations</li>
              <li>• Provide customer support when you contact us</li>
              <li>• Ensure data backup and recovery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Storage and Security
            </h2>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Cloud Storage with Supabase
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your tasks and app data are stored securely in Supabase, a trusted
              cloud database service. Supabase provides enterprise-grade
              security with data encryption both in transit and at rest.
            </p>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Data Location and Compliance
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your data is stored in secure data centers and Supabase complies
              with industry-standard security practices including SOC 2 Type II
              compliance and GDPR requirements.
            </p>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Security Measures
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• End-to-end encryption for data transmission</li>
              <li>• Secure authentication and access controls</li>
              <li>• Regular security updates and monitoring</li>
              <li>• Data backup and disaster recovery systems</li>
              <li>• Industry-standard security protocols</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Notifications
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              HomeKeep uses iOS&apos;s notification system to remind you about
              upcoming maintenance tasks. These notifications are generated
              locally on your device based on your task schedules and
              preferences.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              You can control notification permissions through your
              device&apos;s Settings app and customize notification preferences
              within HomeKeep.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Third-Party Services
            </h2>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Supabase Database Service
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              HomeKeep uses Supabase as our cloud database service to store and
              sync your data. Supabase is a reputable service provider that
              maintains strict security and privacy standards. Your data is only
              used to provide HomeKeep&apos;s functionality and is not shared
              with other third parties.
            </p>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              No Analytics or Advertising
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              HomeKeep does not integrate with analytics platforms, advertising
              networks, or marketing services. We do not track your usage
              patterns or share your data for advertising purposes.
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
              You have the following rights regarding your personal data:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>
                • <strong>Access:</strong> View all your data within the app
              </li>
              <li>
                • <strong>Modify:</strong> Edit or update any task or setting
              </li>
              <li>
                • <strong>Delete:</strong> Remove individual tasks or delete
                your entire account and all associated data
              </li>
              <li>
                • <strong>Export:</strong> Request a copy of your data by
                contacting support
              </li>
              <li>
                • <strong>Portability:</strong> Your data can be exported in a
                standard format upon request
              </li>
              <li>
                • <strong>Account Deletion:</strong> Contact support to
                permanently delete your account and all data
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
              Continued use of HomeKeep after any changes constitutes acceptance
              of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or
              HomeKeep&apos;s privacy practices, please visit our support page
              to get in touch.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <a
                href="/support"
                className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Contact Support
              </a>
            </div>
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
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
