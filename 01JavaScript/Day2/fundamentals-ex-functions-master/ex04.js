/*
  Dans cet exercice vous devrez appeler la fonction `calculateAge` en lui transmettant des paramètres dans le bon ordre.
*/

const calculateAge = (a, b) => {
  // Notez que la fonction s'attend à recevoir l'année en cours en premier argument (a) et l'année de naissance en deuxième argument (b)
  console.log(a - b); // Doit afficher `32` dans le terminal
};

const yearOfBirth = 1987;
const currentYear = 2019;

// Début de votre code
calculateAge(`${currentYear}`, `${yearOfBirth}`);
// Fin de votre code
