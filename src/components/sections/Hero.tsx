import Image from "next/image";
import { HERO } from "@/lib/data";
import { ScrollCta } from "@/components/ui/ScrollCta";

/**
 * Hero — banner_hero.png (banner largo já composto, com área clara central
 * para o texto e ornamentos dourados nas laterais). Texto centralizado e escuro.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[70vh] flex-col overflow-hidden bg-cream md:min-h-[560px]"
    >
      {/* Banner de fundo */}
      <Image
        src="/img/banner_hero.png"
        alt="Formação em Nutrição Holística — Rodrigo Mendanha"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="-z-10 object-cover object-[95%_center]"
      />

      {/* Véu branco leve — a imagem já tem o centro claro; isto só reforça a
          legibilidade do texto sobre a foto. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-white/50 md:bg-white/30"
      />

      {/* Conteúdo — centralizado */}
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-6 px-4 pt-6 pb-6 text-center sm:py-20">
        {/* LOGO — se for a versão clara do logo, use uma variante escura aqui */}
        <Image
          src="/img/logo-nutricao-holistica 1.png"
          width={220}
          height={220}
          alt="Logo Formação em Nutrição Holística"
          priority
          className="h-auto w-24 object-contain sm:w-40"
        />

        <h1
          id="hero-title"
          className="font-display text-3xl font-bold leading-tight text-dark sm:text-4xl md:text-5xl"
        >
          {HERO.h1}
        </h1>

        <p className="max-w-2xl text-base leading-relaxed font-semibold text-[#2b3832] sm:text-lg">
          {HERO.subtitulo}
        </p>

        <ScrollCta className="mt-2 w-full max-w-md sm:w-auto">{HERO.cta}</ScrollCta>
      </div>
    </section>
  );
}
