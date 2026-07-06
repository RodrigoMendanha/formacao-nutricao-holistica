import { EMENTA } from "@/lib/data";
import { ScrollCta } from "@/components/ui/ScrollCta";
import { BookOpen } from "lucide-react";

/** Ementa — lista de módulos da formação. */
export function Ementa() {
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
          {EMENTA.modulos.map((modulo, i) => (
            <li
              key={modulo}
              className="flex items-center gap-4 rounded-xl border border-line-dark bg-white/[0.03] px-5 py-4 transition-colors hover:border-gold/50"
            >
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold"
              >
                <BookOpen className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium leading-snug text-ink-light sm:text-base">
                {modulo}
              </span>
              <span className="sr-only">{`Módulo ${i + 1}`}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <ScrollCta>{EMENTA.cta}</ScrollCta>
        </div>
      </div>
    </section>
  );
}
