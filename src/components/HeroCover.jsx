import Spline from '@splinetool/react-spline';

export default function HeroCover({ title, subtitle, categories, activeCategory, onSelectCategory }) {
  return (
    <section className="relative w-full">
      <div className="relative h-[56vh] md:h-[68vh] w-full">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/10 to-white/80" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl pointer-events-auto">
              <span className="inline-block rounded-full border bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium tracking-wide text-neutral-700">Interactive • Minimalist • Modern</span>
              <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">{title}</h1>
              <p className="mt-3 md:mt-4 text-neutral-700 max-w-2xl">{subtitle}</p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition ${activeCategory === cat ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white/80 hover:bg-white'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
