import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass" style={{ marginTop: 24 }}>
      <div className="container flex items-center justify-between" style={{ padding: "20px 24px" }}>
        <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>&copy; Susmito &middot; TAISU</span>
        <div className="flex gap-4">
          <a href="https://github.com/susmito-d" aria-label="GitHub" style={{ color: "var(--text-secondary)" }}>
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/susmitodatta" aria-label="LinkedIn" style={{ color: "var(--text-secondary)" }}>
            <Linkedin size={18} />
          </a>
          <a href="mailto:susmitodatta@gmail.com" aria-label="Email" style={{ color: "var(--text-secondary)" }}>
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
