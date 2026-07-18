import { ArrowRight } from 'lucide-react'
import { ROUTES, SITE_TAGLINE } from '@/config/site'
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
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10" />
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
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(57,255,20,0.03) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
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

      <BrandPatternBackground density="medium" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pt-20">
        <div className="flex justify-center mb-6 animate-fade-in">
          <BrandLogo
            variant="horizontal"
            loading="eager"
            className="h-12 w-auto sm:h-16 md:h-24 drop-shadow-[0_0_24px_rgba(57,255,20,0.15)]"
          />
        </div>

        <div className="flex justify-center mb-8 animate-fade-in">
          <BrandBadge>
            Agência remota · Salvador–BA · Atendimento em todo o Brasil
          </BrandBadge>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 animate-slide-up leading-tight"
          style={{ animationDelay: '0.1s' }}
        >
          Desenvolvemos e evoluímos{' '}
          <span className="text-primary text-glow font-mono block sm:inline">
            produtos digitais
          </span>{' '}
          para empresas que precisam vender, organizar processos ou tirar uma ideia do papel.
        </h1>

        <p
          className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          {SITE_TAGLINE}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Button href={`${ROUTES.contato}?intent=orcamento`} size="lg">
            Solicitar orçamento
            <ArrowRight size={20} />
          </Button>
          <Button href={`${ROUTES.contato}?intent=diagnostico`} variant="outline" size="lg">
            Agendar diagnóstico
          </Button>
        </div>

        <div
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-surface-light max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono text-glow">5+</div>
            <div className="text-text-muted text-sm mt-1">anos no mercado</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono text-glow">30+</div>
            <div className="text-text-muted text-sm mt-1">projetos entregues</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono text-glow">100%</div>
            <div className="text-text-muted text-sm mt-1">remoto no Brasil</div>
          </div>
        </div>
      </div>
    </section>
  )
}
