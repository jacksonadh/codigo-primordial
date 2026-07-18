# Código Primordial - Site da Agência

<p align="center">
  <img src="public/favicon.svg" alt="Logo Código Primordial" width="80" />
</p>

<p align="center">
  <strong>Desenvolvemos e evoluímos produtos digitais para empresas que precisam vender, organizar processos ou tirar uma ideia do papel.</strong>
</p>

<p align="center">
  <a href="https://www.codigoprimordial.com">Ver site</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#rotas">Rotas</a> •
  <a href="#deploy">Deploy</a>
</p>

---

## Sobre o Projeto

Site comercial da agência **Código Primordial**, com páginas indexáveis por serviço, SEO técnico, formulário qualificado e posicionamento honesto sobre escopo VTEX.

### Características

- Design dark/neon (verde `#39ff14`, roxo `#8b5cf6`)
- Next.js App Router com SSG e metadados por rota
- 11 URLs indexáveis (home + 10 páginas)
- Formulário com qualificação de lead e consentimento LGPD
- Limites explícitos para evolução de lojas VTEX existentes

---

## Tecnologias

| Tecnologia | Descrição |
|------------|-----------|
| Next.js 15 | App Router, metadata API, sitemap/robots nativos |
| React 18 | Componentes reutilizáveis |
| TypeScript | Tipagem estática |
| Tailwind CSS | Estilos utilitários |
| Resend | Envio de e-mails transacionais |
| Vercel Analytics + GA4 | Métricas de tráfego |

---

## Instalação

### Pré-requisitos

- Node.js 18+
- npm 9+

### Passos

```bash
git clone https://github.com/jacksonadh/portfolio.git
cd portfolio
npm install
cp .env.example .env.local
npm run dev
```

Site local: `http://localhost:3000`

---

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home com hero, FAQ, contato |
| `/servicos` | Visão geral de todos os serviços |
| `/processo` | Processo de trabalho (briefing à entrega) |
| `/landing-pages` | Serviço: landing pages |
| `/sites-institucionais` | Serviço: sites institucionais |
| `/aplicacoes-web` | Serviço: aplicações web e MVPs |
| `/lojas-virtuais` | Serviço: Nuvemshop e e-commerce |
| `/vtex` | Serviço: evolução de lojas VTEX |
| `/manutencao-e-suporte` | Serviço: manutenção e diagnóstico |
| `/treinamentos` | Serviço: treinamentos e workshops |
| `/portfolio` | Cases reais |
| `/sobre` | Sobre a agência |
| `/contato` | Formulário qualificado |

Parâmetros de URL no contato:

- `?intent=orcamento` — solicitar orçamento
- `?intent=diagnostico` — agendar diagnóstico
- `?service=vtex` — pré-seleciona tipo de serviço

---

## Estrutura do Projeto

```
portfolio/
├── app/                      # App Router (páginas, layout, API)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── api/send-email/route.ts
├── src/
│   ├── config/site.ts        # URL, rotas, constantes
│   ├── content/              # Dados de serviços, FAQ, portfólio
│   ├── lib/seo.ts            # Metadata e JSON-LD
│   └── components/           # UI reutilizável
├── public/
│   ├── assets/og-image.png   # Open Graph 1200×630
│   └── site.webmanifest
└── tailwind.config.js
```

---

## Variáveis de Ambiente

Copie `.env.example` para `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://www.codigoprimordial.com
RESEND_API_KEY=re_xxxxxxxxxx
```

Configure `RESEND_API_KEY` também no painel Vercel (`Settings → Environment Variables`).

---

## Formulário de Contato

Campos qualificadores:

| Campo | Obrigatório |
|-------|-------------|
| Nome | Sim |
| E-mail | Sim |
| WhatsApp | Recomendado |
| Empresa | Não |
| Tipo de serviço | Sim |
| Objetivo principal | Sim |
| Prazo desejado | Sim |
| Faixa de investimento | Sim |
| Mensagem | Sim |
| Consentimento LGPD | Sim |

Endpoint: `POST /api/send-email` → Resend → `contato@codigoprimordial.com`

---

## SEO

| Item | Implementação |
|------|---------------|
| Canonical / OG / Twitter | `src/lib/seo.ts` + metadata por página |
| JSON-LD | `ProfessionalService` global + `Service` por página |
| Sitemap | `app/sitemap.ts` |
| Robots | `app/robots.ts` |
| Manifest | `public/site.webmanifest` |
| OG Image | `public/assets/og-image.png` (1200×630) |

Domínio canônico: `https://www.codigoprimordial.com`

---

## Scripts

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # ESLint (Next.js)
```

---

## Deploy (Vercel)

1. Conecte o repositório no [Vercel Dashboard](https://vercel.com/new)
2. Configure `NEXT_PUBLIC_SITE_URL` e `RESEND_API_KEY`
3. Adicione domínio customizado `www.codigoprimordial.com`
4. Deploy automático a cada push na branch main

**URL de produção:** `https://www.codigoprimordial.com`

---

## Posicionamento VTEX

A agência atua em **lojas VTEX já existentes** (componentes, checkout, promoções, pixels, analytics, integrações, performance). **Não realiza implantação ou migração completa de operação VTEX** de forma autônoma; projetos maiores podem envolver parceiros.

---

<p align="center">
  Código Primordial · Salvador–BA · Atendimento remoto em todo o Brasil
</p>
