import Link from 'next/link'
import { MessageSquare, FileText, Palette, Code2, Rocket } from 'lucide-react'
import { ROUTES } from '@/config/site'
import { SectionTitle } from '../common/SectionTitle'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Briefing',
    description:
      'Você conta o que precisa. Nós escutamos, fazemos as perguntas certas e alinhamos expectativas desde o primeiro dia. Zero retrabalho por falta de clareza.',
    duration: '1-2 dias',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Proposta',
    description:
      'Você recebe um documento claro com escopo, prazo, tecnologias e investimento. Sem letras miúdas. Tudo transparente antes de começar.',
    duration: '2-3 dias',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Design & Protótipo',
    description:
      'Antes de escrever uma linha de código, você visualiza e aprova o design. Ajustes são feitos aqui, quando custam menos.',
    duration: '1-2 semanas',
  },
  {
    number: '04',
    icon: Code2,
    title: 'Desenvolvimento',
    description:
      'Entregas parciais para você acompanhar o progresso em tempo real. Código limpo, testado e documentado. Sem surpresas na reta final.',
    duration: '2-8 semanas',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Entrega & Suporte',
    description:
      'Seu projeto vai ao ar com acompanhamento. Treinamento incluso e suporte contínuo para ajustes e evolução.',
    duration: 'Contínuo',
  },
]

interface ProcessProps {
  showPageHeading?: boolean
}

export function Process({ showPageHeading = false }: ProcessProps) {
  return (
    <section
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      aria-labelledby={showPageHeading ? undefined : 'processo-de-trabalho-titulo'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {showPageHeading ? (
          <>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4 text-center">
              <span className="text-primary font-mono" aria-hidden="true">&lt;</span>
              Processo
              <span className="text-primary font-mono" aria-hidden="true">/&gt;</span>
            </h1>
            <p className="text-text-muted text-lg text-center max-w-2xl mx-auto mb-12">
              Cada etapa clara. Sem surpresas. Você acompanha tudo.
            </p>
          </>
        ) : (
          <SectionTitle subtitle="Cada etapa clara. Sem surpresas. Você acompanha tudo.">
            Do briefing à entrega
          </SectionTitle>
        )}

        <div className="relative">
          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative pl-20 md:pl-0 md:text-center group">
                  <div className="absolute left-0 md:relative md:left-auto flex flex-col items-center">
                    <div className="relative z-10 w-16 h-16 bg-surface border-2 border-surface-light rounded-2xl flex items-center justify-center group-hover:border-primary/50 group-hover:bg-surface-light transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="font-mono text-primary text-sm mt-2 opacity-60">{step.number}</span>
                  </div>

                  <div className="md:mt-6">
                    <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-2">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-16 p-8 bg-surface rounded-2xl border border-surface-light">
          <p className="text-text-muted mb-4">
            Sem compromisso. O diagnóstico inicial esclarece escopo e próximos passos.
          </p>
          <Link
            href={`${ROUTES.contato}?intent=diagnostico`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-semibold rounded-xl hover:bg-primary-400 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            Agendar diagnóstico
            <MessageSquare size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
