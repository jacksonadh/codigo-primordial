import {
  Hero,
  Problems,
  Differentiators,
  Portfolio,
  MaintenancePlans,
  About,
  FAQ,
} from '@/components/sections'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ROUTES } from '@/config/site'
import { Button } from '@/components/common/Button'

const Contact = dynamic(
  () => import('@/components/sections/Contact').then((m) => m.Contact),
  { ssr: true }
)

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <section className="py-16 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-muted mb-6 max-w-2xl mx-auto">
            Landing pages, sites, lojas virtuais, aplicações web, evolução VTEX, manutenção e treinamentos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={ROUTES.servicos} size="lg">
              Ver serviços
              <ArrowRight size={18} />
            </Button>
            <Link
              href={ROUTES.processo}
              className="text-primary hover:text-primary-400 font-semibold transition-colors"
            >
              Como trabalhamos
            </Link>
          </div>
        </div>
      </section>
      <Differentiators />
      <Portfolio limit={3} />
      <MaintenancePlans />
      <About />
      <FAQ />
      <Contact />
    </>
  )
}
