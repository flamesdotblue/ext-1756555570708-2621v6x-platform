import { Flame } from 'lucide-react';

export default function TrendingSidebar({ items = [] }) {
  return (
    <div className="sticky top-24">
      <div className="rounded-xl border bg-white p-5">
        <div className="mb-4 flex items-center gap-2">
          <Flame className="h-5 w-5 text-red-500" />
          <h3 className="font-semibold tracking-tight">Trending</h3>
        </div>
        <ul className="space-y-4">
          {items.map((it, idx) => (
            <li key={it.id} className="flex items-start gap-3">
              <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full border text-xs flex items-center justify-center text-neutral-600">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div>
                <a href="#" className="font-medium leading-snug hover:underline">{it.title}</a>
                <div className="text-xs text-neutral-500 mt-1">{it.tag}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-xl border bg-gradient-to-br from-red-50 to-white p-5">
        <h4 className="font-semibold tracking-tight">Get the Briefing</h4>
        <p className="mt-1 text-sm text-neutral-600">A quick, daily digest of the top headlines and insights.</p>
        <form className="mt-3 flex gap-2">
          <input type="email" placeholder="you@example.com" className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-200" />
          <button type="submit" className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Subscribe</button>
        </form>
        <p className="mt-2 text-[11px] text-neutral-500">By subscribing, you agree to our Privacy Policy.</p>
      </div>
    </div>
  );
}
