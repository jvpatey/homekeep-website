"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface QRCodeProps {
  url: string;
  size?: number;
  className?: string;
}

export default function QRCode({
  url,
  size = 200,
  className = "",
}: QRCodeProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  useEffect(() => {
    // Using QR Server API to generate QR code
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
      url
    )}`;
    setQrCodeUrl(qrUrl);
  }, [url, size]);

  // Don't render the image until we have a valid URL
  if (!qrCodeUrl) {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div className="hearth-card p-4 rounded-2xl">
          <div
            className="shimmer rounded-lg flex items-center justify-center"
            style={{ width: size, height: size }}
          >
            <svg
              className="w-12 h-12 text-[var(--color-text-secondary)] opacity-50"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <p className="mt-3 text-sm text-[var(--color-text-secondary)] text-center max-w-xs">
          Generating QR code...
        </p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="hearth-card p-4 rounded-2xl">
        <Image
          src={qrCodeUrl}
          alt={`QR code for ${url}`}
          width={size}
          height={size}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
