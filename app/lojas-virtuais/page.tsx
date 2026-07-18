import type { Metadata } from 'next'
import { generateServiceMetadata, ServicePage } from '@/lib/service-page'

export const metadata: Metadata = generateServiceMetadata('lojas-virtuais')

export default function LojasVirtuaisPage() {
  return <ServicePage slug="lojas-virtuais" />
}
