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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Using QR Server API to generate QR code
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
      url
    )}`;
    setQrCodeUrl(qrUrl);
  }, [url, size]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  // Don't render the image until we have a valid URL
  if (!qrCodeUrl) {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div className="glass-card p-4 rounded-lg shadow-xl transition-transform duration-300">
          <div
            className="shimmer rounded-lg flex items-center justify-center"
            style={{ width: size, height: size }}
          >
            <svg
              className="w-12 h-12 text-gray-400 opacity-50"
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
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center max-w-xs animate-pulse">
          Generating QR code...
        </p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`glass-card p-4 rounded-lg shadow-xl transition-all duration-300 hover:scale-105 ${
        isLoaded ? 'animate-fade-in' : ''
      }`}>
        <Image
          src={qrCodeUrl}
          alt={`QR code for ${url}`}
          width={size}
          height={size}
          className="rounded-lg"
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
}
