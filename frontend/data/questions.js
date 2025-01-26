const questions = [
  {
    id: 1,
    text: "Quel est votre principal objectif professionnel ?",
    options: [
      "Créer quelque chose d'innovant et unique",
      "Résoudre des problèmes complexes avec méthode",
      "Inspirer et motiver les autres",
      "Perfectionner mes compétences techniques",
      "Diriger une entreprise ou un projet ambitieux",
    ],
  },
  {
    id: 2,
    text: "Quelle qualité vous décrit le mieux ?",
    options: [
      "Créatif(ve) et imaginatif(ve)",
      "Logique et analytique",
      "Empathique et communicatif(ve)",
      "Pratique et méthodique",
      "Visionnaire et ambitieux(se)",
    ],
  },
  {
    id: 3,
    text: "Parmi ces compétences, laquelle vous attire le plus ?",
    options: [
      "La création artistique ou visuelle",
      "L'analyse et la résolution de problèmes",
      "La communication et le storytelling",
      "La maîtrise des outils techniques",
      "La gestion de projet et l'entrepreneuriat",
    ],
  },
  {
    id: 4,
    text: "Vous apprenez mieux lorsque…",
    options: [
      "Vous créez ou expérimentez",
      "Vous analysez et réfléchissez",
      "Vous échangez et partagez avec les autres",
      "Vous pratiquez et testez concrètement",
      "Vous planifiez et organisez vos apprentissages",
    ],
  },
  {
    id: 5,
    text: "Ce qui vous motive le plus dans un projet, c'est…",
    options: [
      "La liberté de créer et d'explorer de nouvelles idées",
      "La possibilité de résoudre des défis complexes",
      "Le fait de collaborer avec d'autres et d'aider les membres de l'équipe",
      "L'opportunité de mettre en pratique des compétences techniques",
      "L'ambition de mener un projet à son terme avec succès",
    ],
  },
  {
    id: 6,
    text: "Lorsque vous travaillez en équipe, vous préférez…",
    options: [
      "Proposer des idées nouvelles et créatives",
      "Analyser les données pour apporter des solutions concrètes",
      "Faciliter la communication et assurer la cohésion du groupe",
      "Prendre en charge les tâches techniques et pratiques",
      "Diriger le projet et répartir les responsabilités",
    ],
  },
  {
    id: 7,
    text: "Comment décririez-vous votre approche face à un défi ?",
    options: [
      "Imaginer des solutions originales et créatives",
      "Analyser toutes les options possibles avant de prendre une décision",
      "Comprendre les besoins des personnes impliquées avant d'agir",
      "Tester différentes méthodes pratiques pour résoudre le problème",
      "Définir une stratégie claire et mobiliser les ressources nécessaires",
    ],
  },
  {
    id: 8,
    text: "Quelle situation vous met le plus à l’aise dans votre travail ?",
    options: [
      "Explorer et expérimenter de nouvelles idées",
      "Suivre une méthode précise et logique",
      "Collaborer avec des collègues et échanger des idées",
      "Travailler avec des outils et des technologies spécifiques",
      "Gérer un projet ou diriger une équipe",
    ],
  },
  {
    id: 9,
    text: "Si vous pouviez choisir une activité professionnelle idéale, ce serait…",
    options: [
      "Concevoir des œuvres ou des campagnes innovantes",
      "Résoudre des problèmes grâce à des analyses détaillées",
      "Aider les autres à atteindre leurs objectifs",
      "Construire et optimiser des systèmes ou des outils",
      "Créer et développer une entreprise ou un projet ambitieux",
    ],
  },
  {
    id: 10,
    text: "Qu'est-ce qui vous inspire le plus dans votre travail ?",
    options: [
      "La possibilité de laisser libre cours à ma créativité",
      "L'adrénaline de résoudre des problèmes complexes",
      "Les interactions humaines et le partage d'idées",
      "La satisfaction de voir un système ou un outil fonctionner parfaitement",
      "La vision de voir un projet évoluer et réussir",
    ],
  },
  {
    id: 11,
    text: "Vous vous sentez le plus accompli(e) lorsque…",
    options: [
      "Vous créez quelque chose de visuellement ou conceptuellement unique",
      "Vous trouvez une solution efficace à un problème difficile",
      "Vous aidez quelqu'un à réussir ou à surmonter un obstacle",
      "Vous terminez un projet technique avec précision",
      "Vous atteignez vos objectifs tout en inspirant les autres",
    ],
  },
  {
    id: 12,
    text: "Si vous deviez choisir une approche pour résoudre un problème, ce serait…",
    options: [
      "Proposer une idée innovante ou hors du commun",
      "Identifier la cause profonde et élaborer un plan détaillé",
      "Parler avec les parties concernées pour trouver un compromis",
      "Tester différentes solutions pour trouver la plus efficace",
      "Mobiliser une équipe et organiser les étapes à suivre",
    ],
  },
  {
    id: 13,
    text: "Quelle phrase vous correspond le mieux ?",
    options: [
      "J'adore exprimer ma créativité dans mon travail.",
      "J'aime analyser et comprendre les choses en profondeur.",
      "Les relations humaines sont au cœur de mon travail.",
      "J'apprécie de travailler avec des outils ou des systèmes techniques.",
      "J'aime diriger et inspirer les autres pour atteindre un objectif commun.",
    ],
  },
  {
    id: 14,
    text: "Comment gérez-vous une situation difficile au travail ?",
    options: [
      "En imaginant une solution créative pour sortir de l'impasse",
      "En identifiant et en résolvant méthodiquement la source du problème",
      "En discutant avec les personnes impliquées pour trouver une solution collaborative",
      "En appliquant des méthodes pratiques et techniques pour régler la situation",
      "En prenant les choses en main et en établissant une stratégie claire",
    ],
  },
  {
    id: 15,
    text: "Lorsqu'il s'agit de prendre une décision importante, vous…",
    options: [
      "Faites confiance à votre intuition et à votre créativité",
      "Analysez toutes les options et leurs conséquences",
      "Consultez les autres pour comprendre différents points de vue",
      "Choisissez la solution la plus pratique et faisable",
      "Prenez rapidement une décision pour avancer",
    ],
  },
  {
    id: 16,
    text: "Quelle qualité est la plus importante dans un travail d'équipe ?",
    options: [
      "La créativité pour trouver des idées nouvelles",
      "L'analyse pour comprendre et résoudre les problèmes",
      "La communication pour maintenir une bonne collaboration",
      "La précision et l'efficacité pour exécuter les tâches",
      "Le leadership pour guider l'équipe vers ses objectifs",
    ],
  },
  {
    id: 17,
    text: "Quel type de projet vous motive le plus ?",
    options: [
      "Un projet créatif avec beaucoup de liberté d'expérimentation",
      "Un projet complexe nécessitant une analyse approfondie",
      "Un projet basé sur les relations humaines et la communication",
      "Un projet technique ou pratique nécessitant des compétences spécifiques",
      "Un projet ambitieux avec un fort potentiel de croissance",
    ],
  },
  {
    id: 18,
    text: "Vous préférez travailler dans un environnement…",
    options: [
      "Stimulant et créatif",
      "Stable et méthodique",
      "Collaboratif et humain",
      "Structuré et technique",
      "Dynamique et orienté vers le changement",
    ],
  },
  {
    id: 19,
    text: "Quelles compétences aimeriez-vous développer davantage ?",
    options: [
      "La créativité et l'innovation",
      "L'analyse et la résolution de problèmes",
      "La communication et le leadership relationnel",
      "Les compétences techniques ou pratiques",
      "Le management et la stratégie",
    ],
  },
  {
    id: 20,
    text: "Pour vous, le succès professionnel signifie…",
    options: [
      "Avoir un impact créatif significatif",
      "Résoudre des problèmes importants avec brio",
      "Aider les autres à atteindre leurs objectifs",
      "Maîtriser des compétences techniques de haut niveau",
      "Réaliser une vision ambitieuse et inspirer les autres",
    ],
  },
];

export default questions;
