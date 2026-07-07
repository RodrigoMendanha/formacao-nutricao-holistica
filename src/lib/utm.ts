/**
 * utm.ts — captura de parâmetros de campanha (UTMs + click IDs) e repasse
 * para os links de checkout.
 *
 * Fluxo:
 *  1. Ao carregar a página, <UtmCapture /> chama `captureUtmsFromUrl()`,
 *     que lê a query string e guarda os parâmetros conhecidos no sessionStorage.
 *  2. Nos botões de checkout, `withUtms(url)` reanexa esses parâmetros ao link
 *     final — assim a atribuição sobrevive à navegação dentro da landing.
 */

// Parâmetros de campanha que queremos preservar (UTMs padrão + IDs de clique).
export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid", // Google Ads
  "gad_source", // Google Ads
  "fbclid", // Meta Ads
  "ttclid", // TikTok Ads
] as const;

const STORAGE_KEY = "nh_utms";

/** Lê os UTMs já guardados nesta sessão (ou {} se não houver / SSR). */
export function getStoredUtms(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

/**
 * Lê os UTMs da URL atual e mescla com os já guardados (novos valores têm
 * prioridade). Só grava se houver ao menos um parâmetro conhecido.
 */
export function captureUtmsFromUrl(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) found[key] = value;
  }
  if (Object.keys(found).length === 0) return;
  try {
    const merged = { ...getStoredUtms(), ...found };
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    /* sessionStorage indisponível (modo privado/consentimento) — ignora */
  }
}

/**
 * Reanexa os UTMs guardados a uma URL. Só mexe em links absolutos http(s)
 * (checkout externo); âncoras (#) e caminhos relativos voltam intactos.
 * Não sobrescreve parâmetros que já existam na URL.
 */
export function withUtms(url: string): string {
  if (!/^https?:\/\//i.test(url)) return url;
  const utms = getStoredUtms();
  const keys = Object.keys(utms);
  if (keys.length === 0) return url;
  try {
    const parsed = new URL(url);
    for (const key of keys) {
      if (!parsed.searchParams.has(key)) parsed.searchParams.set(key, utms[key]);
    }
    return parsed.toString();
  } catch {
    return url;
  }
}
