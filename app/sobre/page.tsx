import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { About } from '@/components/sections/About'

export const metadata: Metadata = buildPageMetadata({
  title: 'Sobre',
  description:
    'Conheça a Código Primordial: agência de desenvolvimento remota baseada em Salvador–BA, liderada por Jackson Almeida, Desenvolvedor Full Stack.',
  path: '/sobre',
})

export default function SobrePage() {
  return <About showPageHeading />
}
