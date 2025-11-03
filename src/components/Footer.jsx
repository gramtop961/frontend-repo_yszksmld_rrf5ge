function Footer({ darkMode, highContrast }) {
  const bg = highContrast
    ? darkMode
      ? 'bg-black'
      : 'bg-white'
    : 'bg-neutral-50 dark:bg-neutral-950';
  const text = highContrast
    ? darkMode
      ? 'text-white'
      : 'text-black'
    : 'text-neutral-600 dark:text-neutral-400';
  return (
    <footer className={`${bg} ${text} mt-10`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm">© {new Date().getFullYear()} Han-Mon Learn. All rights reserved.</p>
        <p className="text-sm">한국어 × Монгол хэл — Learn with care and clarity.</p>
      </div>
    </footer>
  );
}

export default Footer;
