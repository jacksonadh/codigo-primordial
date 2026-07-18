import type { Metadata } from 'next'
import { generateServiceMetadata, ServicePage } from '@/lib/service-page'

export const metadata: Metadata = generateServiceMetadata('treinamentos')

export default function TreinamentosPage() {
  return <ServicePage slug="treinamentos" />
}
