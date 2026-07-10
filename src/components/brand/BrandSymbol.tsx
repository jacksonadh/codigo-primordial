import type { ReactNode } from 'react'
import type { SymbolName, SymbolColor } from './brandTokens'
import { brandColors } from './brandTokens'

interface BrandSymbolProps {
  name: SymbolName
  color?: SymbolColor
  size?: number
  opacity?: number
  className?: string
}

const STROKE_COLOR = {
  green: brandColors.green,
  purple: brandColors.purpleLight,
}

const symbols: Record<SymbolName, (color: string) => ReactNode> = {
  'html-tag': (c) => (
    <svg viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="2" y="22"
        fontFamily="monospace"
        fontSize="16"
        fill={c}
        stroke={c}
        strokeWidth="0.4"
        style={{ fontStyle: 'italic', letterSpacing: '-0.5px' }}
      >
        &lt;html&gt;
      </text>
      <line x1="0" y1="26" x2="58" y2="26" stroke={c} strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4" />
    </svg>
  ),

  'dev-tag': (c) => (
    <svg viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="2" y="22"
        fontFamily="monospace"
        fontSize="16"
        fill={c}
        stroke={c}
        strokeWidth="0.4"
        style={{ fontStyle: 'italic' }}
      >
        &lt;dev&gt;
      </text>
    </svg>
  ),

  'close-tag': (c) => (
    <svg viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="2" y="22"
        fontFamily="monospace"
        fontSize="18"
        fill={c}
        fontWeight="bold"
      >
        &lt;/&gt;
      </text>
    </svg>
  ),

  'slash-dev': (c) => (
    <svg viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="2" y="22"
        fontFamily="monospace"
        fontSize="14"
        fill={c}
        stroke={c}
        strokeWidth="0.3"
      >
        &lt;/dev&gt;
      </text>
    </svg>
  ),

  'binary': (c) => (
    <svg viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="2" y="18"
        fontFamily="monospace"
        fontSize="13"
        fill={c}
        letterSpacing="2"
        opacity="0.9"
      >
        011011 01
      </text>
    </svg>
  ),

  'eye-horus': (c) => (
    <svg viewBox="0 0 48 36" fill="none" stroke={c} strokeWidth="1.2" xmlns="http://www.w3.org/2000/svg">
      {/* Olho externo */}
      <path d="M4 18 Q24 4 44 18 Q24 32 4 18Z" strokeLinejoin="round" />
      {/* Pupila */}
      <circle cx="24" cy="18" r="5.5" />
      {/* Pupila interna */}
      <circle cx="24" cy="18" r="2.5" fill={c} />
      {/* Lágrima — estilo Hórus */}
      <path d="M24 23.5 Q20 28 18 32" strokeLinecap="round" />
      {/* Linha superior decorativa */}
      <path d="M14 12 Q19 9 24 8 Q29 9 34 12" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),

  'hand-cave': (c) => (
    <svg viewBox="0 0 44 52" fill="none" stroke={c} strokeWidth="1.3" xmlns="http://www.w3.org/2000/svg">
      {/* Palma */}
      <path d="M8 34 Q6 42 10 48 Q16 52 26 50 Q36 48 38 40 Q40 32 36 26" strokeLinejoin="round" />
      {/* Dedo mindinho */}
      <path d="M36 26 Q38 20 36 16 Q34 12 32 14 Q30 16 31 22" strokeLinecap="round" />
      {/* Dedo anelar */}
      <path d="M31 22 Q32 14 30 10 Q28 6 26 8 Q24 10 25 18" strokeLinecap="round" />
      {/* Dedo médio */}
      <path d="M25 18 Q26 8 24 4 Q22 1 20 3 Q18 6 20 16" strokeLinecap="round" />
      {/* Dedo indicador */}
      <path d="M20 16 Q21 8 19 5 Q17 2 15 5 Q13 8 15 16" strokeLinecap="round" />
      {/* Polegar */}
      <path d="M15 28 Q9 26 7 22 Q5 18 8 16 Q11 14 15 18" strokeLinecap="round" />
      {/* Pulso */}
      <path d="M8 34 Q10 36 15 36 Q20 36 24 35" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),

  'human-cave': (c) => (
    <svg viewBox="0 0 32 56" fill="none" stroke={c} strokeWidth="1.4" xmlns="http://www.w3.org/2000/svg">
      {/* Cabeça */}
      <circle cx="16" cy="7" r="5.5" />
      {/* Corpo */}
      <line x1="16" y1="13" x2="16" y2="34" strokeLinecap="round" />
      {/* Braços */}
      <path d="M16 18 L6 26" strokeLinecap="round" />
      <path d="M16 18 L26 24" strokeLinecap="round" />
      {/* Perna esquerda */}
      <path d="M16 34 L10 46 L8 54" strokeLinecap="round" />
      {/* Perna direita */}
      <path d="M16 34 L22 46 L24 54" strokeLinecap="round" />
    </svg>
  ),

  'monitor': (c) => (
    <svg viewBox="0 0 52 44" fill="none" stroke={c} strokeWidth="1.3" xmlns="http://www.w3.org/2000/svg">
      {/* Tela */}
      <rect x="3" y="3" width="46" height="30" rx="3" />
      {/* Divisória interna */}
      <line x1="3" y1="28" x2="49" y2="28" />
      {/* Código na tela */}
      <line x1="9" y1="12" x2="22" y2="12" strokeWidth="1" opacity="0.7" />
      <line x1="9" y1="17" x2="30" y2="17" strokeWidth="1" opacity="0.7" />
      <line x1="9" y1="22" x2="18" y2="22" strokeWidth="1" opacity="0.7" />
      {/* Base */}
      <path d="M18 33 L16 42 M34 33 L36 42" strokeLinecap="round" />
      <line x1="12" y1="42" x2="40" y2="42" strokeLinecap="round" />
    </svg>
  ),

  'wave-lines': (c) => (
    <svg viewBox="0 0 56 28" fill="none" stroke={c} strokeWidth="1.2" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8 Q9 3 16 8 Q23 13 30 8 Q37 3 44 8 Q51 13 56 8" strokeLinecap="round" />
      <path d="M2 16 Q9 11 16 16 Q23 21 30 16 Q37 11 44 16 Q51 21 56 16" strokeLinecap="round" opacity="0.6" />
      <path d="M2 24 Q9 19 16 24 Q23 29 30 24 Q37 19 44 24" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),

  'error-text': (c) => (
    <svg viewBox="0 0 52 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="2" y="17"
        fontFamily="monospace"
        fontSize="15"
        fill={c}
        letterSpacing="1.5"
        fontWeight="bold"
        style={{ textDecoration: 'none' }}
      >
        ERROR
      </text>
      <line x1="0" y1="19" x2="52" y2="19" stroke={c} strokeWidth="0.7" />
    </svg>
  ),

  'hashtag': (c) => (
    <svg viewBox="0 0 32 36" fill="none" stroke={c} strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
      {/* Linhas horizontais */}
      <line x1="2" y1="13" x2="30" y2="13" strokeLinecap="round" />
      <line x1="2" y1="22" x2="30" y2="22" strokeLinecap="round" />
      {/* Linhas verticais inclinadas */}
      <path d="M10 4 L8 32" strokeLinecap="round" />
      <path d="M22 4 L20 32" strokeLinecap="round" />
    </svg>
  ),

  'animal-cave': (c) => (
    <svg viewBox="0 0 56 32" fill="none" stroke={c} strokeWidth="1.3" xmlns="http://www.w3.org/2000/svg">
      {/* Corpo */}
      <path d="M8 20 Q20 12 36 16 Q46 18 50 24" strokeLinejoin="round" />
      {/* Cabeça */}
      <path d="M50 24 Q54 20 54 16 Q52 12 48 14 Q46 16 46 20" strokeLinejoin="round" />
      {/* Pernas dianteiras */}
      <path d="M22 20 L20 30" strokeLinecap="round" />
      <path d="M30 18 L30 30" strokeLinecap="round" />
      {/* Pernas traseiras */}
      <path d="M10 22 L8 30" strokeLinecap="round" />
      <path d="M16 20 L15 30" strokeLinecap="round" />
      {/* Cauda */}
      <path d="M8 20 Q4 18 2 12" strokeLinecap="round" />
      {/* Orelhas */}
      <path d="M48 14 L50 8 M52 14 L56 10" strokeLinecap="round" />
    </svg>
  ),

  'abstract-dot': (c) => (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="3" fill={c} />
      <circle cx="14" cy="14" r="7" stroke={c} strokeWidth="0.8" opacity="0.5" />
      <circle cx="14" cy="14" r="11" stroke={c} strokeWidth="0.5" strokeDasharray="2 3" opacity="0.3" />
      {/* Linhas cruzadas */}
      <line x1="14" y1="3" x2="14" y2="8" stroke={c} strokeWidth="0.8" opacity="0.4" />
      <line x1="14" y1="20" x2="14" y2="25" stroke={c} strokeWidth="0.8" opacity="0.4" />
      <line x1="3" y1="14" x2="8" y2="14" stroke={c} strokeWidth="0.8" opacity="0.4" />
      <line x1="20" y1="14" x2="25" y2="14" stroke={c} strokeWidth="0.8" opacity="0.4" />
    </svg>
  ),
}

export function BrandSymbol({
  name,
  color = 'purple',
  size = 30,
  opacity = 0.08,
  className = '',
}: BrandSymbolProps) {
  const strokeColor = STROKE_COLOR[color]
  const renderFn = symbols[name]

  if (!renderFn) return null

  return (
    <span
      className={`inline-block select-none ${className}`}
      style={{ width: size, height: size, opacity }}
      aria-hidden="true"
    >
      {renderFn(strokeColor)}
    </span>
  )
}
