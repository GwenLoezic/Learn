/*
Word Count : 

Faites en sorte que la fonction wordCount(str) prenne le paramètre string str transmis et retourne le nombre de mots que contient la chaîne. 
Les mots seront séparés par un seul espace.

Exemple:
Input: "Hello World"
Output: 2
*/

const wordCount = str => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === " ") {
        count = count + 1;
      }
    }
    if ((count === 0 && str.length > 0) || count > 0) {
      return count + 1;
    } else {
      return 0;
    }
  };
  console.log(wordCount("Hello World"));