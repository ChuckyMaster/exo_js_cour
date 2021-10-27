"use strict";

//VARIABLES

let game = new Object();
game.hpDragon;
game.hpChevalier;
game.armes;
game.armure;
game.difficulty;

// hpDragon -= getRandom(25, 30) * armure

// function randomPlayer(player1, player2) {
//   let random = Math.floor(Math.random()) * 2;
//   if ((random = 1)) {
//     player2.life - player1.attack;
//   } else {
//     player1.life - player2.attack;
//   }
//   console.log(random);
//   return;
// }

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

attackFromChevalier(game.armes, game.hpDragon);
attackFromDragon(game.armure, game.hpChevalier);

console.log("vous avez choisi la difficulté", game.difficulty);
console.log("vous avez choisi ", game.armure, " comme armure");
console.log("vous avez choisi ", game.armes, "comme arme");

switch (game.difficulty) {
  case 1:
    console.log(
      "Le dragon a",
      (game.hpDragon = getRandom(150, 250)),
      " Points de vie"
    );
    console.log(
      "vous avez",
      (game.hpChevalier = getRandom(200, 250)),
      "point de vie"
    );

    break;

  case 2:
    console.log(
      "Le dragon a",
      (game.hpDragon = getRandom(200, 250)),
      " Points de vie"
    );
    console.log(
      "vous avez",
      (game.hpChevalier = getRandom(200, 250)),
      "point de vie"
    );

    break;

  case 3:
    console.log(
      "Le dragon a",
      (game.hpDragon = getRandom(200, 250)),
      " Points de vie"
    );
    console.log(
      "vous avez",
      (game.hpChevalier = getRandom(150, 200)),
      "point de vie"
    );
    break;
}

switch (game.armes) {
  case 1:
    console.log((game.armes = 0.5));
    break;

  case 3:
    console.log((game.armes = 0.5));
    break;
}

switch (game.armure) {
  case 2:
    console.log((game.armure = 0.25));
    break;

  case 3:
    console.log((game.armure = 0.5));
    break;
}

// do {} while (game.hpChevalier > 0 && game.hpDragon > 0);

// TEST DE LA FONCTION REQUESTION
// console.log(
//   "question difficulté",
//   requestInteger("tu veux cb entre 5 balle et 8 balles", 5, 8)
// );
