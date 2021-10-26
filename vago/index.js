"use strict";

let voiture = {
  marque: "Renault Twingo 3",
  annee: 2014,
  dateAchat: new Date("2014-07-31"),
  passagers: ["Audrey", "Gribouille"],
};

document.querySelector(
  "#content"
).innerHTML += `<p> <strong> Informations sur la voiture:</strong> <ul>
<li> Marque: ${voiture.marque}</li>
<li> Année de production: ${voiture.annee}</li>
<li>  Date de l'achat: ${voiture.dateAchat}</li>
 <li> Passagers:  <ol>
<li>
            </li></ol>
</ul> </p>`;

//  liste passager

// let list = "";
// voiture.passager.forEach(function (passager, index) {
//   list += `<li>{passager} </li>`;
// });
