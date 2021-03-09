/*
  Résultat à afficher dans le terminal avant de passer à l'exercice suivant :
  reacteur
*/

const str = "  Le Reacteur    ";
let result;

// Début de votre code
result = str.substring(5, 13);
// Fin de votre code

result = result.replace("Le ", "").toLowerCase(); // Il est possible d'enchaîner les opérations
console.log(result); // Doit afficher `reacteur` dans le terminal
