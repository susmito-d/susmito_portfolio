import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="container" style={{ padding: "56px 24px", maxWidth: 760 }}>
      <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: 20, overflow: "hidden", marginBottom: 32 }}>
        <Image src="/projects/aeon-shield.jpg" alt="AEON SHIELD" fill style={{ objectFit: "cover" }} />
      </div>

      <h1 className="heading" style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        {project.name}
      </h1>
      <p style={{ color: "var(--accent)", marginBottom: 32 }}>{project.tag}</p>

      {[
        ["Problem", project.problem],
        ["Approach", project.approach],
        ["What I built", project.whatBuilt],
        ["Result / what I learned", project.result],
      ].map(([heading, text]) => (
        <div key={heading} style={{ marginBottom: 28 }}>
          <h2 className="heading" style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
            {heading}
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>{text}</p>
        </div>
      ))}

      <div style={{ marginBottom: 32 }}>
        <h2 className="heading" style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
          Tech used
        </h2>
        <div className="flex gap-2 flex-wrap">
          {project.tech.map((t) => (
            <span key={t} className="tool-pill" style={{ padding: "6px 14px", borderRadius: 999, fontSize: 13 }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a href={project.github} className="neu-btn" style={{ padding: "10px 20px", borderRadius: 12, textDecoration: "none", fontSize: 14 }}>
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} className="accent-btn" style={{ padding: "10px 20px", borderRadius: 12, textDecoration: "none", fontSize: 14 }}>
            Live demo
          </a>
        )}
      </div>
    </div>
  );
}
