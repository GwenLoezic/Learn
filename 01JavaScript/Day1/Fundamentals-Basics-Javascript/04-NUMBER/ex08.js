/*
  Objectif de l'exercice : 
  Calculer le reste de la division `a` par `b`, avec l'opérateur modulo `%`.
  L'opérateur modulo `%` permet de calculer le reste d'une division.
  Exemple :
  10 % 3 = 1 car 10 / 3 = 3 * 3 + 1
  1 étant le reste de la division. Voir https://fr.wikipedia.org/wiki/Reste

  Résultat à afficher dans le terminal avant de passer à l'exercice suivant :
  1

  Explications concernant le résultat :
  Il est possible de calculer le reste d'une division entre 2 variables, si elles sont toutes les deux de type Number, avec l'opérateur `%`.
*/

const a = 10;
const b = 3;

// Début de votre code
let result;
result = a % b;
// Fin de votre code

console.log(result); // Doit afficher `1` dans le terminal
