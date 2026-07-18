'use client'

import { useState, useEffect, useRef, useCallback, FormEvent, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Send, Mail, CheckCircle, AlertCircle, Loader2, Phone } from 'lucide-react'
import { SITE_EMAIL } from '@/config/site'
import { SectionTitle } from '../common/SectionTitle'
import { Button } from '../common/Button'

const projectTypes = [
  { value: 'landing-pages', label: 'Landing page' },
  { value: 'sites-institucionais', label: 'Site institucional' },
  { value: 'aplicacoes-web', label: 'Aplicação web ou MVP' },
  { value: 'lojas-virtuais', label: 'Loja virtual / Nuvemshop' },
  { value: 'vtex', label: 'Evolução de loja VTEX existente' },
  { value: 'manutencao-e-suporte', label: 'Manutenção ou diagnóstico' },
  { value: 'treinamentos', label: 'Treinamento ou workshop' },
  { value: 'outro', label: 'Outro (descreva na mensagem)' },
]

const objectiveOptions = [
  { value: 'vender', label: 'Vender mais / gerar receita' },
  { value: 'leads', label: 'Captar leads qualificados' },
  { value: 'organizar', label: 'Organizar processos / operação' },
  { value: 'validar', label: 'Validar uma ideia ou MVP' },
  { value: 'corrigir', label: 'Corrigir ou evoluir projeto existente' },
  { value: 'capacitar', label: 'Capacitar equipe' },
  { value: 'outro', label: 'Outro objetivo' },
]

const timelineOptions = [
  { value: 'urgente', label: 'Urgente (até 1 mês)' },
  { value: '1-3-meses', label: '1 a 3 meses' },
  { value: '3-6-meses', label: '3 a 6 meses' },
  { value: 'flexivel', label: 'Flexível / sem prazo rígido' },
]

const budgetRanges = [
  { value: 'ate-5k', label: 'Até R$ 5.000' },
  { value: '5k-15k', label: 'R$ 5.000 a R$ 15.000' },
  { value: '15k-30k', label: 'R$ 15.000 a R$ 30.000' },
  { value: '30k-50k', label: 'R$ 30.000 a R$ 50.000' },
  { value: 'acima-50k', label: 'Acima de R$ 50.000' },
  { value: 'definir', label: 'Preciso de ajuda para estimar' },
]

const messagePlaceholders: Record<string, string> = {
  'landing-pages': 'Qual campanha ou lançamento? Tem referências visuais?',
  'sites-institucionais': 'Descreva sua empresa e o objetivo do site.',
  'aplicacoes-web': 'Qual problema o sistema precisa resolver?',
  'lojas-virtuais': 'Quantos produtos? Já usa alguma plataforma?',
  vtex: 'Descreva a loja VTEX e a demanda específica (checkout, componentes, integração...).',
  'manutencao-e-suporte': 'Conte sobre o projeto atual e o que precisa ser melhorado.',
  treinamentos: 'Qual equipe, nível técnico e tema desejado?',
  outro: 'Descreva seu projeto ou necessidade.',
  default: 'Descreva seu projeto ou necessidade.',
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const STORAGE_KEY = 'contact-form-draft'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  objective: string
  timeline: string
  budget: string
  message: string
  privacyConsent: boolean
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  objective: '',
  timeline: '',
  budget: '',
  message: '',
  privacyConsent: false,
}

function formatPhone(value: string): string {
  const numbers = value.replace(/\D/g, '')

  if (numbers.length <= 2) {
    return numbers.length ? `(${numbers}` : ''
  }
  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  }
  if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
  }
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
}

function ContactFormContent({ showPageHeading = false }: { showPageHeading?: boolean }) {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const debouncedSave = useCallback((data: FormData) => {
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    saveTimerRef.current = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    }, 500)
  }, [])

  useEffect(() => {
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    }
  }, [])

  const intent = searchParams.get('intent')
  const serviceParam = searchParams.get('service')

  const pageTitle =
    intent === 'diagnostico' ? 'Agendar diagnóstico' : 'Solicitar orçamento'

  const currentPlaceholder = useMemo(() => {
    return messagePlaceholders[formData.projectType] || messagePlaceholders.default
  }, [formData.projectType])

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    let data = { ...initialFormData }

    if (saved) {
      try {
        data = { ...data, ...JSON.parse(saved) }
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }

    if (serviceParam && projectTypes.some((t) => t.value === serviceParam)) {
      data.projectType = serviceParam
    } else if (intent === 'diagnostico') {
      data.projectType = 'manutencao-e-suporte'
    }

    setFormData(data)
  }, [intent, serviceParam])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!formData.privacyConsent) {
      setStatus('error')
      setErrorMessage('É necessário aceitar o uso dos dados para continuar.')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const selectedProjectType = projectTypes.find((t) => t.value === formData.projectType)
      const selectedObjective = objectiveOptions.find((o) => o.value === formData.objective)
      const selectedTimeline = timelineOptions.find((t) => t.value === formData.timeline)
      const selectedBudget = budgetRanges.find((b) => b.value === formData.budget)

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          projectType: selectedProjectType?.label || formData.projectType,
          objective: selectedObjective?.label || formData.objective,
          timeline: selectedTimeline?.label || formData.timeline,
          budget: selectedBudget?.label || formData.budget,
          message: formData.message,
          intent: intent === 'diagnostico' ? 'Diagnóstico' : 'Orçamento',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem')
      }

      setStatus('success')
      localStorage.removeItem(STORAGE_KEY)
      setFormData(initialFormData)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Erro ao enviar mensagem. Tente novamente.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const newValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : name === 'phone' ? formatPhone(value) : value
    const updatedData = { ...formData, [name]: newValue }

    setFormData(updatedData)
    debouncedSave(updatedData)
  }

  const resetForm = () => {
    setStatus('idle')
    setErrorMessage('')
  }

  if (status === 'success') {
    return (
      <section id="contato" className="py-20 md:py-32 bg-surface-dark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 bg-surface rounded-2xl border border-primary/30">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-text mb-4">Recebemos sua mensagem!</h2>
            <p className="text-text-muted mb-6">
              Analisaremos sua demanda e retornaremos em até 24 horas úteis no e-mail informado.
            </p>
            <Button onClick={resetForm} variant="outline">
              Enviar outra solicitação
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="py-20 md:py-32 bg-surface-dark" aria-labelledby="contato-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showPageHeading ? (
          <h1 id="contato-titulo" className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4 text-center">
            <span className="text-primary font-mono" aria-hidden="true">&lt;</span>
            {pageTitle}
            <span className="text-primary font-mono" aria-hidden="true">/&gt;</span>
          </h1>
        ) : (
          <SectionTitle subtitle="Responda algumas perguntas e receba uma proposta sob medida. Sem compromisso.">
            Conte sobre seu projeto
          </SectionTitle>
        )}

        {showPageHeading && (
          <p className="text-text-muted text-lg text-center max-w-2xl mx-auto mb-12">
            Quanto mais contexto, melhor a proposta. Seus dados são usados apenas para retorno comercial.
          </p>
        )}

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-text mb-4">
                {intent === 'diagnostico'
                  ? 'Diagnóstico para projetos existentes'
                  : 'Orçamento para projetos novos'}
              </h2>
              <p className="text-text-muted leading-relaxed">
                Este formulário qualifica sua demanda: tipo de serviço, objetivo, prazo e investimento previsto.
                Respondemos em até 24 horas úteis.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-surface rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">E-mail direto</p>
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="text-text hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
                  >
                    {SITE_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-surface rounded-xl">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">WhatsApp recomendado</p>
                  <p className="text-text text-sm">Informe no formulário para retorno mais ágil.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3" role="alert">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-400 text-sm">{errorMessage}</p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-text text-sm font-medium mb-2">
                    Seu nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={status === 'loading'}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                    placeholder="Como podemos te chamar?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text text-sm font-medium mb-2">
                    E-mail para contato *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={status === 'loading'}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-text text-sm font-medium mb-2">
                    WhatsApp (recomendado)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    disabled={status === 'loading'}
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={16}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                    placeholder="(71) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-text text-sm font-medium mb-2">
                    Empresa ou projeto
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    disabled={status === 'loading'}
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                    placeholder="Ex: Minha Startup, Loja do João..."
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-text text-sm font-medium mb-2">
                    Tipo de serviço *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    disabled={status === 'loading'}
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option value="" disabled>Escolha a opção mais próxima</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="objective" className="block text-text text-sm font-medium mb-2">
                    Objetivo principal *
                  </label>
                  <select
                    id="objective"
                    name="objective"
                    required
                    disabled={status === 'loading'}
                    value={formData.objective}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option value="" disabled>Qual o principal objetivo?</option>
                    {objectiveOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-text text-sm font-medium mb-2">
                    Prazo desejado *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    disabled={status === 'loading'}
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option value="" disabled>Quando precisa estar pronto?</option>
                    {timelineOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-text text-sm font-medium mb-2">
                    Faixa de investimento *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    disabled={status === 'loading'}
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option value="" disabled>Selecione uma faixa</option>
                    {budgetRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-text text-sm font-medium mb-2">
                  Conte mais sobre o projeto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  disabled={status === 'loading'}
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none disabled:opacity-50"
                  placeholder={currentPlaceholder}
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  name="privacyConsent"
                  required
                  checked={formData.privacyConsent}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="mt-1 h-4 w-4 rounded border-surface-light bg-surface text-primary focus:ring-primary/50"
                />
                <label htmlFor="privacyConsent" className="text-text-muted text-sm leading-relaxed">
                  Autorizo o uso dos meus dados para retorno comercial da Código Primordial,
                  conforme a LGPD. Seus dados não serão compartilhados com terceiros. *
                </label>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-text-muted text-sm">* Campos obrigatórios</p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'loading'}
                  className={status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      {intent === 'diagnostico' ? 'Agendar diagnóstico' : 'Solicitar orçamento'}
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ContactProps {
  showPageHeading?: boolean
}

export function Contact({ showPageHeading = false }: ContactProps) {
  return (
    <Suspense fallback={<div className="py-32 bg-surface-dark" aria-hidden="true" />}>
      <ContactFormContent showPageHeading={showPageHeading} />
    </Suspense>
  )
}
