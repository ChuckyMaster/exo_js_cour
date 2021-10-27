"use strict";

//VARIABLES

let difficulty, armes, armure;
let dragon = new Object();
dragon.life = 0;
dragon.attack = 0;

1;
let chevalier = new Object();
chevalier.life = 0;
chevalier.weapon = "";
chevalier.armor = "";
chevalier.attack = 0;

/**
 * @param {int} min 
 @param {int} max
 @return a value between min max
 * 
 */

//FONCTIONS

function getRandom(min, max) {
  let number = min + Math.floor(Math.random()) * (max - min);
  return number;
}

function randomPlayer(player1, player2) {
  let random = Math.floor(Math.random()) * 2;
  if ((random = 1)) {
    player2.life - player1.attack;
  } else {
    player1.life - player2.attack;
  }
}

//PRINCIPAL

do {
  difficulty = parseInt(
    prompt("choisissez une difficult? 1.Facile - 2.Normal - 3.Difficile ")
  );
} while (difficulty !== 1 && difficulty !== 2 && difficulty !== 3);

do {
  armes = parseInt(prompt("Choisissez une épée: 1.bois - 2.Acier 3.Excalibur"));
} while (armes !== 1 && armes !== 2 && armes !== 3);

do {
  armure = parseInt(
    prompt("Choisissez une armure: 1.Cuivre - 2.Fer - 3.magique")
  );
} while (armure !== 1 && armure !== 2 && armure !== 3);

switch (difficulty) {
  case 1:
    console.log((dragon.life = getRandom(150, 250)));
    console.log((chevalier.life = getRandom(200, 250)));
    console.log((chevalier.attack = getRandom(25, 30)));

    break;

  case 2:
    console.log((dragon.life = getRandom(200, 250)));
    console.log((chevalier.life = getRandom(200, 250)));
    console.log((dragon.attack = getRandom(15, 20)));
    break;

  case 3:
    console.log((dragon.life = getRandom(200, 250)));
    console.log((chevalier.life = getRandom(150, 200)));
    console.log((dragon.attack = getRandom(5, 10)));
    break;
}

switch (armes) {
  case 1:
    console.log((chevalier.attack = -0.5));
    break;

  case 3:
    console.log((chevalier.attack = 0.5));
    break;
}

switch (armure) {
  case 2:
    console.log((dragon.attack = -0.25));
    break;

  case 3:
    console.log((dragon.attack = -0.5));
    break;
}

do {
  randomPlayer(chevalier, dragon);
} while (chevalier.life > 0 || dragon.life > 0);
