/*
Alphabet Soup :

Créez une fonction alphabetSoup(str) qui recevra en argument une string str et la retournera avec les lettres triées par ordre alphabétique. La valeur de retour sera de type String.

Exemple :
console.log(alphabetSoup("hello")); // Affichera "ehllo"
*/

const alphabetSoup = (str) => {
  const result = str.split("").sort().join("");
  return result;
};

console.log(alphabetSoup("hello"));
