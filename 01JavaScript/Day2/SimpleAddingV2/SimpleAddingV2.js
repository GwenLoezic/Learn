/*
Simple Adding v2:

Créez une fonction simpleAdding(num) qui additionne tous les nombres en partant de 1 jusqu'au nombre num. Par exemple, si nous avons 4 en argument, 
alors notre fonction nous retournera 10 car 1 + 2 + 3 + 4 = 10. Pour tester votre fonction, n'utilisez que des nombres compris entre 1 et 1000.

*/

const simpleAdding = (num) => {
  let total = 0;
  // Début de votre code
  for (let i = 1; i <= num; i++) {
    total = total + i;
  }
  // Fin de votre code
  return total;
};
const result = simpleAdding(4);
console.log(result);
