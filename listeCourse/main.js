"use strict";

// VARIABLES

let list = new Array();

// FONCTIONS

/****
 * ajouter un item à la liste de course
 * @param {string} item
 */

function addItem(item) {
  list.push(item);
}

list.forEach(function (item, index) {
  console.log(item, index);
});

console.log(list);

/***
 *
 * @returns le contenu de la liste et son nombre d'items
 *
 */
function display() {
  return ` Il ya ${list.length} produits dans la liste.`;
}

const localeString = list.toLocaleString("patate");

addItem("patate");
addItem("ravioli");
addItem("concombre amer");
addItem("choux fleur");

document.querySelector("#content").innerHTML = display();
