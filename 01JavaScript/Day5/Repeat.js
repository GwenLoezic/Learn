/*
Repeat :
  Description :
  Repeats the given string n times. You should not use the existing `repeat` string method.
  Arguments :
  1) The string to repeat.
  2) The number of times to repeat the string.
  
  Returns :
  The repeated string.
*/
// Début de votre code
const repeat = (str, num) => {
    let result = "";
    for (let i = 0; i < num; i++) {
      // result = result + str;
      result += str;
    }
    return result;
  };
  // Fin de votre code
  console.log(repeat("*", 3)); 
  console.log(repeat("abc", 2)); 
  console.log(repeat("abc", 4));