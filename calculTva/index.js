// // VARIABLES

// const TAUX_TVA = 20;

// let montantHT;
// let montantTVA;
// let montantTTC;
// let remise;
// let montantRemise;
// let prixHTRemise;
// // CODE PRINCIPAL

// // DEMANDE montant HT
// do {
//   montantHT = parseFloat(prompt("Quel est le montant HT ?"));
// } while (isNaN(montantHT));
// // DEMANDE SI remise IL Y A
// remise = prompt("Avez-vous une remise ?");
// if (remise == "oui") {
//   do {
//     montantRemise = parseFloat(
//       prompt("Indiquez le montant de votre remise en pourcentage")
//     );
//   } while (isNaN(montantRemise));
// }
// // CALCUL montantTVA
// montantTVA = montantHT * (TAUX_TVA / 100);
// // CALCUL remise sur montant TTC
// prixHTRemise = montantTTC * (montantRemise / 100);
// // CALCUL prixTotalTTC
// if (remise == "oui") {
//   montantTTC = montantHT + montantTVA - montantRemise;
// } else {
//   montantTTC = montantHT + montantTVA;
// }
// document.querySelector(
//   "#content"
// ).innerHTML += `<p>Pour un montant hors taxe de ${montantHT}€, il y a ${montantTVA} % de TVA.</p>
// <p>Le montant TTC est donc de ${montantTTC}€</p>`;
// // AFFICHER SI REMISE IL Y A OU NON
// if (remise == "oui") {
//   document.querySelector(
//     "#content"
//   ).innerHTML += `<p> Une remise de ${montantRemise}% a été appliquée sur le montant HT`;
// } else {
//   document.querySelector("#content").innerHTML +=
//     "<p>Aucune remise n'a été appliquée";
// }

//  CORRECTION

// document.querySelector("#content").innerHTML += `<p> Nous sommes le   </p>`;

// date du jour

let month = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "aout",
  "septembre",
  "octobre",
  "novembre",
  "decembre",
];

let day = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

// let numDay = Date.prototype.getDate();

// let year = Date.prototype.getUTCFullYear();

// let dateJour = new Date();

// document.querySelector("#content").innerHTML +=
// `<p> Nous sommes le
//  ${day[dateJour.getDay()]}
//  ${dateJour.getDate()}
//  ${month[dateJour.getMonth()]}
// ${[dateJour.getFullYear()]} </p>`;

// DAAAAAAAAAAAAAATE :

const dateJour = new Date();

let dateFr = dateJour.toLocaleDateString("fr-FR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

document.querySelector(
  "#content"
).innerHTML += `  <p> Nous sommes le ${dateFr} <br> il est ${dateJour.getHours()} heure et ${dateJour.getMinutes()} minutes  et ${dateJour.getSeconds()} secondes </p> `;
