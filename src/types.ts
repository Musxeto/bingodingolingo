export interface BingoCellData {
  id: number;
  text: string;
  isFreeSpace: boolean;
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
    font: "'Caveat', cursive",
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
    font: "'Indie Flower', cursive",
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
    font: "'Patrick Hand', cursive",
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
    font: "'Kalam', cursive",
    markedBg: '#c1440e',
    markedBorderColor: '#6d2323',
  },
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
