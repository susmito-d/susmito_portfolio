// A soft, animated gradient-bubble backdrop for hero/section backgrounds.
// Uses blurred, drifting radial-gradient blobs colored from our own theme
// variables (--bubble-a/b/c) so it always matches the site's color schema.

export default function BubbleBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        filter: "blur(50px)",
      }}
    >
      <div
        className="bubble-blob"
        style={{
          width: 280,
          height: 280,
          left: "30%",
          top: "35%",
          background: "radial-gradient(circle, rgba(var(--bubble-a), 0.55) 0%, rgba(var(--bubble-a), 0) 70%)",
          animation: "bubble-move-1 14s ease-in-out infinite",
        }}
      />
      <div
        className="bubble-blob"
        style={{
          width: 240,
          height: 240,
          left: "65%",
          top: "30%",
          background: "radial-gradient(circle, rgba(var(--bubble-b), 0.5) 0%, rgba(var(--bubble-b), 0) 70%)",
          animation: "bubble-move-2 17s ease-in-out infinite",
          animationDelay: "-3s",
        }}
      />
      <div
        className="bubble-blob"
        style={{
          width: 220,
          height: 220,
          left: "50%",
          top: "65%",
          background: "radial-gradient(circle, rgba(var(--bubble-c), 0.4) 0%, rgba(var(--bubble-c), 0) 70%)",
          animation: "bubble-move-3 12s ease-in-out infinite",
          animationDelay: "-6s",
        }}
      />
      <div
        className="bubble-blob"
        style={{
          width: 200,
          height: 200,
          left: "22%",
          top: "68%",
          background: "radial-gradient(circle, rgba(var(--bubble-a), 0.35) 0%, rgba(var(--bubble-a), 0) 70%)",
          animation: "bubble-move-4 15s ease-in-out infinite",
          animationDelay: "-2s",
        }}
      />
    </div>
  );
}
