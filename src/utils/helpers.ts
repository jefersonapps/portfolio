export const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "React Native",
  "Next",
  "TypeScript",
  "Git",
  "Python",
  "Tailwind",
  "Electron",
  "Vite",
] as const;

export type Technology = (typeof technologies)[number];

const technologyColors: { [key in Technology]: string } = {
  HTML: "#c2410c",
  CSS: "#1d4ed8",
  JavaScript: "#a16207",
  "React.js": "#1e3a8a",
  "React Native": "#1e40af",
  Next: "#000000",
  TypeScript: "#2563eb",
  Git: "#f97316",
  Python: "#ca8a04",
  Tailwind: "#3b82f6",
  Electron: "#4f46e5",
  Vite: "#5b21b6",
};

export function getTagColor(tech: Technology): string {
  return technologyColors[tech];
}
