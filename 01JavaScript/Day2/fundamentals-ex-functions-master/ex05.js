/*
  Dans cet exercice vous devrez appeler la fonction `calculateAge` en lui transmettant des paramètres dans le bon ordre.

  Cet exercice est bien différent du précédent.
*/

const calculateAge = (b, a) => {
  // Notez que la fonction s'attend à recevoir l'année de naissance en premier argument (b) et l'année en cours en deuxième argument (a)
  console.log(a - b); // Doit afficher `32` dans le terminal
};

const yearOfBirth = 1987;
const currentYear = 2019;

// Début de votre code
calculateAge(`${yearOfBirth}`, `${currentYear}`);
// Fin de votre code
