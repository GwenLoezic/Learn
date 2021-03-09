/*
  Objectif de l'exercice :
  Apprendre à ne pas confondre les noms de variables et les valeurs de type String.

  Résultat à afficher dans le terminal avant de passer à l'exercice suivant :
  ReferenceError: e is not defined

  Explications :
  Dans cet exemple, nous tentons de concaténer une variable qui se nommerait `e`. Or, aucune variable `e` n'a été déclarée. Nous rencontrons donc une erreur.

  La syntaxe correcte aurait été la suivante :
  const alphabet = "abcd" + "e";
*/

const alphabet = "abcd" + e;

console.log(alphabet); // Affichera `ReferenceError: e is not defined` dans le terminal
