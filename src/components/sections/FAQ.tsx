'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '@/content/faq'
import { SectionTitle } from '../common/SectionTitle'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-32 bg-surface-dark" aria-labelledby="perguntas-frequentes-titulo">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Respostas diretas sobre escopo, prazos e como trabalhamos.">
          Perguntas frequentes
        </SectionTitle>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <div
                key={item.question}
                className="bg-surface rounded-xl border border-surface-light overflow-hidden"
              >
                <button
                  id={buttonId}
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left text-text font-medium hover:bg-surface-light/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-primary flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-6 pb-4"
                >
                  <p className="text-text-muted text-sm leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
