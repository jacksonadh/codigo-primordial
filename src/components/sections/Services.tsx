import Link from 'next/link'
import { Globe, Code2, ShoppingCart, Wrench, GraduationCap, ArrowRight } from 'lucide-react'
import { services, type ServiceContent } from '@/content/services'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../common/Card'
import { SectionTitle } from '../common/SectionTitle'
import { Button } from '../common/Button'

const iconMap = {
  globe: Globe,
  code: Code2,
  shopping: ShoppingCart,
  vtex: ShoppingCart,
  wrench: Wrench,
  graduation: GraduationCap,
} as const

function ServiceIcon({ service }: { service: ServiceContent }) {
  const Icon = iconMap[service.icon]
  return (
    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
      <Icon className="w-6 h-6 text-primary" />
    </div>
  )
}

interface ServicesProps {
  showPageHeading?: boolean
}

export function Services({ showPageHeading = false }: ServicesProps) {
  return (
    <section className="py-20 md:py-32 bg-surface-dark" aria-labelledby={showPageHeading ? undefined : 'servicos-titulo'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showPageHeading ? (
          <>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4 text-center">
              <span className="text-primary font-mono" aria-hidden="true">&lt;</span>
              Serviços
              <span className="text-primary font-mono" aria-hidden="true">/&gt;</span>
            </h1>
            <p className="text-text-muted text-lg text-center max-w-2xl mx-auto mb-12">
              Do primeiro clique à evolução contínua. Soluções claras, com limites honestos.
            </p>
          </>
        ) : (
          <SectionTitle subtitle="Do primeiro clique à evolução contínua. Soluções claras, com limites honestos.">
            O que entregamos
          </SectionTitle>
        )}

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card key={service.slug} className="group" glow>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <ServiceIcon service={service} />
                  <div className="flex-1">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      <Link href={`/${service.slug}`} className="hover:text-primary">
                        {service.title}
                      </Link>
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardDescription className="mb-4">{service.summary}</CardDescription>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="px-3 py-1 bg-secondary/15 text-secondary-300 text-sm rounded-full"
                  >
                    {benefit}
                  </span>
                ))}
              </div>

              <CardFooter>
                <Button href={`/contato?service=${service.slug}`} variant="ghost" size="sm" className="group/btn">
                  {service.cta}
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
