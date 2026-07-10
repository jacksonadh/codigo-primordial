interface BrandLogoProps {
  variant?: 'horizontal' | 'full'
  loading?: 'eager' | 'lazy'
  /**
   * Quando fornecido, substitui completamente as classes de tamanho padrão.
   * Use para customizar dimensões em contextos específicos (hero, footer, etc).
   */
  className?: string
  href?: string
}

const variants = {
  horizontal: {
    src: '/assets/logo-horizontal.png',
    width: 280,
    height: 74,
    defaultClass: 'h-7 w-auto sm:h-8 sm:w-auto',
  },
  full: {
    src: '/assets/logo-full.png',
    width: 320,
    height: 320,
    defaultClass: 'w-10 h-10 sm:w-12 sm:h-12',
  },
}

export function BrandLogo({
  variant = 'horizontal',
  loading = 'eager',
  className,
  href,
}: BrandLogoProps) {
  const config = variants[variant]
  const sizeClass = className ?? config.defaultClass

  const img = (
    <img
      src={config.src}
      alt="Logo Código Primordial"
      width={config.width}
      height={config.height}
      loading={loading}
      decoding="async"
      className={`object-contain block ${sizeClass}`}
      style={{ imageRendering: 'auto' }}
    />
  )

  if (href) {
    return (
      <a href={href} aria-label="Ir para o início">
        {img}
      </a>
    )
  }

  return img
}
