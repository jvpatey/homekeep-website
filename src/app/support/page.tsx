import Image from "next/image";

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-4">
            <Image
              src="/homekeep-logo.png"
              alt="HomeKeep Logo"
              width={60}
              height={60}
              className="rounded-2xl"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">HomeKeep Support</h1>
              <p className="text-gray-600">We're here to help!</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Contact Information */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get Support</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-700">support@homekeepapp.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Response within 24 hours</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">App Information</h3>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Current Version:</strong> 1.0.0</p>
                <p className="text-gray-700"><strong>Platform:</strong> iOS</p>
                <p className="text-gray-700"><strong>Compatibility:</strong> iOS 14.0 or later</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">How do I create a recurring task?</h3>
              <p className="text-gray-600">
                Tap the "+" button, fill in your task details, then select your desired interval from daily to yearly. 
                HomeKeep will automatically create reminders based on your schedule.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Can I customize notification times?</h3>
              <p className="text-gray-600">
                Yes! Go to Settings → Notification Preferences to customize when you receive reminders for each category. 
                You can set different notification times for HVAC, Plumbing, Electrical, and other categories.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">How do I delete a task?</h3>
              <p className="text-gray-600">
                Swipe left on any task in your task list, or go to Settings → All Tasks to manage and delete individual tasks.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">What categories are available?</h3>
              <p className="text-gray-600">
                HomeKeep includes 9 comprehensive categories: HVAC, Plumbing, Electrical, Appliances, Exterior, 
                Interior, Landscaping, Safety, and General maintenance tasks.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Is my data backed up?</h3>
              <p className="text-gray-600">
                Your tasks and settings are stored locally on your device. We recommend using iCloud backup 
                to ensure your data is preserved when you upgrade or restore your device.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">How do I report a bug or request a feature?</h3>
              <p className="text-gray-600">
                Please email us at support@homekeepapp.com with details about the issue or your feature request. 
                We read every message and use your feedback to improve HomeKeep.
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Troubleshooting</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Notifications Not Working</h3>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Check that notifications are enabled in Settings → Notifications</li>
                <li>• Verify HomeKeep has notification permissions in iOS Settings</li>
                <li>• Ensure Do Not Disturb is not blocking notifications</li>
                <li>• Try restarting the app</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">App Crashes or Performance Issues</h3>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Force close and restart the app</li>
                <li>• Restart your device</li>
                <li>• Check for app updates in the App Store</li>
                <li>• If issues persist, contact support with your device model and iOS version</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tasks Not Appearing</h3>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Pull down on the task list to refresh</li>
                <li>• Check that the task's due date is within your current view</li>
                <li>• Verify the task wasn't accidentally marked as complete</li>
                <li>• Try switching between different views (Upcoming, All Tasks)</li>
              </ul>
            </div>
          </div>
        </section>
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
          <p className="text-gray-400 mb-4">HomeKeep - Never forget home maintenance again!</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
