"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItemData = {
  question: string;
  answer: string;
};

export default function Accordion({ items }: { items: AccordionItemData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="glass" style={{ borderRadius: 16, overflow: "hidden" }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "16px 20px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "inherit",
                color: "var(--text-primary)",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {item.question}
              <ChevronDown
                size={18}
                style={{
                  flexShrink: 0,
                  color: "var(--text-secondary)",
                  transition: "transform 0.25s ease",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.3s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p style={{ padding: "0 20px 16px", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
