import type { Metadata } from 'next'
import { generateServiceMetadata, ServicePage } from '@/lib/service-page'

export const metadata: Metadata = generateServiceMetadata('landing-pages')

export default function LandingPagesPage() {
  return <ServicePage slug="landing-pages" />
}
