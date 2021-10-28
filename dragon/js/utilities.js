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

function attackFromDragon() {
  let dammage;
  if (game.difficulty == 1) {
    dammage = getRandom(10, 20) * game.armure;
  } else if (game.difficulty == 2) {
    dammage = getRandom(20, 30) * game.armure;
  } else {
    dammage = getRandom(20, 30) * game.armure;
  }
  console.log("here from dragon", dammage);
  return dammage;
}

function attackFromChevalier() {
  let dammage;
  if (game.difficulty == 1) {
    dammage = getRandom(25, 30) * game.armes;
  } else if (game.difficulty == 2) {
    dammage = getRandom(15, 20) * game.armes;
  } else {
    dammage = getRandom(5, 10) * game.armes;
  }
  console.log("here from chev", dammage);
  return dammage;
}

function requestInteger(question, min, max) {
  let number;
  do {
    number = parseInt(prompt(question));
  } while (number > max && number < min && isNaN(number));
  return number;
}

// APPEL TOUTES LES FONCTION POUR ENREGISTRER LES VALEURS
function initializeGame() {
  switch (game.difficulty) {
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

  switch (game.armes) {
    case 1:
      game.armes = 0.5;
      break;
    case 2:
      game.armes = 0;

    case 3:
      game.armes = 0.5;
      break;
  }

  switch (game.armure) {
    case 2:
      game.armure = 0.25;
      break;
    case 2:
      game.armure = 0;
    case 3:
      game.armure = 0.5;
      break;
  }

  console.log(
    " vous avez choisi la diffuculté numéro",
    game.difficulty,
    " l'armure du dragon a",
    game.armure,
    " de debuff",
    " Vous avez choisi l'arme numero ( oui numéro)",
    game.armes
  );
  return game;
}

function gameLoop() {
  let speed;
  let degats;
  let dragonAtack;
  let chevAttack;
  let speedDrag;
  let speedChev;
  let i = 1;
  do {
    console.log("round ", i);

    do {
      speedDrag = getRandom(10, 20);
      console.log("le dragon a tiré au sort le numero: ", speedDrag);
      speedChev = getRandom(10, 20);
      console.log("le chevalier a tiré au sort le numero: ", speedChev);

      if (speedChev > speedDrag) {
        chevAttack = attackFromChevalier();
        game.hpDragon -= chevAttack;
        console.log(
          "le chevalier attaque et inflige :",
          chevAttack,
          " de degats"
        );
      } else {
        dragonAtack = attackFromDragon();
        game.hpChevalier -= dragonAtack;
        console.log(
          "le chevalier attaque et inflige :",
          dragonAtack,
          " de degats"
        );
      }
    } while (speedDrag !== speedChev);

    i++;
  } while (
    // speed = getRandom(10, 20);

    game.hpChevalier > 0 &&
    game.hpDragon > 0
  );
  console.log(game.hpChevalier, degats);
}
