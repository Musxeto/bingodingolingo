import React, { useRef, useState, useCallback } from 'react';
import html2canvas from 'html2canvas';
import TopNavbar from './components/TopNavbar';
import BingoGrid from './components/BingoGrid';
import ControlPanel from './components/ControlPanel';
import { useLocalStorage } from './hooks/useLocalStorage';
import { THEMES, createInitialCells } from './types';
import type { BingoCellData, Theme } from './types';

export default function App() {
  const [cells, setCells] = useLocalStorage<BingoCellData[]>('bingo-cells-v3', createInitialCells());
  const [theme, setTheme] = useLocalStorage<Theme>('bingo-theme-v3', THEMES[0]);
  const [title, setTitle] = useLocalStorage<string>('bingo-title-v3', 'My Bingo Card');
  const [markedCells, setMarkedCells] = useState<Set<number>>(new Set([12]));
  const [isExporting, setIsExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTextChange = useCallback((id: number, text: string) => {
    setCells((prev) => prev.map((c) => (c.id === id ? { ...c, text } : c)));
  }, [setCells]);

  const handleToggleMark = useCallback((id: number) => {
    setMarkedCells((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { if (id !== 12) next.delete(id); }
      else next.add(id);
      return next;
    });
  }, []);

  const handleShuffle = useCallback(() => {
    setCells((prev) => {
      const free = prev.find((c) => c.isFreeSpace)!;
      const rest = prev.filter((c) => !c.isFreeSpace);
      const texts = [...rest.map((c) => c.text)].sort(() => Math.random() - 0.5);
      const shuffled = rest.map((c, i) => ({ ...c, text: texts[i] }));
      return prev.map((c) => (c.isFreeSpace ? free : shuffled.shift()!));
    });
    setMarkedCells(new Set([12]));
  }, [setCells]);

  const handleReset = useCallback(() => {
    if (window.confirm('Clear all cells? This cannot be undone.')) {
      setCells(createInitialCells());
      setMarkedCells(new Set([12]));
    }
  }, [setCells]);

  const handleExport = useCallback(async () => {
    if (!cardRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        useCORS: true,
        scale: 3,
        logging: false,
        backgroundColor: null,
      });
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = `bingodingo-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error(err);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f0e8' }}>
      <TopNavbar />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 pb-20">
        {/* Page title */}
        <div className="text-center mb-8">
          <h1
            className="font-bold text-gray-900"
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              textShadow: '2px 3px 0 rgba(0,0,0,0.08)',
              letterSpacing: '1px',
            }}
          >
            Build Your Bingo Card
          </h1>
          <p
            className="text-gray-500 mt-1 text-lg"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            type in each square, click to mark off, download to share
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">
          {/* Bingo Card */}
          <BingoGrid
            ref={cardRef}
            cells={cells}
            onTextChange={handleTextChange}
            theme={theme}
            title={title}
            markedCells={markedCells}
            onToggleMark={handleToggleMark}
          />

          {/* Control Panel */}
          <ControlPanel
            theme={theme}
            onThemeChange={setTheme}
            title={title}
            onTitleChange={setTitle}
            onExport={handleExport}
            onReset={handleReset}
            onShuffle={handleShuffle}
            isExporting={isExporting}
          />
        </div>
      </main>
    </div>
  );
}
