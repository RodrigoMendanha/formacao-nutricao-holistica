import { ESCASSEZ } from "@/lib/data";
import { AlertTriangle } from "lucide-react";

/** Faixa de escassez (vermelha — cor real da referência #920202). */
export function Escassez() {
  return (
    <section aria-label="Vagas limitadas" className="bg-danger py-5 text-white">
      <p className="mx-auto flex max-w-4xl items-center justify-center gap-3 px-4 text-center font-display text-lg font-bold uppercase tracking-wide sm:text-2xl">
        <AlertTriangle className="h-6 w-6 shrink-0" aria-hidden="true" />
        {ESCASSEZ}
      </p>
    </section>
  );
}
