# Formação em Nutrição Holística® — Landing Page

Landing page de vendas (one-page) otimizada para SEO. **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.
Formulário de leads grava em Google Sheets (mesmo padrão do projeto `imersao-syatt`).

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
# produção:
npm run build && npm start
```

## Onde troco cada coisa

| O que | Arquivo |
|-------|---------|
| Links de checkout (CTAs) | `src/lib/site.ts` → `CHECKOUT_URL`, `CHECKOUT_URL_ALT` |
| URL canônica / SEO / OG | `src/lib/site.ts` → `SITE_URL`, `SITE_TITLE`, `SITE_DESCRIPTION`, `OG_IMAGE` |
| Redes sociais (JSON-LD) | `src/lib/site.ts` → `ORG_SAMEAS` |
| Rodapé (ano/cidade/privacidade) | `src/lib/site.ts` → `FOOTER` |
| Toda a copy da página | `src/lib/data.ts` |
| **Cores** do tema | `src/app/globals.css` → bloco `:root` (variáveis `--verde-escuro`, `--dourado`, etc.) |
| **Fontes** | `src/app/globals.css` (`@font-face`) + arquivos em `public/fonts/` |
| Credenciais Google Sheets | `.env.local` (veja `.env.example`) |
| Imagens/logos | `public/img/` (veja `public/img/LEIA-ME.md`) |

## Formulário de leads (Google Sheets)

O endpoint `POST /api/leads` valida no servidor e grava na planilha.
Configure em `.env.local`:

```
GOOGLE_SERVICE_ACCOUNT_EMAIL=...
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=...
GOOGLE_SHEET_NAME=Formacao Nutricao Holistica
```

Colunas gravadas: **Nome | E-mail | WhatsApp | Mensagem | Data/Hora**.
Alternativa por WhatsApp: veja o comentário no topo de `src/components/ui/LeadForm.tsx`.

## Identidade visual (extraída do site de referência)

- **Fundo escuro:** `#030f11` · **Verde profundo:** `#002721` · **Dourado (CTA):** `#a36b22`
  · **Dourado claro (hover):** `#c9a15b` · **Escassez (vermelho):** `#920202` · **Claro:** branco/creme
- **Fontes:** Astrid (títulos) + Montserrat (corpo/subtítulos) — auto-hospedadas em `public/fonts/`.

## SEO

- `<title>`, meta description, canonical, Open Graph, Twitter Card, robots — em `src/app/layout.tsx`.
- JSON-LD (Course + FAQPage + Organization) — `src/components/JsonLd.tsx`.
- `robots.txt` e `sitemap.xml` — gerados por `src/app/robots.ts` e `src/app/sitemap.ts`.
- H1 único, hierarquia de headings, `aria-labelledby` nas seções, foco visível, acordeão e carrossel acessíveis por teclado.
