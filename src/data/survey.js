// Survey content definition. Edit here to change questions, scale, or
// identification options. Renderer flattens SECTIONS into a question stream
// and dispatches by `type` (likert | multi | text).

export const SECTIONS = [
  {
    id: "trabalho",
    label: "Ambiente de trabalho",
    questions: [
      { id: "q1", type: "likert", text: "Sinto-me satisfeito(a) com o ambiente físico do meu local de trabalho.", sub: "Considere iluminação, mobiliário, equipamentos e conforto." },
      { id: "q2", type: "likert", text: "Os recursos e ferramentas que utilizo são adequados para realizar minhas tarefas.", sub: "" },
      { id: "q3", type: "likert", text: "Existe um clima de respeito e cooperação entre os colegas da equipe.", sub: "" },
    ],
  },
  {
    id: "lideranca",
    label: "Liderança e gestão",
    questions: [
      { id: "q4", type: "likert", text: "Minha chefia imediata oferece feedback claro e construtivo.", sub: "" },
      { id: "q5", type: "likert", text: "As decisões da minha Secretaria são comunicadas de forma transparente.", sub: "" },
    ],
  },
  {
    id: "carreira",
    label: "Desenvolvimento e reconhecimento",
    questions: [
      { id: "q6", type: "likert", text: "Tenho oportunidades reais de crescimento e capacitação profissional.", sub: "" },
      { id: "q7", type: "likert", text: "Sinto que meu trabalho é reconhecido e valorizado.", sub: "" },
      {
        id: "q8",
        type: "multi",
        text: "Quais áreas você considera prioritárias para investimento institucional?",
        sub: "Selecione até três opções.",
        max: 3,
        options: [
          "Capacitação e treinamento",
          "Plano de cargos e salários",
          "Saúde mental e qualidade de vida",
          "Modernização tecnológica",
          "Comunicação interna",
          "Reconhecimento e premiação",
          "Infraestrutura física",
          "Política de teletrabalho",
        ],
      },
    ],
  },
  {
    id: "aberta",
    label: "Sua voz",
    questions: [
      { id: "q9", type: "text", text: "O que você gostaria que mudasse na sua Secretaria?", sub: "Comentário opcional. Sua resposta é anônima." },
      { id: "q10", type: "text", text: "O que está funcionando bem e merece ser preservado?", sub: "Comentário opcional." },
    ],
  },
];

export const LIKERT = [
  { v: 1, lbl: "Discordo totalmente" },
  { v: 2, lbl: "Discordo" },
  { v: 3, lbl: "Neutro" },
  { v: 4, lbl: "Concordo" },
  { v: 5, lbl: "Concordo totalmente" },
];

// Modelo hierárquico Secretaria → Setores. Quando `setores` está vazio,
// a própria Secretaria é a única opção do grupo. IdentifyStep renderiza
// um <select> com <optgroup> por Secretaria quando há setores cadastrados.
export const SECRETARIAS = [
  {
    secretaria: "Secretaria de Finanças",
    setores: [],
  },
  {
    secretaria: "Controladoria Geral",
    setores: [],
  },
];

export const TEMPOS_SERVICO = [
  "Menos de 1 ano",
  "1 a 3 anos",
  "3 a 5 anos",
  "5 a 10 anos",
  "Mais de 10 anos",
];

export const VINCULOS = [
  "Servidor efetivo",
  "Cargo comissionado",
  "Contrato temporário",
  "Estagiário",
  "Prefiro não informar",
];
