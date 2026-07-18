'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, ROUTES } from '@/config/site'
import { Button } from './Button'
import { BrandLogo } from '../brand/BrandLogo'

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-surface-light"
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={ROUTES.home} aria-label="Ir para o início" className="flex items-center group">
            <BrandLogo
              variant="compact"
              loading="eager"
              className="h-8 w-auto sm:h-10 transition-opacity duration-200 group-hover:opacity-80"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-text hover:text-primary transition-colors duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button href={`${ROUTES.contato}?intent=diagnostico`} variant="outline" size="sm">
              Agendar diagnóstico
            </Button>
            <Button href={`${ROUTES.contato}?intent=orcamento`} size="sm">
              Solicitar orçamento
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-text hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-surface/95 backdrop-blur-md border-t border-surface-light animate-slide-down">
            <div className="py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-text hover:text-primary hover:bg-primary/5 transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4 space-y-2">
                <Button href={`${ROUTES.contato}?intent=diagnostico`} variant="outline" size="sm" className="w-full">
                  Agendar diagnóstico
                </Button>
                <Button href={`${ROUTES.contato}?intent=orcamento`} size="sm" className="w-full">
                  Solicitar orçamento
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
