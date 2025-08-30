import { Bookmark, Clock } from 'lucide-react';

function ArticleCard({ article }) {
  const date = new Date(article.publishedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  return (
    <article className="group overflow-hidden rounded-xl border bg-white transition hover:shadow-md">
      <div className="aspect-[16/9] overflow-hidden">
        <img src={article.image} alt={article.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700">{article.category}</span>
          <span className="text-neutral-400">•</span>
          <span className="inline-flex items-center gap-1 text-xs text-neutral-500">
            <Clock className="h-3.5 w-3.5" /> {article.readingTime} min read
          </span>
          <span className="ml-auto text-xs text-neutral-500">{date}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug tracking-tight group-hover:underline">
          <a href="#">{article.title}</a>
        </h3>
        <p className="mt-1.5 text-sm text-neutral-600 line-clamp-2">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-neutral-500">By {article.author}</div>
          <button className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-xs hover:bg-neutral-50">
            <Bookmark className="h-4 w-4" /> Save
          </button>
        </div>
      </div>
    </article>
  );
}

export default function NewsGrid({ articles, categories, activeCategory, onSelectCategory }) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`rounded-full border px-3 py-1.5 text-sm ${activeCategory === cat ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white hover:bg-neutral-50'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="text-sm text-neutral-500">{articles.length} results</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="rounded-md border px-4 py-2 text-sm hover:bg-neutral-50">Load more</button>
      </div>
    </div>
  );
}
