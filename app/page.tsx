import { TopNav } from "@/components/TopNav";
import { TopicInputCard } from "@/components/TopicInputCard";
import { FlowPreview } from "@/components/FlowPreview";

export default function Page() {
  return (
    <div className="subtle-grid min-h-screen">
      <TopNav />

      <main className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950">
              Math Lesson Flow <span className="text-slate-700">in 10 seconds.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Warm-Up + Game + Exit Ticket — built for Grades 3–5.
            </p>

            <div className="mt-8">
              <TopicInputCard />
              <div className="mt-3 text-sm text-slate-600">
                <span className="underline underline-offset-4 cursor-pointer">Watch 10-sec demo</span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="bubble p-4">
                <div className="font-semibold">Start instantly</div>
                <div className="text-slate-600">Ready in seconds.</div>
              </div>
              <div className="bubble p-4">
                <div className="font-semibold">Projector-ready</div>
                <div className="text-slate-600">Great for stations.</div>
              </div>
              <div className="bubble p-4">
                <div className="font-semibold">Clean questions</div>
                <div className="text-slate-600">Simple + readable.</div>
              </div>
            </div>
          </div>

          <div>
            <FlowPreview />
          </div>
        </div>

        <section id="how" className="mt-16 bubble p-6">
          <div className="text-xl font-extrabold">How it works</div>
          <div className="mt-4 grid md:grid-cols-3 gap-4 text-slate-700">
            <div><b>1)</b> Choose a topic</div>
            <div><b>2)</b> Get a ready Flow</div>
            <div><b>3)</b> Start on the projector</div>
          </div>
        </section>

        <section id="teachers" className="mt-6 bubble p-6">
          <div className="text-xl font-extrabold">For teachers</div>
          <div className="mt-3 text-slate-700">
            Built for fast warm-ups and station rotations. No waiting for students to join.
          </div>
        </section>

        <section id="pricing" className="mt-6 bubble p-6">
          <div className="text-xl font-extrabold">Pricing</div>
          <div className="mt-3 text-slate-700">
            MVP placeholder. We’ll add plans after testing with teachers.
          </div>
        </section>
      </main>
    </div>
  );
}
