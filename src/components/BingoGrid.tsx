import React, { forwardRef } from 'react';
import BingoCell from './BingoCell';
import type { BingoCellData, Theme } from '../types';

interface BingoGridProps {
  cells: BingoCellData[];
  onTextChange: (id: number, text: string) => void;
  theme: Theme;
  title: string;
  markedCells: Set<number>;
  onToggleMark: (id: number) => void;
  selectedCellId: number | null;
  onSelectCell: (id: number | null) => void;
}

const LETTERS = ['B', 'I', 'N', 'G', 'O'];

const BingoGrid = forwardRef<HTMLDivElement, BingoGridProps>(
  ({ cells, onTextChange, theme, title, markedCells, onToggleMark, selectedCellId, onSelectCell }, ref) => {
    return (
      <div
        ref={ref}
        className="relative"
        style={{
          backgroundColor: theme.cardBg,
          fontFamily: theme.font,
          padding: '2rem 2rem 2.5rem',
          boxShadow: '2px 3px 0 rgba(0,0,0,0.07), 4px 6px 12px rgba(0,0,0,0.08)',
          border: `3px solid ${theme.borderColor}`,
          borderRadius: '4px',
          /* subtle paper texture */
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 27px,
              rgba(0,0,0,0.025) 27px,
              rgba(0,0,0,0.025) 28px
            )
          `,
        }}
      >
        {/* Title */}
        <div className="text-center mb-2 relative z-10">
          <h2
            className="card-title font-bold leading-tight"
            style={{
              fontFamily: theme.font,
              color: theme.titleColor,
              fontSize: 'clamp(1.6rem, 5vw, 2.8rem)',
              textShadow: '2px 2px 0 rgba(0,0,0,0.08)',
            }}
          >
            {title || 'my bingo card'}
          </h2>
          {/* Hand-drawn underline */}
          <svg height="10" className="w-1/2 mx-auto mt-0.5 block" viewBox="0 0 200 10" preserveAspectRatio="none">
            <path
              d="M0,7 Q25,3 50,6 Q75,9 100,5 Q125,2 150,6 Q175,9 200,5"
              fill="none"
              stroke={theme.titleColor}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* BINGO Header */}
        <div className="grid gap-[4px] mb-[4px] relative z-10" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>
          {LETTERS.map((letter, i) => (
            <div
              key={letter}
              className="header-letter flex items-center justify-center font-bold"
              style={{
                backgroundColor: theme.headerColors[i],
                border: `2.5px solid ${theme.borderColor}`,
                fontFamily: theme.font,
                color: theme.borderColor,
                fontSize: 'clamp(1.2rem, 3.5vw, 2rem)',
                height: 'clamp(2.5rem, 7vw, 3.5rem)',
                borderRadius: '3px',
                textShadow: '1px 1px 0 rgba(255,255,255,0.4)',
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-[4px] relative z-10" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>
          {cells.map((cell, idx) => (
            <BingoCell
              key={cell.id}
              cell={cell}
              onTextChange={onTextChange}
              theme={theme}
              isMarked={markedCells.has(cell.id)}
              onToggleMark={onToggleMark}
              cellIndex={idx}
              isSelected={selectedCellId === cell.id}
              onSelect={() => onSelectCell(cell.id)}
            />
          ))}
        </div>
      </div>
    );
  }
);

BingoGrid.displayName = 'BingoGrid';
export default BingoGrid;
