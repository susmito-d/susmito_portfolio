import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import MediaGallery from "@/components/MediaGallery";

const BASE_URL = "https://susmito-portfolio.vercel.app";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.blurb,
    openGraph: {
      title: project.name,
      description: project.blurb,
      images: [project.image],
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  const media = project.media?.length ? project.media : [{ type: "image" as const, src: project.image }];

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    applicationCategory: "Game",
    operatingSystem: "Android, Windows, Linux",
    description: project.blurb,
    url: `${BASE_URL}/work/${project.slug}`,
    image: `${BASE_URL}${project.image}`,
    creator: { "@type": "Person", name: "Susmito", "@id": `${BASE_URL}/#person` },
    publisher: { "@type": "Organization", name: "TAISU" },
    ...(project.github ? { codeRepository: project.github } : {}),
  };

  return (
    <div className="container" style={{ padding: "56px 24px", maxWidth: 760 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <MediaGallery media={media} projectName={project.name} />

      <h1 className="heading" style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        {project.name}
      </h1>
      <p style={{ color: "var(--accent)", marginBottom: 16 }}>{project.tag}</p>
      <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 32 }}>
        {project.blurb}
      </p>

      {[
        ["Challenges", project.challenge],
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
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="neu-btn" style={{ padding: "10px 20px", borderRadius: 12, textDecoration: "none", fontSize: 14 }}>
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="accent-btn" style={{ padding: "10px 20px", borderRadius: 12, textDecoration: "none", fontSize: 14 }}>
            Live demo
          </a>
        )}
      </div>
    </div>
  );
}
