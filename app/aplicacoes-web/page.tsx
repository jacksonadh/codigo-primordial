import type { Metadata } from 'next'
import { generateServiceMetadata, ServicePage } from '@/lib/service-page'

export const metadata: Metadata = generateServiceMetadata('aplicacoes-web')

export default function AplicacoesWebPage() {
  return <ServicePage slug="aplicacoes-web" />
}
