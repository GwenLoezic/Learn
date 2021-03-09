/*
Array Addition :

Créez la fonction arrayAddition qui prend en paramètre un tableau de nombres et qui retourne true si la somme de tous les nombres, à l'exception du plus grand, est égale au nombre le plus grand. Sinon elle retourne false.
Par exemple, si le tableau contient [1, 2, 3, 12, 6], la valeur de retour sera true car 1 + 2 + 3 + 6 = 12.
Le tableau peut contenir des valeurs identiques et des nombres négatifs.

La valeur de retour sera de type Boolean.

Exemple :
console.log(arrayAddition([1, 2, 3, 12, 6])); // Affichera true
console.log(arrayAddition([1, 2, 3, 4])); // Affichera false
*/

const arrayAddition = (tab) => {
  const sortedTab = tab.sort((a, b) => {
    return a - b;
  });

  const max = sortedTab.pop();
  let result = 0;
  for (let i = 0; i < sortedTab.length; i++) {
    result = result + sortedTab[i];
  }
  if (result === max) {
    return true;
  } else {
    return false;
  }
};

console.log(arrayAddition([1, 2, 3, 12, 6]));
console.log(arrayAddition([1, 2, 3, 4]));
