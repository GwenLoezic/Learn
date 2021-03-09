/*
Reverse String:

Créez une fonction reverseString(str) qui prend en paramètre une string et qui retourne cette string en ordre inverse.

Exemples:

Input: "Le Reacteur"
Output: "ruetcaeR eL"

Input: "I Love Code"
Output: "edoC evoL I"

Input: "Hello World and Coders"
Output: sredoC dna dlroW olleH
*/

const reverseString = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str.charAt(i);
  }
  return result;
};
console.log(reverseString("Le Reacteur"));
console.log(reverseString("I Love Code"));
console.log(reverseString("Hello World and Coders"));
