/**
 * data.ts — Toda a copy/conteúdo da landing page (texto exato).
 * Centralizado para facilitar edição sem mexer nos componentes.
 */

// 1) Tarja de topo
export const TARJA_TOPO =
  "Exclusivo para Nutricionistas que desejam aplicar o método da nutrição holística com segurança no consultório";

// 2) Hero
export const HERO = {
  h1: "Nutri, faça parte da única Formação em Nutrição Holística do Brasil e transforme a forma como você conduz suas consultas",
  subtitulo:
    "Aprenda a transformar a visão holística sobre saúde em consultas organizadas, científicas e que fazem o paciente sentir a diferença desde o primeiro atendimento",
  cta: "QUERO ME TORNAR NUTRICIONISTA HOLÍSTICA",
};

// 3) Faixa de informações (ícone via chave)
export const INFO_BAR = [
  { icone: "calendar", titulo: "INÍCIO DAS AULAS", valor: "IMEDIATO" },
  { icone: "monitor", titulo: "COMO VAI FUNCIONAR", valor: "EAD 100% ONLINE" },
  { icone: "clock", titulo: "CARGA HORÁRIA", valor: "120 horas" },
];

// 4) Método (3 cards)
export const METODO = {
  titulo: "ENTENDA COMO FUNCIONA O MÉTODO DA NUTRIÇÃO HOLÍSTICA®",
  cards: [
    {
      icone: "globe",
      titulo: "ÚNICO PROCESSO COMPROVADO QUE UNE:",
      itens: [
        "Visão holística do ser humano (corpo, mente e espírito)",
        "Fundamentação Científica sólida",
        "Resultados transformadores para seus pacientes",
        "Diferencial Real no mercado da Nutrição",
      ],
    },
    {
      icone: "list-checks",
      titulo: "COMO FUNCIONA:",
      itens: [
        "Base científica sólida e atualizada",
        "Integração com práticas reconhecidas pela OMS",
        "Protocolos exclusivos testados em mais de 4.000 pacientes",
        "Sistema de atendimento que gera resultados previsíveis e consistentes",
      ],
    },
    {
      icone: "star",
      titulo: "O QUE MUDA PARA VOCÊ:",
      itens: [
        "Reconhecimento como Autoridade e Referência no mercado",
        "Pacientes que valorizam e pagam mais",
        "Liberdade para escolher seus pacientes",
        "Agenda completa com mais faturamento sem precisar trabalhar mais",
        "Menos horas de trabalho e mais tempo para desfrutar da vida",
      ],
    },
  ],
  cta: "QUERO ME DIFERENCIAR NO MERCADO",
};

// 5) Ementa
export const EMENTA = {
  titulo: "CONHEÇA A EMENTA DA FORMAÇÃO EM NUTRIÇÃO HOLÍSTICA®",
  subtitulo: "Aqui está o que torna nosso programa único",
  modulos: [
    "MÓDULO 1: Introdução e Fundamentos do Holismo",
    "MÓDULO 2: Visão Geral da Jornada",
    "MÓDULO 3: A Linguagem da Cura",
    "MÓDULO 4: As Colunas do Holismo",
    "MÓDULO 5: Nutrição Funcional, Integrativa e Nutrição Holística",
    "MÓDULO 6: A Biologia da Consciência e da Saúde",
    "MÓDULO 7: O Corpo que Fala",
    "MÓDULO 8: O Corpo que Revela",
    "MÓDULO 9: Encontros Ao Vivo da Formação",
  ],
  cta: "QUERO FAZER PARTE DA FORMAÇÃO",
};

// 6) Números + selos
export const NUMEROS = {
  destaques: [
    { valor: "+4.000", label: "pacientes atendidos" },
    { valor: "+500", label: "nutricionistas capacitadas" },
    { valor: "+ de R$ 15 milhões", label: "em vendas pelas mentoradas" },
    { valor: "Baseado em evidências científicas", label: "e práticas Holísticas reconhecidas" },
  ],
  apoio: [],
};

// 7) Carrossel de resultados
export const RESULTADOS = {
  titulo: "RESULTADO REAL",
  subtitulo:
    "Veja aqui alguns dos feedbacks de Nutricionistas que já aplicaram a metodologia holística e tiveram resultados mais que expressivos",
  // Cards 4:5 (1080x1350) com o print centralizado sobre fundo verde da marca.
  // Mostra 3 por vez no desktop — o carrossel se ajusta a qualquer quantidade.
  imagens: [
    { src: "/img/depoimentos/depoimento_1.jpg", alt: "Comentário da nutricionista Sandra Bastos no Instagram sobre a Nutrição Holística" },
    { src: "/img/depoimentos/depoimento_2.jpg", alt: "Depoimento de Sabrina Gomes Brochado no chat da aula sobre a Formação em Nutrição Holística" },
    { src: "/img/depoimentos/depoimento_3.jpg", alt: "Depoimento de Camila Soares no chat da aula sobre a Formação em Nutrição Holística" },
    { src: "/img/depoimentos/depoimento_4.jpg", alt: "Depoimento de Hellen Ferraz no chat da aula da Formação em Nutrição Holística" },
    { src: "/img/depoimentos/depoimento_5.jpg", alt: "Depoimento de aluna no chat da aula da Formação em Nutrição Holística" },
    { src: "/img/depoimentos/depoimento_6.jpg", alt: "Turma da Formação em Nutrição Holística reunida em aula ao vivo" },
  ],
  cta: "QUERO TER RESULTADOS COMO ESSES",
};

// 8) Por que é a melhor decisão
export const PORQUE = {
  titulo: "Por que a Formação em Nutrição Holística é a sua melhor decisão?",
  blocos: [
    {
      titulo: "MÉTODO COMPROVADO COM RESULTADOS REAIS PARA SEUS PACIENTES",
      texto:
        "Essa é a única metodologia que une ciência e visão holística, permitindo que você entregue resultados reais e duradouros para seus pacientes. Nossa abordagem integra aspectos físicos, mentais e espirituais, criando transformações profundas.",
    },
    {
      titulo: "DIFERENCIAL REAL NO MERCADO DA NUTRIÇÃO",
      texto:
        "Enquanto outros profissionais focam apenas em calorias e restrições, você terá ferramentas para criar planos personalizados que consideram o ser humano como um todo (Holos).",
    },
    {
      titulo: "AUTORIDADE RECONHECIDA",
      texto:
        "Você poderá se posicionar como Nutricionista Holística com a única formação em Nutrição Holística do Brasil. Este não é mais um curso – é uma formação completa, com todo o conhecimento que você precisa para alcançar o nível mais elevado na sua carreira.",
    },
  ],
  cta: "QUERO ME TORNAR NUTRICIONISTA HOLÍSTICA",
};

// 9) Oferta — dois planos de produto (esquerda: Formação | direita: Formação + Meta Nutri)
export const OFERTA = {
  titulo: "AGORA VOCÊ ESTÁ DIANTE DE UMA OPORTUNIDADE ÚNICA E EXCLUSIVA",

  // Card ESQUERDA — apenas a Formação (1 logo)
  formacao: {
    titulo: "FORMAÇÃO NUTRIÇÃO HOLÍSTICA",
    itens: [
      "120 horas de conteúdo técnico, estratégico e aplicável no consultório",
      "Encontros ao vivo para debater casos práticos",
      "Módulos completos com base nas ciências integrativas e modernas",
      "Material complementar exclusivo em cada módulo",
      "Mapeamento completo do paciente em todas as suas dimensões",
      "Canal da Nutrição Holística para receber atualizações semanais sobre wellness e mercado da saúde",
      // "Acesso por 6 meses à plataforma com todas as gravações e conteúdos extras",
    ],
    precoLabel: "6 MESES DE ACESSO",
    precoDe: "De R$ 3.500",
    // Preço em 3 partes: prefixo (pequeno) / valor (grande) / sufixo (pequeno).
    precoPrefixo: "por apenas",
    precoValor: "R$ 1.997",
    precoSufixo: "à vista",
    cta: "QUERO ME INSCREVER AGORA",
    // Identificador do produto enviado à API de leads (diferencia a oferta).
    produto: "Formação Nutrição Holística (6 meses)",
  },

  // Card DIREITA — Formação + Meta Nutri Academy (2 logos), dois planos de acesso
  combo: {
    titulo: "FORMAÇÃO NUTRIÇÃO HOLÍSTICA",
    grupos: [
      {
        titulo: "Formação Nutrição Holística:",
        itens: [
          "120 horas de conteúdo técnico, estratégico e aplicável no consultório",
          "Encontros ao vivo para debater casos práticos",
          "Módulos completos com base nas ciências integrativas e modernas",
          "Material complementar exclusivo em cada módulo",
          "Mapeamento completo do paciente em todas as suas dimensões",
          "Canal da Nutrição Holística para receber atualizações semanais sobre wellness e mercado da saúde",
        ],
      },
    ],
    planos: [
      {
        label: "ACESSO ANUAL",
        precoDe: "De R$ 9.500",
        precoPrefixo: "por apenas",
        precoValor: "R$ 6.000",
        precoSufixo: "",
        cta: "QUERO O ACESSO ANUAL",
        // Identificador do produto enviado à API de leads (diferencia a oferta).
        produto: "Formação + Meta Nutri Academy (Anual)",
      },
    ],
  },
};

// 10) Escassez
export const ESCASSEZ = "VAGAS LIMITADAS PARA ESSA CONDIÇÃO EXCLUSIVA";

// 11) Garantia
export const GARANTIA = {
  titulo: "GARANTIA DE 7 DIAS",
  texto:
    "Acesse o conteúdo, explore os materiais e, se não ficar satisfeito, devolveremos 100% do seu investimento.",
};

// 12) Sobre o criador
export const CRIADOR = {
  titulo: "CONHEÇA O CRIADOR DO MÉTODO DA NUTRIÇÃO HOLÍSTICA®",
  nome: "RODRIGO MENDANHA",
  paragrafos: [
    "Desde a faculdade, eu percebi algo que mudaria para sempre minha visão sobre Nutrição: os nutrientes e calorias eram apenas a ponta do iceberg.",
    "Como você, eu também via pacientes seguindo dietas perfeitas no papel, mas que não conseguiam resultados duradouros. Outros abandonavam o tratamento mesmo quando as mudanças começavam a aparecer.",
    "Algo estava faltando.",
    "Foi quando comecei a perceber que a Nutrição vai muito além do prato. Cada pessoa carrega uma história única, medos, traumas e sonhos que impactam diretamente sua relação com a comida.",
    "Comecei a testar uma abordagem diferente com pessoas próximas, abordagem essa que considerava corpo, mente e espírito como um todo integrado.",
    "Os resultados foram surpreendentes.",
    "Mas eu precisava de mais, participei de mais de 100 congressos e cursos, estudei diferentes linhas terapêuticas, testei protocolos, refinei a metodologia.",
    "Foi aí que nasceu a Nutrição Holística®, o método que tem transformado a vida de milhares de pacientes e centenas de nutricionistas pelo Brasil.",
    "Hoje, depois de atender mais de 4.000 pacientes e mentorar mais de 500 nutricionistas, posso dizer com certeza:",
    "Existe um caminho melhor. Um que une ciência e visão integral do ser humano, e é exatamente este caminho que quero compartilhar com você.",
  ],
};

// 13) FAQ (também gera JSON-LD FAQPage)
export const FAQ = {
  titulo: "FAQ",
  subtitulo:
    "Tire suas dúvidas com as principais perguntas e respostas sobre a Formação",
  itens: [
    {
      pergunta: "Será que vou conseguir cobrar valores mais altos na minha cidade?",
      resposta:
        "Sim, sem dúvida. Em toda cidade existem pessoas que procuram e pagam por serviços premium. O segredo é saber como se posicionar e comunicar seu valor de forma adequada. Na sessão de resultados, você pode conferir como outras Nutris conseguiram executar essa parte da metodologia.",
    },
    {
      pergunta: "Já tentei aumentar meus preços e não deu certo.",
      resposta:
        "Isso é comum. Aumentar preços sem uma estratégia adequada raramente funciona. O método da Nutrição Holística te ensina exatamente como criar valor percebido para justificar preço diferente do mercado.",
    },
    {
      pergunta: "Não tenho tempo pra mais um curso agora.",
      resposta:
        "Esse não é mais um curso, é um novo modelo de atendimento. Ele foi desenhado por quem já passou pelo caos da falta de tempo. Por isso, você vai aplicar o que aprende direto na prática e colher resultados já no caminho.",
    },
    {
      pergunta: "Tenho medo de perder meus pacientes atuais.",
      resposta:
        "Este é um medo comum, mas nossos alunos descobrem que, ao implementar o método corretamente, não apenas mantêm os bons pacientes como atraem outros ainda melhores. Novamente, na sessão de resultados você pode confirmar esse feito, através dos feedbacks que dezenas de Nutris compartilharam conosco.",
    },
    {
      pergunta: "Como funciona a certificação?",
      resposta:
        "Você receberá o certificado de conclusão da Formação em Nutrição Holística® após concluir todas as aulas e atividades com aproveitamento mínimo de 70%.",
    },
    {
      pergunta: "Tem suporte durante a Formação?",
      resposta:
        "Sim. Você terá acesso a fóruns de discussão e grupos exclusivos moderados pelo professor e monitores para tirar dúvidas.",
    },
    {
      pergunta: "Por que as vagas são limitadas se a Formação é 100% online?",
      resposta:
        "O número de alunos é limitado para mantermos a qualidade do ensino e do suporte durante a formação.",
    },
  ],
  ctaPrimario: "QUERO ENTRAR PARA A FORMAÇÃO",
  ctaSecundario: "QUERO OUTRAS INFORMAÇÕES",
};
