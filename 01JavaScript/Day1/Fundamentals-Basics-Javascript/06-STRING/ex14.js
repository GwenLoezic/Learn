/*
  Objectif :
  Comprendre que le `.replace()` ne remplace que la première occurrence.
*/

let str = "effect";
str = str.replace("e", "a");
console.log(str); // Affichera `affect` et non pas `affact` dans le terminal
