/**
 * site.ts — Constantes editáveis do site (troque AQUI, num só lugar).
 * Links de checkout, URL canônica, SEO e dados de marca.
 */

// URL FINAL/canônica da página (com barra no fim). Usada em canonical, OG e sitemap.
export const SITE_URL = "https://nutriht.com.br/formacao-nutricao-holistica/"; // <-- TROCAR pela URL final

// ── Links de CTA (checkout) ───────────────────────────────────────────────
// Checkout principal — usado como padrão nos CTAs.
export const CHECKOUT_URL =
  "https://pay.voompcreators.com.br/9846/offer/X8URAy/?b_id_1=9844&b_offer_1=YJmNE4&ch_id=2035";

// Link alternativo — CTAs de "pioneira"/urgência (se aplicável).
export const CHECKOUT_URL_ALT = "https://pay.voompcreators.com.br/redirect/23444";

// Checkout por plano da seção de ofertas. <-- TROCAR por cada link real.
export const CHECKOUT = {
  // Card esquerda: só a Formação.
  formacao: CHECKOUT_URL,
  // Card direita: Formação + Meta Nutri Academy.
  comboAnual: CHECKOUT_URL_ALT, // <-- TROCAR pelo link do plano ANUAL
  comboSemestral: CHECKOUT_URL_ALT, // <-- TROCAR pelo link do plano SEMESTRAL
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
export const CHECKOUT_MODAL_ENABLED = false;

// ── SEO ───────────────────────────────────────────────────────────────────
export const SITE_TITLE = "Formação em Nutrição Holística® | Certificada MEC";
export const SITE_DESCRIPTION =
  "Torne-se referência: a única Formação em Nutrição Holística do Brasil, com método científico reconhecido pelo MEC. EAD, 120h, certificação universitária.";
export const OG_IMAGE = "/img/og-formacao-nutricao-holistica.jpg"; // 1200x630

export const SITE_KEYWORDS = [
  "nutrição holística",
  "formação nutrição holística",
  "curso nutrição holística",
  "nutricionista holística",
  "Rodrigo Mendanha",
  "extensão universitária nutrição",
  "certificação MEC nutrição",
];

// ── Marca / Organização (JSON-LD) ──────────────────────────────────────────
export const ORG_NAME = "Nutrição Holística";
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
  linkPrivacidade: "/politica-de-privacidade",
};

// E-mail de contato para assuntos de privacidade (LGPD).
export const PRIVACIDADE_EMAIL = "contato@nutriht.com.br"; // <-- TROCAR pelo e-mail real
// Data da última atualização exibida na política.
export const PRIVACIDADE_ATUALIZACAO = "julho de 2026";
