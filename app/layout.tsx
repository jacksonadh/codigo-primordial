import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import { SITE_DESCRIPTION, SITE_NAME } from '@/config/site'
import { buildOrganizationJsonLd, buildPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { GoogleAnalytics } from '@/components/seo/GoogleAnalytics'
import { VercelAnalytics } from '@/components/seo/VercelAnalytics'
import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/sections/Footer'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    path: '/',
  }),
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.codigoprimordial.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-text font-sans">
        <JsonLd data={buildOrganizationJsonLd()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics />
        <VercelAnalytics />
      </body>
    </html>
  )
}
