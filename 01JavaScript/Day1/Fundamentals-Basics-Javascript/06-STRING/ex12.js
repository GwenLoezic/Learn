/*
  Résultat à afficher dans le terminal avant de passer à l'exercice suivant :
  React
  
  Documentation des fonctions à utiliser :
  https://www.w3schools.com/jsref/jsref_indexof.asp
  https://www.w3schools.com/jsref/jsref_substring.asp
*/

const str = "Le Reacteur";
const endPosition = 8; // Correspond à la position du 2eme `e`
let startPosition; // Stockera la position de la lettre `R`

// Début de votre code
startPosition = 3;
let result = str.substring(`${startPosition}`, `${endPosition}`);
// Fin de votre code

console.log(result); // Doit afficher `React` dans le terminal
