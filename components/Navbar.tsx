"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  return (
    <header className="glass" style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div className="container flex items-center justify-between" style={{ padding: "16px 24px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image
            src={theme === "dark" ? "/logo/logo-white.png" : "/logo/logo-black.png"}
            alt="Susmito"
            width={90}
            height={30}
            priority
            style={{ height: 56, width: "auto" }}
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
              style={{ fontSize: 15 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
          className="neu-btn"
          style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {theme === "dark" ? <Sun size={18} color="var(--accent)" /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}
