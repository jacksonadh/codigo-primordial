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
    sizes: '(max-width: 640px) 280px, (max-width: 768px) 380px, 560px',
  },
  compact: {
    ...LOGO,
    defaultClass: 'h-8 w-auto sm:h-10',
    sizes: '(max-width: 640px) 120px, 160px',
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
      sizes={config.sizes}
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
