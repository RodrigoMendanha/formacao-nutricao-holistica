import Image from "next/image";
import { NUMEROS } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

/** Números de prova social + selos (Anhanguera e MEC). */
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
        <div className="grid gap-6 sm:grid-cols-3">
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

        {/* Apoio + selos */}
        <div className="mt-12 grid items-center gap-10 md:grid-cols-1">
          {/* <ul className="flex flex-col gap-4">
            {NUMEROS.apoio.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-ink">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul> */}

          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* SELO — Faculdade Anhanguera */}
            <Image
              src="/img/LOGO-FACULDADE.png"
              width={240}
              height={120}
              alt="Logo Faculdade Anhanguera"
              className="h-auto w-40"
            />
            {/* SELO — Reconhecido pelo MEC */}
            <Image
              src="/img/SELO-REC-MEC.png"
              width={160}
              height={160}
              alt="Selo Reconhecido pelo MEC"
              className="h-auto w-36"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
