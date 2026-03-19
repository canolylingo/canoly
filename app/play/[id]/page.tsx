"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FlowTab, makeFlow } from "@/lib/mock";

export default function PlayPage() {
  const sp = useSearchParams();
  const tab = (sp.get("tab") as FlowTab) || "warmup";
  const topic = sp.get("topic") ?? "Multiplication Facts";
  const flow = useMemo(() => makeFlow(topic), [topic]);
  const [idx, setIdx] = useState(0);

  const items =
    tab === "warmup"
      ? flow.warmup.map((x) => ({ q: x.q, a: x.a, choices: [] as string[] }))
      : tab === "exit"
        ? flow.exit.map((x) => ({ q: x.q, a: x.a, choices: [] as string[] }))
        : flow.game.map((x) => ({ q: x.q, a: x.choices[x.correctIndex], choices: x.choices }));

  const current = items[idx];

  return (
    <div className="min-h-screen bg-[#0B1220] text-white flex flex-col">
      <div className="px-6 py-4 flex items-center justify-between border-b border-white/10">
        <div className="font-extrabold text-lg">{topic}</div>
        <div className="text-white/70 text-sm">
          {tab.toUpperCase()} • {idx + 1}/{items.length}
        </div>
      </div>

      <div className="flex-1 grid place-items-center px-6">
        <div className="w-full max-w-4xl rounded-3xl bg-white/5 border border-white/10 p-8">
          <div className="text-3xl md:text-4xl font-extrabold">{current.q}</div>

          {current.choices.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-4">
              {current.choices.map((c, i) => (
                <div key={i} className="rounded-2xl bg-white/10 border border-white/10 px-5 py-4 text-xl">
                  {String.fromCharCode(65 + i)}. {c}
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 flex items-center justify-between">
            <button
              className="rounded-2xl px-5 py-3 bg-white/10 border border-white/10 hover:bg-white/15 disabled:opacity-40"
              onClick={() => setIdx((v) => Math.max(0, v - 1))}
              disabled={idx === 0}
            >
              Back
            </button>

            <button
              className="neon-btn disabled:opacity-40"
              onClick={() => setIdx((v) => Math.min(items.length - 1, v + 1))}
              disabled={idx === items.length - 1}
            >
              Next →
            </button>
          </div>

          <div className="mt-4 text-white/60 text-sm">Teacher answer: {current.a || "—"}</div>
        </div>
      </div>
    </div>
  );
}
