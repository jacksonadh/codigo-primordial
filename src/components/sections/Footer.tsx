import { Github, Linkedin, Mail } from 'lucide-react'
import { BrandLogo } from '../brand/BrandLogo'
import { BrandPatternBackground } from '../brand/BrandPatternBackground'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-surface py-12 border-t border-surface-light overflow-hidden">
      <BrandPatternBackground density="low" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" aria-label="Ir para o início">
            <BrandLogo
              variant="full"
              loading="lazy"
              className="h-14 w-14 transition-opacity duration-200 hover:opacity-80"
            />
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jacksonadh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface-light rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jah7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface-light rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contato@codigoprimordial.com"
              className="p-3 bg-surface-light rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="E-mail"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-text-muted text-sm">
            © {currentYear} Código Primordial. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
