"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Play, Music } from "lucide-react";

export type MediaItem = {
  type: "image" | "video" | "audio";
  src: string;
  caption?: string;
  poster?: string; // optional thumbnail for video
};

export default function MediaGallery({
  media,
  projectName,
}: {
  media: MediaItem[];
  projectName: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + media.length) % media.length));
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % media.length));

  // Keyboard nav
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, media.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? prev() : next();
    }
    touchStartX.current = null;
  };

  if (!media.length) return null;
  const active = openIndex !== null ? media[openIndex] : null;

  return (
    <>
      {/* Thumbnail grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: 12,
          marginBottom: 32,
        }}
      >
        {media.map((item, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(i)}
            className="glass"
            style={{
              position: "relative",
              aspectRatio: "4 / 3",
              borderRadius: 14,
              overflow: "hidden",
              cursor: "pointer",
              padding: 0,
              border: "none",
            }}
            aria-label={`Open ${item.type} ${i + 1} of ${media.length}`}
          >
            {item.type === "image" && (
              <Image src={item.src} alt={item.caption ?? `${projectName} media ${i + 1}`} fill style={{ objectFit: "cover" }} />
            )}
            {item.type === "video" && (
              <>
                {item.poster ? (
                  <Image src={item.poster} alt={item.caption ?? `${projectName} video ${i + 1}`} fill style={{ objectFit: "cover" }} />
                ) : (
                  <video src={item.src} style={{ width: "100%", height: "100%", objectFit: "cover" }} muted />
                )}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.25)",
                  }}
                >
                  <Play size={28} color="#fff" fill="#fff" />
                </div>
              </>
            )}
            {item.type === "audio" && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--bg-alt)",
                }}
              >
                <Music size={28} color="var(--accent)" />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox — rendered via portal so it's not trapped inside the page's
          animated (transform) wrapper, which would otherwise break position:fixed */}
      {active &&
        mounted &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            onClick={close}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "rgba(10, 12, 18, 0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            overflowY: "auto",
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
            style={{
              position: "fixed",
              top: 20,
              right: 20,
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: 999,
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            <X size={22} />
          </button>

          {/* Desktop arrows */}
          {media.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous"
                className="lightbox-arrow lightbox-arrow-left"
                style={{
                  position: "fixed",
                  left: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: 999,
                  width: 52,
                  height: 52,
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                <ChevronLeft size={26} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next"
                className="lightbox-arrow lightbox-arrow-right"
                style={{
                  position: "fixed",
                  right: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: 999,
                  width: 52,
                  height: 52,
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}

          {/* Main viewer */}
          <div
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 960,
              maxHeight: "56vh",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {active.type === "image" && (
              <div style={{ position: "relative", width: "100%", height: "56vh", minHeight: 260 }}>
                <Image src={active.src} alt={active.caption ?? projectName} fill style={{ objectFit: "contain" }} />
              </div>
            )}
            {active.type === "video" && (
              <video
                src={active.src}
                controls
                autoPlay
                style={{ maxWidth: "100%", maxHeight: "56vh", borderRadius: 12 }}
              />
            )}
            {active.type === "audio" && (
              <div
                className="glass"
                style={{
                  width: "100%",
                  maxWidth: 480,
                  padding: 32,
                  borderRadius: 20,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <Music size={40} color="var(--accent)" />
                <audio src={active.src} controls autoPlay style={{ width: "100%" }} />
              </div>
            )}
          </div>

          {active.caption && (
            <p style={{ color: "rgba(255,255,255,0.75)", marginTop: 16, fontSize: 14, textAlign: "center" }}>
              {active.caption}
            </p>
          )}

          {/* Thumbnail strip */}
          {media.length > 1 && (
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                gap: 8,
                marginTop: 20,
                maxWidth: "100%",
                overflowX: "auto",
                padding: "4px",
              }}
            >
              {media.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setOpenIndex(i)}
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    width: 56,
                    height: 42,
                    borderRadius: 8,
                    overflow: "hidden",
                    cursor: "pointer",
                    padding: 0,
                    border: i === openIndex ? "2px solid var(--accent)" : "2px solid transparent",
                    opacity: i === openIndex ? 1 : 0.55,
                  }}
                >
                  {item.type === "audio" && (
                    <div style={{ width: "100%", height: "100%", background: "#222", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Music size={16} color="#fff" />
                    </div>
                  )}
                  {item.type === "image" && (
                    <Image src={item.src} alt="" fill style={{ objectFit: "cover" }} />
                  )}
                  {item.type === "video" &&
                    (item.poster ? (
                      <Image src={item.poster} alt="" fill style={{ objectFit: "cover" }} />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: "#222", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Play size={16} color="#fff" fill="#fff" />
                      </div>
                    ))}
                </button>
              ))}
            </div>
          )}

          <p style={{ color: "rgba(255,255,255,0.4)", marginTop: 12, fontSize: 12 }}>
            {(openIndex ?? 0) + 1} / {media.length}
          </p>
        </div>,
        document.body
      )}

      <style jsx>{`
        .lightbox-arrow {
          display: none;
        }
        @media (min-width: 768px) {
          .lightbox-arrow {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
