"use client";

import { useEffect, useState } from "react";
import { withUtms } from "@/lib/utm";

/**
 * Retorna o href com os UTMs da sessão anexados.
 *
 * Na 1ª renderização devolve o href original (igual ao SSR, evita hydration
 * mismatch); após montar no cliente, atualiza para a versão com UTMs.
 */
export function useUtmHref(href: string): string {
  const [resolved, setResolved] = useState(href);
  useEffect(() => {
    setResolved(withUtms(href));
  }, [href]);
  return resolved;
}
