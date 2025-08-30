import { useState } from 'react';
import { Menu, Search, Sun } from 'lucide-react';

export default function Header({ onSearch }) {
  const [query, setQuery] = useState('');

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-200 lg:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
        <a href="#" className="font-semibold tracking-tight text-lg">PulseWire</a>

        <div className="ml-auto hidden md:flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="search"
              placeholder="Search stories, topics, authors"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSearch(query);
              }}
              className="w-[320px] rounded-md border pl-9 pr-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200"
            />
          </div>
          <button
            onClick={() => onSearch(query)}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-neutral-50"
          >
            <Search className="h-4 w-4" />
            Search
          </button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-neutral-50" aria-label="Toggle theme">
            <Sun className="h-5 w-5" />
          </button>
        </div>

        <div className="md:hidden ml-auto flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="search"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSearch(query);
              }}
              className="w-[160px] rounded-md border pl-8 pr-2 py-1.5 text-sm placeholder:text-neutral-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
