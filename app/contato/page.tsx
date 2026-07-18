import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { Contact } from '@/components/sections/Contact'

export const metadata: Metadata = buildPageMetadata({
  title: 'Contato',
  description:
    'Solicite orçamento ou agende diagnóstico. Formulário qualificado para projetos web, e-commerce, VTEX, manutenção e treinamentos.',
  path: '/contato',
})

export default function ContatoPage() {
  return <Contact showPageHeading />
}
