"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";
import { fadeUp, staggerChildren } from "../lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
  as?: "div" | "section" | "header" | "ul" | "article";
}

export default function Reveal({
  children,
  className,
  stagger = false,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: "some",
    margin: "0px 0px -64px 0px",
    initial: true,
  });
  const Tag = motion[as];

  return (
    <Tag
      ref={ref}
      className={className}
      initial={false}
      animate={reduce || inView ? "visible" : "hidden"}
      variants={stagger ? staggerChildren : fadeUp}
      transition={reduce ? { duration: 0 } : delay ? { delay } : undefined}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={fadeUp}>
      {children}
    </Tag>
  );
}
