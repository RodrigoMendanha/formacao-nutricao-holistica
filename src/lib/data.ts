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
  // Cada módulo: título + subtítulo (sempre visíveis) e descrição (abre ao clicar).
  modulos: [
    {
      titulo: "MÓDULO 1: Introdução e Fundamentos do Holismo",
      subtitulo: "Como compreender os princípios do holismo e sua aplicação responsável à prática nutricional",
      descricao:
        "Neste módulo, a nutricionista entra nos fundamentos que sustentam a visão holística de saúde e aprende a olhar o paciente para além de informações isoladas. O objetivo é compreender a lógica de uma abordagem integral, sem abandonar a ciência nutricional nem ultrapassar os limites da profissão.",
    },
    {
      titulo: "MÓDULO 2: Visão Geral da Jornada",
      subtitulo: "Como compreender as etapas da formação e a lógica da jornada clínica na Nutrição Holística",
      descricao:
        "Aqui, a nutricionista entende como os conteúdos da formação se conectam e qual é o caminho que será desenvolvido ao longo da jornada. É o módulo que organiza a visão do método e ajuda a perceber como escuta, investigação, raciocínio, ferramentas e conduta se integram dentro da prática clínica.",
    },
    {
      titulo: "MÓDULO 3: A Linguagem da Cura",
      subtitulo: "Como usar linguagem, escuta e perguntas para conduzir conversas clínicas com mais clareza",
      descricao:
        "Este módulo aprofunda a forma como a nutricionista se comunica durante a consulta. O foco está em escuta, linguagem e perguntas que ajudam o paciente a perceber melhor sua própria experiência, sem induzir respostas ou transformar interpretação em verdade. A profissional aprende a usar a comunicação como parte da condução clínica.",
    },
    {
      titulo: "MÓDULO 4: As Colunas do Holismo",
      subtitulo: "Como reconhecer as dimensões que sustentam a visão integral do paciente na prática clínica",
      descricao:
        "Neste módulo, a nutricionista compreende os principais pilares que organizam a leitura holística do paciente. A proposta é ampliar o olhar para diferentes dimensões da experiência humana e entender como elas podem ser consideradas na consulta de forma integrada, responsável e coerente com a atuação nutricional.",
    },
    {
      titulo: "MÓDULO 5: Nutrição Funcional, Integrativa e Nutrição Holística",
      subtitulo: "Como diferenciar as abordagens e compreender o lugar da Nutrição Holística na prática profissional",
      descricao:
        "Aqui, a nutricionista aprende a diferenciar abordagens que muitas vezes são tratadas como se fossem a mesma coisa. O módulo organiza os conceitos de Nutrição Funcional, Integrativa e Holística, mostrando seus pontos de aproximação, diferenças e o lugar específico da Nutrição Holística dentro da prática profissional.",
    },
    {
      titulo: "MÓDULO 6: A Biologia da Consciência e da Saúde",
      subtitulo: "Como compreender relações entre biologia, percepção, contexto e saúde sem confundir associação com causa",
      descricao:
        "Este módulo amplia a compreensão sobre como organismo, percepção, ambiente e experiência podem se relacionar com a saúde. O objetivo não é reduzir sintomas a emoções nem criar causalidades simplistas, mas oferecer bases para uma leitura mais contextual do paciente, mantendo a diferença entre evidência, associação e hipótese de investigação.",
    },
    {
      titulo: "MÓDULO 7: Comportamento Alimentar e Padrões Automáticos",
      subtitulo: "Como identificar crenças, gatilhos e padrões que influenciam o comportamento alimentar",
      descricao:
        "Neste módulo, a nutricionista aprende a olhar para o que acontece antes, durante e depois de determinados comportamentos alimentares. Crenças, gatilhos, pensamentos, emoções e respostas recorrentes passam a ser investigados como parte do contexto do paciente, ajudando a construir estratégias mais realistas e individualizadas.",
    },
    {
      titulo: "MÓDULO 8: Leitura Integral do Paciente",
      subtitulo: "Como investigar sinais, sintomas, contexto e padrões para ampliar o raciocínio nutricional",
      descricao:
        "Aqui começa uma das competências centrais da formação: aprender a investigar o paciente de forma mais ampla. A nutricionista desenvolve um olhar capaz de organizar sinais, sintomas, rotina, comportamentos e contexto, identificando o que merece aprofundamento sem transformar o relato em diagnóstico ou conclusão precipitada.",
    },
    {
      titulo: "MÓDULO 9: Raciocínio Clínico Holístico",
      subtitulo: "Como conectar corpo, mente e contexto sem perder a ciência e os limites da Nutrição",
      descricao:
        "Depois de aprender a investigar, a nutricionista aprende a organizar o que encontrou. Este módulo trabalha a conexão entre diferentes informações do caso, a construção de hipóteses de investigação, a identificação de prioridades e os limites da interpretação. O objetivo é ampliar o raciocínio sem perder rigor, prudência e responsabilidade profissional.",
    },
    {
      titulo: "MÓDULO 10: Método da Consulta Holística",
      subtitulo: "Como estruturar a consulta do início à conduta, com investigação, prioridades e acompanhamento",
      descricao:
        "Este módulo transforma os conhecimentos anteriores em uma forma organizada de atender. A nutricionista aprende a estruturar a consulta, compreender o que o paciente quer, o que precisa ser trabalhado e o que ele consegue sustentar naquele momento, aprofundar quando necessário e transformar a leitura do caso em prioridades, conduta e acompanhamento.",
    },
    {
      titulo: "MÓDULO 11: Encontros Ao Vivo da Formação",
      subtitulo: "Como integrar os conteúdos da formação por meio de dúvidas, casos e aplicação prática ao vivo",
      descricao:
        "Os encontros ao vivo são o espaço de integração da formação. Neles, os conteúdos estudados ganham contexto por meio de dúvidas, discussões, exemplos e aplicação prática. É o momento de conectar teoria, método e realidade clínica, aprofundando a segurança para levar a Nutrição Holística ao consultório.",
    },
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
    { src: "/img/depoimentos/depoimento_6.jpg", alt: "Turma da Formação em Nutrição Holística reunida em aula ao vivo" },
    { src: "/img/depoimentos/depoimento_1.jpg", alt: "Comentário da nutricionista Sandra Bastos no Instagram sobre a Nutrição Holística" },
    { src: "/img/depoimentos/depoimento_2.jpg", alt: "Depoimento de Sabrina Gomes Brochado no chat da aula sobre a Formação em Nutrição Holística" },
    { src: "/img/depoimentos/depoimento_3.jpg", alt: "Depoimento de Camila Soares no chat da aula sobre a Formação em Nutrição Holística" },
    { src: "/img/depoimentos/depoimento_4.jpg", alt: "Depoimento de Hellen Ferraz no chat da aula da Formação em Nutrição Holística" },
    { src: "/img/depoimentos/depoimento_5.jpg", alt: "Depoimento de aluna no chat da aula da Formação em Nutrição Holística" },
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
