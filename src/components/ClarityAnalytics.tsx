"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
import { CLARITY_PROJECT_ID } from "@/lib/site";

/**
 * Microsoft Clarity — inicializa o rastreamento no cliente (mapas de calor,
 * gravações de sessão e métricas de comportamento).
 *
 * Só carrega em produção e quando NEXT_PUBLIC_CLARITY_PROJECT_ID está definido,
 * evitando poluir as métricas com acessos de desenvolvimento/preview.
 */
export function ClarityAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!CLARITY_PROJECT_ID) return;
    Clarity.init(CLARITY_PROJECT_ID);
  }, []);

  return null;
}
