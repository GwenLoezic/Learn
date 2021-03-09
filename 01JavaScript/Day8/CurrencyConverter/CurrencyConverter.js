/*
Currency Convert :

Pour cet exercice, vous devrez créer un compte gratuit sur http://fixer.io/. Grâce à l'API key que vous fournira fixer, vous pourrez récupérer les taux de change.

Vous allez devoir concevoir un convertisseur de devises qui prendra 3 arguments, dans cet ordre :

Le montant à convertir
La devise de base
La devise à obtenir
Par exemple, si nous souhaitons convertir 15 EUR en USD, il faudra exécuter :

currencyConverter(15, "eur", "usd", (message) => {
  console.log(message); // Devra afficher : `15 EUR > 18.34 USD (taux de change appliqué : 1.223)`.
});

Nous devons pouvoir aussi convertir les USD en AUD, les EUR en JPY, etc.
Une erreur devra être affichée si la devise demandée n'est pas supportée.

*/

const axios = require("axios");

const currencyConverter = (
  amount,
  currencyToConvert,
  currencyToReturn,
  func
) => {
  axios
    .get(
      "http://data.fixer.io/api/latest?access_key=9a89468b623776ce8ae32eaaa4ac637c"
    )
    .then((response) => {
      currencyToConvert = currencyToConvert.toUpperCase();
      currencyToReturn = currencyToReturn.toUpperCase();

      if (
        response.data.rates[currencyToReturn] === undefined ||
        response.data.rates[currencyToConvert] === undefined
      ) {
        return console.log("Devise(s) inconnue(s)");
      }

      const newAmount =
        (amount * response.data.rates[currencyToReturn]) /
        response.data.rates[currencyToConvert];

      let changeRate;
      if (currencyToReturn !== "EUR") {
        changeRate = response.data.rates[currencyToReturn];
      } else {
        changeRate = newAmount / amount;
      }

      func(
        `${amount} ${currencyToConvert} > ${newAmount} ${currencyToReturn} (taux de change appliqué : ${changeRate})`
      );
    });
};

currencyConverter(15, "eur", "usd", (message) => {
  console.log(message);
});

currencyConverter(15, "usd", "jpy", (message) => {
  console.log(message);
});

currencyConverter(15, "usd", "eur", (message) => {
  console.log(message);
});

currencyConverter(15, "eur", "uds", (message) => {
  console.log(message); // Devise(s) inconnue(s)
});
