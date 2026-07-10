import { ExternalLink, Github } from "lucide-react";
import { SectionTitle } from "../common/SectionTitle";
import { Card } from "../common/Card";

const projects = [
  {
    title: "E-commerce de Artes",
    client: "Blubi colab studio",
    description:
      "Expansão das vendas físicas em feiras para o digital. Loja virtual na Nuvemshop com estrutura pronta para integração com Shopee, Mercado Livre e outros marketplaces.",
    image: "/assets/portfolio/bluebi.webp",
    tags: ["Nuvemshop", "Marketplace", "Pagamento Online", "Marketing Digital", "E-commerce"],
    metrics: ["Vendas online", "Multi-canal", "Pronto para Shopee", "Pronto para tiktok shop"],
    liveUrl: "https://blubi.lojavirtualnuvem.com.br",
    repoUrl: null,
  },
  {
    title: "Rota Bahia Turismo",
    client: "Rota Bahia Turismo",
    description:
      "Site institucional para a Rota Bahia, agência de turismo e receptivo em Salvador, Bahia.",
    image: "/assets/portfolio/rotabahia.webp",
    tags: ["Next.js 16+", "TypeScript", "Tailwind CSS 4"],
    metrics: ["Interface intuitiva", "SEO otimizado"],
    liveUrl: "https://rota-bahia-turismo.vercel.app/",
    repoUrl: null,
  },
  {
    title: "Elev'up Consultoria - Site Institucional",
    client: "Elev'up Consultoria",
    description:
      "Site institucional moderno para a Elev'up Consultoria, especializada em Gestão Financeira e Recursos Humanos para pequenas e médias empresas.",
    image: "/assets/portfolio/elevup.webp",
    tags: ["Next.js 16+", "TypeScript", "Tailwind CSS 4"],
    metrics: ["+30% conversão", "SEO otimizado", "Real-time updates"],
    liveUrl: "https://elevup-consultoria.vercel.app/",
    repoUrl: null,
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-background"
      aria-labelledby="portfolio-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Cases de sucesso que demonstram nossa expertise em desenvolvimento web">
          Portfólio
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden" glow>
              <div className="relative -mx-6 -mt-6 mb-6 h-48 bg-surface-light overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Screenshot do projeto ${project.title} - ${project.client}`}
                    loading="lazy"
                    decoding="async"
                    width={438}
                    height={192}
                    fetchPriority="low"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <span className="text-4xl font-mono text-primary/50">
                      &lt;/&gt;
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary text-background rounded-full hover:scale-110 transition-transform"
                      aria-label="Ver projeto"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-surface-light text-text rounded-full hover:scale-110 transition-transform"
                      aria-label="Ver código"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <span className="text-secondary text-sm font-medium">
                  {project.client}
                </span>
                <h3 className="text-xl font-semibold text-text mt-1 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  {project.description}
                </p>

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
                    <span
                      key={tag}
                      className="text-text-muted text-xs font-mono"
                    >
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
            Quer ver mais projetos ou discutir sua ideia?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-400 font-semibold transition-colors"
          >
            Vamos conversar
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
