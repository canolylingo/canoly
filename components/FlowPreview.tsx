import { BubbleCard } from "./BubbleCard";

export function FlowPreview() {
  return (
    <BubbleCard className="p-0 overflow-hidden">
      <div className="p-4 border-b border-[rgba(79,70,229,0.10)] flex items-center justify-between">
        <div className="font-extrabold">Lesson Flow</div>
        <div className="text-xs text-slate-600 bubble px-3 py-2">Grades 3–5</div>
      </div>

      <div className="p-4">
        <div className="flex gap-2 mb-4">
          <span
            className="px-3 py-2 rounded-2xl text-xs font-semibold text-white"
            style={{ background: "linear-gradient(90deg, rgb(79,70,229), rgb(34,211,238))" }}
          >
            Warm-Up
          </span>
          <span className="px-3 py-2 rounded-2xl text-xs font-semibold bg-white text-slate-700">Game</span>
          <span className="px-3 py-2 rounded-2xl text-xs font-semibold bg-white text-slate-700">Exit Ticket</span>
        </div>

        <div className="bubble p-4">
          <div className="font-semibold mb-2">Multiplication Facts</div>
          <div className="text-sm text-slate-700 grid grid-cols-2 gap-y-1">
            <div>7 × 3 = ?</div><div className="text-green-600">✓</div>
            <div>9 × 4 = ?</div><div className="text-green-600">✓</div>
            <div>5 × 8 = ?</div><div className="text-green-600">✓</div>
          </div>
          <button className="mt-4 neon-btn w-full">Start</button>
          <div className="mt-2 text-xs text-slate-600">Next: Game → Exit Ticket</div>
        </div>
      </div>
    </BubbleCard>
  );
}
