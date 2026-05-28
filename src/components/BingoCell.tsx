import React, { useRef, useEffect } from 'react';
import type { Theme } from '../types';

interface BingoCellProps {
  cell: { id: number; text: string; isFreeSpace: boolean };
  onTextChange: (id: number, text: string) => void;
  theme: Theme;
  isMarked: boolean;
  onToggleMark: (id: number) => void;
  cellIndex: number;
}

export default function BingoCell({
  cell,
  onTextChange,
  theme,
  isMarked,
  onToggleMark,
  cellIndex,
}: BingoCellProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [cell.text]);

  const baseBg = cell.isFreeSpace ? '#ffffff' : theme.cellColors[cellIndex % theme.cellColors.length];
  const bg = isMarked ? theme.markedBg : baseBg;
  const textCol = isMarked ? '#ffffff' : theme.textColor;

  return (
    <div
      className="bingo-cell relative flex items-center justify-center overflow-hidden cursor-pointer"
      style={{
        backgroundColor: bg,
        border: `2.5px solid ${theme.borderColor}`,
        fontFamily: theme.font,
        color: textCol,
        aspectRatio: '1',
        borderRadius: '3px',
        transition: 'transform 0.12s ease',
      }}
      onClick={() => onToggleMark(cell.id)}
    >
      {cell.isFreeSpace ? (
        <div
          className="flex flex-col items-center justify-center gap-0 pointer-events-none select-none text-center px-1"
          style={{ fontFamily: theme.font, color: theme.borderColor }}
        >
          <span
            className="spin-star font-bold leading-none"
            style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)' }}
          >
            *
          </span>
          <span
            className="font-bold uppercase leading-tight"
            style={{ fontSize: 'clamp(0.65rem, 2vw, 0.9rem)', letterSpacing: '1px' }}
          >
            FREE
          </span>
          <span
            className="font-bold uppercase leading-tight"
            style={{ fontSize: 'clamp(0.65rem, 2vw, 0.9rem)', letterSpacing: '1px' }}
          >
            SPACE
          </span>
        </div>
      ) : (
        <>
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
            onClick={(e) => e.stopPropagation()}
            className="cell-textarea"
            style={{ fontFamily: theme.font, color: textCol, opacity: isMarked ? 0.3 : 1 }}
            maxLength={60}
            placeholder="write here..."
          />

          {/* overlay to mark — sits on top only when cell is marked so user can still type */}
          {isMarked && (
            <div
              className="absolute inset-0 z-20"
              onClick={(e) => { e.stopPropagation(); onToggleMark(cell.id); }}
            />
          )}
        </>
      )}
    </div>
  );
}
