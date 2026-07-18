import type { ServiceSlug } from '@/config/site'
import { VTEX_LIMITS } from '@/config/site'

export interface ServiceContent {
  slug: ServiceSlug
  title: string
  shortTitle: string
  icon: 'globe' | 'code' | 'shopping' | 'vtex' | 'wrench' | 'graduation'
  summary: string
  benefits: string[]
  cta: string
  metaDescription: string
  problem: string
  audience: string
  deliverables: string[]
  limits: string
  timeline?: string
}

export const services: ServiceContent[] = [
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    shortTitle: 'Landing pages',
    icon: 'globe',
    summary:
      'Páginas focadas em conversão para campanhas, lançamentos e captação de leads qualificados.',
    benefits: ['Conversão de leads', 'SEO técnico', 'Carregamento rápido'],
    cta: 'Criar minha landing page',
    metaDescription:
      'Landing pages otimizadas para conversão, campanhas e lançamentos. Planejamento, desenvolvimento e suporte pós-entrega.',
    problem:
      'Você investe em tráfego, mas a página não converte ou demora a carregar. Cada visita perdida é oportunidade de venda ou lead que não volta.',
    audience:
      'Empresas, startups e profissionais que precisam validar ofertas, captar leads ou lançar produtos com uma página objetiva.',
    deliverables: [
      'Estrutura de conversão alinhada ao objetivo da campanha',
      'Layout responsivo e performance otimizada',
      'Integração com formulário, WhatsApp ou ferramenta de captação',
      'SEO técnico básico (meta tags, headings, sitemap)',
      'Publicação e orientação para manutenção',
    ],
    limits:
      'Landing pages são projetos de escopo fechado. Integrações complexas, áreas logadas ou funcionalidades de sistema exigem proposta específica.',
    timeline: 'Projetos enxutos costumam ficar prontos em 2 a 4 semanas, dependendo de conteúdo e aprovações.',
  },
  {
    slug: 'sites-institucionais',
    title: 'Sites Institucionais',
    shortTitle: 'Sites institucionais',
    icon: 'globe',
    summary:
      'Presença digital profissional que transmite credibilidade, explica seu negócio e facilita o contato.',
    benefits: ['Credibilidade', 'SEO local', 'Estrutura escalável'],
    cta: 'Criar meu site institucional',
    metaDescription:
      'Sites institucionais profissionais com foco em credibilidade, SEO e conversão de contatos qualificados.',
    problem:
      'Clientes pesquisam online antes de fechar negócio. Um site desatualizado, lento ou confuso afasta oportunidades.',
    audience:
      'Empresas de serviços, consultorias, agências e negócios locais que precisam de presença digital sólida.',
    deliverables: [
      'Arquitetura de páginas (home, serviços, sobre, contato)',
      'Design responsivo alinhado à identidade da marca',
      'SEO on-page e performance',
      'Formulário de contato ou integração com CRM',
      'Treinamento básico para atualizações de conteúdo',
    ],
    limits:
      'Não incluímos produção de conteúdo editorial extenso nem gestão de redes sociais, salvo acordado em proposta.',
    timeline: 'Sites institucionais típicos levam de 3 a 6 semanas, conforme volume de páginas e revisões.',
  },
  {
    slug: 'aplicacoes-web',
    title: 'Aplicações Web e MVPs',
    shortTitle: 'Aplicações web e MVPs',
    icon: 'code',
    summary:
      'Dashboards, painéis administrativos, MVPs e sistemas internos com React, TypeScript e Node.js.',
    benefits: ['Código escalável', 'Interface intuitiva', 'Integrações'],
    cta: 'Desenvolver minha aplicação',
    metaDescription:
      'Aplicações web, MVPs e sistemas internos em React e TypeScript. Do planejamento ao suporte pós-entrega.',
    problem:
      'Planilhas e processos manuais não escalam. Você precisa de uma ferramenta que organize operações, dados ou fluxos do negócio.',
    audience:
      'Startups em validação, empresas com processos internos e times que precisam de painéis, cadastros ou automações web.',
    deliverables: [
      'Levantamento de requisitos e escopo do MVP',
      'Front-end em React/TypeScript',
      'Back-end e integrações conforme necessidade (Node.js, APIs)',
      'Autenticação, permissões e fluxos principais',
      'Deploy, documentação e suporte inicial pós-entrega',
    ],
    limits:
      'MVPs priorizam funcionalidades essenciais. Recursos avançados entram em fases futuras conforme validação do produto.',
    timeline: 'MVPs variam de 6 a 12 semanas; sistemas maiores são estimados após diagnóstico.',
  },
  {
    slug: 'lojas-virtuais',
    title: 'Nuvemshop e E-commerce',
    shortTitle: 'Nuvemshop e e-commerce',
    icon: 'shopping',
    summary:
      'Implantação, customização e evolução de lojas virtuais na Nuvemshop e integrações de e-commerce.',
    benefits: ['Loja no ar', 'Integrações', 'Evolução contínua'],
    cta: 'Evoluir minha loja virtual',
    metaDescription:
      'Implantação e evolução de lojas Nuvemshop, integrações, customização e suporte para e-commerce.',
    problem:
      'Vender online exige mais que um template: checkout confiável, catálogo organizado, integrações e operação que funcione no dia a dia.',
    audience:
      'Marcas, varejistas e empreendedores que vendem ou querem vender online com Nuvemshop ou e-commerce sob medida.',
    deliverables: [
      'Implantação ou migração para Nuvemshop',
      'Customização de tema e componentes',
      'Configuração de pagamentos, frete e catálogo',
      'Integrações com marketplaces, ERP ou ferramentas de marketing',
      'Treinamento e suporte pós-implantação',
    ],
    limits:
      'Operações com volume muito alto ou regras fiscais complexas podem exigir parceiros especializados em ERP ou logística.',
    timeline: 'Implantações Nuvemshop típicas levam de 3 a 8 semanas, conforme catálogo e integrações.',
  },
  {
    slug: 'vtex',
    title: 'Evolução de Lojas VTEX',
    shortTitle: 'Evolução VTEX',
    icon: 'vtex',
    summary:
      'Componentes, checkout, promoções, pixels, analytics, integrações e performance em lojas VTEX existentes.',
    benefits: ['Demandas específicas', 'Performance', 'Integrações'],
    cta: 'Solicitar evolução VTEX',
    metaDescription:
      'Evolução de lojas VTEX existentes: componentes, checkout, promoções, pixels, analytics e integrações. Sem implantação completa autônoma.',
    problem:
      'Sua loja VTEX já está no ar, mas precisa de ajustes no checkout, novos componentes, integrações ou correções pontuais sem parar a operação.',
    audience:
      'E-commerces com loja VTEX em operação que precisam de evolução técnica, correções ou demandas específicas.',
    deliverables: [
      'Componentes VTEX IO / FastStore conforme escopo',
      'Ajustes de checkout e fluxo de compra',
      'Configuração de promoções, pixels e analytics',
      'Integrações com ERP, CRM ou ferramentas de marketing',
      'Correções de performance e bugs específicos',
    ],
    limits: VTEX_LIMITS,
    timeline: 'Demandas pontuais variam de 1 a 4 semanas; projetos maiores são estimados após diagnóstico.',
  },
  {
    slug: 'manutencao-e-suporte',
    title: 'Manutenção e Suporte',
    shortTitle: 'Manutenção e suporte',
    icon: 'wrench',
    summary:
      'Diagnóstico, correções, evolução e suporte contínuo para sites, lojas e aplicações existentes.',
    benefits: ['Correção rápida', 'Evolução contínua', 'Sem refazer tudo'],
    cta: 'Agendar diagnóstico',
    metaDescription:
      'Manutenção e suporte para sites, lojas e aplicações web. Diagnóstico, correções e evolução sem reconstruir do zero.',
    problem:
      'Seu produto digital funciona, mas acumula bugs, lentidão ou demandas que ninguém consegue priorizar no time interno.',
    audience:
      'Empresas com site, loja ou sistema em produção que precisam de suporte técnico recorrente ou pontual.',
    deliverables: [
      'Diagnóstico técnico do projeto atual',
      'Correção de bugs e regressões',
      'Melhorias de performance e SEO',
      'Pequenas evoluções de funcionalidade',
      'Relatórios periódicos de atividades (planos recorrentes)',
    ],
    limits:
      'Manutenção não inclui reescrita completa do projeto. Mudanças estruturais grandes entram como novo escopo.',
    timeline: 'Diagnóstico inicial em 3 a 5 dias úteis; demandas corretivas conforme SLA acordado.',
  },
  {
    slug: 'treinamentos',
    title: 'Treinamentos e Workshops',
    shortTitle: 'Treinamentos e workshops',
    icon: 'graduation',
    summary:
      'Capacitação prática para equipes em front-end, React, e-commerce, Nuvemshop e integrações.',
    benefits: ['Prática', 'Conteúdo aplicado', 'Suporte pós-sessão'],
    cta: 'Solicitar treinamento',
    metaDescription:
      'Treinamentos e workshops práticos em React, front-end, Nuvemshop, VTEX e integrações para equipes.',
    problem:
      'O time precisa executar tarefas no site ou na loja, mas falta conhecimento prático para fazer com segurança.',
    audience:
      'Times de marketing, operação e desenvolvimento que precisam de capacitação hands-on em ferramentas digitais.',
    deliverables: [
      'Programa customizado conforme nível e objetivo',
      'Workshops ao vivo (remoto ou presencial em Salvador–BA)',
      'Material de apoio e exercícios práticos',
      'Sessão de dúvidas pós-treinamento',
      'Recomendações de próximos passos',
    ],
    limits:
      'Treinamentos não substituem desenvolvimento sob demanda. Projetos de implementação são contratados separadamente.',
    timeline: 'Workshops de 4 a 16 horas, agendados conforme disponibilidade.',
  },
]

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return services.find((service) => service.slug === slug)
}
