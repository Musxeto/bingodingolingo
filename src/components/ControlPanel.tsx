
import { THEMES } from '../types';
import type { Theme, BingoCellData } from '../types';

interface ControlPanelProps {
  theme: Theme;
  onThemeChange: (t: Theme) => void;
  title: string;
  onTitleChange: (v: string) => void;
  onExport: () => void;
  onReset: () => void;
  onShuffle: () => void;
  isExporting: boolean;
  selectedCell: BingoCellData | null;
  onUpdateCellStyle: (id: number, styles: Partial<BingoCellData>) => void;
  onCloseCellSettings: () => void;
}

const FONT_OPTIONS = [
  { label: 'Brat (Arial)', value: "'Arial', sans-serif" },
  { label: 'Handwritten Madness', value: "'Handwritten Madness', cursive" },
  { label: 'Ramidots', value: "'Ramidots', cursive" },
  { label: 'My Kids Handwritten', value: "'My Kids Handwritten', cursive" },
  { label: 'Jakarta Handwritten', value: "'Jakarta Handwritten', cursive" },
  { label: 'Messy Handwritten', value: "'Messy Handwritten', cursive" },
  { label: 'Pencilant Script', value: "'Pencilant Script', cursive" },
  { label: 'Rockybilly', value: "'Rockybilly', cursive" },
  { label: 'Caveat', value: "'Caveat', cursive" },
  { label: 'Permanent Marker', value: "'Permanent Marker', cursive" },
  { label: 'Indie Flower', value: "'Indie Flower', cursive" },
  { label: 'Kalam', value: "'Kalam', cursive" },
  { label: 'Patrick Hand', value: "'Patrick Hand', cursive" },
  { label: 'Rock Salt', value: "'Rock Salt', cursive" },
];

const FONT_SIZES = [
  { label: 'Small', value: 'clamp(0.6rem, 1.8vw, 1rem)' },
  { label: 'Normal', value: 'clamp(0.85rem, 2.5vw, 1.3rem)' },
  { label: 'Large', value: 'clamp(1rem, 3vw, 1.6rem)' },
  { label: 'X-Large', value: 'clamp(1.25rem, 3.8vw, 2.1rem)' },
];

const labelCls = 'block text-sm font-bold mb-1 tracking-wide uppercase';
const inputCls = `
  w-full border-2 border-gray-800 rounded px-3 py-2
  bg-white text-gray-900 font-[inherit] text-base outline-none
  focus:border-black transition-colors placeholder:text-gray-400
  shadow-[2px_2px_0_rgba(0,0,0,0.15)]
`;

export default function ControlPanel({
  theme, onThemeChange, title, onTitleChange, onExport, onReset, onShuffle, isExporting,
  selectedCell, onUpdateCellStyle, onCloseCellSettings
}: ControlPanelProps) {
  const update = (key: keyof Theme, val: string) => onThemeChange({ ...theme, [key]: val });

  return (
    <div
      className="sticky top-6 flex flex-col gap-4"
      style={{
        backgroundColor: '#fffef8',
        border: '2.5px solid #1a1a1a',
        borderRadius: '4px',
        padding: '1.5rem',
        boxShadow: '3px 4px 0 rgba(0,0,0,0.18)',
        fontFamily: theme.font,
      }}
    >
      {/* Panel header */}
      <div className="text-center border-b-2 border-gray-800 pb-3 mb-1">
        <h3
          className="text-2xl font-bold text-gray-900"
          style={{ fontFamily: "'Ramidots', cursive", letterSpacing: '0.5px' }}
        >
          {selectedCell ? 'Cell Settings' : 'Customize'}
        </h3>
        <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: theme.font }}>
          {selectedCell ? 'style this cell specifically' : 'make it your own'}
        </p>
      </div>

      {selectedCell ? (
        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-2 duration-200">
          <div>
            <label className={labelCls} style={{ fontFamily: theme.font, color: '#1a1a1a' }}>Cell Text</label>
            <input
              type="text"
              value={selectedCell.text}
              onChange={(e) => onUpdateCellStyle(selectedCell.id, { text: e.target.value })}
              className={inputCls}
              style={{ fontFamily: selectedCell.font || theme.font }}
            />
          </div>

          <div>
            <label className={labelCls} style={{ fontFamily: theme.font, color: '#1a1a1a' }}>Font</label>
            <select
              value={selectedCell.font || ''}
              onChange={(e) => onUpdateCellStyle(selectedCell.id, { font: e.target.value || undefined })}
              className={inputCls}
              style={{ fontFamily: theme.font }}
            >
              <option value="">Default (from Theme)</option>
              {FONT_OPTIONS.map((f) => (
                <option key={f.value} value={f.value} style={{ fontFamily: f.value }}>{f.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelCls} style={{ fontFamily: theme.font, color: '#1a1a1a' }}>Font Size</label>
            <select
              value={selectedCell.fontSize || 'clamp(0.85rem, 2.5vw, 1.3rem)'}
              onChange={(e) => onUpdateCellStyle(selectedCell.id, { fontSize: e.target.value })}
              className={inputCls}
              style={{ fontFamily: theme.font }}
            >
              {FONT_SIZES.map((fs) => (
                <option key={fs.value} value={fs.value}>{fs.label}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className={labelCls} style={{ fontFamily: theme.font, color: '#1a1a1a', fontSize: '0.75rem' }}>Text</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={selectedCell.textColor || theme.textColor}
                  onChange={(e) => onUpdateCellStyle(selectedCell.id, { textColor: e.target.value })}
                  className="color-swatch w-8 h-8"
                />
                <button
                  onClick={() => onUpdateCellStyle(selectedCell.id, { textColor: undefined })}
                  className="text-xs underline text-gray-500"
                >Reset</button>
              </div>
            </div>
            <div className="flex-1">
              <label className={labelCls} style={{ fontFamily: theme.font, color: '#1a1a1a', fontSize: '0.75rem' }}>Background</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={selectedCell.bgColor || '#ffffff'}
                  onChange={(e) => onUpdateCellStyle(selectedCell.id, { bgColor: e.target.value })}
                  className="color-swatch w-8 h-8"
                />
                <button
                  onClick={() => onUpdateCellStyle(selectedCell.id, { bgColor: undefined })}
                  className="text-xs underline text-gray-500"
                >Reset</button>
              </div>
            </div>
          </div>

          <button
            onClick={onCloseCellSettings}
            className="w-full py-2.5 font-bold text-base rounded transition-all mt-2"
            style={{
              fontFamily: "'Ramidots', cursive",
              border: '2px solid #1a1a1a',
              backgroundColor: '#e2e8f0',
              color: '#1a1a1a',
              boxShadow: '2px 2px 0 #1a1a1a',
            }}
          >
            ← Back to General
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-left-2 duration-200">
          {/* Card Title */}
          <div>
            <label className={labelCls} style={{ fontFamily: theme.font, color: '#1a1a1a' }}>
              Card Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              className={inputCls}
              placeholder="my bingo card"
              maxLength={40}
              style={{ fontFamily: theme.font }}
            />
          </div>

          {/* Palette presets */}
          <div>
            <label className={labelCls} style={{ fontFamily: theme.font, color: '#1a1a1a' }}>
              Colour Palette
            </label>
            <div className="flex flex-col gap-2">
              {THEMES.map((t) => (
                <button
                  key={t.name}
                  onClick={() => onThemeChange(t)}
                  className="flex items-center gap-3 px-3 py-2 rounded text-left font-bold text-sm transition-all"
                  style={{
                    fontFamily: theme.font,
                    border: `2px solid ${theme.name === t.name ? '#1a1a1a' : 'rgba(0,0,0,0.2)'}`,
                    backgroundColor: theme.name === t.name ? '#f0f0f0' : '#ffffff',
                    boxShadow: theme.name === t.name ? '2px 2px 0 #1a1a1a' : '1px 1px 0 rgba(0,0,0,0.1)',
                    color: '#1a1a1a',
                  }}
                >
                  {/* Swatch row */}
                  <div className="flex gap-1 flex-shrink-0">
                    {t.headerColors.map((c, i) => (
                      <span
                        key={i}
                        className="w-4 h-4 rounded-sm inline-block border border-black/20"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font */}
          <div>
            <label className={labelCls} style={{ fontFamily: theme.font, color: '#1a1a1a' }}>
              Default Font
            </label>
            <select
              value={theme.font}
              onChange={(e) => update('font', e.target.value)}
              className={inputCls}
              style={{ fontFamily: theme.font }}
            >
              {FONT_OPTIONS.map((f) => (
                <option key={f.value} value={f.value} style={{ fontFamily: f.value }}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>

          {/* Title colour */}
          <div>
            <label className={labelCls} style={{ fontFamily: theme.font, color: '#1a1a1a' }}>
              Title Colour
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={theme.titleColor}
                onChange={(e) => update('titleColor', e.target.value)}
                className="color-swatch"
                id="titleColor"
              />
              <label htmlFor="titleColor" className="text-sm text-gray-600 cursor-pointer" style={{ fontFamily: theme.font }}>
                pick a colour
              </label>
            </div>
          </div>

          {/* Border colour */}
          <div>
            <label className={labelCls} style={{ fontFamily: theme.font, color: '#1a1a1a' }}>
              Border / Ink Colour
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={theme.borderColor}
                onChange={(e) => update('borderColor', e.target.value)}
                className="color-swatch"
                id="borderColor"
              />
              <label htmlFor="borderColor" className="text-sm text-gray-600 cursor-pointer" style={{ fontFamily: theme.font }}>
                pick a colour
              </label>
            </div>
          </div>

          {/* Divider */}
          <div
            className="border-t-2 border-dashed"
            style={{ borderColor: '#1a1a1a', opacity: 0.25 }}
          />

          {/* Buttons */}
          <div className="flex flex-col gap-2">
            <button
              onClick={onShuffle}
              className="w-full py-2.5 font-bold text-base rounded transition-all"
              style={{
                fontFamily: theme.font,
                border: '2px solid #2d7a2d',
                backgroundColor: '#d4f1d4',
                color: '#1a4d1a',
                boxShadow: '2px 2px 0 #2d7a2d',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = 'translate(-1px,-1px)'; (e.target as HTMLElement).style.boxShadow = '3px 3px 0 #2d7a2d'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = ''; (e.target as HTMLElement).style.boxShadow = '2px 2px 0 #2d7a2d'; }}
            >
              Shuffle Cells
            </button>

            <button
              onClick={onReset}
              className="w-full py-2.5 font-bold text-base rounded transition-all"
              style={{
                fontFamily: theme.font,
                border: '2px solid #c0392b',
                backgroundColor: '#ffd6d6',
                color: '#6d1010',
                boxShadow: '2px 2px 0 #c0392b',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = 'translate(-1px,-1px)'; (e.target as HTMLElement).style.boxShadow = '3px 3px 0 #c0392b'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = ''; (e.target as HTMLElement).style.boxShadow = '2px 2px 0 #c0392b'; }}
            >
              Clear All
            </button>

            <button
              onClick={onExport}
              disabled={isExporting}
              className="w-full py-3 font-bold text-lg rounded transition-all"
              style={{
                fontFamily: "'Ramidots', cursive",
                border: '2.5px solid #1a1a1a',
                backgroundColor: isExporting ? '#ccc' : '#1a1a1a',
                color: '#ffffff',
                boxShadow: isExporting ? 'none' : '3px 3px 0 rgba(0,0,0,0.3)',
                cursor: isExporting ? 'wait' : 'pointer',
                opacity: isExporting ? 0.6 : 1,
              }}
              onMouseEnter={(e) => { if (!isExporting) { (e.target as HTMLElement).style.transform = 'translate(-1px,-1px)'; (e.target as HTMLElement).style.boxShadow = '4px 4px 0 rgba(0,0,0,0.3)'; } }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = ''; (e.target as HTMLElement).style.boxShadow = '3px 3px 0 rgba(0,0,0,0.3)'; }}
            >
              {isExporting ? 'Saving...' : 'Download PNG'}
            </button>
          </div>

          <p
            className="text-center text-xs text-gray-400 leading-snug"
            style={{ fontFamily: theme.font }}
          >
            Click any cell to mark it off. Focus to edit.
          </p>
        </div>
      )}
    </div>
  );
}
