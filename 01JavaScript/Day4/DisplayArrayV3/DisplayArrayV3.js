/*
DisplayArray v3 :

Créez une fonction displayArray(tab, option) qui recevra en paramètre un tableau de chaînes de caractères et le retournera sous la forme d'une chaîne de caractères. Le deuxième paramètre permettra d'activer les séparateurs.

Pour cette variante, vous devez repartir de zéro et ne pas copier/coller l'exercice précédent.

Exemple:
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], false)); 
*/

const displayArray = (tab, opt) => {
  if (opt === true) {
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
  } else {
    const str = tab.join(" ");
    return str;
  }
};
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], false));
