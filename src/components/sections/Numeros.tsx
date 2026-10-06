import Image from "next/image";
import { NUMEROS } from "@/lib/data";

/** Números de prova social. */
export function Numeros() {
  return (
    <section
      aria-labelledby="numeros-title"
      className="relative isolate overflow-hidden bg-cream py-16 sm:py-20"
    >
      {/* Fundo decorativo (motivo triangular do logo nos cantos, em dourado) */}
      <Image
        src="/img/banner_metodo_dourado.png"
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
              className="rounded-2xl border-2 border-deep/15 bg-paper p-8 text-center shadow-md"
            >
              <div className="font-display text-4xl font-bold text-[#1f5a45] sm:text-5xl">
                {n.valor}
              </div>
              <div className="mt-2 text-sm font-semibold text-ink">{n.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
