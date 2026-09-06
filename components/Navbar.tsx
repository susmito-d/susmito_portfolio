"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleOutsideClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="glass" style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div
        className="container items-center"
        style={{ padding: "16px 24px", display: "grid", gridTemplateColumns: "1fr auto 1fr" }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", justifySelf: "start", gridColumn: "1" }} onClick={() => setMenuOpen(false)}>
          <Image
            src={theme === "dark" ? "/logo/logo-white.png" : "/logo/logo-black.png"}
            alt="Susmito"
            width={90}
            height={30}
            priority
            style={{ height: 56, width: "auto" }}
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8" style={{ justifySelf: "center", gridColumn: "2" }}>
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
        <div className="flex items-center gap-3" style={{ justifySelf: "end", gridColumn: "3" }}>
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="neu-btn"
            style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {theme === "dark" ? <Sun size={18} color="var(--accent)" /> : <Moon size={18} />}
          </button>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="neu-btn lg:hidden flex items-center justify-center"
            style={{ width: 40, height: 40, borderRadius: 12 }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="lg:hidden flex flex-col menu-float menu-card"
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            right: 24,
            minWidth: 180,
            padding: "12px 8px",
            gap: 2,
          }}
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
              style={{ fontSize: 15, padding: "10px 16px", textAlign: "right", borderRadius: 12 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
