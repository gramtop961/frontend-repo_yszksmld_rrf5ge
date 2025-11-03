import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import VideoGrid from './components/VideoGrid.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [fontScale, setFontScale] = useState('base'); // 'base' | 'lg' | 'xl'
  const [highContrast, setHighContrast] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [darkMode]);

  const fontClass = useMemo(() => {
    switch (fontScale) {
      case 'lg':
        return 'text-lg';
      case 'xl':
        return 'text-xl';
      default:
        return 'text-base';
    }
  }, [fontScale]);

  const videos = [
    {
      id: '1',
      yt: '2wEAfT8C3cY',
      title: 'Хангүл тэмдэгтүүд ба унших үндэс — Hangul Basics',
      level: 'Beginner',
      duration: '12:34',
      thumbnail: 'https://img.youtube.com/vi/2wEAfT8C3cY/hqdefault.jpg',
    },
    {
      id: '2',
      yt: 'i1n8jY-1Y6Y',
      title: 'Энгийн мэндчилгээ ба ярианы эхлэл — Greetings in Korean',
      level: 'Beginner',
      duration: '09:45',
      thumbnail: 'https://img.youtube.com/vi/i1n8jY-1Y6Y/hqdefault.jpg',
    },
    {
      id: '3',
      yt: '4Zx4F1nYc2o',
      title: 'Хугацааны үгс ба өгүүлбэрийн дараалал — Time and Syntax',
      level: 'Intermediate',
      duration: '15:02',
      thumbnail: 'https://img.youtube.com/vi/4Zx4F1nYc2o/hqdefault.jpg',
    },
    {
      id: '4',
      yt: 'w7ejDZ8SWv8',
      title: 'Ярианы аялга ба хүндэтгэлийн хэлбэр — Politeness Levels',
      level: 'Intermediate',
      duration: '11:27',
      thumbnail: 'https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg',
    },
  ];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return videos;
    return videos.filter((v) => v.title.toLowerCase().includes(q) || v.level.toLowerCase().includes(q));
  }, [search]);

  const overlayBg = highContrast
    ? darkMode
      ? 'bg-black'
      : 'bg-white'
    : 'bg-black/80';

  return (
    <div className={`${fontClass} ${highContrast ? (darkMode ? 'text-white bg-black' : 'text-black bg-white') : 'text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950'}`}>
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((v) => !v)}
        fontScale={fontScale}
        onIncreaseFont={() => setFontScale((s) => (s === 'base' ? 'lg' : 'xl'))}
        onDecreaseFont={() => setFontScale((s) => (s === 'xl' ? 'lg' : 'base'))}
        highContrast={highContrast}
        onToggleContrast={() => setHighContrast((v) => !v)}
        search={search}
        onSearchChange={setSearch}
      />

      <main>
        <Hero darkMode={darkMode} highContrast={highContrast} />
        <VideoGrid
          videos={filtered}
          onSelect={(v) => setSelected(v)}
          darkMode={darkMode}
          highContrast={highContrast}
        />
      </main>

      <Footer darkMode={darkMode} highContrast={highContrast} />

      {selected && (
        <div
          className={`fixed inset-0 ${overlayBg} flex items-center justify-center z-40 px-4`}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className={`aspect-video w-full rounded-lg overflow-hidden ${highContrast ? (darkMode ? 'border border-white' : 'border border-black') : ''}`}>
              <iframe
                title={selected.title}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selected.yt}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-3 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-lg">{selected.title}</h3>
                <p className="text-sm opacity-80">{selected.level} • {selected.duration}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className={`px-4 py-2 rounded-md ${highContrast ? 'border border-current' : 'bg-neutral-100 dark:bg-neutral-800'}`}
                aria-label="Close video"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
