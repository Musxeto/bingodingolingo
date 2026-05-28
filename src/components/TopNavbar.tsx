

export default function TopNavbar() {
  return (
    <header
      className="border-b-2 border-gray-800"
      style={{ backgroundColor: '#fffef8' }}
    >
      <div className="max-w-[1400px] mx-auto h-14 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Simple hand-drawn grid icon */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="2" y="2" width="28" height="28" rx="2" stroke="#1a1a1a" strokeWidth="2.5"/>
            <line x1="11" y1="2" x2="11" y2="30" stroke="#1a1a1a" strokeWidth="2"/>
            <line x1="21" y1="2" x2="21" y2="30" stroke="#1a1a1a" strokeWidth="2"/>
            <line x1="2" y1="11" x2="30" y2="11" stroke="#1a1a1a" strokeWidth="2"/>
            <line x1="2" y1="21" x2="30" y2="21" stroke="#1a1a1a" strokeWidth="2"/>
          </svg>
          <div className="flex flex-col leading-tight">
            <span
              className="text-2xl font-bold text-gray-900 leading-none"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              BingoDingo
            </span>
            <span
              className="text-xs text-gray-500 hidden sm:block"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              your hand-drawn bingo card maker
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <span
            className="text-sm text-gray-500 hidden sm:block"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            click to mark · type to edit · download to share
          </span>
        </nav>
      </div>
    </header>
  );
}
