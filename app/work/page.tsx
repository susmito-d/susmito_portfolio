import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <div className="container" style={{ padding: "56px 24px" }}>
      <h1 className="heading" style={{ fontSize: 32, fontWeight: 700, marginBottom: 32 }}>
        Work
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="glass project-card"
            style={{ borderRadius: 20, padding: 20, textDecoration: "none", color: "inherit", display: "flex", gap: 20, alignItems: "center" }}
          >
            <div style={{ position: "relative", width: 96, height: 72, flexShrink: 0, borderRadius: 12, overflow: "hidden" }}>
              <Image src={p.image} alt={p.name} fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <h2 className="heading" style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>
                {p.name}
              </h2>
              <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>{p.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
