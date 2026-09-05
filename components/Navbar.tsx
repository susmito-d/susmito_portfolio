

Navbar · TSX
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
      <div className="container flex items-center justify-between" style={{ padding: "16px 24px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
          <Image
            src={theme === "dark" ? "/logo/logo-white.png" : "/logo/logo-black.png"}
            alt="Susmito"
            width={90}
            height={30}
            priority
            style={{ height: 56, width: "auto" }}
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
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
        <div className="flex items-center gap-3">
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
            className="neu-btn lg:hidden"
            style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
 
      {menuOpen && (
        <nav
          className="glass lg:hidden"
          style={{ borderTop: "1px solid var(--glass-border)", padding: "8px 24px 20px", display: "flex", flexDirection: "column", gap: 4 }}
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
              style={{ fontSize: 16, padding: "12px 4px" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
 
      </div>

      {menuOpen && (
        <nav
          className="glass md:hidden"
          style={{ borderTop: "1px solid var(--glass-border)", padding: "8px 24px 20px", display: "flex", flexDirection: "column", gap: 4 }}
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
              style={{ fontSize: 16, padding: "12px 4px" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
