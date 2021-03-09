/*
  Dans cet exercice vous devrez afficher dans le terminal :
  Étape 1
  Étape 2
*/

const firstStep = () => {
  console.log("Étape 1");
  secondStep(); // Une fonction peut en appeler une autre !
};

const secondStep = () => {
  console.log("Étape 2");
};

// Début de votre code
firstStep();
// Fin de votre code
