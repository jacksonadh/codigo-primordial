import { BrandSymbol } from './BrandSymbol'
import {
  allSymbolNames,
  brandOpacities,
  brandSymbolSizes,
  densityConfig,
  type SymbolName,
  type SymbolColor,
} from './brandTokens'

interface SymbolPlacement {
  name: SymbolName
  color: SymbolColor
  size: number
  opacity: number
  top: string
  left: string
  rotate: number
}

type Density = 'low' | 'medium' | 'high'

interface BrandPatternBackgroundProps {
  density?: Density
  className?: string
}

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

function generatePlacements(count: number, maxSize: number): SymbolPlacement[] {
  const placements: SymbolPlacement[] = []
  const symbolCount = allSymbolNames.length
  const colorPool: SymbolColor[] = [
    'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple',
    'green', 'green', 'green',
  ]

  for (let i = 0; i < count; i++) {
    const r1 = seededRandom(i * 7 + 1)
    const r2 = seededRandom(i * 7 + 2)
    const r3 = seededRandom(i * 7 + 3)
    const r4 = seededRandom(i * 7 + 4)
    const r5 = seededRandom(i * 7 + 5)
    const r6 = seededRandom(i * 7 + 6)

    const name = allSymbolNames[Math.floor(r1 * symbolCount)]
    const color = colorPool[Math.floor(r2 * colorPool.length)]

    const sizeKeys = Object.values(brandSymbolSizes).filter((s) => s <= maxSize)
    const size = sizeKeys[Math.floor(r3 * sizeKeys.length)]

    const opacity =
      color === 'green'
        ? brandOpacities.low + r4 * (brandOpacities.medium - brandOpacities.low)
        : brandOpacities.ultraLow + r4 * (brandOpacities.medium - brandOpacities.ultraLow)

    const rotate = -20 + r5 * 40

    let topPct: number
    let leftPct: number

    const zone = Math.floor(r6 * 4)
    const edgeOffset = r1 * 16

    if (zone === 0) {
      topPct = 5 + r2 * 88
      leftPct = edgeOffset
    } else if (zone === 1) {
      topPct = 5 + r2 * 88
      leftPct = 84 + edgeOffset
    } else if (zone === 2) {
      topPct = edgeOffset
      leftPct = 5 + r2 * 88
    } else {
      topPct = 84 + edgeOffset * 0.6
      leftPct = 5 + r2 * 88
    }

    placements.push({
      name,
      color,
      size,
      opacity,
      top: `${topPct}%`,
      left: `${leftPct}%`,
      rotate,
    })
  }

  return placements
}

export function BrandPatternBackground({
  density = 'medium',
  className = '',
}: BrandPatternBackgroundProps) {
  const { count, maxSize } = densityConfig[density]
  const placements = generatePlacements(count, maxSize)

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      style={{ zIndex: 0 }}
    >
      {placements.map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: p.top,
            left: p.left,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          <BrandSymbol
            name={p.name}
            color={p.color}
            size={p.size}
            opacity={p.opacity}
          />
        </div>
      ))}
    </div>
  )
}
