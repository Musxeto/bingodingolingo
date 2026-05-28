import React, { useRef, useEffect } from 'react';
import type { Theme, BingoCellData } from '../types';

interface BingoCellProps {
  cell: BingoCellData;
  onTextChange: (id: number, text: string) => void;
  theme: Theme;
  isMarked: boolean;
  onToggleMark: (id: number) => void;
  cellIndex: number;
  isSelected: boolean;
  onSelect: () => void;
}

export default function BingoCell({
  cell,
  onTextChange,
  theme,
  isMarked,
  onToggleMark,
  cellIndex,
  isSelected,
  onSelect,
}: BingoCellProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [cell.text]);

  const baseBg = cell.bgColor || theme.cellColors[cellIndex % theme.cellColors.length];
  const bg = isMarked ? theme.markedBg : baseBg;
  const textCol = isMarked ? '#ffffff' : (cell.textColor || theme.textColor);
  const fontFamily = cell.font || theme.font;
  const fontSize = cell.fontSize || 'clamp(0.85rem, 2.5vw, 1.3rem)';

  return (
    <div
      className={`bingo-cell relative flex items-center justify-center overflow-hidden cursor-pointer ${isSelected ? 'z-10' : ''}`}
      style={{
        backgroundColor: bg,
        border: `2.5px solid ${theme.borderColor}`,
        color: textCol,
        aspectRatio: '1',
        borderRadius: '3px',
        transition: 'transform 0.12s ease',
        boxShadow: isSelected ? `0 0 0 3px #1a1a1a` : 'none',
        transform: isSelected ? 'scale(1.03)' : '',
      }}
      onClick={() => {
        onToggleMark(cell.id);
      }}
    >
      {/* Crayon-fill overlay when marked */}
      {isMarked && (
        <div className="stamp-in absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <svg viewBox="0 0 100 100" className="w-[88%] h-[88%]">
            {/* Rough cross-out lines */}
            <line x1="10" y1="10" x2="90" y2="90" stroke="rgba(255,255,255,0.7)" strokeWidth="5" strokeLinecap="round" />
            <line x1="90" y1="10" x2="10" y2="90" stroke="rgba(255,255,255,0.7)" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
      )}

      <textarea
        ref={textareaRef}
        value={cell.text}
        onChange={(e) => { e.stopPropagation(); onTextChange(cell.id, e.target.value); }}
        onClick={(e) => { e.stopPropagation(); onSelect(); }}
        onFocus={() => onSelect()}
        className="cell-textarea"
        style={{ fontFamily: fontFamily, fontSize: fontSize, color: textCol, opacity: isMarked ? 0.3 : 1 }}
        maxLength={60}
        placeholder="write here..."
      />

      {/* overlay to mark — sits on top only when cell is marked so user can still type */}
      {isMarked && (
        <div
          className="absolute inset-0 z-20"
          onClick={(e) => { e.stopPropagation(); onToggleMark(cell.id); onSelect(); }}
        />
      )}
    </div>
  );
}
