/*
  Output :
  Ce fruit est une pomme
*/

let fruit;

// Début de votre code
fruit = "pomme";
// Fin de votre code

if (fruit === "poire") {
  console.log("Ce fruit est une poire");
} else if (fruit === "pomme") {
  // Il est possible d'enchaîner un `if` avec un `else if`
  console.log("Ce fruit est une pomme");
} else {
  console.log("Je ne connais pas ce fruit");
}
