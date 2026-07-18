# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Added
- Migração para **Next.js 15 App Router** com SSG e metadados por rota
- Páginas dedicadas: `/landing-pages`, `/sites-institucionais`, `/aplicacoes-web`, `/lojas-virtuais`, `/vtex`, `/manutencao-e-suporte`, `/treinamentos`, `/portfolio`, `/sobre`, `/contato`
- Seções na home: Problemas atendidos, Diferenciais, Planos de manutenção, FAQ
- `app/sitemap.ts` e `app/robots.ts` dinâmicos
- `public/site.webmanifest` e OG image PNG 1200×630
- Formulário qualificado com objetivo, prazo, consentimento LGPD e CTAs diferenciados (orçamento vs diagnóstico)
- Centralização de SEO em `src/lib/seo.ts` e conteúdo em `src/content/`

### Changed
- Domínio canônico atualizado para `https://www.codigoprimordial.com`
- Fundador reposicionado como **Desenvolvedor Full Stack**
- Serviços reorganizados em 6 categorias com limites honestos de VTEX
- Hero alinhado: 5+ anos / 30+ projetos
- API de e-mail migrada para Route Handler (`app/api/send-email/route.ts`)

### Fixed
- OG image movida para `public/assets/` (corrige 404 em produção)
- Removidas referências a São Paulo em keywords
- Removido depoimento anônimo não verificável
- Removida métrica "+30% conversão" não verificável do portfólio Elev'up

### Removed
- Stack Vite SPA (`index.html`, `vite.config.ts`, rewrites SPA)
- `public/sitemap.xml` e `public/robots.txt` estáticos (substituídos por rotas Next.js)

---

## [1.1.0] - 2026-01-10

### Added - Integração de E-mail com Resend
- **Envio de e-mail** funcional no formulário de contato
- **Vercel Serverless Function** (`api/send-email.ts`) para processamento seguro
- **Template HTML profissional** de e-mail com:
  - Branding completo (cores, logo, tipografia)
  - Seções organizadas: dados do cliente, detalhes do projeto, mensagem
  - Botão de resposta rápida
  - Design responsivo para clientes de e-mail
- **Campo de telefone** com máscara brasileira `(11) 99999-9999`
- **Estados de UI** no formulário:
  - Loading com spinner animado
  - Mensagem de erro com ícone
  - Tela de sucesso com confirmação
- **Validações** no servidor:
  - Campos obrigatórios
  - Formato de e-mail
  - Headers CORS

### Changed
- Formulário de contato refatorado com estados de submissão
- Campos desabilitados durante envio
- Botão com feedback visual de loading

### Technical
- Dependência `resend` adicionada
- Variável `RESEND_API_KEY` documentada em `.env.example`
- Arquitetura: `Cliente → POST /api/send-email → Resend API → contato@codigoprimordial.com`

---

## [1.0.3] - 2026-01-10

### Added
- **Vercel Analytics** integrado para métricas de visitantes
- Componente `<Analytics />` renderizado no App.tsx

### Technical
- Dependência `@vercel/analytics` adicionada

---

## [1.0.2] - 2026-01-10

### Changed - Deploy para Vercel
- **Migra deploy** de GitHub Pages para Vercel
- Atualiza `vite.config.ts` para usar variáveis de ambiente
- Cria `vercel.json` com configurações de build e headers de segurança
- Remove dependência `gh-pages` do package.json
- Atualiza base URL de `/portfolio/` para `/`
- Cria `.env` e `.env.example` para configuração de ambiente

### Added
- Arquivo `vercel.json` com rewrites para SPA e cache de assets
- Headers de segurança (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)

### Updated
- URLs em `index.html`, `sitemap.xml` e `robots.txt` para domínio Vercel
- Documentação de deploy no README.md

---

## [1.0.1] - 2026-01-10

### Added - SEO Optimization
- **Meta Tags Completas**:
  - `og:image`, `og:url`, `og:site_name` para Open Graph
  - Twitter Card meta tags (`twitter:card`, `twitter:image`)
  - `canonical` URL
  - `robots` meta tag
  - `theme-color` para mobile browsers
  - `revisit-after` para crawlers
- **Schema.org JSON-LD** estruturado com:
  - Tipo `ProfessionalService`
  - Catálogo de serviços (`OfferCatalog`)
  - Informações do fundador
  - Links sociais (`sameAs`)
- **Arquivos de Indexação**:
  - `robots.txt` com sitemap reference
  - `sitemap.xml` com todas as seções
- **Imagem OG** placeholder (`og-image.svg`)

### Improved - Acessibilidade
- `aria-labelledby` em todas as seções
- `aria-label` no scroll indicator
- `aria-hidden` em elementos decorativos
- `loading="lazy"` em imagens do portfólio
- Alt text mais descritivo nas imagens

### Changed
- Title mais otimizado para SEO com keywords
- Description expandida com call-to-action
- Keywords ampliadas com termos relevantes

---

## [1.0.0] - 2026-01-10

### Added

#### Migração de Stack
- **Migração completa** de HTML/CSS puro para React + Vite + TypeScript + Tailwind CSS
- Configuração de build otimizado para produção
- Deploy automatizado para GitHub Pages via `gh-pages`

#### Identidade Visual
- **Nova identidade visual** da agência Código Primordial
- Paleta de cores: verde neon (`#39ff14`), roxo (`#8b5cf6`), fundo escuro (`#0a0a0a`)
- Fontes: Outfit (sans-serif) e JetBrains Mono (monospace)
- Efeitos de glow neon nos elementos de destaque
- Favicon SVG personalizado com logo `</>`

#### Seções do Site
- **Hero**: headline, estatísticas (5+ anos, 50+ projetos, 100% satisfação) e CTAs animados
- **Serviços**: 4 cards com descrição, benefícios e CTA
  - Landing Pages e Sites Institucionais
  - Aplicações Web em React/TypeScript
  - Lojas VTEX IO e E-commerce
  - Consultoria e Manutenção Front-end
- **Portfólio**: cases de clientes com métricas de resultado e tags de tecnologia
- **Sobre**: história da agência, stack tecnológico e valores
- **Processo**: timeline de 5 etapas (Briefing → Proposta → Design → Desenvolvimento → Entrega)
- **Contato**: formulário completo de solicitação de orçamento
  - Campos: Nome, E-mail, Empresa, Tipo de Projeto, Orçamento Estimado, Mensagem
  - Faixas de orçamento pré-definidas (R$ 5k a R$ 50k+)
  - Tipos de projeto categorizados
- **Footer**: links sociais (GitHub, LinkedIn, E-mail) e copyright

#### Componentes Reutilizáveis
- `Button`: 4 variantes (primary, secondary, outline, ghost) e 3 tamanhos
- `Card`: com sub-componentes (Header, Title, Description, Content, Footer)
- `SectionTitle`: título com decoração de código `</>` 
- `Navbar`: responsiva com menu mobile e scroll detection
- Barrel exports para organização de imports

#### UX/UI
- **Responsividade** completa para mobile, tablet e desktop
- **Micro-interactions**: hovers, transições suaves, animações de entrada
- Scroll suave entre seções
- Menu mobile com animação slide-down

#### SEO
- Meta tags completas (title, description, keywords)
- Open Graph tags para compartilhamento social
- HTML semântico com headings corretos
- Alt text em imagens

#### Documentação
- README.md completo com instruções de instalação e uso
- CHANGELOG.md seguindo padrão Keep a Changelog

### Changed
- Linguagem do site de inglês para português do Brasil
- Tom de voz de "portfólio pessoal" para "agência/estúdio"
- Foco de recrutadores para clientes empresariais (B2B)
- Textos reescritos com foco em benefícios para o cliente

### Removed
- Arquivo `styles.css` (substituído por Tailwind CSS)
- Estrutura HTML/CSS estática (substituída por React SPA)
- Seções antigas: Experience/Timeline e Skills (consolidadas em Sobre)

### Technical Details

#### Arquivos Criados
```
src/
├── main.tsx
├── App.tsx
├── index.css
├── vite-env.d.ts
└── components/
    ├── common/
    │   ├── Button.tsx
    │   ├── Card.tsx
    │   ├── Navbar.tsx
    │   ├── SectionTitle.tsx
    │   └── index.ts
    └── sections/
        ├── Hero.tsx
        ├── Services.tsx
        ├── Portfolio.tsx
        ├── About.tsx
        ├── Process.tsx
        ├── Contact.tsx
        ├── Footer.tsx
        └── index.ts

Root:
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
├── README.md
├── CHANGELOG.md
└── public/
    └── favicon.svg
```

#### Dependências Adicionadas
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.468.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.6.2",
    "vite": "^6.0.5",
    "gh-pages": "^6.2.0"
  }
}
```

---

## [0.1.0] - 2024-XX-XX (Versão Anterior)

### Added
- Portfólio pessoal inicial em HTML/CSS puro
- Seções: About, Projects, Experience, Skills, Contact
- Links para GitHub e LinkedIn
- Design responsivo básico
