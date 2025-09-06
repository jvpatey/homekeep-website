import Image from "next/image";

export default function Privacy() {
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
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 prose max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-600 mb-4">
              HomeKeep ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, and safeguard your information when you use our mobile application.
            </p>
            <p className="text-gray-600">
              <strong>Simple Summary:</strong> HomeKeep stores your tasks locally on your device. We don't collect, 
              store, or share your personal data on our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-lg font-medium text-gray-900 mb-3">Information You Provide</h3>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>• <strong>Task Information:</strong> Task names, descriptions, due dates, categories, and completion status</li>
              <li>• <strong>App Settings:</strong> Notification preferences, app customization settings</li>
              <li>• <strong>Support Communications:</strong> Information you provide when contacting support</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mb-3">Information We Don't Collect</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Personal identifying information (name, email, phone number)</li>
              <li>• Location data</li>
              <li>• Device contacts or photos</li>
              <li>• Usage analytics or tracking data</li>
              <li>• Any data stored on external servers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              All your task data and app settings are stored locally on your device. We use this information to:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Display your maintenance tasks and schedules</li>
              <li>• Send you notifications based on your preferences</li>
              <li>• Maintain your app settings and customizations</li>
              <li>• Provide customer support when you contact us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage and Security</h2>
            
            <h3 className="text-lg font-medium text-gray-900 mb-3">Local Storage</h3>
            <p className="text-gray-600 mb-4">
              Your tasks and app data are stored securely on your device using iOS's built-in data protection features. 
              This data is not transmitted to or stored on external servers.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mb-3">iCloud Backup</h3>
            <p className="text-gray-600 mb-4">
              If you have iCloud backup enabled on your device, your HomeKeep data may be included in your 
              iCloud backup. This is managed entirely by Apple according to their privacy policies.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mb-3">Security Measures</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Data is protected by iOS device encryption</li>
              <li>• No data transmission to external servers</li>
              <li>• Regular security updates through app updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notifications</h2>
            <p className="text-gray-600 mb-4">
              HomeKeep uses iOS's notification system to remind you about upcoming maintenance tasks. 
              These notifications are generated locally on your device based on your task schedules and preferences.
            </p>
            <p className="text-gray-600">
              You can control notification permissions through your device's Settings app and customize 
              notification preferences within HomeKeep.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              HomeKeep does not integrate with or share data with third-party services, analytics platforms, 
              or advertising networks.
            </p>
            <p className="text-gray-600">
              The app operates independently and does not require internet connectivity for core functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600">
              HomeKeep is not directed to children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If you are a parent or guardian and believe 
              your child has provided information to us, please contact us at support@homekeepapp.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">Since all data is stored locally on your device, you have complete control over your information:</p>
            <ul className="text-gray-600 space-y-2">
              <li>• <strong>Access:</strong> View all your data within the app</li>
              <li>• <strong>Modify:</strong> Edit or update any task or setting</li>
              <li>• <strong>Delete:</strong> Remove individual tasks or all data through the app settings</li>
              <li>• <strong>Export:</strong> Your data remains accessible to you through the app interface</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. When we do, we will post the updated 
              policy on this page and update the "Last updated" date at the top.
            </p>
            <p className="text-gray-600">
              Continued use of HomeKeep after any changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or HomeKeep's privacy practices, 
              please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> support@homekeepapp.com<br />
                <strong>Subject:</strong> Privacy Policy Question
              </p>
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
          <p className="text-gray-400 mb-4">HomeKeep - Never forget home maintenance again!</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/support" className="hover:text-white transition-colors">Support</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
