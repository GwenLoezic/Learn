/*
  Output :
  Si le produit coûte au moins 100€ OU qu'il est de bonne qualité
*/

let price = 50;
let quality = false;

// Début de votre code
price = 100;
quality = true;
// Fin de votre code

// L'opérateur || (OU) permet de vérifier si l'une des conditions est vraie
if (price >= 100 || quality !== false) {
  console.log(
    "Si le produit coûte au moins 100€ OU qu'il est de bonne qualité"
  );
} else {
  console.log("Dans tous les autres cas");
}
