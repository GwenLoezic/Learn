/*
  Objectif de l'exercice :
  Assigner une valeur de type String (chaîne de caractères) à la variable `quote`.
  Pour cela, il existe 3 méthodes :
  Méthode 1 :
  let day = "Aujourd'hui";

  Méthode 2 :
  let day = 'Aujourd\'hui'; // Nous devons précéder le `'` par un `\` (antislash) pour ne pas le considérer comme une fin de chaîne.

  Méthode 3 :
  let day = `Aujourd'hui`;

  Pour cet exercice, utilisez la méthode 2. Vous remarquerez que Prettier vous en empêche car il force l'utilisation des double quotes.

  Résultat à afficher dans le terminal avant de passer à l'exercice suivant :
  "That's one small step for man, one giant leap for mankind"
*/

let quote;

// Début de votre code
quote = `"That\'s one small step for man, one giant leap for mankind"`;
// Fin de votre code

console.log(quote); // Doit afficher `That's one small step for man, one giant leap for mankind` dans le terminal.
