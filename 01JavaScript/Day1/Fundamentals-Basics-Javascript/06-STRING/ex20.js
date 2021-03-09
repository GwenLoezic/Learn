/*
  Résultat à afficher dans le terminal avant de passer à l'exercice suivant :
  Reacteur

  Aide :
  Faites preuve d'imagination et créez autant de variables que nécessaire pour obtenir le résultat demandé.
*/

const str = "rEACTEUR";

// Début de votre code
let uper = str.substring(0, 1).toUpperCase();
let low = str.substring(1, 11).toLowerCase();

const result = `${uper}` + `${low}`;

// Fin de votre code

console.log(result); // Doit afficher `Reacteur` dans le terminal
