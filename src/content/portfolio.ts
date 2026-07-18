export interface PortfolioProject {
  title: string
  client: string
  description: string
  image: string
  tags: string[]
  metrics: string[]
  liveUrl: string | null
  repoUrl: string | null
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'E-commerce de Artes',
    client: 'Blubi colab studio',
    description:
      'Expansão das vendas físicas em feiras para o digital. Loja virtual na Nuvemshop com estrutura pronta para integração com Shopee, Mercado Livre e outros marketplaces.',
    image: '/assets/portfolio/bluebi.webp',
    tags: ['Nuvemshop', 'Marketplace', 'Pagamento Online', 'E-commerce'],
    metrics: ['Vendas online', 'Multi-canal', 'Pronto para marketplaces'],
    liveUrl: 'https://blubi.lojavirtualnuvem.com.br',
    repoUrl: null,
  },
  {
    title: 'Rota Bahia Turismo',
    client: 'Rota Bahia Turismo',
    description:
      'Site institucional para a Rota Bahia, agência de turismo e receptivo em Salvador, Bahia.',
    image: '/assets/portfolio/rotabahia.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    metrics: ['Interface intuitiva', 'SEO otimizado'],
    liveUrl: 'https://rota-bahia-turismo.vercel.app/',
    repoUrl: null,
  },
  {
    title: "Elev'up Consultoria - Site Institucional",
    client: "Elev'up Consultoria",
    description:
      'Site institucional moderno para a Elev\'up Consultoria, especializada em Gestão Financeira e Recursos Humanos para pequenas e médias empresas.',
    image: '/assets/portfolio/elevup.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    metrics: ['SEO otimizado', 'Layout responsivo', 'Formulário de contato'],
    liveUrl: 'https://elevup-consultoria.vercel.app/',
    repoUrl: null,
  },
]
