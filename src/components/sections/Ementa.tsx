"use client";

import { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";
import { EMENTA } from "@/lib/data";
import { ScrollCta } from "@/components/ui/ScrollCta";
import { cn } from "@/lib/utils";

/**
 * Ementa — módulos da formação em acordeão acessível:
 * título + subtítulo sempre visíveis; a descrição abre ao clicar.
 */
export function Ementa() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-labelledby="ementa-title" className="bg-dark py-16 text-ink-light sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2
          id="ementa-title"
          className="text-center font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl"
        >
          {EMENTA.titulo}
        </h2>
        <p className="mt-3 text-center text-base text-gold">{EMENTA.subtitulo}</p>

        <ul className="mt-10 flex flex-col gap-3">
          {EMENTA.modulos.map((modulo, i) => {
            const isOpen = open === i;
            const panelId = `ementa-panel-${i}`;
            const btnId = `ementa-btn-${i}`;
            return (
              <li
                key={modulo.titulo}
                className={cn(
                  "overflow-hidden rounded-xl border bg-white/[0.03] transition-colors",
                  isOpen ? "border-gold/50" : "border-line-dark hover:border-gold/50"
                )}
              >
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left font-sans"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold"
                    >
                      <BookOpen className="h-4 w-4" />
                    </span>
                    <span className="flex flex-1 flex-col gap-1">
                      <span className="text-sm font-medium leading-snug text-ink-light sm:text-base">
                        {modulo.titulo}
                      </span>
                      <span className="text-xs leading-snug text-ink-light/60 sm:text-sm">
                        {modulo.subtitulo}
                      </span>
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
                  className="px-5 pb-5 sm:pl-[4.75rem]"
                >
                  <p className="border-t border-line-dark pt-4 text-sm leading-relaxed text-ink-light/85">
                    {modulo.descricao}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 text-center">
          <ScrollCta>{EMENTA.cta}</ScrollCta>
        </div>
      </div>
    </section>
  );
}
