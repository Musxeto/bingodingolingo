export interface BingoCellData {
  id: number;
  text: string;
  isFreeSpace: boolean;
  font?: string;
  fontSize?: string;
  textColor?: string;
  bgColor?: string;
}

export interface Theme {
  name: string;
  label: string;
  cardBg: string;
  cellColors: string[];   // rotating pastel palette per cell
  borderColor: string;
  headerColors: string[]; // one per B-I-N-G-O letter
  titleColor: string;
  textColor: string;
  font: string;
  markedBg: string;
  markedBorderColor: string;
}

// Pastel cell color palettes — no dark colours
const RAINBOW_CELLS = [
  '#ffd6d6', '#ffecd2', '#fff9c4', '#d4f1d4', '#d0eeff',
  '#e8d5f5', '#ffd6d6', '#d0eeff', '#ffecd2', '#d4f1d4',
  '#fff9c4', '#ffd6d6', '#ffffff', '#d0eeff', '#ffecd2',
  '#e8d5f5', '#d4f1d4', '#fff9c4', '#ffd6d6', '#d0eeff',
  '#ffecd2', '#e8d5f5', '#d4f1d4', '#fff9c4', '#ffd6d6',
];

const SPRING_CELLS = [
  '#ffcce0', '#ffd9b3', '#ffffb3', '#c3f0c3', '#b3e0ff',
  '#e0b3ff', '#ffcce0', '#c3f0c3', '#ffd9b3', '#b3e0ff',
  '#ffffb3', '#ffcce0', '#ffffff', '#b3e0ff', '#ffd9b3',
  '#e0b3ff', '#c3f0c3', '#ffffb3', '#ffcce0', '#b3e0ff',
  '#ffd9b3', '#e0b3ff', '#c3f0c3', '#ffffb3', '#ffcce0',
];

const OCEAN_CELLS = [
  '#b3e8ff', '#d4f5e9', '#b3e8ff', '#e8f9d4', '#cce5ff',
  '#d4f5e9', '#b3e8ff', '#e8f9d4', '#cce5ff', '#d4f5e9',
  '#b3e8ff', '#e8f9d4', '#ffffff', '#cce5ff', '#b3e8ff',
  '#d4f5e9', '#cce5ff', '#b3e8ff', '#e8f9d4', '#d4f5e9',
  '#cce5ff', '#b3e8ff', '#d4f5e9', '#cce5ff', '#e8f9d4',
];

const SUNSET_CELLS = [
  '#ffd6c4', '#ffe4b3', '#fff0b3', '#ffd6c4', '#ffccd6',
  '#ffe4b3', '#fff0b3', '#ffd6c4', '#ffccd6', '#ffe4b3',
  '#fff0b3', '#ffd6c4', '#ffffff', '#ffccd6', '#ffe4b3',
  '#fff0b3', '#ffd6c4', '#ffe4b3', '#ffccd6', '#fff0b3',
  '#ffd6c4', '#ffccd6', '#ffe4b3', '#fff0b3', '#ffd6c4',
];

export const THEMES: Theme[] = [
  {
    name: 'rainbow',
    label: 'Rainbow',
    cardBg: '#fffef8',
    cellColors: RAINBOW_CELLS,
    borderColor: '#1a1a1a',
    headerColors: ['#ff6b6b', '#ffa94d', '#ffe066', '#69db7c', '#74c0fc'],
    titleColor: '#1a1a1a',
    textColor: '#1a1a1a',
    font: "'Handwritten Madness', cursive",
    markedBg: '#1a1a1a',
    markedBorderColor: '#1a1a1a',
  },
  {
    name: 'spring',
    label: 'Spring',
    cardBg: '#fffef8',
    cellColors: SPRING_CELLS,
    borderColor: '#2d1a3d',
    headerColors: ['#f783ac', '#ffa94d', '#ffe066', '#69db7c', '#a9e34b'],
    titleColor: '#d63384',
    textColor: '#2d1a3d',
    font: "'Handwritten Madness', cursive",
    markedBg: '#d63384',
    markedBorderColor: '#2d1a3d',
  },
  {
    name: 'ocean',
    label: 'Ocean',
    cardBg: '#f8fdff',
    cellColors: OCEAN_CELLS,
    borderColor: '#003566',
    headerColors: ['#74c0fc', '#4dabf7', '#339af0', '#228be6', '#1c7ed6'],
    titleColor: '#003566',
    textColor: '#003566',
    font: "'Handwritten Madness', cursive",
    markedBg: '#003566',
    markedBorderColor: '#003566',
  },
  {
    name: 'sunset',
    label: 'Sunset',
    cardBg: '#fffef8',
    cellColors: SUNSET_CELLS,
    borderColor: '#6d2323',
    headerColors: ['#ff6b6b', '#ff922b', '#fcc419', '#ff6b6b', '#ff922b'],
    titleColor: '#c1440e',
    textColor: '#3d1a00',
    font: "'Handwritten Madness', cursive",
    markedBg: '#c1440e',
    markedBorderColor: '#6d2323',
  },
  {
    name: 'brat-summer',
    label: 'Brat Summer',
    cardBg: '#8ace00',
    cellColors: Array(25).fill('#8ace00'),
    borderColor: '#000000',
    headerColors: Array(5).fill('#8ace00'),
    titleColor: '#000000',
    textColor: '#000000',
    font: "'Arial', sans-serif",
    markedBg: '#000000',
    markedBorderColor: '#000000',
  },
  {
    name: 'pink-ribbon',
    label: 'Pink Ribbon',
    cardBg: '#fdf2f8',
    cellColors: Array(25).fill('#fce7f3'),
    borderColor: '#be123c',
    headerColors: Array(5).fill('#fce7f3'),
    titleColor: '#be123c',
    textColor: '#be123c',
    font: "'Handwritten Madness', cursive",
    markedBg: '#be123c',
    markedBorderColor: '#be123c',
  },
  {
    name: 'retro-pop',
    label: 'Retro Pop',
    cardBg: '#ffffff',
    cellColors: [
      '#fef08a', '#fbcfe8', '#bfdbfe', '#bbf7d0', '#fed7aa',
      '#bfdbfe', '#fef08a', '#fed7aa', '#fbcfe8', '#bbf7d0',
      '#fbcfe8', '#bbf7d0', '#fef08a', '#bfdbfe', '#fed7aa',
      '#fed7aa', '#bfdbfe', '#bbf7d0', '#fef08a', '#fbcfe8',
      '#bbf7d0', '#fed7aa', '#fbcfe8', '#bfdbfe', '#fef08a'
    ],
    borderColor: '#1a1a1a',
    headerColors: ['#fef08a', '#fbcfe8', '#bfdbfe', '#bbf7d0', '#fed7aa'],
    titleColor: '#1a1a1a',
    textColor: '#1a1a1a',
    font: "'Ramidots', cursive",
    markedBg: '#1a1a1a',
    markedBorderColor: '#1a1a1a',
  },
  {
    name: 'cloudy-dreams',
    label: 'Cloudy Dreams',
    cardBg: '#e2e8f0',
    cellColors: Array(25).fill('#e2e8f0'),
    borderColor: '#475569',
    headerColors: Array(5).fill('#cbd5e1'),
    titleColor: '#1e293b',
    textColor: '#1e293b',
    font: "'Jakarta Handwritten', cursive",
    markedBg: '#475569',
    markedBorderColor: '#475569',
  },
  {
    name: 'spring-floral',
    label: 'Spring Floral',
    cardBg: '#fdfbf7',
    cellColors: [
      '#fca5a5', '#fcd34d', '#93c5fd', '#86efac', '#f9a8d4',
      '#86efac', '#f9a8d4', '#fca5a5', '#fcd34d', '#93c5fd',
      '#93c5fd', '#fca5a5', '#86efac', '#f9a8d4', '#fcd34d',
      '#fcd34d', '#93c5fd', '#f9a8d4', '#fca5a5', '#86efac',
      '#f9a8d4', '#86efac', '#fcd34d', '#93c5fd', '#fca5a5'
    ],
    borderColor: '#1a1a1a',
    headerColors: ['#fca5a5', '#fcd34d', '#93c5fd', '#86efac', '#f9a8d4'],
    titleColor: '#1a1a1a',
    textColor: '#1a1a1a',
    font: "'My Kids Handwritten', cursive",
    markedBg: '#1a1a1a',
    markedBorderColor: '#1a1a1a',
  }
];

export const DEFAULT_PROMPTS = [
  'Walk on the beach',
  'Try a new recipe',
  'Read a book',
  'Go on a day trip',
  'Call an old friend',
  'Start a new hobby',
  'Write in a journal',
  'Watch a sunrise',
  'Go to a museum',
  'Cook from scratch',
  'Take lots of photos',
  'Save some money',
  'Go stargazing',
  'Do something scary',
  'Visit a new place',
  'Make new friends',
  'Finish a project',
  'Learn something new',
  'Take a long walk',
  'Do a puzzle',
  'Go camping',
  'Try a new sport',
  'Write more letters',
  'Have a picnic',
];

export function createInitialCells(): BingoCellData[] {
  return Array.from({ length: 25 }, (_, i) => ({
    id: i,
    text: i === 12 ? 'FREE SPACE' : DEFAULT_PROMPTS[i < 12 ? i : i - 1] ?? '',
    isFreeSpace: i === 12,
  }));
}
