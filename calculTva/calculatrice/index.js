"use strict";

let choix;
let resultat;
let firstNumber;
let secondNumber;

do {
  choix = parseInt(
    prompt("Choisissez un calcul 1: addition, 2: soustraction, 3: division")
  );
} while (choix !== 1 || choix !== 2 || choix == 3);

if (choix === 1) {
  resultat = firstNumber + secondNumber;
} else if (choix === 2) {
  resultat = firstNumber - secondNumber;
} else {
  resultat = firstNumber / secondNumber;
}

console.log("le resultat");
