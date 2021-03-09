/* 
Password Generator :

outils => generate-password Package

Étape 1 (environnement de travail)
Étape 2 (initialisation du projet)
Étape 3 (installation et import du package)

*/

const generator = require("generate-password");

const password = generator.generateMultiple(5, {
  length: 16,
  numbers: true,
  symbols: true,
});

console.log(password);
