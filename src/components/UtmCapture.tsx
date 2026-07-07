"use client";

import { useEffect } from "react";
import { captureUtmsFromUrl } from "@/lib/utm";

/**
 * Captura os UTMs / click IDs da URL de entrada e os guarda na sessão,
 * para serem reanexados aos links de checkout. Não renderiza nada.
 */
export function UtmCapture() {
  useEffect(() => {
    captureUtmsFromUrl();
  }, []);

  return null;
}
