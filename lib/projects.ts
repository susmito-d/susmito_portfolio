export type Project = {
  slug: string;
  name: string;
  tag: string;
  blurb: string;
  problem: string;
  approach: string;
  whatBuilt: string;
  tech: string[];
  result: string;
  github?: string;
  demo?: string;
};

// Add new projects here — Work page and case-study pages both read from this list.
export const projects: Project[] = [
  {
    slug: "aeon-shield",
    name: "AEON SHIELD",
    tag: "Pygame · TAISU's first product",
    blurb: "A space shooter built from scratch — TAISU's first shipped product.",
    problem: "Write the real problem or motivation behind building this — replace this placeholder with your own words.",
    approach: "Describe how you actually built it, step by step, in your own words.",
    whatBuilt: "Describe the finished game — what it does, how it plays.",
    tech: ["Python", "Pygame"],
    result: "Write the honest outcome — what shipped, what you learned.",
    github: "",
    demo: "",
  },
];
