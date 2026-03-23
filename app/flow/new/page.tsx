"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TopNav } from "@/components/TopNav";
import { makeFlow } from "@/lib/mock";

export default function NewFlowPage() {
  const [topic, setTopic] = useState("");
  const router = useRouter();

  return (
    <div className="subtle-grid min-h-screen">
      <TopNav />
      <main className="mx-auto max-w-3xl px-5 py-12">
        <h1 className="text-3xl font-extrabold">Create a Flow</h1>
        <p className="mt-2 text-slate-700">Grades 3–5 • Warm-Up + Game + Exit Ticket</p>

        <div className="mt-8 bubble p-6">
          <label className="block text-sm font-semibold mb-2">Topic</label>
          <input
            className="w-full rounded-2xl border border-[rgba(79,70,229,0.14)] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[rgba(34,211,238,0.35)]"
            placeholder="e.g., multiplication facts"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <button
            className="mt-4 neon-btn w-full"
            onClick={() => {
              const flow = makeFlow(topic);
              router.push(`/flow/${flow.id}?topic=${encodeURIComponent(flow.topic)}`);
            }}
          >
            Generate Flow →
          </button>
        </div>
      </main>
    </div>
  );
}
