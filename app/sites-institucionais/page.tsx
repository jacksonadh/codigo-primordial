import type { Metadata } from 'next'
import { generateServiceMetadata, ServicePage } from '@/lib/service-page'

export const metadata: Metadata = generateServiceMetadata('sites-institucionais')

export default function SitesInstitucionaisPage() {
  return <ServicePage slug="sites-institucionais" />
}
