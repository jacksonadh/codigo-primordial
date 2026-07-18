export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.codigoprimordial.com'

export const SITE_NAME = 'Código Primordial'

export const SITE_EMAIL = 'contato@codigoprimordial.com'

export const SITE_DESCRIPTION =
  'Desenvolvemos e evoluímos produtos digitais para empresas que precisam vender, organizar processos ou tirar uma ideia do papel.'

export const SITE_TAGLINE =
  'Landing pages, sites, lojas virtuais e aplicações web, com planejamento, desenvolvimento e suporte depois da entrega.'

export const FOUNDER = {
  name: 'Jackson Almeida',
  jobTitle: 'Desenvolvedor Full Stack',
}

export const SOCIAL_LINKS = {
  github: 'https://github.com/jacksonadh',
  linkedin: 'https://www.linkedin.com/in/jah7',
}

export const LOCATION = {
  city: 'Salvador',
  state: 'BA',
  country: 'Brasil',
  remoteNote: 'Atendimento remoto em todo o Brasil',
}

export const VTEX_LIMITS =
  'Atuamos em lojas VTEX já existentes: componentes, checkout, promoções, pixels, analytics, integrações, performance e demandas específicas. Não realizamos implantação ou migração completa de operação VTEX de forma autônoma; projetos maiores podem envolver parceiros.'

export const ROUTES = {
  home: '/',
  landingPages: '/landing-pages',
  sitesInstitucionais: '/sites-institucionais',
  aplicacoesWeb: '/aplicacoes-web',
  lojasVirtuais: '/lojas-virtuais',
  vtex: '/vtex',
  manutencao: '/manutencao-e-suporte',
  treinamentos: '/treinamentos',
  portfolio: '/portfolio',
  servicos: '/servicos',
  processo: '/processo',
  sobre: '/sobre',
  contato: '/contato',
} as const

export const NAV_LINKS = [
  { href: ROUTES.home, label: 'Início' },
  { href: ROUTES.servicos, label: 'Serviços' },
  { href: ROUTES.portfolio, label: 'Portfólio' },
  { href: ROUTES.sobre, label: 'Sobre' },
  { href: ROUTES.processo, label: 'Processo' },
] as const

export const SERVICE_SLUGS = [
  'landing-pages',
  'sites-institucionais',
  'aplicacoes-web',
  'lojas-virtuais',
  'vtex',
  'manutencao-e-suporte',
  'treinamentos',
] as const

export type ServiceSlug = (typeof SERVICE_SLUGS)[number]
