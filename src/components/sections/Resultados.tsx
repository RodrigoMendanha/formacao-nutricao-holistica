"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RESULTADOS } from "@/lib/data";
import { ScrollCta } from "@/components/ui/ScrollCta";
import { cn } from "@/lib/utils";

const GAP = 16; // px — precisa bater com o `gap-4` do track

/**
 * Carrossel de resultados — prints de celular (retrato), 3 por view no desktop
 * (2 no tablet, 1 no mobile) e navegação por página. Suporta qualquer número
 * de imagens. Acessível: setas ← →, swipe (scroll-snap) e dots.
 */
export function Resultados() {
  const slides = RESULTADOS.imagens;
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0); // página atual
  const [pages, setPages] = useState(1);
  // Só habilita a lógica dependente de medição após a montagem no cliente,
  // garantindo que o 1º render bata com o HTML do servidor (evita hydration mismatch).
  const [mounted, setMounted] = useState(false);

  // Recalcula quantas páginas existem conforme o nº de itens por view.
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;
    const childW = (track.children[0] as HTMLElement).getBoundingClientRect().width;
    const perView = Math.max(1, Math.round(track.clientWidth / (childW + GAP)));
    setPages(Math.max(1, Math.ceil(slides.length / perView)));
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  }, [slides.length]);

  const goToPage = useCallback((page: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(page, pages - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
    setActive(clamped);
  }, [pages]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goToPage(active + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goToPage(active - 1); }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    setMounted(true);
    measure();
    const onScroll = () => setActive(Math.round(track.scrollLeft / track.clientWidth));
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <section aria-labelledby="resultados-title" className="bg-dark py-16 text-ink-light sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="resultados-title"
          className="text-center font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl"
        >
          {RESULTADOS.titulo}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-ink-light/80">
          {RESULTADOS.subtitulo}
        </p>

        <div
          className="relative mt-10"
          role="group"
          aria-roledescription="carrossel"
          aria-label="Depoimentos de nutricionistas"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {/* Setas */}
          <button
            type="button"
            onClick={() => goToPage(active - 1)}
            disabled={mounted && active === 0}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gold-btn p-2 text-white shadow-lg transition hover:bg-gold-light hover:text-dark disabled:opacity-30 sm:-left-4"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goToPage(active + 1)}
            disabled={mounted && active >= pages - 1}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gold-btn p-2 text-white shadow-lg transition hover:bg-gold-light hover:text-dark disabled:opacity-30 sm:-right-4"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Track: 1 / 2 / 3 itens por view (mobile / sm / lg) */}
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
          >
            {slides.map((img, i) => (
              <div
                key={img.src}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} de ${slides.length}`}
                className="w-full shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
              >
                {/* Print de celular (retrato 9:16) */}
                <Image
                  src={img.src}
                  width={1080}
                  height={1920}
                  alt={img.alt}
                  className="aspect-9/16 w-full rounded-xl object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>

          {/* Dots — uma bolinha por página */}
          {pages > 1 && (
            <div className="mt-6 flex justify-center gap-2.5" role="tablist" aria-label="Selecionar página">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Ir para a página ${i + 1}`}
                  onClick={() => goToPage(i)}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    active === i ? "w-7 bg-gold" : "w-2.5 bg-ink-light/30 hover:bg-ink-light/60"
                  )}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <ScrollCta>{RESULTADOS.cta}</ScrollCta>
        </div>
      </div>
    </section>
  );
}
