import Link from "next/link";

export function TopNav() {
  return (
    <div className="sticky top-0 z-20 bg-[rgba(247,249,255,0.75)] backdrop-blur border-b border-[rgba(79,70,229,0.10)]">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl grid place-items-center bubble">🐱</div>
          <div className="text-xl font-extrabold tracking-tight">canoly</div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#teachers" className="hover:text-slate-900">For teachers</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <Link href="/flow/new" className="neon-btn">Get Started</Link>
        </div>

        <div className="md:hidden">
          <Link href="/flow/new" className="neon-btn">Start</Link>
        </div>
      </div>
    </div>
  );
}
