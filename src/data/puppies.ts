export type Puppy = {
  id: string;
  name: string;
  type: string;
  trait: string;
  description: string;
  longDescription: string;
  atk: string;
  def: string;
  level: number;
  code: string;
  tags: string[];
  imageUrl: string;
  available: boolean;
};

export const donatella: Puppy = {
  id: "donatella",
  name: "Donatella",
  type: "Canino / Efeito",
  trait: "",
  description:
    "Esta criatura não pode ser invocada por Invocação-Normal. Deve ser primeiramente Invocada por Especial através de um \"Resgate de Abrigo\".",
  longDescription:
    "Donatella adora correr atrás de bolinhas e dormir no pé da cama. Requer 100% de atenção e 200% de amor dos seus donos.",
  atk: "∞",
  def: "9999",
  level: 5,
  code: "DP-PT001",
  tags: ["BRINCALHÃO", "QUIETINHO", "CARINHOSA", "AVENTUREIRO"],
  imageUrl: "/images/donatella.jpg",
  available: true,
};

export const puppies: Puppy[] = [
  {
    id: "laika",
    name: "Laika",
    type: "Canino / Brincalhão",
    trait: "Guerreiro",
    description:
      "Um filhote de luz que ilumina qualquer campo de batalha com sua energia inesgotável. Especialista em ataques de lambidas.",
    longDescription:
      "Laika é a mais animada da ninhada. Adora brincar e está sempre pronta para uma nova aventura.",
    atk: "∞",
    def: "500",
    level: 4,
    code: "DP-PT002",
    tags: ["BRINCALHÃO", "ENERGÉTICO"],
    imageUrl: "/images/pipoca.jpg",
    available: true,
  },
  {
    id: "grogu",
    name: "Grogu",
    type: "Canino / Observador",
    trait: "Mágico",
    description:
      "Mestre da paciência. Grogu observa seus oponentes antes de lançar um contra-ataque de carinho sonolento.",
    longDescription:
      "Café é calmo e contemplativo. Adora cochilos no sol e longos momentos de afeto.",
    atk: "800",
    def: "1200",
    level: 4,
    code: "DP-PT003",
    tags: ["QUIETINHO", "CARINHOSO"],
    imageUrl: "/images/cafe.jpg",
    available: true,
  },
  {
    id: "maskaneda",
    name: "Maskaneda",
    type: "Canino / Ativa",
    trait: "Guerreiro",
    description:
      "Uma guerreira veloz. Maskaneda não conhece limites quando o assunto é buscar a bolinha no jardim sagrado.",
    longDescription:
      "Maskaneda é ágil e determinada. Tem um instinto natural para o jogo e ama correr ao ar livre.",
    atk: "1500",
    def: "400",
    level: 4,
    code: "DP-PT004",
    tags: ["AVENTUREIRO", "ATIVO"],
    imageUrl: "/images/bela.jpg",
    available: true,
  },
  {
    id: "michelangelo",
    name: "Michelangelo",
    type: "Canino / Corajoso",
    trait: "Guerreiro",
    description:
      "O guardião da alcateia. Toby enfrenta qualquer sombra com seu latido de filhote heroico.",
    longDescription:
      "Michelangelo é protetor e leal. Adora estar perto da família e é excelente com crianças.",
    atk: "1200",
    def: "1200",
    level: 4,
    code: "DP-PT005",
    tags: ["CORAJOSO", "LEAL"],
    imageUrl: "/images/toby.jpg",
    available: true,
  },
  {
    id: "morgana",
    name: "Morgana",
    type: "Canino / Corajoso",
    trait: "Guerreiro",
    description:
      "O guardião da alcateia. Morgana enfrenta qualquer sombra com seu latido de filhote heroico.",
    longDescription:
      "Morgana é protetor e leal. Adora estar perto da família e é excelente com crianças.",
    atk: "1200",
    def: "1200",
    level: 4,
    code: "DP-PT005",
    tags: ["CORAJOSO", "LEAL"],
    imageUrl: "/images/toby.jpg",
    available: true,
  },
  {
    id: "shoyu",
    name: "Shoyu",
    type: "Canino / Corajoso",
    trait: "Guerreiro",
    description:
      "O guardião da alcateia. Shoyu enfrenta qualquer sombra com seu latido de filhote heroico.",
    longDescription:
      "Shoyu é protetor e leal. Adora estar perto da família e é excelente com crianças.",
    atk: "1200",
    def: "1200",
    level: 4,
    code: "DP-PT005",
    tags: ["CORAJOSO", "LEAL"],
    imageUrl: "/images/toby.jpg",
    available: false,
  },
  {
    id: "priya",
    name: "Priya",
    type: "Canino / Corajoso",
    trait: "Guerreiro",
    description:
      "O guardião da alcateia. Priya enfrenta qualquer sombra com seu latido de filhote heroico.",
    longDescription:
      "Priya é protetor e leal. Adora estar perto da família e é excelente com crianças.",
    atk: "1200",
    def: "1200",
    level: 4,
    code: "DP-PT005",
    tags: ["CORAJOSO", "LEAL"],
    imageUrl: "/images/toby.jpg",
    available: true,
  },
];
