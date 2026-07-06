"use client";

import { ctaClassName } from "@/components/ui/Cta";

interface ScrollCtaProps {
  children: React.ReactNode;
  /** ID do alvo (sem #). Padrão: "inscricao". */
  targetId?: string;
  className?: string;
  size?: "md" | "lg";
}

/**
 * CTA que rola suavemente até uma seção da página SEM alterar a URL.
 * (não adiciona #inscricao na barra de endereço)
 */
export function ScrollCta({
  children,
  targetId = "inscricao",
  className,
  size = "lg",
}: ScrollCtaProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // impede o navegador de acrescentar o hash à URL
    const el = document.getElementById(targetId);
    if (el) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
  };

  return (
    // href mantém a semântica de link (acessibilidade / fallback sem JS),
    // mas o onClick com preventDefault evita mudar a URL quando há JS.
    <a href={`#${targetId}`} onClick={handleClick} className={ctaClassName(size, "gold", className)}>
      {children}
    </a>
  );
}
