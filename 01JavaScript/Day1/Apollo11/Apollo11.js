/*

  Apollo 11
  Le 16 juillet 1969 à Cape Kennedy en Floride a eu lieu le décollage d'Apollo 11. 
  Pour la première fois, des Hommes allaient se poser sur la Lune ...

  Objectif de l'exercice : 
  Grâce aux connaissances que vous avez acquises aujourd'hui, 
  affichez dans la console les commentaires de Jack King à l'aide d'une boucle. 
  La boucle devra décrémenter un compteur de 12 à 0.

  Résultat à afficher dans le terminal avant de passer à l'exercice suivant :

    12
    11
    10  
    9
    Ignition sequence start
    6
    5
    4
    3
    2
    1
    0
    All engines running
    Liftoff! 🚀

*/

let counter = 12;
const limit = 0;
while (counter >= limit) {
  if (counter === 8) {
    console.log("Ignition sequence start");
  } else if (counter !== 7) {
    console.log(counter);
  }
  counter = counter - 1;
}
console.log("All engines running\nLiftoff! 🚀");
