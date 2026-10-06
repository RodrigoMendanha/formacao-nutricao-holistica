import Image from "next/image";
import { NUMEROS } from "@/lib/data";

/** Números de prova social. */
export function Numeros() {
  return (
    <section
      aria-labelledby="numeros-title"
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
        <h2 id="numeros-title" className="sr-only">
          Números e reconhecimentos da Formação em Nutrição Holística
        </h2>

        {/* Números em destaque */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {NUMEROS.destaques.map((n) => (
            <div
              key={n.label}
              className="rounded-2xl border border-line bg-paper p-8 text-center shadow-sm"
            >
              <div className="font-display text-4xl font-bold text-gold sm:text-5xl">
                {n.valor}
              </div>
              <div className="mt-2 text-sm font-medium text-ink-soft">{n.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
