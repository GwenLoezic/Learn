/*
  Pas de code à écrire ici.
  Seulement de la compréhension.
*/

const sum = (a, b) => {
  const total = a + b;
  return total; // Ici, l'instruction `return` permet à la fonction `sum` de communiquer la valeur de `total`. Cette valeur sera stockée au moment de l'appel à `sum` dans une variable nommée `result`.
};

const result = sum(10, 20); // Ici, nous récupérons la valeur de `total` et nous la stockons dans la variable `result`

console.log(result); // Cette fois-ci, nous avons accès au résultat de l'addition. Affiche `30` dans le terminal
