/*
Times : 
  Description :
  Invokes the iteratee n times, returning an array of the results of each invocation.
  Arguments :
  1) The number of times to invoke iteratee.
  2) The function invoked per iteration.
  
  Returns :
  The array of results.
*/

// Début de votre code

const times = (num, func) => {
    let tab = [];
    if (typeof num === "number") {
        for (let i = 0; i < num; i++) {
            if (func === undefined) {
                tab.push(undefined);

            } else {
                let randomNumber = func()
                tab.push(randomNumber);
            }
        }

    }
    return tab;
};

// Fin de votre code

const getRandomInteger = () => {
    return Math.round(Math.random() * 100);
}
console.log(times(5, getRandomInteger)); // Doit afficher un tableau contenant 5 valeurs aléatoires `[64, 70, 29, 10, 23]`
console.log(times(2, getRandomInteger)); // Doit afficher un tableau contenant 2 valeurs aléatoires `[13, 51]`
console.log(times(4)); // Doit afficher `[undefined, undefined, undefined, undefined]`
console.log(times("Hello", getRandomInteger)); // Doit afficher `[]`
console.log(times(null, getRandomInteger)); // Doit afficher `[]`