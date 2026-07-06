import { cn } from "@/lib/utils";
import { CHECKOUT_URL } from "@/lib/site";
import type { AnchorHTMLAttributes } from "react";

type CtaSize = "md" | "lg";
type CtaVariant = "gold" | "outline-light";

/**
 * Classe de estilo do CTA — compartilhada entre <Cta> (âncora) e
 * <CheckoutButton> (botão que abre o modal) para ficarem idênticos.
 */
export function ctaClassName(
  size: CtaSize = "lg",
  variant: CtaVariant = "gold",
  className?: string
) {
  return cn(
    "inline-flex items-center justify-center text-center font-bold uppercase tracking-wide rounded-full transition-all duration-200 focus-visible:outline-none cursor-pointer",
    "shadow-[0_8px_24px_-8px_rgba(163,107,34,0.6)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(163,107,34,0.75)] active:translate-y-0",
    {
      "bg-gold-btn text-white hover:bg-gold-light hover:text-dark": variant === "gold",
      "border-2 border-gold text-gold hover:bg-gold hover:text-white":
        variant === "outline-light",
    },
    {
      "px-6 py-3 text-sm": size === "md",
      "px-8 py-4 text-sm sm:text-base leading-tight": size === "lg",
    },
    className
  );
}

interface CtaProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Destino do checkout. Padrão: CHECKOUT_URL (link principal). */
  href?: string;
  size?: CtaSize;
  variant?: CtaVariant;
}

/**
 * CTA — botão de conversão (âncora estilizada) que aponta para o checkout.
 * Usado em todos os CTAs de compra/inscrição da página.
 */
export function Cta({
  href = CHECKOUT_URL,
  size = "lg",
  variant = "gold",
  className,
  children,
  ...props
}: CtaProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={ctaClassName(size, variant, className)}
      {...props}
    >
      {children}
    </a>
  );
}
