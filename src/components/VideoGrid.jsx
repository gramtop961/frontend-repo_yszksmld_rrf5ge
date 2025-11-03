import { Play } from 'lucide-react';

function VideoCard({ video, onSelect, darkMode, highContrast }) {
  const cardBg = highContrast
    ? darkMode
      ? 'bg-black border border-white'
      : 'bg-white border border-black'
    : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800';
  const textMuted = highContrast
    ? ''
    : 'text-neutral-600 dark:text-neutral-400';

  return (
    <button
      onClick={() => onSelect(video)}
      className={`text-left rounded-lg overflow-hidden hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-rose-400 ${cardBg}`}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <h3 className="font-semibold leading-snug line-clamp-2">{video.title}</h3>
        <div className={`mt-2 flex items-center justify-between ${textMuted}`}>
          <span className="text-xs uppercase tracking-wide">{video.level}</span>
          <span className="text-xs">{video.duration}</span>
        </div>
        <div className="mt-3 inline-flex items-center gap-2 text-rose-600 dark:text-rose-400">
          <Play size={16} /> <span className="text-sm">Play</span>
        </div>
      </div>
    </button>
  );
}

function VideoGrid({ videos, onSelect, darkMode, highContrast }) {
  return (
    <section id="videos" className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">Video Library</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Curated lessons with Mongolian explanations</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} onSelect={onSelect} darkMode={darkMode} highContrast={highContrast} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoGrid;
