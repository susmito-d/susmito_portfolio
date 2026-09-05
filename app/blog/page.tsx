// Add posts here as you write them — each post can just be a new entry
// in this array, or its own MDX file if you want longer posts later.
const posts: { title: string; date: string; summary: string; slug: string }[] = [];

export default function BlogPage() {
  return (
    <div className="container" style={{ padding: "56px 24px", maxWidth: 760 }}>
      <h1 className="heading" style={{ fontSize: 32, fontWeight: 700, marginBottom: 32 }}>
        Notes
      </h1>

      {posts.length === 0 ? (
        <div className="glass" style={{ borderRadius: 20, padding: 32, textAlign: "center" }}>
          <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
            No posts yet — first one is coming after the Dhaka University trip.
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {posts.map((post) => (
            <div key={post.slug} className="glass project-card" style={{ borderRadius: 20, padding: 20 }}>
              <h2 className="heading" style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>
                {post.title}
              </h2>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 8 }}>{post.date}</p>
              <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>{post.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
