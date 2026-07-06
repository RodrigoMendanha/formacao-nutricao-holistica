# Imagens a substituir (coloque os arquivos reais nesta pasta /public/img)

Todos os locais abaixo mostram um placeholder nomeado na página. Basta colocar
o arquivo com o nome exato aqui e trocar o componente `<Placeholder>` por
`<Image>` (next/image) no respectivo componente (indicado entre parênteses).

| Arquivo                          | Dimensões  | Onde aparece                              | alt sugerido |
|----------------------------------|------------|-------------------------------------------|--------------|
| logo-nutricao-holistica.png      | 320x120    | Hero (Hero.tsx)                           | Logo Formação em Nutrição Holística |
| LOGO-FACULDADE.png               | 240x120    | Selos (Numeros.tsx)                       | Logo Faculdade Anhanguera |
| SELO-REC-MEC.jpeg                | 160x160    | Selos (Numeros.tsx)                       | Selo Reconhecido pelo MEC |
| resultado-1.jpg                  | 800x600    | Carrossel (Resultados.tsx)                | Depoimento nutricionista 1 |
| resultado-2.jpg                  | 800x600    | Carrossel (Resultados.tsx)                | Depoimento nutricionista 2 |
| resultado-3.jpg                  | 800x600    | Carrossel (Resultados.tsx)                | Depoimento nutricionista 3 |
| banner-rodrigo.jpg               | 700x900    | Sobre o criador (Criador.tsx)             | Rodrigo Mendanha |
| og-formacao-nutricao-holistica.jpg | 1200x630 | Open Graph / redes sociais (layout.tsx)   | (imagem de compartilhamento) |
| apple-touch-icon.png             | 180x180    | Ícone iOS (layout.tsx)                     | — |
| favicon.ico                      | 48x48      | Favicon (colocar em /public, não em /img) | — |

## Como trocar um placeholder por imagem real

Exemplo no Hero.tsx:

```tsx
import Image from "next/image";
// ...
<Image
  src="/img/logo-nutricao-holistica.png"
  width={320}
  height={120}
  alt="Logo Formação em Nutrição Holística"
  priority           // no hero (LCP)
/>
```

Fora do hero, use `loading="lazy"` (padrão do next/image). Prefira .webp/.avif —
o next/image já serve formatos modernos automaticamente.
