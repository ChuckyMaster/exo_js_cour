/**
 * @param {int} min
 * @param {int} max
 * @return a value between min max
 *
 */

//FONCTIONS

function getRandom(min, max) {
  let number = min + Math.floor(Math.random()) * (max - min);
  return number;
}

function attackFromDragon(armure, hpChevalier) {
  if ((difficulty = 1)) {
    hpChevalier -= getRandom(10, 20) * armure;
  } else if ((difficulty = 2)) {
    hpChevalier -= getRandom(20, 30) * armure;
  } else {
    hpChevalier -= getRandom(20, 30) * armure;
  }

  return hpChevalier;
}

function attackFromChevalier(armes, hpDragon) {
  if ((difficulty = 1)) {
    hpDragon -= getRandom(25, 30) * armes;
  } else if ((difficulty = 2)) {
    hpDragon -= getRandom(15, 20) * armes;
  } else {
    hpDragon -= getRandom(5, 10) * armes;
  }

  return hpDragon;
}

function requestInteger(question, min, max) {
  let number;
  do {
    number = parseInt(prompt(question));
  } while (number > max && number < min && isNaN(number));
  return number;
}

// APPEL TOUTES LES FONCTION POUR ENREGISTRER LES VALEURS
function initializeGame(difficulty, armure, armes) {
  let game = new Object();
  switch (difficulty) {
    case 1:
      "Le dragon a", (game.hpDragon = getRandom(150, 250)), " Points de vie";

      "vous avez", (game.hpChevalier = getRandom(200, 250));
      "point de vie";

      break;

    case 2:
      "Le dragon a", (game.hpDragon = getRandom(200, 250));
      " Points de vie";

      "vous avez", (game.hpChevalier = getRandom(200, 250)), "point de vie";

      break;

    case 3:
      "Le dragon a", (game.hpDragon = getRandom(200, 250));
      " Points de vie";

      "vous avez", (game.hpChevalier = getRandom(150, 200));
      "point de vie";
      break;
  }

  switch (armes) {
    case 1:
      game.armes = 0.5;
      break;

    case 3:
      game.armes = 0.5;
      break;
  }

  switch (armure) {
    case 2:
      game.armure = 0.25;
      break;

    case 3:
      game.armure = 0.5;
      break;
  }

  console.log(
    " vous avez choisi la diffuculté numéro",
    difficulty,
    " l'armure du dragon a",
    game.armure,
    " de debuff",
    " Vous avez choisi l'arme numero ( oui numéro)",
    game.armes
  );
  return game;
}

function gameLoop(player1, player2) {
  do {
    for (let i = 0; i; i++) {
      console.log("round", i);
    }
    player1 = getRandom(10, 20);
    player2 = player1 - 20;
  } while (hpChevalier > 0 && hpDragon > 0 && round >= 0);
}
