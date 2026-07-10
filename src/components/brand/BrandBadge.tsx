import type { ReactNode } from 'react'

interface BrandBadgeProps {
  children: ReactNode
  color?: 'green' | 'purple'
  className?: string
}

export function BrandBadge({
  children,
  color = 'green',
  className = '',
}: BrandBadgeProps) {
  const colorStyles = {
    green: 'border-primary/30 bg-surface/50',
    purple: 'border-secondary/30 bg-surface/50',
  }

  const dotStyles = {
    green: 'bg-primary',
    purple: 'bg-secondary',
  }

  return (
    <div
      className={`
        inline-flex items-center gap-2 px-4 py-2 
        backdrop-blur-sm rounded-full border 
        ${colorStyles[color]} ${className}
      `}
    >
      <span
        className={`w-2 h-2 rounded-full animate-pulse ${dotStyles[color]}`}
        aria-hidden="true"
      />
      <span className="text-text-muted text-sm font-medium">{children}</span>
    </div>
  )
}
