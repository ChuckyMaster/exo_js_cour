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
