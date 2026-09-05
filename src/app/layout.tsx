import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://homekeep.app"),
  title: {
    default: "HomeKeep — Home maintenance, handled.",
    template: "%s — HomeKeep",
  },
  description:
    "Reminders, history, and a plan — without the mental load. Track tasks, stay on schedule, and keep this house.",
  keywords:
    "home maintenance, home improvement, task tracking, reminders, home care, maintenance schedule",
  authors: [{ name: "HomeKeep" }],
  icons: {
    icon: [
      { url: "/favicon.ico?v=hearth", sizes: "any" },
      { url: "/favicon-16x16.png?v=hearth", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=hearth", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png?v=hearth",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico?v=hearth",
  },
  openGraph: {
    title: "HomeKeep — Home maintenance, handled.",
    description:
      "Reminders, history, and a plan — without the mental load. Track tasks, stay on schedule, and keep this house.",
    type: "website",
    locale: "en_CA",
    siteName: "HomeKeep",
    url: "https://homekeep.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeKeep — Home maintenance, handled.",
    description:
      "Reminders, history, and a plan — without the mental load. Track tasks, stay on schedule, and keep this house.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fraunces.variable}>
      <body className="antialiased">
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
