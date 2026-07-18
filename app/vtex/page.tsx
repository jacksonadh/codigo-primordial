import type { Metadata } from 'next'
import { generateServiceMetadata, ServicePage } from '@/lib/service-page'

export const metadata: Metadata = generateServiceMetadata('vtex')

export default function VtexPage() {
  return <ServicePage slug="vtex" />
}
