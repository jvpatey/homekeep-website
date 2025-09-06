import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://homekeep.app"),
  title: "HomeKeep - Never forget home maintenance again!",
  description:
    "Track, schedule, and complete all your home maintenance tasks with reminders and organized task tracking. Never miss important home maintenance again!",
  keywords:
    "home maintenance, home improvement, task tracking, reminders, home care, maintenance schedule",
  authors: [{ name: "HomeKeep" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "HomeKeep - Never forget home maintenance again!",
    description:
      "Track, schedule, and complete all your home maintenance tasks with reminders and organized task tracking.",
    type: "website",
    images: [
      {
        url: "/homekeep-logo.png",
        width: 1200,
        height: 630,
        alt: "HomeKeep Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeKeep - Never forget home maintenance again!",
    description:
      "Track, schedule, and complete all your home maintenance tasks with reminders and organized task tracking.",
    images: ["/homekeep-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
