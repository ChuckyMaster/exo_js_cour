"use stricct";
//variables
const btn = document.querySelector(".btn");

let urChoice;
let computer;
let pfc = ["pierre", "feuille", "ciseaux"];
let resultat;

//fonctions
function computerChoice() {
  return Math.floor(Math.random() * 3);
}

//code principal
do {
  urChoice = prompt("veuillez choisir : pierre, feuille ou ciseaux");
} while (
  urChoice !== "pierre" &&
  urChoice !== "feuille" &&
  urChoice !== "ciseaux"
);

const randompfc = computerChoice();
computer = pfc[randompfc];
console.log(computer);

if (urChoice === computer) {
  resultat = "égalité";
} else if (
  (urChoice === "ciseaux" && computer === "pierre") ||
  (urChoice === "pierre" && computer === "feuille")
) {
  resultat = "vous avez perdu";
} else
  (urChoice === "ciseaux" && computer === "feuille") ||
    (urChoice === "feuille" && computer === "pierre") ||
    (urChoice === "pierre" && computer === "ciseaux");
{
  resultat = "Vous gagnez!!";
}

document.querySelector(
  "#content"
).innerHTML += ` vous avez choisi  <img src="./img/${urChoice}.png" alt="ta choisi ca"> <br>  le pc à choisi  <img src="./img/${computer}.png" alt="ta choisi ca" <br> <stron> <p> ${resultat} </p> </strong> `;

console.log(resultat);
