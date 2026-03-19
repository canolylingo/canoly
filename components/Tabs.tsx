import { FlowTab } from "@/lib/mock";

const TAB_LABEL: Record<FlowTab, string> = {
  warmup: "Warm-Up",
  game: "Game",
  exit: "Exit Ticket",
};

export function Tabs({
  value,
  onChange,
}: {
  value: FlowTab;
  onChange: (t: FlowTab) => void;
}) {
  const tabs: FlowTab[] = ["warmup", "game", "exit"];

  return (
    <div className="flex gap-2">
      {tabs.map((t) => {
        const active = value === t;
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={[
              "px-4 py-2 rounded-2xl text-sm font-semibold transition",
              active ? "text-white" : "text-slate-700 hover:bg-white",
            ].join(" ")}
            style={
              active
                ? {
                    background: "linear-gradient(90deg, rgb(79,70,229), rgb(34,211,238))",
                    boxShadow: "0 0 18px rgba(34,211,238,0.25)",
                  }
                : undefined
            }
          >
            {TAB_LABEL[t]}
          </button>
        );
      })}
    </div>
  );
}
