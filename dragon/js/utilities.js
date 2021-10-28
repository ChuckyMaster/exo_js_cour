/**
 * @param {int} min
 * @param {int} max
 * @return a value between min max
 *
 */

//FONCTIONS

function getRandom(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}

function requestInteger(question, min, max) {
  let number;
  do {
    number = parseInt(prompt(question));
  } while (number > max && number < min && isNaN(number));
  return number;
}

// function display() {
//   let htmlTab = "<table>";
//   "le chevalier attaque et inflige :", chevAttack, " de degats";
//   htmlTab += "</table>";
//   return;
// }
// APPEL TOUTES LES FONCTION POUR ENREGISTRER LES VALEURS

// document.querySelector("#game").innerHTML += `  h3>Personnage PV</h3>
// <table>
//   <td>Chevalier</td>
//   <td>${game.hpDragon}</td>
// </table> <h3>---- Tour numero: ${i}----</h3> <p>Le dragon est plus rapide que vous et vous met ${chevAttack} de degats</p> `;

// document.querySelector("#game").innerHTML += `  h3>Personnage PV</h3>
//       <table>
//         <td>Chevalier</td>
//         <td>${game.hpChevalier}</td>
//       </table> <h3>---- Tour numero: ${i}----</h3> <p>Vous êtes plus rapide que le dragon et vous lui infligés ${chevAttack} de degats</p> `;
