import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: "56px 24px", maxWidth: 600 }}>
      <h1 className="heading" style={{ fontSize: 32, fontWeight: 700, marginBottom: 32 }}>
        Contact
      </h1>

      <div className="glass" style={{ borderRadius: 20, padding: 28, display: "flex", flexDirection: "column", gap: 20 }}>
        <a href="mailto:your@email.com" className="flex items-center gap-3" style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: 15 }}>
          <Mail size={18} /> your@email.com
        </a>
        <a href="https://github.com/yourname" className="flex items-center gap-3" style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: 15 }}>
          <Github size={18} /> github.com/yourname
        </a>
        <a href="https://linkedin.com/in/yourname" className="flex items-center gap-3" style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: 15 }}>
          <Linkedin size={18} /> linkedin.com/in/yourname
        </a>
      </div>
    </div>
  );
}
