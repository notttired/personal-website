"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
];

export default function NavBar() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-surface border-b border-warm-border-light shadow-sm h-14">
      <div className="mx-auto max-w-2xl px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-warm-ink font-semibold text-sm font-serif tracking-wide hover:text-warm-accent transition-colors duration-150"
        >
          Max Li
        </Link>
        <div className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors duration-150 ${
                isActive(href)
                  ? "text-warm-ink font-medium"
                  : "text-warm-faint hover:text-warm-ink"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
