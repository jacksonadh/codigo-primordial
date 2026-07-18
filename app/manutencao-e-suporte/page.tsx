import type { Metadata } from 'next'
import { generateServiceMetadata, ServicePage } from '@/lib/service-page'

export const metadata: Metadata = generateServiceMetadata('manutencao-e-suporte')

export default function ManutencaoPage() {
  return <ServicePage slug="manutencao-e-suporte" />
}
