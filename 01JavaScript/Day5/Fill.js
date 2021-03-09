/*
Fill : 
  Description :
  Fills elements of array with value.
  Arguments :
  1) The array to fill.
  2) The value to fill array with.
  Returns :
  The filled array.
*/

// Début de votre code

const fill = (tab, str) => {
  const result = [];
  for (let i = 0; i < tab.length; i++) {
    result.push(str);
  }
  return result;
};

// Fin de votre code

console.log(fill([1, 2, 3], "a")); // Doit afficher `['a', 'a', 'a']`
