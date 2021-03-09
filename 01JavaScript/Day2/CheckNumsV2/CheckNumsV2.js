/*  
Check Nums v2: 

En utilisant le langage JavaScript, vous devrez écrire une fonction checkNums(num1,num2) prennant deux nombres en arguments, et qui retournera la chaîne de caractères :

num2 est supérieur à num1 si num2 est plus grand que num1
num2 est inférieur à num1 dans le cas où num2 est plus petit que num1
num1 et num2 sont équivalents si num1 et num2 sont égaux

Exemple:
Input: num1 = 3, num2 = 122
Output: "num2 est supérieur à num1"
*/

const checkNums = (num1, num2) => {
  if (num2 > num1) {
    console.log("num2 est supérieur à num1 ");
  } else if (num2 < num1) {
    console.log("num2 est inférieur à num1");
  } else if (num1 === num2) {
    console.log("num1 et num2 sont équivalents");
  } else {
    console.log("pas de conditions");
  }
};

checkNums(3, 122);
checkNums(67, 67);
