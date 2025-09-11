"use client";

import AppStoreButton from "./AppStoreButton";
import QRCode from "./QRCode";

interface AppDownloadSectionProps {
  appStoreUrl: string;
  className?: string;
  showQRCode?: boolean;
  variant?: "primary" | "secondary";
}

export default function AppDownloadSection({
  appStoreUrl,
  className = "",
  showQRCode = false,
  variant = "primary",
}: AppDownloadSectionProps) {
  return (
    <div className={`flex flex-col items-center space-y-6 ${className}`}>
      <AppStoreButton href={appStoreUrl} variant={variant} />

      {showQRCode && (
        <div className="mt-4">
          <QRCode url={appStoreUrl} size={150} />
        </div>
      )}
    </div>
  );
}
