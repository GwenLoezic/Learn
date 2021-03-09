let i = 0; // Initialise une variable qui fera office de compteur. Nous choisissons d'appeler cette variable `i`, mais nous pourrions choisir n'importe quel nom

const limit = 3;

console.log("Avant la boucle");

// `while` signifie `tant que`
// Cette boucle sera exécutée tant que `i` est inférieur ou égal à `limit`
while (i <= limit) {
  // Les 2 accolades délimitent un bloc de code à répéter.
  console.log(i);
  i = i + 1; // L'incrémentation de la variable `i` est indispensable pour que le `while` puisse atteindre la fin de la répétition
}

console.log("Après la boucle");
