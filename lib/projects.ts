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
    Challenge:
      "I had no traditional dev environment — every line was written, tested, and debugged on an Android phone through Termux, with no laptop and no game engine to lean on. The hardest part was a text-rendering feature that needed proper Bengali Unicode support: Android's font stack kept breaking conjunct characters, with overflow and color-bleed on top, and it took five full rewrites in a single overnight session to get right. On top of that, the game's 60+ sound assets included several corrupted files that had to be diagnosed and repaired with ffmpeg, and a dynamic alien fleet with scaling meteor spawns still had to run smoothly on limited hardware.",
    approach:
      "I split the game into independent systems from the start — state management (menu, countdown, active play, narrative, game-over), collision detection, animation, and persistence — so each piece could be built and debugged on its own. I treated the font-rendering problem as its own mini-project, iterating through five versions of the renderer until conjuncts, overflow, and color bleed were all resolved. To make up for the missing desktop workflow, I built small custom tools: ffmpeg-based repair scripts for broken audio, JSON-based save/settings persistence, and a proper .gitignore and codebase cleanup pass before the first commit.",
    whatBuilt:
      "A complete space shooter with a full game loop and state management, custom collision detection with a layered shield-to-hull damage system, three power-up types, an animated sprite system built on spritesheet frame extraction, an alien fleet with edge-detection behavior and dynamic difficulty scaling, a meteor-spawning system with size-based damage, a full HUD (score, bullet count, health bar, active power-up), a custom cursor, scrolling background and thrust particle effects, a complete menu system (main, pause, settings) with JSON persistence including saved sound settings, countdown timer and level progression, explosion/shockwave animations, and a hidden Easter egg sequence built with the same care as the core game.",
    tech: ["Python", "Pygame", "Termux", "JSON", "ffmpeg"],
    result:
      "AEON SHIELD shipped as v1.0.0 — TAISU's first product, designed, coded, debugged, and polished entirely on an Android phone, with a clean first GitHub push. It's a working demonstration of systems-level engineering — state machines, a custom rendering pipeline, persistence, and hardware-constrained optimization — built solo and self-taught at 19.",
    github: "",
    demo: "",
  },
];
