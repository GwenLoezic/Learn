/*
  Objectif :
  Afficher la dernière lettre de la variable `str`.

  Résultat à afficher dans le terminal avant de passer à l'exercice suivant :
  r
*/

const str = "Le Reacteur";
let len; // Stockera la longueur de `str`
let char; // Stockera le caractère à extraire

// Début de votre code
char = str.charAt(str.length - 1);
// Fin de votre code

console.log(char); // Doit afficher `r` dans le terminal
