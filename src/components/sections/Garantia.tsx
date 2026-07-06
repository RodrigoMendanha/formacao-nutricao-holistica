import Image from "next/image";
import { GARANTIA } from "@/lib/data";
import { ShieldCheck } from "lucide-react";

/** Garantia de 7 dias. */
export function Garantia() {
  return (
    <section
      aria-labelledby="garantia-title"
      className="relative isolate overflow-hidden bg-cream py-16 sm:py-20"
    >
      {/* Fundo decorativo (moldura verde) */}
      <Image
        src="/img/banner_garantia.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5 px-4 text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
          <ShieldCheck className="h-9 w-9 text-gold" aria-hidden="true" />
        </span>
        <h2 id="garantia-title" className="font-display text-2xl font-bold text-ink sm:text-3xl">
          {GARANTIA.titulo}
        </h2>
        <p className="text-base leading-relaxed text-ink-soft">{GARANTIA.texto}</p>
      </div>
    </section>
  );
}
