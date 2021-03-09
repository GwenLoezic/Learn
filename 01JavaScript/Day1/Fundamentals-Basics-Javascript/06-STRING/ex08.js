/*
  Objectif :
  Trouver la position de la lettre `R` dans la chaîne de caractères `Le Reacteur`.
  
  Résultat à afficher dans le terminal avant de passer à l'exercice suivant :
  3
  
  Aide
  Exemple pour le mot `Oui` :
  `O` a pour position 0
  `u` a pour position 1
  `i` a pour position 2

  Documentation de la fonction à utiliser :
  https://www.w3schools.com/jsref/jsref_indexof.asp
*/

const str = "Le Reacteur";
let position; // Devra stocker la position de la lettre `R` de la variable `str`

// Début de votre code
position = str.indexOf("R");
// Fin de votre code

console.log(position); // Doit afficher `3` dans le terminal
