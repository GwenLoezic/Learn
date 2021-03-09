/*
  Objectif : Appeler la fonction et mémoriser comment déclarer une fonction
*/

const displayFullName = (firstName, lastName) => {
  console.log(firstName + " " + lastName); // Doit afficher `Victor Hugo` dans le terminal
};

// Début de votre code
firstName = "Victor";
lastName = "Hugo";

displayFullName(`${firstName}`, `${lastName}`);
// Fin de votre code
