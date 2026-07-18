import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { Process } from '@/components/sections/Process'

export const metadata: Metadata = buildPageMetadata({
  title: 'Processo',
  description:
    'Como trabalhamos: briefing, proposta, design, desenvolvimento e entrega com suporte. Processo transparente do início ao pós-entrega.',
  path: '/processo',
})

export default function ProcessoPage() {
  return <Process showPageHeading />
}
