export const brandColors = {
  green: '#39ff14',
  purple: '#6f22c9',
  purpleLight: '#8c3cff',
  black: '#090909',
  dark: '#151515',
  gray: '#d9d9d9',
  lightGray: '#eeeeee',
  white: '#f5f5f5',
} as const

export const brandOpacities = {
  ultraLow: 0.04,
  low: 0.07,
  medium: 0.10,
  high: 0.14,
} as const

export const brandSymbolSizes = {
  xs: 16,
  sm: 22,
  md: 30,
  lg: 40,
  xl: 52,
} as const

export type SymbolName =
  | 'html-tag'
  | 'dev-tag'
  | 'close-tag'
  | 'binary'
  | 'eye-horus'
  | 'hand-cave'
  | 'human-cave'
  | 'monitor'
  | 'wave-lines'
  | 'error-text'
  | 'hashtag'
  | 'animal-cave'
  | 'abstract-dot'
  | 'slash-dev'

export const allSymbolNames: SymbolName[] = [
  'html-tag',
  'dev-tag',
  'close-tag',
  'binary',
  'eye-horus',
  'hand-cave',
  'human-cave',
  'monitor',
  'wave-lines',
  'error-text',
  'hashtag',
  'animal-cave',
  'abstract-dot',
  'slash-dev',
]

export type SymbolColor = 'green' | 'purple'

export const densityConfig = {
  low: { count: 8, maxSize: brandSymbolSizes.md },
  medium: { count: 16, maxSize: brandSymbolSizes.lg },
  high: { count: 24, maxSize: brandSymbolSizes.xl },
} as const
