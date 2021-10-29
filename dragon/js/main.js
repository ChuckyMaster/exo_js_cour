"use strict";

//VARIABLES
const btn = document.getElementById("btn");
let game = new Object();

game.armes;
game.armure;
game.difficulty;
game.chevDammage;
game.dragDammage;

//FONCTIONS

btn.addEventListener("click", function () {
  gameStart();
});

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

    speedDrag = getRandom(10, 20);
    console.log("le dragon a tiré au sort le numero: ", speedDrag);
    speedChev = getRandom(10, 20);
    console.log("le chevalier a tiré au sort le numero: ", speedChev);
    if (speedChev == speedDrag) continue;
    if (speedChev > speedDrag) {
      chevAttack = attackFromChevalier();
      game.hpDragon -= chevAttack;
    } else {
      dragonAtack = attackFromDragon();
      game.hpChevalier -= dragonAtack;

      document.querySelector("#game").innerHTML += `  <h3>Personnage PV</h3>
        <table>
         
        </table> <h3>---- Tour numero: ${i}----</h3> <p>Le dragon est plus rapide que vous et vous met ${chevAttack} de degats</p> `;
    }
    document.querySelector("#game").innerHTML += `  <h3>Personnage PV</h3>
    <table>
    <tr>
      <td>chevalier</td>
      <td>${game.hpChevalier}</td>
      </tr>
    <tr>
      <td>Dragon</td>
      <td>${game.hpDragon}</td>
      </tr>
    </table> <h3>---- Tour numero: ${i}----</h3> <p>Vous êtes plus rapide que le dragon et vous lui infligés ${chevAttack} de degats</p> `;

    i++;
  } while (
    // speed = getRandom(10, 20);

    game.hpChevalier > 0 &&
    game.hpDragon > 0
  );
  return;
}

function gameStart() {
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
  initializeGame(game.difficulty, game.armure, game.armes);

  gameLoop();
  showGameWinner();
}

function showGameWinner() {
  let inner = document.querySelector("#game");

  if (game.hpChevalier <= 0) {
    inner.insertAdjacentHTML(
      "beforebegin",
      ` <article><p>le gagnant est: DRAGON  </p> <img  src="./img/dragon.png" alt=""> </p>`
    );
  } else {
    inner.insertAdjacentHTML(
      "beforebegin",
      ` <article> <p>le gagnant est: CHEVALIER </p> <img  src="./img/knight.png" alt=""> `
    );
  }

  return;
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
//PRINCIPAL

// appel aux fonctions

console.log(
  "le chevalier a",
  game.hpChevalier,
  " Points de vie le dragon a",
  game.hpDragon,
  " points de vie"
);
