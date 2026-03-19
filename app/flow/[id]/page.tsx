"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { TopNav } from "@/components/TopNav";
import { Tabs } from "@/components/Tabs";
import { FlowTab, makeFlow } from "@/lib/mock";

export default function FlowPage({ params }: { params: { id: string } }) {
  const sp = useSearchParams();
  const topic = sp.get("topic") ?? "Multiplication Facts";
  const flow = useMemo(() => makeFlow(topic), [topic]);
  const [tab, setTab] = useState<FlowTab>("warmup");
  const router = useRouter();

  return (
    <div className="subtle-grid min-h-screen">
      <TopNav />
      <main className="mx-auto max-w-5xl px-5 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold">{flow.topic}</h1>
            <div className="mt-1 text-slate-700">Grades {flow.gradeBand} • Lesson Flow</div>
          </div>

          <button
            className="neon-btn"
            onClick={() =>
              router.push(`/play/${params.id}?tab=${tab}&topic=${encodeURIComponent(flow.topic)}`)
            }
          >
            Start on projector →
          </button>
        </div>

        <div className="mt-6">
          <Tabs value={tab} onChange={setTab} />
        </div>

        <div className="mt-6 bubble p-6">
          {tab === "warmup" && (
            <>
              <div className="text-xl font-extrabold mb-3">Warm-Up</div>
              <ul className="space-y-2 text-slate-800">
                {flow.warmup.map((x, i) => (
                  <li key={i} className="flex items-center justify-between bubble p-4">
                    <span>{x.q}</span>
                    <span className="text-slate-500">Answer: {x.a}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {tab === "game" && (
            <>
              <div className="text-xl font-extrabold mb-3">Game (8 questions)</div>
              <div className="space-y-3">
                {flow.game.slice(0, 3).map((q, i) => (
                  <div key={i} className="bubble p-4">
                    <div className="font-semibold">{q.q}</div>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                      {q.choices.map((c, idx) => (
                        <div key={idx} className="rounded-2xl border border-[rgba(79,70,229,0.12)] bg-white px-3 py-2">
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="text-sm text-slate-600">
                  (MVP preview: first 3 shown here. Projector mode shows all 8.)
                </div>
              </div>
            </>
          )}

          {tab === "exit" && (
            <>
              <div className="text-xl font-extrabold mb-3">Exit Ticket</div>
              <ul className="space-y-2">
                {flow.exit.map((x, i) => (
                  <li key={i} className="bubble p-4">
                    <div className="font-semibold">{x.q}</div>
                    {x.a ? (
                      <div className="text-slate-600 mt-1">Answer: {x.a}</div>
                    ) : (
                      <div className="text-slate-600 mt-1">Free response</div>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
