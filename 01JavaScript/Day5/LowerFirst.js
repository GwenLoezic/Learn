/*
Lower at first :
  Description :
  Converts the first character of string to lower case.
  Arguments :
  1) The string to convert.
  Returns :
  The converted string.
*/

// Début de votre code

const lowerFirst = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result = result + str.charAt(i).toLowerCase();
    } else {
      result = result.charAt(i);
    }
  }
  return result;
};

// Fin de votre code
console.log(lowerFirst("Fred")); // Doit afficher `fred`
console.log(lowerFirst("FRED")); // Doit afficher `fRED`

