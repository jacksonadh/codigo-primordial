import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { ROUTES } from '@/config/site'
import { portfolioProjects } from '@/content/portfolio'
import { SectionTitle } from '../common/SectionTitle'
import { Card } from '../common/Card'

interface PortfolioProps {
  showPageHeading?: boolean
  limit?: number
}

export function Portfolio({ showPageHeading = false, limit }: PortfolioProps) {
  const projects = limit ? portfolioProjects.slice(0, limit) : portfolioProjects

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-background"
      aria-labelledby={showPageHeading ? undefined : 'portfolio-titulo'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showPageHeading ? (
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4 text-center">
            <span className="text-primary font-mono" aria-hidden="true">&lt;</span>
            Portfólio
            <span className="text-primary font-mono" aria-hidden="true">/&gt;</span>
          </h1>
        ) : (
          <SectionTitle subtitle="Cases reais que demonstram nossa experiência em desenvolvimento web">
            Portfólio
          </SectionTitle>
        )}

        {showPageHeading && (
          <p className="text-text-muted text-lg text-center max-w-2xl mx-auto mb-12">
            Projetos publicados com clientes reais — sem métricas inventadas.
          </p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden" glow>
              <div className="relative -mx-6 -mt-6 mb-6 h-48 bg-surface-light overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot do projeto ${project.title} - ${project.client}`}
                  width={438}
                  height={192}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary text-background rounded-full hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      aria-label={`Ver projeto ${project.title} ao vivo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-surface-light text-text rounded-full hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      aria-label={`Ver código do projeto ${project.title}`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <span className="text-secondary text-sm font-medium">{project.client}</span>
                <h3 className="text-xl font-semibold text-text mt-1 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-light">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-text-muted text-xs font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted mb-4">
            {limit ? 'Quer ver todos os cases ou discutir sua ideia?' : 'Quer um projeto como estes?'}
          </p>
          <Link
            href={limit ? ROUTES.portfolio : `${ROUTES.contato}?intent=orcamento`}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-400 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg px-2 py-1"
          >
            {limit ? 'Ver portfólio completo' : 'Solicitar orçamento'}
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
