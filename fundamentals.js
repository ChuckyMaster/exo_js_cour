





// ARRAY

const friends = ["Michael", "popo", "toto"];

// ADD IN ARRAY

const newLength = friends.push("jay");
console.log(friends);
console.log(newLength);

friends.unshift("John"); //ajoute au debut
console.log(friends); // retourn length

//Remove elements in array

friends.pop(); // remove the last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // remove first
console.log(friends);
console.log(friends);

console.log(friends.indexOf("steven"));
//remove by index
console.log(friends.indexOf("bob")); //return -1

console.log(friends.includes("Steven")); // return true or false
console.log(friends.includes("Bob"));

if (friends.includes("Peter")) {
  console.log("you have a friend called Peter");
}



// calculat tip

const bill = 275;
const tip = bill <= 300 && >= 50 ? bill * 0.15 :
bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);