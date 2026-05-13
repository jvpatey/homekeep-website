"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/HomeKeep_Promo.mp4";

interface PromoVideoProps {
  className?: string;
}

/**
 * Cinematic promo clip: muted loop, plays inline, native controls.
 * Autoplays when ~30% visible unless prefers-reduced-motion.
 */
export default function PromoVideo({ className = "" }: PromoVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const root = wrapRef.current;
    const video = videoRef.current;
    if (!root || !video) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            void video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.3, rootMargin: "0px" }
    );
    obs.observe(root);
    return () => obs.disconnect();
  }, [reduceMotion]);

  return (
    <div ref={wrapRef} className={className}>
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="w-full h-auto max-h-[min(72vh,920px)] mx-auto rounded-2xl md:rounded-3xl border border-white/10 bg-black object-contain shadow-[0_24px_80px_-12px_rgba(0,0,0,0.65)]"
        controls
        playsInline
        loop
        muted
        preload="metadata"
        aria-label="HomeKeep product overview video"
      />
    </div>
  );
}
