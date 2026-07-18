import Link from 'next/link'
import { ArrowRight, Clock, Layers, Zap } from 'lucide-react'
import { ROUTES } from '@/config/site'
import { SectionTitle } from '../common/SectionTitle'
import { Button } from '../common/Button'

const plans = [
  {
    icon: Clock,
    name: 'Essencial',
    description: 'Correções pontuais, ajustes de conteúdo e suporte sob demanda para sites e lojas em operação.',
    includes: ['Demandas avulsas', 'Correção de bugs', 'Pequenos ajustes visuais'],
  },
  {
    icon: Zap,
    name: 'Evolutivo',
    description: 'Horas reservadas mensalmente para melhorias contínuas, performance e pequenas funcionalidades.',
    includes: ['Priorização mensal', 'Melhorias de SEO/performance', 'Evolução incremental'],
    featured: true,
  },
  {
    icon: Layers,
    name: 'Sob demanda',
    description: 'Projetos maiores ou fases específicas (nova integração, módulo, campanha) com escopo fechado.',
    includes: ['Escopo definido', 'Prazo acordado', 'Entrega por fases'],
  },
]

export function MaintenancePlans() {
  return (
    <section className="py-20 md:py-32 bg-background" aria-labelledby="planos-de-manutencao-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Formatos de suporte pós-entrega. Valores personalizados conforme volume e complexidade — sem preços publicados.">
          Planos de manutenção
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`p-6 rounded-2xl border transition-colors ${
                  plan.featured
                    ? 'bg-surface border-primary/40 card-glow'
                    : 'bg-surface border-surface-light hover:border-primary/20'
                }`}
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">{plan.name}</h3>
                <p className="text-text-muted text-sm mb-4 leading-relaxed">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.includes.map((item) => (
                    <li key={item} className="text-text-muted text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-text-muted mb-4">Investimento sob consulta após diagnóstico.</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button href={`${ROUTES.contato}?intent=diagnostico`} size="lg">
            Agendar diagnóstico
            <ArrowRight size={18} />
          </Button>
          <p className="text-text-muted text-sm mt-4">
            Ou{' '}
            <Link href={`${ROUTES.contato}?intent=orcamento`} className="text-primary hover:text-primary-400">
              solicite um orçamento
            </Link>{' '}
            para um projeto novo.
          </p>
        </div>
      </div>
    </section>
  )
}
