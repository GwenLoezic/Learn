/*
DisplayArray v2 :

Créez une fonction displayArray(tab) qui recevra en argument un tableau de chaînes de caractères et le retournera sous la forme d'une chaîne de caractères.

Pour cette variante, vous devez repartir de zéro et ne pas copier/coller l'exercice précédent.

Exemple:
console.log(displayArray(["Xavier", "Farid", "Kévin"])); // Affichera "Xavier, Farid et Kévin"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"])); // Affichera "Pomme, Banane, Abricot et Cerise"
*/

const displayArray = (tab) => {
  let str = "";
  for (let i = 0; i < tab.length; i++) {
    if (i === tab.length - 1) {
      str = str + tab[i];
    } else if (i === tab.length - 2) {
      str = str + tab[i] + " et ";
    } else {
      str = str + tab[i] + ", ";
    }
  }
  return str;
};

console.log(displayArray(["Xavier", "Farid", "Kévin"]));
