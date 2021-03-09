let i = 0;
const limit = 3;
let counter = 0;

// Cette boucle sera exécutée tant que `i` est inférieur ou égal à `limit`
while (i <= limit) {
  console.log(counter);
  counter = counter + 1;

  // Testons de ne pas incrémenter la valeur de `i`
  // i = i + 1;

  // Lancez le script, vous serez dans une boucle infinie.
  // Important :
  // Pour interrompre un script qui tourne à l'infini, appuyez simultanément sur les touches Control et C de votre clavier.
  // Conclusion :
  // Faîtes toujours en sorte que vos boucles puissent se terminer
}
