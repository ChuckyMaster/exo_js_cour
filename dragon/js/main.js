"use strict";

//VARIABLES

let game = new Object();
// game.hpDragon;
// game.hpChevalier;

game.armes;
game.armure;

game.difficulty;

// FONCTION

//PRINCIPAL

// appel aux fonctions
game.difficulty = requestInteger(
  "Choisissez le difficulté: n/ 1-facile 2-moyen 3-difficile",
  1,
  3
);

game.armure = requestInteger(
  "Choisissez votre armure: \n 1-cuivre 2-fer 3-magique ",
  1,
  3
);

game.armes = requestInteger(
  "Choisissez votre arme: \n 1-bois 2-acier 3-Excalibur",
  1,
  3
);

game = initializeGame(game.difficulty, game.armure, game.armes);

// attackFromChevalier(game.armes, game.hpDragon);
// attackFromDragon(game.armure, game.hpChevalier);

// console.log("vous avez choisi la difficulté", game.difficulty);
// console.log("vous avez ce buff ", game.armure, "en armure");
// console.log("vous avez choisi ", game.armes, "comme arme");

console.log(
  "le chevalier a",
  game.hpChevalier,
  " Points de vie le dragon a",
  game.hpDragon,
  " points de vie"
);

// do {} while (game.hpChevalier > 0 && game.hpDragon > 0);

// TEST DE LA FONCTION REQUESTION
// console.log(
//   "question difficulté",
//   requestInteger("tu veux cb entre 5 balle et 8 balles", 5, 8)
// );
