/*
DisplayArray v1:

Créez une fonction displayArray(tab) qui recevra en argument un tableau de chaînes de caractères et le retournera sous la forme d'une chaîne de caractères.

Exemple:
console.log(displayArray(["Xavier", "Farid", "Kévin"])); // Affichera "Xavier Farid Kévin"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"])); // Affichera "Pomme Banane Abricot Cerise"

*/

const displayArray = (tab) => {
  const str = tab.join(" ");
  return str;
};

console.log(displayArray(["Xavier", "Farid", "Kévin"]));