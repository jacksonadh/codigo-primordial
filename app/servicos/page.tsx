import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { Services } from '@/components/sections/Services'

export const metadata: Metadata = buildPageMetadata({
  title: 'Serviços',
  description:
    'Landing pages, sites institucionais, aplicações web, Nuvemshop, evolução VTEX, manutenção e treinamentos. Soluções claras com limites honestos.',
  path: '/servicos',
})

export default function ServicosPage() {
  return <Services showPageHeading />
}
