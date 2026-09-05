import HouseMark from "./HouseMark";
import TextLink from "./TextLink";

interface FooterProps {
  current?: "home" | "support" | "privacy" | "terms";
}

const links = [
  { href: "/", id: "home" as const, label: "Home" },
  { href: "/privacy", id: "privacy" as const, label: "Privacy Policy" },
  { href: "/terms", id: "terms" as const, label: "Terms of Service" },
  { href: "/support", id: "support" as const, label: "Support" },
];

export default function Footer({ current }: FooterProps) {
  return (
    <footer className="relative z-10 py-12 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-4">
          <HouseMark size={40} />
        </div>
        <p
          className="text-xl font-extrabold tracking-tight text-[var(--color-text)] mb-1"
          style={{ letterSpacing: "-0.03em" }}
        >
          Home
          <span className="text-[var(--color-accent)]">Keep</span>
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 text-sm">
          Home maintenance, handled.
        </p>
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[var(--color-text-secondary)]"
        >
          {links.map((link) => (
            <TextLink
              key={link.id}
              href={link.href}
              current={current === link.id}
            >
              {link.label}
            </TextLink>
          ))}
        </nav>
        <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
          <p className="text-[var(--color-text-secondary)] text-sm">
            © 2026 HomeKeep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
