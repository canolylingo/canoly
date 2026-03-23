export type FlowTab = "warmup" | "game" | "exit";

export type Flow = {
  id: string;
  topic: string;
  gradeBand: "3-5";
  warmup: { q: string; a: string }[];
  game: { q: string; choices: string[]; correctIndex: number }[];
  exit: { q: string; a: string }[];
};

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function makeFlow(topic: string): Flow {
  const t = topic.trim() || "Multiplication Facts";
  const id = slugify(t) + "-" + Math.random().toString(16).slice(2, 7);

  return {
    id,
    topic: t,
    gradeBand: "3-5",
    warmup: [
      { q: "7 × 3 = ?", a: "21" },
      { q: "9 × 4 = ?", a: "36" },
      { q: "5 × 8 = ?", a: "40" }
    ],
    game: [
      { q: "6 × 7 = ?", choices: ["32", "42", "48", "72"], correctIndex: 1 },
      { q: "8 × 4 = ?", choices: ["24", "28", "32", "36"], correctIndex: 2 },
      { q: "9 × 3 = ?", choices: ["18", "21", "24", "27"], correctIndex: 3 },
      { q: "7 × 6 = ?", choices: ["36", "40", "42", "48"], correctIndex: 2 },
      { q: "5 × 9 = ?", choices: ["35", "40", "45", "50"], correctIndex: 2 },
      { q: "4 × 8 = ?", choices: ["24", "28", "32", "36"], correctIndex: 2 },
      { q: "6 × 6 = ?", choices: ["30", "32", "36", "42"], correctIndex: 2 },
      { q: "3 × 9 = ?", choices: ["18", "21", "24", "27"], correctIndex: 3 }
    ],
    exit: [
      { q: "Write one multiplication fact you still mix up:", a: "" },
      { q: "Solve: 12 ÷ 3 = ?", a: "4" }
    ]
  };
}
