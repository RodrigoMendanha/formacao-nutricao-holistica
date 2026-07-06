"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/data";
import { WHATSAPP_LINK } from "@/lib/site";
import { ScrollCta } from "@/components/ui/ScrollCta";
import { cn } from "@/lib/utils";

/**
 * FAQ acessível (acordeão) + dois CTAs:
 *  - "QUERO ENTRAR PARA A FORMAÇÃO" → rola até a seção de inscrição (sem mudar a URL)
 *  - "QUERO OUTRAS INFORMAÇÕES"     → abre o WhatsApp (WHATSAPP_LINK em site.ts)
 */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-title" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 id="faq-title" className="text-center font-display text-3xl font-bold text-ink sm:text-4xl">
          {FAQ.titulo}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-ink-soft">
          {FAQ.subtitulo}
        </p>

        <ul className="mt-10 flex flex-col gap-3">
          {FAQ.itens.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <li key={i} className="overflow-hidden rounded-xl border border-line bg-paper">
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-sans text-sm font-semibold text-ink sm:text-base">
                      {item.pergunta}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-gold transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="px-5 pb-5 text-sm leading-relaxed text-ink-soft"
                >
                  {item.resposta}
                </div>
              </li>
            );
          })}
        </ul>

        {/* Dois CTAs */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primário → rola até a seção de inscrição (#inscricao), sem alterar a URL */}
          <ScrollCta className="w-full sm:w-auto">{FAQ.ctaPrimario}</ScrollCta>

          {/* Secundário → WhatsApp */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-gold-btn px-8 py-4 text-sm font-bold uppercase tracking-wide text-gold-btn transition-colors hover:bg-gold-btn hover:text-white sm:w-auto"
          >
            {FAQ.ctaSecundario}
          </a>
        </div>
      </div>
    </section>
  );
}
