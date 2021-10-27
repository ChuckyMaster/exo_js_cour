"use strict";

// // VARIABLES

// let list = new Array();

// // FONCTIONS

// /****
//  * ajouter un item à la liste de course
//  * @param {string} item
//  */

// function addItem(item) {
//   list.push(item);
// }

// list.forEach(function (item, index) {
//   console.log(item, index);
// });

// console.log(list);

// /***
//  *
//  * @returns le contenu de la liste et son nombre d'items
//  *
//  */
// function display() {
//   return ` Il ya ${list.length} produits dans la liste.`;
// }

// const localeString = list.toLocaleString("patate");

// addItem("patate");
// addItem("ravioli");
// addItem("concombre amer");
// addItem("choux fleur");

// document.querySelector("#content").innerHTML = display();

const produits = [
  {
    nom: "tomate",
    prixUnitaire: 2.49,
    quantite: 2,
  },

  {
    nom: "patate",
    prixUnitaire: 3.99,
    quantite: 3,
  },

  {
    nom: "kiwi",
    prixUnitaire: 0.5,
    quantite: 6,
  },
];

console.log(produits[1]);
console.log(produits[1].nom);
console.log(produits[1].prixUnitaire * produits[1].quantite);

let html = ` <table>
                  <thead> 
                  <th>Nom du produit </th>  
                  <th> Prix unitaire</th> 
                  <th> Quantité</th>
                  <th> Prix total </th>
                  </thead>
                  <tbody>   `;

for (let produit of produits) {
  html += `   
<tr> 
<td>${produit.nom} </td>
<td>${produit.prixUnitaire} </td>
<td>${produit.quantite} </td>
<td> ${produit.prixUnitaire * produit.quantite} €</td>


</tr>`;
}

html += ` </tbody>
</table>

             `;

console.log(html);
document.querySelector("#content").innerHTML = html;
