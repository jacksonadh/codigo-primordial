import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { ServiceSlug } from '@/config/site'
import { getServiceBySlug } from '@/content/services'
import { buildPageMetadata, buildServiceJsonLd } from '@/lib/seo'
import { ServicePageLayout } from '@/components/pages/ServicePageLayout'
import { JsonLd } from '@/components/seo/JsonLd'

export function generateServiceMetadata(slug: ServiceSlug): Metadata {
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return buildPageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/${slug}`,
  })
}

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <>
      <JsonLd
        data={buildServiceJsonLd({
          name: service.title,
          description: service.metaDescription,
          path: `/${slug}`,
        })}
      />
      <ServicePageLayout service={service} />
    </>
  )
}
