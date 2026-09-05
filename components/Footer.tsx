"use client";

import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.868 21h5.245l-7.131-10.378Zm-2.128 2.474-.697-.997-5.543-7.93H8l4.474 6.4.697.996 5.815 8.318h-2.386l-4.746-6.787Z" />
    </svg>
  );
}

function DiscordIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.548-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const SOCIALS = [
  { href: "https://github.com/susmito-d", label: "GitHub", icon: <Github size={18} /> },
  { href: "https://linkedin.com/in/susmitodatta", label: "LinkedIn", icon: <Linkedin size={18} /> },
  { href: "https://www.facebook.com/dattaSusmito", label: "Facebook", icon: <Facebook size={18} /> },
  { href: "https://www.instagram.com/dattasusmito", label: "Instagram", icon: <Instagram size={18} /> },
  { href: "https://x.com/DattaSusmito", label: "X", icon: <XIcon /> },
  { href: "https://discord.com/channels/1545853093768339606/1545853094246613115", label: "Discord", icon: <DiscordIcon /> },
];

export default function Footer() {
  return (
    <footer id="site-footer" className="glass" style={{ marginTop: 24 }}>
      <div
        className="container flex items-center justify-between"
        style={{ padding: "20px 24px", flexWrap: "wrap", gap: 16 }}
      >
        <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>&copy; Susmito &middot; TAISU</span>
        <div className="flex items-center" style={{ gap: 18, flexWrap: "wrap" }}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{ color: "var(--text-secondary)", transition: "color 0.2s ease, transform 0.2s ease", display: "flex" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {s.icon}
            </a>
          ))}
          <a
            href="mailto:susmitodatta@gmail.com"
            aria-label="Email"
            style={{ color: "var(--text-secondary)", transition: "color 0.2s ease, transform 0.2s ease", display: "flex" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
