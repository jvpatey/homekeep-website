"use client";

import { useEffect, useRef, useState } from "react";
import HouseMark from "./HouseMark";

type Phase = "idle" | "focus" | "press" | "done";

const TASKS = [
  { id: "hvac", title: "Replace HVAC filter", due: "Due today", priority: "High" },
  { id: "gfci", title: "Test GFCI outlets", due: "This week", priority: "Med" },
  { id: "gutters", title: "Clean gutters", due: "Upcoming", priority: "Low" },
] as const;

export default function IPhoneDashboardPreview() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio > 0.35),
      { threshold: [0, 0.35, 0.7] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVis = () => setPageVisible(document.visibilityState === "visible");
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setPhase("idle");
      return;
    }
    if (!visible || !pageVisible) return;

    let cancelled = false;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, ms);
      });

    const run = async () => {
      while (!cancelled) {
        setPhase("idle");
        await wait(900);
        if (cancelled) break;
        setPhase("focus");
        await wait(1100);
        if (cancelled) break;
        setPhase("press");
        await wait(420);
        if (cancelled) break;
        setPhase("done");
        await wait(2800);
        if (cancelled) break;
        setPhase("idle");
        await wait(700);
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [visible, pageVisible, reduceMotion]);

  const completed = phase === "done";
  const pressing = phase === "press";
  const focusing = phase === "focus" || phase === "press";
  const nextTitle = completed ? "Test GFCI outlets" : "Replace HVAC filter";
  const nextWhy = completed
    ? "Safety check · this week"
    : "Due today · about 15 min";
  const chipLabel = completed ? "On schedule" : "1 due today";

  return (
    <figure
      ref={rootRef}
      className="iphone-device"
      aria-label="HomeKeep dashboard preview. A due task is completed, then the next right thing updates."
    >
      <span className="iphone-btn iphone-btn-silent" aria-hidden />
      <span className="iphone-btn iphone-btn-vol-up" aria-hidden />
      <span className="iphone-btn iphone-btn-vol-down" aria-hidden />
      <span className="iphone-btn iphone-btn-power" aria-hidden />

      <div className="iphone-bezel">
        <div className="iphone-screen" aria-hidden>
          <div className="iphone-island" />
          <div className="iphone-statusbar">
            <span className="iphone-time">9:41</span>
            <span className="iphone-status-icons">
              <SignalIcon />
              <WifiIcon />
              <BatteryIcon />
            </span>
          </div>

          <div className="dash-preview">
            <header className="dash-top">
              <div className="dash-wordmark">
                <HouseMark size={18} inline />
                <span>HomeKeep</span>
              </div>
              <div className="dash-actions">
                <span className="dash-icon-btn">
                  <BookIcon />
                </span>
                <span className="dash-avatar">J</span>
              </div>
            </header>

            <h2 className="dash-greeting font-display">Good morning, Jordan</h2>
            <div className="dash-meta">
              <span className="dash-context">
                <PinIcon />
                Halifax · 18° · Clear
              </span>
              <span className={`dash-chip ${completed ? "dash-chip-sage" : ""}`}>
                {chipLabel}
              </span>
            </div>

            <div className={`dash-next ${focusing && !completed ? "dash-next-focus" : ""}`}>
              <p className="dash-next-kicker">Do this next</p>
              <p className="dash-next-title">{nextTitle}</p>
              <p className="dash-next-why">{nextWhy}</p>
            </div>

            <p className="dash-section">Today</p>
            <ul className="dash-list">
              {TASKS.map((task, index) => {
                const isFirst = index === 0;
                const isDone = isFirst && completed;
                return (
                  <li
                    key={task.id}
                    className={`dash-row ${isDone ? "dash-row-done" : ""} ${
                      isFirst && pressing ? "dash-row-press" : ""
                    }`}
                  >
                    <span className="dash-dot" />
                    <div className="dash-row-card">
                      <div className="dash-row-main">
                        <p className="dash-row-title">{task.title}</p>
                        <p className="dash-row-due">{task.due}</p>
                      </div>
                      <span
                        className={`dash-complete ${
                          isFirst && (pressing || completed) ? "dash-complete-on" : ""
                        }`}
                      >
                        {(isFirst && (pressing || completed)) || isDone ? (
                          <CheckIcon />
                        ) : null}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="dash-fab">
            <span className="dash-fab-outer">
              <span className="dash-fab-inner">
                <PlusIcon />
                Add task
              </span>
            </span>
          </div>
          <div className="iphone-home" />
        </div>
      </div>
    </figure>
  );
}

function SignalIcon() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor">
      <rect x="0" y="6" width="2.2" height="4" rx="0.5" />
      <rect x="4.2" y="4" width="2.2" height="6" rx="0.5" />
      <rect x="8.4" y="2" width="2.2" height="8" rx="0.5" />
      <rect x="12.6" y="0" width="2.2" height="10" rx="0.5" opacity="0.35" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M1 3.2c3.6-3 8.4-3 12 0" />
      <path d="M3.4 5.4c2.2-1.8 4.9-1.8 7.1 0" />
      <circle cx="7" cy="8.2" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
      <rect x="0.6" y="0.6" width="18" height="8.8" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <rect x="2.2" y="2.1" width="14" height="5.8" rx="1" fill="currentColor" />
      <path d="M19.6 3.2h1.2c.4 0 .7.3.7.7v2.2c0 .4-.3.7-.7.7h-1.2" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}
