import {
  FOUNDER,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  VTEX_LIMITS,
} from '@/config/site'

interface PageMetadataInput {
  title: string
  description: string
  path?: string
}

export function absoluteUrl(path = ''): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  if (!path || path === '/') return SITE_URL
  return `${SITE_URL}${normalizedPath}`
}

export function buildPageTitle(title: string): string {
  if (title === SITE_NAME) return `${SITE_NAME} | Desenvolvimento Web e Produtos Digitais`
  return `${title} | ${SITE_NAME}`
}

export function buildPageMetadata({ title, description, path = '' }: PageMetadataInput) {
  const url = absoluteUrl(path)
  const fullTitle = buildPageTitle(title)

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website' as const,
      locale: 'pt_BR',
      url,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}/assets/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Desenvolvimento web e produtos digitais`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: fullTitle,
      description,
      images: [`${SITE_URL}/assets/og-image.png`],
    },
    keywords: [
      'desenvolvimento web',
      'agência web',
      'React',
      'TypeScript',
      'Next.js',
      'VTEX',
      'Nuvemshop',
      'e-commerce',
      'landing page',
      'aplicações web',
      'loja virtual',
      'site institucional',
      'Salvador',
      'Brasil',
      'atendimento remoto',
    ],
  }
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logoHorizontalNova.png`,
    image: `${SITE_URL}/assets/og-image.png`,
    email: SITE_EMAIL,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Salvador',
      addressRegion: 'BA',
      addressCountry: 'BR',
    },
    founder: {
      '@type': 'Person',
      name: FOUNDER.name,
      jobTitle: FOUNDER.jobTitle,
    },
    sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    serviceType: [
      'Desenvolvimento Web',
      'Landing Pages',
      'Sites Institucionais',
      'Aplicações Web',
      'E-commerce Nuvemshop',
      'Evolução de lojas VTEX',
      'Manutenção e Suporte',
      'Treinamentos e Workshops',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Desenvolvimento Web',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Pages e Sites Institucionais',
            description: 'Sites rápidos, responsivos e orientados a conversão ou credibilidade',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Aplicações Web e MVPs',
            description: 'Sistemas, dashboards e produtos digitais sob medida',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nuvemshop e E-commerce',
            description: 'Implantação, customização e evolução de lojas virtuais',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Evolução de lojas VTEX',
            description: VTEX_LIMITS,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manutenção e Suporte',
            description: 'Diagnóstico, correções e evolução contínua de projetos existentes',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Treinamentos e Workshops',
            description: 'Capacitação prática para equipes em front-end, e-commerce e integrações',
          },
        },
      ],
    },
  }
}

export function buildServiceJsonLd(input: {
  name: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      '@type': 'ProfessionalService',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
  }
}
