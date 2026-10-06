import Image from "next/image";
import { NUMEROS } from "@/lib/data";

/** Números de prova social. */
export function Numeros() {
  return (
    <section
      aria-labelledby="numeros-title"
      className="relative isolate overflow-hidden bg-[#e9e9e9] py-16 sm:py-20"
    >
      {/* Fundo decorativo — triângulos do logo em dourado, um em cada canto,
          no tamanho do desenho original (acompanham a altura da seção). */}
      <Image
        src="/img/triangulo_dourado_esq.png"
        alt=""
        aria-hidden="true"
        width={505}
        height={651}
        className="pointer-events-none absolute left-0 top-1/2 -z-10 h-56 w-auto -translate-y-1/2 sm:h-[70%]"
      />
      <Image
        src="/img/triangulo_dourado_dir.png"
        alt=""
        aria-hidden="true"
        width={481}
        height={651}
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-56 w-auto -translate-y-1/2 sm:h-[70%]"
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
