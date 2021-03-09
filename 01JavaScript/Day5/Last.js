/*
Last :
  Description :
  Gets the last element of array.
  Arguments :
  1) The array to query.
  Returns
  The last element of array.
*/

// Début de votre code

const last = (tab) => {
  const positionOfLastElement = tab.length -1;
  return tab[positionOfLastElement];
};

// Fin de votre code
console.log(last([1, 2, 3])); // Doit afficher `3`
