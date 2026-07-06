import Image from "next/image";
import { CRIADOR } from "@/lib/data";

/**
 * Sobre o criador — banner do Rodrigo ao lado do texto.
 * Mobile: título → imagem → texto. Desktop: imagem à esquerda | título+texto à direita.
 */
export function Criador() {
  return (
    <section aria-labelledby="criador-title" className="bg-dark py-16 text-ink-light sm:py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-x-10 gap-y-6 px-4 md:grid-cols-[minmax(0,1fr)_1.4fr]">
        {/* Título — no mobile aparece ANTES da imagem */}
        <h2
          id="criador-title"
          className="font-display text-2xl font-bold text-white sm:text-3xl md:col-start-2 md:row-start-1 md:text-4xl"
        >
          {CRIADOR.titulo}
        </h2>

        {/* Banner do criador */}
        <div className="md:col-start-1 md:row-start-1 md:row-span-2 md:sticky md:top-8">
          <Image
            src="/img/banner_rodrigo.jpg"
            width={2048}
            height={3072}
            alt="Rodrigo Mendanha, criador do método da Nutrição Holística"
            className="aspect-2/3 w-full rounded-2xl object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>

        {/* Nome + parágrafos */}
        <div className="md:col-start-2 md:row-start-2">
          <p className="font-display text-2xl font-bold text-gold">{CRIADOR.nome}</p>

          <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-ink-light/85 sm:text-base">
            {CRIADOR.paragrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
