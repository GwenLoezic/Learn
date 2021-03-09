/*
  Résultat à afficher dans le terminal avant de passer à l'exercice suivant :
  Reacteur
  
  Documentation de la fonction à utiliser :
  https://www.w3schools.com/jsref/jsref_substring.asp
*/

const str = "Le Reacteur";
const position = str.indexOf("R"); // Position de la lettre `R`

// Début de votre code
let result = str.substring(`${position}`);
// Fin de votre code

console.log(result); // Doit afficher `Reacteur` dans le terminal
