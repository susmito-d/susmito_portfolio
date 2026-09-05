// A soft, animated gradient-bubble backdrop, fixed to the viewport so it
// stays centered on screen and doesn't scroll away with the page content.
// Rendered once in the root layout so it shows behind every page.

export default function BubbleBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
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
          background: "radial-gradient(circle, rgba(var(--bubble-a), var(--bubble-op)) 0%, rgba(var(--bubble-a), 0) 70%)",
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
          background: "radial-gradient(circle, rgba(var(--bubble-b), calc(var(--bubble-op) * 0.9)) 0%, rgba(var(--bubble-b), 0) 70%)",
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
          background: "radial-gradient(circle, rgba(var(--bubble-c), calc(var(--bubble-op) * 0.75)) 0%, rgba(var(--bubble-c), 0) 70%)",
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
          background: "radial-gradient(circle, rgba(var(--bubble-a), calc(var(--bubble-op) * 0.65)) 0%, rgba(var(--bubble-a), 0) 70%)",
          animation: "bubble-move-4 15s ease-in-out infinite",
          animationDelay: "-2s",
        }}
      />
    </div>
  );
}
