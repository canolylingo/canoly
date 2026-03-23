"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { makeFlow } from "@/lib/mock";

export function TopicInputCard() {
  const [topic, setTopic] = useState("multiplication");
  const router = useRouter();

  function onGenerate() {
    const flow = makeFlow(topic);
    router.push(`/flow/${flow.id}?topic=${encodeURIComponent(flow.topic)}`);
  }

  return (
    <div className="bubble p-5">
      <div className="text-sm font-semibold text-slate-800 mb-2">Topic (Grades 3–5)</div>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., multiplication"
          className="w-full rounded-2xl border border-[rgba(79,70,229,0.14)] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[rgba(34,211,238,0.35)]"
        />
        <button onClick={onGenerate} className="neon-btn whitespace-nowrap">Generate Flow →</button>
      </div>
      <div className="mt-3 text-xs text-slate-600">
        Pick a topic → Get a ready lesson flow → Start on the projector.
      </div>
    </div>
  );
}
