/*
  Objectif de l'exercice :
  Utiliser l'opérateur `+` pour concaténer et non pas pour additionner.

  Résultat à afficher dans le terminal avant de passer à l'exercice suivant :
  1020

  Aide :
  Comment convertir un Number en String ?
  const num = 100;
  const str = String(num);

  Comment connaître le type d'une variable primitive ?
  const num = 100;
  console.log(typeof num); // Affichera number
*/

const a = 10;
const b = 20;
let result;

// Début de votre code
result = `${a}` + `${b}`;
// Fin de votre code

console.log(result); // Doit afficher `1020` dans le terminal
