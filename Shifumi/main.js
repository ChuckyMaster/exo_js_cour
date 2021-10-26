"use stricct";

const btn = document.querySelector(".btn");

let urChoice;
let computer;
let pfc = ["pierre", "feuille", "ciseaux"];

do {
  urChoice = prompt("veuillez choisir : pierre, feuille ou ciseaux");
} while (
  urChoice !== "pierre" &&
  urChoice !== "feuille" &&
  urChoice !== "ciseaux"
);

function computerChoice() {
  return Math.floor(Math.random() * 3);
}

btn.addEventListener("click", function computerPlay() {
  const randompfc = computerChoice();
  console.log(randompfc);
  computer = pfc[randompfc];
});
console.log(computer);
