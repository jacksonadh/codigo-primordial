import { CheckCircle2, Code2, MessageSquare, ShieldCheck } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'

const differentiators = [
  {
    icon: Code2,
    title: 'Código tipado e documentado',
    description:
      'React, TypeScript e Node.js com padrões que facilitam manutenção — sem gambiarras que viram dívida técnica em semanas.',
  },
  {
    icon: MessageSquare,
    title: 'Processo transparente',
    description:
      'Escopo, prazo e investimento definidos antes de começar. Você acompanha entregas parciais e sabe o status a qualquer momento.',
  },
  {
    icon: ShieldCheck,
    title: 'Limites claros, especialmente em VTEX',
    description:
      'Dizemos o que fazemos e o que não fazemos. Evolução de lojas VTEX existentes — sem prometer implantação ou migração completa autônoma.',
  },
  {
    icon: CheckCircle2,
    title: 'Suporte depois da entrega',
    description:
      'Publicar não é o fim. Oferecemos suporte inicial e planos de manutenção para correções e evoluções contínuas.',
  },
]

export function Differentiators() {
  return (
    <section className="py-20 md:py-32 bg-surface-dark" aria-labelledby="diferenciais-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Compromissos que sustentamos em cada projeto — sem números inventados.">
          Diferenciais comprováveis
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="p-6 bg-surface rounded-2xl border border-surface-light hover:border-primary/30 transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
