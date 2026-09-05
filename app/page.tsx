import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const TOOLS = ["Python", "JavaScript", "Pygame", "WeasyPrint", "HTML/CSS", "Termux"];

export default function HomePage() {
  return (
    <div className="container">
      {/* Hero */}
      <section
        className="hero-reveal"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "96px 0 72px" }}
      >
        <div style={{ position: "relative", width: 160, height: 160, marginBottom: 32 }}>
          <div className="avatar-glow" />
          <div
            style={{
              position: "relative",
              width: 160,
              height: 160,
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image src="/me.jpg" alt="Susmito" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

        <h1 className="heading" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>
          Hi, I'm Susmito.
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: 18, maxWidth: 480, lineHeight: 1.6, marginBottom: 36 }}>
          Founder of TAISU — building real software, solo, from Faridpur, Bangladesh.
        </p>

        <div className="flex gap-4">
          <Link href="/work" className="accent-btn" style={{ padding: "12px 24px", borderRadius: 14, fontSize: 15, fontWeight: 500, textDecoration: "none", display: "inline-block" }}>
            View my work
          </Link>
          <Link href="/contact" className="neu-btn" style={{ padding: "12px 24px", borderRadius: 14, fontSize: 15, fontWeight: 500, textDecoration: "none", display: "inline-block" }}>
            Contact
          </Link>
        </div>
      </section>

      {/* Selected work */}
      <section style={{ padding: "48px 0" }}>
        <h2 className="heading" style={{ fontSize: 24, fontWeight: 600, marginBottom: 28 }}>
          Selected work
        </h2>
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {projects.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="glass project-card" style={{ borderRadius: 24, padding: 20, textDecoration: "none", color: "inherit", display: "block" }}>
              <div style={{ position: "relative", aspectRatio: "16 / 10", borderRadius: 16, overflow: "hidden", marginBottom: 16 }}>
                <Image src="/projects/aeon-shield.jpg" alt={p.name} fill style={{ objectFit: "cover" }} />
              </div>
              <h3 className="heading" style={{ fontSize: 17, fontWeight: 600, marginBottom: 4 }}>
                {p.name}
              </h3>
              <p style={{ fontSize: 13, color: "var(--accent)", marginBottom: 8 }}>{p.tag}</p>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.5 }}>{p.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="glass" style={{ borderRadius: 24, padding: "32px 28px", margin: "48px 0", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ maxWidth: 520, fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6 }}>
          Self-taught on Termux and Android, balancing HSC exam prep with founding TAISU and building
          products people actually use.
        </p>
        <Link href="/about" className="nav-link" style={{ fontWeight: 500, whiteSpace: "nowrap" }}>
          Read my full story
        </Link>
      </section>

      {/* Tech stack */}
      <section style={{ padding: "16px 0 64px", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
        {TOOLS.map((tool) => (
          <span key={tool} className="tool-pill" style={{ padding: "8px 16px", borderRadius: 999, fontSize: 13, color: "var(--text-secondary)" }}>
            {tool}
          </span>
        ))}
      </section>
    </div>
  );
}
