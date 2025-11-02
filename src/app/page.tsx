"use client";

import Image from "next/image";
import AppDownloadSection from "./components/AppDownloadSection";
import QRCode from "./components/QRCode";
import { APP_CONFIG } from "./config/app";
import { useState } from "react";

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-100 to-orange-100 dark:from-blue-950 dark:via-teal-950 dark:to-orange-950 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-teal-200/30 to-orange-200/40 dark:from-blue-800/15 dark:via-teal-800/15 dark:to-orange-800/15 animate-pulse-slow"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start pt-20 md:pt-32 px-6 pb-16 md:pb-24 max-w-7xl mx-auto">
        <div className="text-center w-full">
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="animate-float">
              <Image
                src="/homekeep-logo.png"
                alt="HomeKeep Logo"
                width={120}
                height={120}
                className="rounded-3xl shadow-lg border border-white/30 dark:border-gray-600"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
            HomeKeep
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-150">
            Never forget home maintenance again! Track, schedule, and complete
            all your home maintenance tasks with reminders and organized task
            tracking.
          </p>

          {/* App Store Button */}
          <div className="flex justify-center animate-fade-in-up animation-delay-300">
            <AppDownloadSection
              appStoreUrl={APP_CONFIG.appStoreUrl}
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Preview Section - Phone + QR Code */}
      <section className="py-16 md:py-24 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center animate-fade-in-up animation-delay-450">
              <div className="max-w-[300px] w-full">
                <div className="glass-card rounded-[2.5rem] p-2 shadow-2xl transform transition-transform duration-300 hover:scale-105">
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

            {/* QR Code */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Download in Seconds
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md">
                Scan the QR code with your device to download HomeKeep directly from the App Store
              </p>
              <QRCode
                url={APP_CONFIG.appStoreUrl}
                size={200}
                className="items-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to maintain your home
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Simple tools to create lasting home care habits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div 
              className={`glass-card glass-hover text-center p-6 rounded-2xl group cursor-pointer transition-all duration-300 ${
                selectedFeature === 1 ? 'scale-105 shadow-2xl' : ''
              }`}
              onClick={() => setSelectedFeature(selectedFeature === 1 ? null : 1)}
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg
                  className="w-8 h-8 text-teal-600 dark:text-teal-400 transition-transform duration-300 group-hover:scale-125"
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
            <div 
              className={`glass-card glass-hover text-center p-6 rounded-2xl group cursor-pointer transition-all duration-300 ${
                selectedFeature === 2 ? 'scale-105 shadow-2xl' : ''
              }`}
              onClick={() => setSelectedFeature(selectedFeature === 2 ? null : 2)}
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-400 transition-transform duration-300 group-hover:scale-125"
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
            <div 
              className={`glass-card glass-hover text-center p-6 rounded-2xl group cursor-pointer transition-all duration-300 ${
                selectedFeature === 3 ? 'scale-105 shadow-2xl' : ''
              }`}
              onClick={() => setSelectedFeature(selectedFeature === 3 ? null : 3)}
            >
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg
                  className="w-8 h-8 text-teal-600 dark:text-teal-400 transition-transform duration-300 group-hover:scale-125"
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
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Powerful features for every homeowner
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="glass-card flex items-start space-x-3 p-4 rounded-xl group cursor-pointer transition-all duration-300 hover:scale-105 hover:translate-x-2">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
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
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  Recurring Task Schedules
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Customizable intervals from daily to yearly
                </p>
              </div>
            </div>

            <div className="glass-card flex items-start space-x-3 p-4 rounded-xl group cursor-pointer transition-all duration-300 hover:scale-105 hover:translate-x-2">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
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
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  9 Comprehensive Categories
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  HVAC, Plumbing, Electrical, and more
                </p>
              </div>
            </div>

            <div className="glass-card flex items-start space-x-3 p-4 rounded-xl group cursor-pointer transition-all duration-300 hover:scale-105 hover:translate-x-2">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
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
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  Priority-Based Organization
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Low, medium, and high priority tasks
                </p>
              </div>
            </div>

            <div className="glass-card flex items-start space-x-3 p-4 rounded-xl group cursor-pointer transition-all duration-300 hover:scale-105 hover:translate-x-2">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
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
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  Smart Notifications
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Customizable preferences per category
                </p>
              </div>
            </div>

            <div className="glass-card flex items-start space-x-3 p-4 rounded-xl group cursor-pointer transition-all duration-300 hover:scale-105 hover:translate-x-2">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
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
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  Progress Tracking
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete maintenance history
                </p>
              </div>
            </div>

            <div className="glass-card flex items-start space-x-3 p-4 rounded-xl group cursor-pointer transition-all duration-300 hover:scale-105 hover:translate-x-2">
              <svg
                className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
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
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
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
      <section className="py-16 md:py-24 bg-slate-700">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to keep your home in perfect condition?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
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
