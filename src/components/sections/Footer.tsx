import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { ROUTES, SITE_EMAIL, SOCIAL_LINKS } from '@/config/site'
import { services } from '@/content/services'
import { BrandLogo } from '../brand/BrandLogo'
import { BrandPatternBackground } from '../brand/BrandPatternBackground'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-surface py-12 border-t border-surface-light overflow-hidden">
      <BrandPatternBackground density="low" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link href={ROUTES.home} aria-label="Ir para o início">
              <BrandLogo
                variant="compact"
                loading="lazy"
                className="h-10 w-auto transition-opacity duration-200 hover:opacity-80"
              />
            </Link>
            <p className="text-text-muted text-sm mt-4 max-w-xs">
              Produtos digitais com planejamento, desenvolvimento e suporte depois da entrega.
              Atendimento remoto em todo o Brasil, base em Salvador–BA.
            </p>
          </div>

          <div>
            <h2 className="text-text font-semibold mb-4">Serviços</h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-text-muted hover:text-primary text-sm transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-text font-semibold mb-4">Navegação</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href={ROUTES.servicos} className="text-text-muted hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link href={ROUTES.portfolio} className="text-text-muted hover:text-primary transition-colors">Portfólio</Link></li>
              <li><Link href={ROUTES.sobre} className="text-text-muted hover:text-primary transition-colors">Sobre</Link></li>
              <li><Link href={ROUTES.processo} className="text-text-muted hover:text-primary transition-colors">Processo</Link></li>
              <li><Link href={ROUTES.contato} className="text-text-muted hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-surface-light">
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface-light rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface-light rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="p-3 bg-surface-light rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label="E-mail"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-text-muted text-sm text-center md:text-right">
            © {currentYear} Código Primordial. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
