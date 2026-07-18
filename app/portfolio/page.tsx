import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { Portfolio } from '@/components/sections/Portfolio'

export const metadata: Metadata = buildPageMetadata({
  title: 'Portfólio',
  description:
    'Cases reais de sites institucionais, e-commerce Nuvemshop e aplicações web desenvolvidos pela Código Primordial.',
  path: '/portfolio',
})

export default function PortfolioPage() {
  return <Portfolio showPageHeading />
}
