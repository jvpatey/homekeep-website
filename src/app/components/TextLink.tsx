import Link from "next/link";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  current?: boolean;
}

export default function TextLink({
  href,
  children,
  className = "",
  current = false,
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`relative inline-block underline-offset-4 decoration-transparent hover:decoration-[var(--color-primary)] hover:text-[var(--color-primary)] transition-[color,text-decoration-color] duration-200 ${
        current ? "text-[var(--color-primary)] font-medium" : ""
      } ${className}`}
      aria-current={current ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
