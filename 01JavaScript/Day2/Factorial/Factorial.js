/*
Factorial : 

Créez une fonction factorial(num) qui prendra en paramètre un nombre num, et qui retournera la factorielle de celui-ci. 
Pour vos tests, votre num sera compris entre 1 et 18, et sera toujours un entier.

Exemple:
Input: 4
Output: 24
*/

const factorial = (num) => {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total = total * i;
  }
  return total;
};
const result = factorial(8);
console.log(result);
