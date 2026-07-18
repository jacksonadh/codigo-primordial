import { VTEX_LIMITS } from '@/config/site'

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Vocês atendem empresas fora de Salvador?',
    answer:
      'Sim. Trabalhamos remotamente com clientes em todo o Brasil. Nossa base é Salvador–BA, mas todo o processo — briefing, alinhamentos e entregas — acontece online.',
  },
  {
    question: 'Vocês fazem implantação completa de VTEX?',
    answer: VTEX_LIMITS,
  },
  {
    question: 'Qual a diferença entre solicitar orçamento e agendar diagnóstico?',
    answer:
      'Solicitar orçamento é para projetos novos com escopo definido (site, loja, MVP). Agendar diagnóstico é para projetos existentes que precisam de análise técnica antes de estimar correções ou evoluções.',
  },
  {
    question: 'Quanto tempo leva um projeto?',
    answer:
      'Depende do escopo. Landing pages enxutas costumam levar 2 a 4 semanas; sites institucionais, 3 a 6 semanas; MVPs, 6 a 12 semanas. Após o briefing, enviamos prazo realista na proposta.',
  },
  {
    question: 'Vocês oferecem suporte depois da entrega?',
    answer:
      'Sim. Todo projeto inclui suporte inicial pós-publicação. Para demandas recorrentes, oferecemos planos de manutenção descritos na home — sem valores fixos publicados; a proposta é personalizada.',
  },
  {
    question: 'Preciso ter o conteúdo pronto?',
    answer:
      'Não necessariamente. Precisamos entender o objetivo e ter referências do negócio. Textos, imagens e materiais podem ser produzidos em conjunto ou fornecidos por você — isso impacta prazo e investimento.',
  },
  {
    question: 'Como funciona o processo comercial?',
    answer:
      'Você preenche o formulário de contato. Analisamos a demanda e retornamos em até 24 horas úteis com perguntas complementares ou proposta. Só iniciamos após alinhamento de escopo, prazo e investimento.',
  },
]
