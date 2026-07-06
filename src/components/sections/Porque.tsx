import Image from "next/image";
import { PORQUE } from "@/lib/data";
import { ScrollCta } from "@/components/ui/ScrollCta";

/** "Por que é a sua melhor decisão" — 3 blocos de argumentação. */
export function Porque() {
  return (
    <section
      aria-labelledby="porque-title"
      className="relative isolate overflow-hidden bg-cream py-16 sm:py-20"
    >
      {/* Imagem de fundo (mesma do hero) */}
      <Image
        src="/img/banner_hero.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <h2
          id="porque-title"
          className="mx-auto mb-12 max-w-2xl text-center font-display text-2xl font-bold text-ink sm:text-3xl md:text-4xl"
        >
          {PORQUE.titulo}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {PORQUE.blocos.map((bloco) => (
            <article
              key={bloco.titulo}
              className="flex flex-col rounded-2xl border-t-4 border-gold bg-paper p-7 shadow-sm"
            >
              <h3 className="mb-3 font-display text-lg font-bold uppercase leading-snug text-ink">
                {bloco.titulo}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {bloco.texto}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ScrollCta>{PORQUE.cta}</ScrollCta>
        </div>
      </div>
    </section>
  );
}
