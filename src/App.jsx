import { useMemo, useState } from 'react';
import Header from './components/Header';
import HeroCover from './components/HeroCover';
import NewsGrid from './components/NewsGrid';
import TrendingSidebar from './components/TrendingSidebar';

const initialArticles = [
  {
    id: '1',
    title: 'Global Markets Rally as Tech Stocks Surge',
    excerpt: 'Investors cheered stronger-than-expected earnings, pushing major indices higher amid renewed optimism in the tech sector.',
    image: 'https://images.unsplash.com/photo-1551281044-8fd00b044f85?q=80&w=1600&auto=format&fit=crop',
    category: 'Business',
    author: 'Alex Rivera',
    publishedAt: '2025-08-25T08:00:00Z',
    readingTime: 5,
  },
  {
    id: '2',
    title: 'Breakthrough in Renewable Energy Storage Announced',
    excerpt: 'A new solid-state battery design promises higher capacity and faster charging, with potential to reshape the energy landscape.',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1600&auto=format&fit=crop',
    category: 'Technology',
    author: 'Priya Menon',
    publishedAt: '2025-08-29T10:30:00Z',
    readingTime: 6,
  },
  {
    id: '3',
    title: 'City Unveils Ambitious Urban Greening Initiative',
    excerpt: 'The program will add 2 million square feet of green roofs and micro-parks to reduce heat islands and boost biodiversity.',
    image: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1600&auto=format&fit=crop',
    category: 'Environment',
    author: 'Liam Chen',
    publishedAt: '2025-08-28T14:15:00Z',
    readingTime: 4,
  },
  {
    id: '4',
    title: 'Championship Final Delivers Instant Classic',
    excerpt: 'An extra-time thriller had everything: dramatic comebacks, tactical masterstrokes, and a last-minute winner.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop',
    category: 'Sports',
    author: 'Maya Okafor',
    publishedAt: '2025-08-29T20:45:00Z',
    readingTime: 3,
  },
  {
    id: '5',
    title: 'New Culinary Wave Redefines Comfort Food',
    excerpt: 'Chefs blend heritage recipes with modern techniques, creating dishes that are both nostalgic and innovative.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
    category: 'Culture',
    author: 'Sofia Martínez',
    publishedAt: '2025-08-27T09:05:00Z',
    readingTime: 7,
  },
  {
    id: '6',
    title: 'Healthcare AI Tool Shows Promise in Early Trials',
    excerpt: 'Clinicians report improved triage accuracy and reduced wait times using a new diagnostic support system.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
    category: 'Health',
    author: 'Dr. Naomi Feld',
    publishedAt: '2025-08-30T07:40:00Z',
    readingTime: 5,
  },
  {
    id: '7',
    title: 'Indie Film Festival Spotlights Emerging Voices',
    excerpt: 'This year’s lineup features diverse storytellers pushing the boundaries of narrative and form.',
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1600&auto=format&fit=crop',
    category: 'Entertainment',
    author: 'Jonah Park',
    publishedAt: '2025-08-26T15:20:00Z',
    readingTime: 4,
  },
  {
    id: '8',
    title: 'Breakthrough in Quantum Networking Achieved',
    excerpt: 'Researchers establish stable entanglement over record distances, paving the way for ultra-secure communication.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    category: 'Science',
    author: 'Dr. Helen Zhou',
    publishedAt: '2025-08-30T06:10:00Z',
    readingTime: 6,
  },
];

const trending = [
  { id: 't1', title: 'Chip design race accelerates', tag: 'Technology' },
  { id: 't2', title: 'Rising heat waves reshape cities', tag: 'Environment' },
  { id: 't3', title: 'Streaming platforms pivot again', tag: 'Entertainment' },
  { id: 't4', title: 'Breakout rookie rewrites records', tag: 'Sports' },
  { id: 't5', title: 'New discovery in dark matter hunt', tag: 'Science' },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(() => {
    const set = new Set(initialArticles.map((a) => a.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((a) => {
      const matchCategory = category === 'All' || a.category === category;
      const q = search.trim().toLowerCase();
      const matchSearch = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.author.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header onSearch={setSearch} />
      <HeroCover
        title="Your daily lens on business, tech, and culture"
        subtitle="Stay ahead with concise reporting, deep analysis, and live updates across the stories shaping our world."
        categories={categories}
        activeCategory={category}
        onSelectCategory={setCategory}
      />

      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NewsGrid articles={filteredArticles} categories={categories} activeCategory={category} onSelectCategory={setCategory} />
          </div>
          <aside className="lg:col-span-1">
            <TrendingSidebar items={trending} />
          </aside>
        </div>
      </main>

      <footer className="border-t mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} PulseWire Media. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#" className="hover:text-neutral-900">About</a>
            <a href="#" className="hover:text-neutral-900">Contact</a>
            <a href="#" className="hover:text-neutral-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
