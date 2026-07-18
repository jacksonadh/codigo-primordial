import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import type { ServiceContent } from '@/content/services'
import { ROUTES } from '@/config/site'
import { Button } from '../common/Button'

interface ServicePageLayoutProps {
  service: ServiceContent
}

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  return (
    <article className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href={ROUTES.home} className="hover:text-primary transition-colors">
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={ROUTES.servicos} className="hover:text-primary transition-colors">
                Serviços
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text">{service.title}</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">{service.title}</h1>
        <p className="text-lg text-text-muted mb-10 leading-relaxed">{service.summary}</p>

        <div className="space-y-10">
          <section aria-labelledby="problema-heading">
            <h2 id="problema-heading" className="text-xl font-semibold text-text mb-3">
              Problema que resolvemos
            </h2>
            <p className="text-text-muted leading-relaxed">{service.problem}</p>
          </section>

          <section aria-labelledby="publico-heading">
            <h2 id="publico-heading" className="text-xl font-semibold text-text mb-3">
              Para quem é
            </h2>
            <p className="text-text-muted leading-relaxed">{service.audience}</p>
          </section>

          <section aria-labelledby="entregaveis-heading">
            <h2 id="entregaveis-heading" className="text-xl font-semibold text-text mb-3">
              Principais entregáveis
            </h2>
            <ul className="space-y-2">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-muted">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="limites-heading" className="p-6 bg-surface rounded-2xl border border-surface-light">
            <h2 id="limites-heading" className="text-xl font-semibold text-text mb-3">
              Limites do serviço
            </h2>
            <p className="text-text-muted leading-relaxed">{service.limits}</p>
          </section>

          {service.timeline && (
            <section aria-labelledby="prazo-heading">
              <h2 id="prazo-heading" className="text-xl font-semibold text-text mb-3">
                Prazo estimado
              </h2>
              <p className="text-text-muted leading-relaxed">{service.timeline}</p>
            </section>
          )}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Button href={`${ROUTES.contato}?service=${service.slug}&intent=orcamento`} size="lg">
            {service.cta}
            <ArrowRight size={18} />
          </Button>
          <Button href={`${ROUTES.contato}?intent=diagnostico`} variant="outline" size="lg">
            Agendar diagnóstico
          </Button>
        </div>
      </div>
    </article>
  )
}
