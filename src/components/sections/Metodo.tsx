import Image from "next/image";
import { METODO } from "@/lib/data";
import { ScrollCta } from "@/components/ui/ScrollCta";
import { cn } from "@/lib/utils";
import { Globe, ListChecks, Star, Check, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  globe: Globe,
  "list-checks": ListChecks,
  star: Star,
};

// Grid 3 colunas: card 0 (topo) ocupa 2 cols; embaixo card 1 = 2 cols e card 2 = 1 col.
const SPANS = ["md:col-span-1", "md:col-span-1", "md:col-span-1"];

/** Seção Método — 3 cards explicando o método. */
export function Metodo() {
  return (
    <section
      aria-labelledby="metodo-title"
      className="relative isolate overflow-hidden bg-cream py-16 sm:py-20"
    >
      {/* Fundo decorativo (motivo triangular do logo nos cantos) */}
      <Image
        src="/img/banner_metodo.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <h2
          id="metodo-title"
          className="mx-auto mb-12 max-w-3xl text-center font-display text-2xl font-bold text-ink sm:text-3xl md:text-4xl"
        >
          {METODO.titulo}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {METODO.cards.map((card, i) => {
            const Icon = ICONS[card.icone] ?? Globe;
            return (
              <article
                key={card.titulo}
                className={cn(
                  "flex flex-col rounded-2xl border border-line bg-paper p-7 shadow-sm",
                  SPANS[i] ?? "md:col-span-1"
                )}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                </div>
                <h3 className="mb-4 font-display text-lg font-bold uppercase leading-snug text-ink">
                  {card.titulo}
                </h3>
                <ul className="flex flex-col gap-3">
                  {card.itens.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <ScrollCta>{METODO.cta}</ScrollCta>
        </div>
      </div>
    </section>
  );
}
