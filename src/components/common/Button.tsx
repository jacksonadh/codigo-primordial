import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-primary text-background font-semibold
    hover:bg-primary-400 hover:shadow-lg hover:shadow-primary/25
    active:bg-primary-600
    transition-all duration-300
  `,
  secondary: `
    bg-secondary text-white font-semibold
    hover:bg-secondary-400 hover:shadow-lg hover:shadow-secondary/25
    active:bg-secondary-600
    transition-all duration-300
  `,
  outline: `
    bg-transparent border-2 border-primary text-primary font-semibold
    hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/15
    active:bg-primary/20
    transition-all duration-300
  `,
  ghost: `
    bg-transparent text-text-muted font-medium
    hover:text-primary hover:bg-primary/5
    active:bg-primary/10
    transition-all duration-300
  `,
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

function isInternalHref(href: string): boolean {
  return href.startsWith('/') || href.startsWith('#')
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link href={href} className={combinedStyles}>
          {children}
        </Link>
      )
    }

    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    )
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  )
}

export { isInternalHref }
