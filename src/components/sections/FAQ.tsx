import { faqItems } from '@/content/faq'
import { SectionTitle } from '../common/SectionTitle'

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-surface-dark" aria-labelledby="perguntas-frequentes-titulo">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Respostas diretas sobre escopo, prazos e como trabalhamos.">
          Perguntas frequentes
        </SectionTitle>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className="group bg-surface rounded-xl border border-surface-light overflow-hidden"
              open={index === 0}
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-4 text-left text-text font-medium hover:bg-surface-light/50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-inset list-none [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary flex-shrink-0 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-text-muted text-sm leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
