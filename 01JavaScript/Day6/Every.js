/*
Every :
  Description :
  Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with one argument: value.
  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  Returns true if all elements pass the predicate check, else false.
*/

// Début de votre code

const every = (tab, func) => {
    if (func !== undefined && tab !== null) {
        for (let i = 0; i < tab.length; i++) {
            if (func(tab[i]) === false) {
                return false;
            }
        }
    }
    return true;
};

// Fin de votre code

const isLargerThanTen = element => {
    if (element >= 10) {
        return true;
    } else {
        return false;
    }
};
console.log(every([10, 20, 30], isLargerThanTen)); // Doit afficher `true`
console.log(every([10, 8, 20], isLargerThanTen)); // Doit afficher `false`
console.log(every([4, 13, 5])); // Doit afficher `false`
console.log(every(null, isLargerThanTen)); // Doit afficher `false`