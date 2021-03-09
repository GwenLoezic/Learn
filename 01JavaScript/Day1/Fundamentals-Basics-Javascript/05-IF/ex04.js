/*
  Output :
  Si le produit coûte au moins 100€ ET qu'il est de bonne qualité
*/

let price;
let quality;

// Début de votre code
price = 100;
quality = true;
// Fin de votre code

// L'opérateur && (ET) permet de vérifier plusieurs conditions
if (price >= 100 && quality !== false) {
  console.log(
    "Si le produit coûte au moins 100€ ET qu'il est de bonne qualité"
  );
} else {
  console.log("Dans tous les autres cas");
}
