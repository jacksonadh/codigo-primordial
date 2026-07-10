import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '../common/Button'
import { BrandLogo } from '../brand/BrandLogo'
import { BrandBadge } from '../brand/BrandBadge'
import { BrandPatternBackground } from '../brand/BrandPatternBackground'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden texture-noise"
      aria-label="Seção principal - Código Primordial"
    >
      {/* Fundo e camadas decorativas */}
      <div className="absolute inset-0 bg-background">
        {/* Gradiente principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10" />

        {/* Textura de pedra/concreto via SVG noise */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
            backgroundSize: '300px 300px',
          }}
          aria-hidden="true"
        />

        {/* Iluminação central sutil em verde */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(57,255,20,0.03) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Orbs de luz */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
          aria-hidden="true"
        />
      </div>

      {/* Símbolos rupestres nas bordas */}
      <BrandPatternBackground density="medium" />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pt-20">
        {/* Logo horizontal — melhor legibilidade sobre o fundo do hero */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <BrandLogo
            variant="horizontal"
            loading="lazy"
            className="h-14 w-auto sm:h-16 md:h-20 drop-shadow-[0_0_24px_rgba(57,255,20,0.15)]"
          />
        </div>

        {/* Badge de especialidade */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <BrandBadge>
            Agência especializada em React, VTEX, Nuvemshop e e-commerce
          </BrandBadge>
        </div>

        {/* Título principal */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-6 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          Tecnologia moderna.{' '}
          <span className="text-primary text-glow font-mono block sm:inline">
            Fundamentos primordiais.
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          Criamos landing pages, sistemas em React e lojas virtuais em VTEX e Nuvemshop para empresas
          que precisam de{' '}
          <span className="text-secondary">performance, conversão e código confiável</span>.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Button href="#contato" size="lg">
            Solicitar proposta gratuita
            <ArrowRight size={20} />
          </Button>
          <Button href="#servicos" variant="outline" size="lg">
            Ver o que entregamos
          </Button>
        </div>

        {/* Métricas */}
        <div
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-surface-light max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono text-glow">3+</div>
            <div className="text-text-muted text-sm mt-1">anos no mercado</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono text-glow">30+</div>
            <div className="text-text-muted text-sm mt-1">projetos entregues</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono text-glow">100%</div>
            <div className="text-text-muted text-sm mt-1">foco em resultado</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#servicos"
          className="text-text-muted hover:text-primary transition-colors"
          aria-label="Rolar para seção de serviços"
        >
          <ChevronDown size={32} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
