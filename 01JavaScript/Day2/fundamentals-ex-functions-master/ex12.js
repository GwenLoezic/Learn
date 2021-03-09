/*
  Dans cet exercice vous devrez appeler la fonction `sum` et comprendre le déroulement de l'exécution du programme.
  N'hésitez pas à rajouter des `console.log` un peu partout dans ce fichier pour visualiser l'ordre des étapes.
*/

const subtract = (a, b) => {
  const total = a - b;
  return total;
};

const sum = (a, b) => {
  const total = a + b;
  return total;
};

let result;
const num = 15;

result = subtract(num, 5);

// Début de votre code
result = sum(result, 10);
// Fin de votre code

console.log(result); // Doit afficher `20` dans le terminal
