import Link from 'next/link'
import Image from 'next/image'

interface BrandLogoProps {
  variant?: 'horizontal' | 'compact'
  loading?: 'eager' | 'lazy'
  className?: string
  href?: string
}

const LOGO = {
  src: '/assets/logoHorizontalNova.png',
  width: 1400,
  height: 300,
} as const

const variants = {
  horizontal: {
    ...LOGO,
    defaultClass: 'h-10 w-auto sm:h-12 md:h-14',
  },
  compact: {
    ...LOGO,
    defaultClass: 'h-8 w-auto sm:h-10',
  },
} as const

export function BrandLogo({
  variant = 'horizontal',
  loading = 'eager',
  className,
  href,
}: BrandLogoProps) {
  const config = variants[variant]
  const sizeClass = className ?? config.defaultClass

  const img = (
    <Image
      src={config.src}
      alt="Logo Código Primordial"
      width={config.width}
      height={config.height}
      priority={loading === 'eager'}
      loading={loading}
      className={`object-contain block ${sizeClass}`}
    />
  )

  if (href) {
    return (
      <Link href={href} aria-label="Ir para o início">
        {img}
      </Link>
    )
  }

  return img
}
