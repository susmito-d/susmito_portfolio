export default function AboutPage() {
  return (
    <div className="container" style={{ padding: "56px 24px", maxWidth: 700 }}>
      <div
        className="glass placeholder-block"
        style={{ width: 160, height: 160, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, marginBottom: 32 }}
      >
        <Image src="/me.jpg" alt="Susmito" width={160} height={160} style={{ borderRadius: "50%", objectFit: "cover" }} />
      </div>

      <h1 className="heading" style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>
        About me
      </h1>

      <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 24 }}>
        Faridpur → self-taught on Termux/Android → founded TAISU → HSC candidate balancing exam prep
        with building real products.
        {/* Replace this with your real story, in your own voice. */}
      </p>

      <h2 className="heading" style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
        How I work
      </h2>
      <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 24 }}>
        Write a short, honest paragraph on your process and values here.
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
