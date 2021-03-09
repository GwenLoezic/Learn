/*
  Vous devrez afficher dans le terminal :

  Étape 1
  Étape 2
  Étape 3

  Vous remarquerez que la déclaration d'une fonction n'exécute pas immédiatement le code qui se trouve à l'intérieur.
*/

console.log("Étape 1");

const showCurrentStep = () => {
  console.log("Étape 3");
};

console.log("Étape 2");

// Début de votre code
showCurrentStep();
// Fin de votre code
