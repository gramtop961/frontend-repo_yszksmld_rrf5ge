import { useState } from 'react';
import { Moon, Sun, Accessibility, Search } from 'lucide-react';

function Navbar({
  darkMode,
  onToggleTheme,
  fontScale,
  onIncreaseFont,
  onDecreaseFont,
  highContrast,
  onToggleContrast,
  search,
  onSearchChange,
}) {
  const [openA11y, setOpenA11y] = useState(false);

  const baseBg = highContrast
    ? darkMode
      ? 'bg-black'
      : 'bg-white'
    : darkMode
    ? 'bg-neutral-900'
    : 'bg-white/70 backdrop-blur';
  const baseText = highContrast
    ? darkMode
      ? 'text-white'
      : 'text-black'
    : darkMode
    ? 'text-neutral-100'
    : 'text-neutral-900';
  const border = highContrast ? 'border border-current' : '';

  return (
    <header className={`${baseBg} ${baseText} ${border} sticky top-0 z-30`}>
      <nav className={`max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3`}>
        <div className="flex items-center gap-2 font-semibold">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-500" />
          <span>Han-Mon Learn</span>
        </div>

        <div className="hidden md:flex items-center gap-3 flex-1 max-w-md ml-4">
          <div className={`relative w-full`}>
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${baseText} opacity-70`} size={18} />
            <input
              aria-label="Search lessons"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Хичээл хайх / 수업 검색"
              className={`w-full pl-9 pr-3 py-2 rounded-md outline-none ${
                highContrast
                  ? darkMode
                    ? 'bg-black text-white border border-white'
                    : 'bg-white text-black border border-black'
                  : darkMode
                  ? 'bg-neutral-800 text-neutral-100'
                  : 'bg-white text-neutral-900 border border-neutral-200'
              } placeholder:opacity-70`}
            />
          </div>
        </div>

        <div className="flex items-center">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className={`p-2 rounded-md transition ${
              highContrast ? 'border border-current' : 'bg-neutral-100 dark:bg-neutral-800'
            } ${baseText}`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="relative">
            <button
              onClick={() => setOpenA11y((v) => !v)}
              aria-label="Accessibility options"
              className={`p-2 rounded-md ml-2 transition ${
                highContrast ? 'border border-current' : 'bg-neutral-100 dark:bg-neutral-800'
              } ${baseText}`}
            >
              <Accessibility size={18} />
            </button>

            {openA11y && (
              <div
                className={`absolute right-0 mt-2 w-64 rounded-md shadow-lg p-3 ${
                  highContrast
                    ? darkMode
                      ? 'bg-black text-white border border-white'
                      : 'bg-white text-black border border-black'
                    : darkMode
                    ? 'bg-neutral-800 text-neutral-100'
                    : 'bg-white text-neutral-900 border border-neutral-200'
                }`}
              >
                <p className="text-sm mb-2 font-medium">Accessibility</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Font size</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={onDecreaseFont}
                      className={`px-2 py-1 rounded ${
                        highContrast ? 'border border-current' : 'bg-neutral-100 dark:bg-neutral-700'
                      }`}
                      aria-label="Decrease font size"
                    >
                      A-
                    </button>
                    <span className="text-xs opacity-70 uppercase">{fontScale}</span>
                    <button
                      onClick={onIncreaseFont}
                      className={`px-2 py-1 rounded ${
                        highContrast ? 'border border-current' : 'bg-neutral-100 dark:bg-neutral-700'
                      }`}
                      aria-label="Increase font size"
                    >
                      A+
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">High contrast</span>
                  <button
                    onClick={onToggleContrast}
                    className={`px-3 py-1 rounded ${
                      highContrast ? 'border border-current' : 'bg-neutral-100 dark:bg-neutral-700'
                    }`}
                    aria-pressed={highContrast}
                  >
                    {highContrast ? 'On' : 'Off'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
