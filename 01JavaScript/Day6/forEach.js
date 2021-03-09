/*
For Each : 
  Description :
  Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with one argument: value.
  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
*/

const forEach = (arr, func) => {

    // Début de votre code

    if (func !== undefined) {
        for (let i = 0; i < arr.length; i++) {
            func(arr[i])
        }
    }

    // Fin de votre code

};
const callback = value => {
    console.log(value);
};
forEach([1, 2], callback); // Doit afficher `1` puis `2`
forEach([3, 1]); // Ne doit rien afficher
forEach([], callback); // Ne doit rien afficher
forEach(); // Ne doit rien afficher