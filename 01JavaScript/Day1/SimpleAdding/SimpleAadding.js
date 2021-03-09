/*
Simple Adding :

Créez une variable num et assignez-lui un nombre comme valeur.
Créez ensuite une boucle qui additionnera tous les nombres en partant de 1 jusqu'au nombre num.
Par exemple, si num vaut 4, alors notre code affichera 10 car 1 + 2 + 3 + 4 = 10.

Exemples
Input: 12

Output: 78
Input: 140

Output: 9870
*/
const num = 4;
let counter = 1;
let total = 0;
while (counter <= num) {
  total = total + counter;
  counter++;
}
console.log(total);