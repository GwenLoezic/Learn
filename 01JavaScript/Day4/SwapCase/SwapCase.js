/*
SwapCase :

Créez une fonction swapCase(tab) qui permutera la casse de chaque chaîne de caractères. Vous devrez laisser les chiffres et les symboles tels qu'ils sont. La valeur de retour sera de type Array.

Exemple : 
console.log(swapCase(["Hello", "Le Reacteur"])); // Affichera : ["hELLO", "lE rEACTEUR"]
*/

const isLowerCase = (letter) => {
  if (letter === letter.toLowerCase()) {
    return true;
  }
  return false;
};

const swapCase = (tab) => {
  let result = [];
  for (let i = 0; i < tab.length; i++) {
    let str = "";
    for (let j = 0; j < tab[i].length; j++) {
      if (isLowerCase(tab[i][j])) {
        str += tab[i][j].toUpperCase();
      } else {
        str += tab[i][j].toLowerCase();
      }
    }
    result.push(str);
  }
  return result;
};

console.log(swapCase(["Hello", "Le Reacteur"]));
