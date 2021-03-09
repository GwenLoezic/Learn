/*
Deburr :
  Description :
  Deburrs string by converting letters to basic Latin letters.
  Arguments :
  1) The string to deburr.
  
  Returns :
  The deburred string.
*/

// Début de votre code

const deburr = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Fin de votre code

console.log(deburr("déjà vu")); // Doit afficher `deja vu`
console.log(deburr("Juan José")); // Doit afficher `Juan Jose`
