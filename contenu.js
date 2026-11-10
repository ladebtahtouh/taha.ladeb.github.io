// ─────────────────────────────────────────────────────────────
//  Tout le contenu du site est dans ce fichier.
//  Pour modifier la page, il suffit d'éditer ce fichier.
// ─────────────────────────────────────────────────────────────

window.SITE = {
  nom: "Taha Ladeb",
  role: "Doctorant en mathématiques",
  presentation:
    "Je prépare une thèse en physique mathématique au CEREMADE, sur la théorie de la fonctionnelle de la densité. " +
    "Je m'intéresse plus largement à l'analyse spectrale et aux EDP issues de la mécanique quantique, " +
    "en particulier à l'opérateur de Dirac.",

  // Lignes de la colonne de gauche : ["intitulé", "texte", "lien facultatif"]
  infos: [
    ["Laboratoire", "CEREMADE, Université Paris Dauphine-PSL", "https://www.ceremade.dauphine.fr/"],
    ["Thèmes", "Théorie de la fonctionnelle de la densité, théorie spectrale, opérateur de Dirac"],
    // ["Contact", "prenom.nom@dauphine.psl.eu", "mailto:prenom.nom@dauphine.psl.eu"],
  ],
};

// ─────────────────────────────────────────────────────────────
//  PUBLICATIONS
//  Une entrée par bloc { ... }, séparées par des virgules.
//  L'ordre n'a pas d'importance : la page trie par date.
//  Le LaTeX entre $...$ est rendu dans "texte".
//  Attention : dans ce fichier, un antislash s'écrit deux fois
//  ("$\\mathbb{R}^3$" et non "$\mathbb{R}^3$").
//
//  Trois types possibles (retire les // pour activer un exemple) :
// ─────────────────────────────────────────────────────────────

window.PUBLICATIONS = [

  // Un PDF : dépose d'abord le fichier dans le dossier pdfs/
  // {
  //   type: "pdf",
  //   date: "2026-11-11",
  //   titre: "Mémoire de M2",
  //   fichier: "pdfs/memoire-m2.pdf",
  //   texte: "Trou spectral de l'opérateur de Dirac sur un domaine borné de $\\mathbb{R}^2$.",
  // },

  // Un lien
  // {
  //   type: "lien",
  //   date: "2026-11-10",
  //   titre: "Titre de l'article ou de la page",
  //   url: "https://arxiv.org/abs/....",
  //   texte: "Pourquoi c'est intéressant.",
  // },

  // Une note
  // {
  //   type: "note",
  //   date: "2026-11-09",
  //   titre: "Titre de la note",
  //   texte: "Le texte de la note.",
  // },

];
