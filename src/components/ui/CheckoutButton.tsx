"use client";

import { useState } from "react";
import { CHECKOUT_URL, CHECKOUT_MODAL_ENABLED } from "@/lib/site";
import { ctaClassName } from "@/components/ui/Cta";
import { CheckoutModal, type CheckoutTarget } from "@/components/ui/CheckoutModal";
import { useUtmHref } from "@/lib/useUtmHref";

interface CheckoutButtonProps {
  children: React.ReactNode;
  href?: string;
  /** Rótulo da oferta enviado junto ao lead. */
  ticket?: string;
  className?: string;
  size?: "md" | "lg";
}

/**
 * Botão de checkout.
 * - CHECKOUT_MODAL_ENABLED = false  → link direto pro checkout (comportamento atual).
 * - CHECKOUT_MODAL_ENABLED = true   → abre o modal de captura antes de redirecionar.
 */
export function CheckoutButton({
  children,
  href = CHECKOUT_URL,
  ticket = "Formação em Nutrição Holística®",
  className,
  size = "lg",
}: CheckoutButtonProps) {
  const [target, setTarget] = useState<CheckoutTarget | null>(null);
  // Anexa os UTMs da sessão ao link de checkout (após montar no cliente).
  const hrefComUtms = useUtmHref(href);

  // Modal desabilitado: vira uma âncora normal pro checkout.
  if (!CHECKOUT_MODAL_ENABLED) {
    return (
      <a
        href={hrefComUtms}
        target="_blank"
        rel="noopener noreferrer"
        className={ctaClassName(size, "gold", className)}
      >
        {children}
      </a>
    );
  }

  // Modal habilitado: captura o lead e depois redireciona.
  return (
    <>
      <button
        type="button"
        onClick={() => setTarget({ href, ticket })}
        className={ctaClassName(size, "gold", className)}
      >
        {children}
      </button>
      <CheckoutModal target={target} onClose={() => setTarget(null)} />
    </>
  );
}
