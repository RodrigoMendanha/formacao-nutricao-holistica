/**
 * site.ts — Constantes editáveis do site (troque AQUI, num só lugar).
 * Links de checkout, URL canônica, SEO e dados de marca.
 */

// URL FINAL/canônica da página (com barra no fim). Usada em canonical, OG e sitemap.
export const SITE_URL = "https://formacao-nutricao-holistica.rodrigomendanha.com.br/"; // <-- TROCAR pela URL final

// ── Links de CTA (checkout) ───────────────────────────────────────────────
// Checkout principal — só a Formação Nutrição Holística. Usado como padrão nos CTAs.
export const CHECKOUT_URL =
  "https://pay.voompcreators.com.br/9846/offer/tR12Hl";

// Checkout do combo — Formação + Meta Nutri Academy.
export const CHECKOUT_URL_ALT = "https://pay.voompcreators.com.br/9832/offer/Oozwxc";

// Checkout por plano da seção de ofertas.
export const CHECKOUT = {
  // Card esquerda: só a Formação.
  formacao: CHECKOUT_URL,
  // Card direita: Formação + Meta Nutri Academy.
  comboAnual: CHECKOUT_URL_ALT,
  comboSemestral: CHECKOUT_URL_ALT,
};

// ── WhatsApp (botão "QUERO OUTRAS INFORMAÇÕES") ────────────────────────────
// Número no formato DDI+DDD+número, só dígitos (ex.: 55 61 99999-9999).
export const WHATSAPP_NUMERO = "553284869774"; // <-- TROCAR pelo número real
// Mensagem pré-preenchida ao abrir a conversa.
export const WHATSAPP_MENSAGEM =
  "Olá! Quero outras informações sobre a Formação em Nutrição Holística®.";
// Link pronto (não precisa editar — usa as duas constantes acima).
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  WHATSAPP_MENSAGEM
)}`;

// ── Modal de captura antes do checkout ─────────────────────────────────────
// Quando TRUE: ao clicar no botão do valor, abre um modal que captura o lead
//   (nome/WhatsApp/e-mail → /api/leads) e só então redireciona pro checkout.
// Quando FALSE (padrão AGORA): o botão vai direto pro checkout.
// Basta trocar para `true` quando quiser ativar.
export const CHECKOUT_MODAL_ENABLED = true;

// ── Microsoft Clarity (analytics / mapas de calor / gravações) ─────────────
// ID do projeto no Clarity (https://clarity.microsoft.com → Settings → Overview).
// Defina em NEXT_PUBLIC_CLARITY_PROJECT_ID no .env. Se vazio, o Clarity NÃO carrega
// (útil em dev/preview para não poluir as métricas).
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? "";

// ── SEO ───────────────────────────────────────────────────────────────────
export const SITE_TITLE = "Formação em Nutrição Holística® | A única Formação em Nutrição Holística para Nutricionistas";
export const SITE_DESCRIPTION =
  "Aprenda ou único método que integra corpo, mente e espírito para compreender o comportamento alimentar, conduzir pacientes com mais profundidade e transformar sua prática clínica.";
export const OG_IMAGE = "/img/og-formacao-nutricao-holistica.jpg"; // 1200x630

export const SITE_KEYWORDS = [
  "Nutrição Holística",
  "Nutricionista Holística",
  "Formação Nutrição",
  "Formação em Nutrição Holística",
  "Curso de Nutrição Holística",
  "Método Nutrição Holística",
  "Como se tornar Nutricionista Holística",
  "Curso para compreender comportamento alimentar na Nutrição",
];

// ── Marca / Organização (JSON-LD) ──────────────────────────────────────────
export const ORG_NAME = "Formação em Nutrição Holística®";
export const ORG_LOGO = "/img/logo-nutricao-holistica.png";
// Redes sociais reais (deixe [] se não houver).
export const ORG_SAMEAS: string[] = [
  // "https://www.instagram.com/rodrigomendanha/",
  // "https://www.youtube.com/@nutricaoholistica",
];

// ── Rodapé ──────────────────────────────────────────────────────────────────
export const FOOTER = {
  ano: "2026",
  marca: "Rodrigo Mendanha",
  cidade: "Brasília",
  // linkPrivacidade: "/politica-de-privacidade",
};

// E-mail de contato para assuntos de privacidade (LGPD).
export const PRIVACIDADE_EMAIL = "contato@nutriht.com.br"; // <-- TROCAR pelo e-mail real
// Data da última atualização exibida na política.
export const PRIVACIDADE_ATUALIZACAO = "julho de 2026";
