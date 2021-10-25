"use strict";

let voiture = {
  marque: "Renault Twingo 3",
  annee: 2014,
  dateAchat: "2014-07-31",
  passagers: ["Audrey", "Gribouille"],
};

document.querySelector(
  "#content"
).innerHTML += `<p> <strong> Informations sur la voiture:</strong> <ul>
<li> Marque: ${voiture.marque}</li>
<li> Année de production: ${voiture.annee}</li>
<li>  Date de l'achat: ${voiture.dateAchat}</li>
<li> Passagers: <ul>
<li>${voiture.passagers[0]} </li>
<li>${voiture.passagers[1]} </li>
 </li></ul>
</ul> </p>`;
