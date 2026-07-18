import type { MetadataRoute } from 'next'
import { SITE_URL, ROUTES, SERVICE_SLUGS } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticPages = [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}${ROUTES.servicos}`, priority: 0.9 },
    { url: `${SITE_URL}${ROUTES.processo}`, priority: 0.8 },
    { url: `${SITE_URL}${ROUTES.portfolio}`, priority: 0.8 },
    { url: `${SITE_URL}${ROUTES.sobre}`, priority: 0.7 },
    { url: `${SITE_URL}${ROUTES.contato}`, priority: 0.9 },
  ]

  const servicePages = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    priority: 0.85,
  }))

  return [...staticPages, ...servicePages].map((page) => ({
    url: page.url,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: page.priority,
  }))
}
