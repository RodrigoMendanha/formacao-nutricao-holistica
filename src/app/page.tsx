import { TopBar } from "@/components/layout/TopBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { InfoBar } from "@/components/sections/InfoBar";
import { Metodo } from "@/components/sections/Metodo";
import { Ementa } from "@/components/sections/Ementa";
import { Numeros } from "@/components/sections/Numeros";
import { Resultados } from "@/components/sections/Resultados";
import { Porque } from "@/components/sections/Porque";
import { Oferta } from "@/components/sections/Oferta";
import { Escassez } from "@/components/sections/Escassez";
import { Garantia } from "@/components/sections/Garantia";
import { Criador } from "@/components/sections/Criador";
import { Faq } from "@/components/sections/Faq";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <TopBar />
      <main>
        <Hero />
        <InfoBar />
        <Metodo />
        <Ementa />
        <Numeros />
        <Resultados />
        <Porque />
        <Oferta />
        <Escassez />
        <Garantia />
        <Criador />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
