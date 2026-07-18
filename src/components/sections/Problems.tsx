import Link from 'next/link'
import { ArrowRight, Code2, Rocket, ShoppingCart, TrendingUp } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'

const problems = [
  {
    icon: TrendingUp,
    title: 'Precisa vender mais online',
    description:
      'Landing pages, sites e lojas que convertem visitantes em leads ou vendas — sem prometer milagres, com escopo claro.',
  },
  {
    icon: Code2,
    title: 'Operação desorganizada em planilhas',
    description:
      'MVPs, dashboards e sistemas internos para substituir processos manuais e dar visibilidade ao negócio.',
  },
  {
    icon: ShoppingCart,
    title: 'Loja ou site que não evolui',
    description:
      'Manutenção, correções e evolução de Nuvemshop, VTEX (lojas existentes) e aplicações web já publicadas.',
  },
  {
    icon: Rocket,
    title: 'Ideia no papel, sem execução',
    description:
      'Do briefing ao MVP publicado, com planejamento, desenvolvimento e suporte depois da entrega.',
  },
]

export function Problems() {
  return (
    <section className="py-20 md:py-32 bg-background" aria-labelledby="problemas-atendidos-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Situações reais que resolvemos no dia a dia com clientes B2B e empreendedores.">
          Problemas que atendemos
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon
            return (
              <div
                key={problem.title}
                className="p-6 bg-surface rounded-2xl border border-surface-light hover:border-primary/30 transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{problem.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{problem.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contato?intent=orcamento"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-400 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg px-2 py-1"
          >
            Contar meu cenário
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
