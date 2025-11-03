function Hero({ darkMode, highContrast }) {
  const titleColor = highContrast
    ? darkMode
      ? 'text-white'
      : 'text-black'
    : 'text-neutral-900 dark:text-neutral-100';
  const subColor = highContrast
    ? darkMode
      ? 'text-white'
      : 'text-black'
    : 'text-neutral-600 dark:text-neutral-300';

  const surface = highContrast
    ? darkMode
      ? 'bg-black'
      : 'bg-white'
    : 'bg-gradient-to-b from-rose-50/60 via-transparent to-transparent dark:from-rose-900/10';

  return (
    <section className={`${surface} pb-6 pt-10`}> 
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${titleColor}`}>
              한국어를 재미있게! 몽골 хэлээр тайлбарласан видео хичээлүүд
            </h1>
            <p className={`mt-4 text-base sm:text-lg ${subColor}`}>
              Learn Korean through a curated library of bite-sized video lessons, explained clearly in Mongolian. Switch themes, adjust font size, and enable high contrast for maximum comfort.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#videos" className="inline-flex items-center px-4 py-2 rounded-md bg-rose-500 text-white hover:bg-rose-600 transition">
                Start learning
              </a>
              <a href="#about" className="inline-flex items-center px-4 py-2 rounded-md border border-current text-current hover:opacity-80 transition">
                About the course
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1600&auto=format&fit=crop"
                alt="Korean study materials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
