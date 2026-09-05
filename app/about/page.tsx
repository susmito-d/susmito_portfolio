import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: "56px 24px", maxWidth: 700 }}>
      <div
        className="glass"
        style={{ width: 160, height: 160, borderRadius: "50%", overflow: "hidden", marginBottom: 32, position: "relative" }}
      >
        <Image src="/me.jpg" alt="Susmito" width={160} height={160} style={{ borderRadius: "50%", objectFit: "cover" }} />
      </div>

      <h1 className="heading" style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>
        About me
      </h1>

      <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>
        I'm Susmito, solo founder of TAISU — a company I started with the goal of building meaningful AI/tech products, one step at a time.
      </p>
      <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>
        Right now, TAISU is just me: designing, coding, and shipping. My first product, AEON SHIELD, is a space-shooter game built with Python and Pygame — proof that ideas here actually turn into working software.
      </p>
      <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>
        Alongside building, I'm deep in Project GENESIS, my personal roadmap to becoming a strong AI engineer — currently working through Python, math foundations, and machine learning basics.
      </p>
      <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 24 }}>
        I'm also preparing for Dhaka University's admission exam to pursue a BSSE degree, which I see as fuel for the bigger goal: growing TAISU into a serious tech company over time.
      </p>

      <h2 className="heading" style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
        How I work
      </h2>
      <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 24 }}>
      I learn by building — I pick something I don't know how to do yet and make it until it works. Everything so far has been built on a phone, so I've gotten good at working around constraints instead of waiting for the right setup. I'm still early and still learning, and I'd rather ship something small and real than plan something big and never finish it.
      </p>

      <h2 className="heading" style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
        Tools I use
      </h2>
      <div className="flex gap-2 flex-wrap">
        {["Termux", "Pydroid", "Python", "Pygame", "WeasyPrint"].map((tool) => (
          <span key={tool} className="tool-pill" style={{ padding: "6px 14px", borderRadius: 999, fontSize: 13 }}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
