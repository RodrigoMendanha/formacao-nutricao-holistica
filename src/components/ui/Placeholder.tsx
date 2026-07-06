import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface PlaceholderProps {
  /** Nome do arquivo esperado em /public/img (ex.: "banner-rodrigo.jpg"). */
  file: string;
  /** Dimensões sugeridas, ex.: "1200x630". */
  size: string;
  /** Texto alternativo (alt) descritivo para quando virar <Image>. */
  alt: string;
  className?: string;
  /** Aparência sobre fundo escuro? */
  dark?: boolean;
}

/**
 * Placeholder nomeado de imagem/logo.
 * TROCAR: coloque o arquivo real em /public/img e substitua este componente
 * por <Image src={`/img/${file}`} width={..} height={..} alt={alt} /> (next/image).
 */
export function Placeholder({ file, size, alt, className, dark }: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center",
        dark
          ? "border-gold/40 bg-white/5 text-ink-light/70"
          : "border-gold/40 bg-cream text-ink-soft",
        className
      )}
    >
      <ImageIcon className="h-7 w-7 text-gold" aria-hidden="true" />
      <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold">
        {file}
      </span>
      <span className="font-sans text-[11px] opacity-70">{size} px</span>
    </div>
  );
}
