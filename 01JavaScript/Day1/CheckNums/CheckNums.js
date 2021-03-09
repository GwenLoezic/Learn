/*
Check Nums :

Créez des variables num1 et num2 et assignez-leur des nombres comme valeurs.

Si num2 est plus grand que num1, alors affichez num2 est supérieur à num1
Si num2 est plus petit que num1, alors affichez num2 est inférieur à num1
Si num1 et num2 sont égaux, alors affichez num1 et num2 sont équivalents
Exemples
Input: num1 = 3, num2 = 122

Output: "num2 est supérieur à num1"
Input: num1 = 67, num2 = 67

Output: "num1 et num2 sont équivalents"

*/

const num1 = 10;
const num2 = 20;
if (num2 > num1) {
  console.log("num2 est supérieur à num1");
} else if (num2 === num1) {
  console.log("num1 et num2 sont équivalents");
} else {
  console.log("num2 est inférieur à num1");
}
