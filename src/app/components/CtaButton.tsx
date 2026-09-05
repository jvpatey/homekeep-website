"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { tapPress } from "../lib/motion";

export default function CtaButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="inline-flex"
      whileHover={reduce ? undefined : { y: -2, filter: "brightness(1.06)" }}
      whileTap={reduce ? undefined : tapPress}
    >
      <Link
        href={href}
        className="inline-flex items-center min-h-14 px-6 py-3 bg-[var(--color-primary)] text-white rounded-2xl font-semibold text-base md:text-lg"
      >
        {children}
      </Link>
    </motion.div>
  );
}
