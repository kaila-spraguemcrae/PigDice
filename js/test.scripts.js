function rollDice() {
  return 1 + Math.floor(Math.random() * 6);
}
let roll = rollDice();

function UserInfo(name) {
  this.name = name;
  this.rollEvent = 0;
  this.turntotal = 0;
  this.total = 0;
}

UserInfo.prototype.rollDice = function(){
  this.rollEvent = roll;
}

UserInfo.prototype.addRollDice = function() {
  if (roll === 1) {
  this.turntotal = 0;
 //alert (your turn is over)
  } else {
    this.turntotal += roll;
  }
}

let playerOne = new UserInfo ("player one")
//let playerTwo = new UserInfo ("player two")

playerOne.addRollDice();

console.log(roll);

console.log(playerOne);

//

function rollDice() {
  return 1 + Math.floor(Math.random() * 6);
}

let roll = rollDice();

function UserInfo(name) {
  this.name = name;
  //this.rollEvent = 0;
  this.turntotal = 0;
  this.total = 0;
}

/* UserInfo.prototype.rollDice = function(){
  this.rollEvent = roll;
}
 */
UserInfo.prototype.addRollDice = function() {
	
  if (roll === 1) {
    this.turntotal = 0;
 //alert (your turn is over)
  } else if (roll > 1) {
    this.turntotal += roll;
  }
  
}

let playerOne = new UserInfo ("player one")
//let playerTwo = new UserInfo ("player two")

/* playerOne.addRollDice(); */
playerOne.addRollDice();
console.log("Dice Roll: " + roll);
console.log(playerOne);
playerOne.addRollDice();
console.log("Dice Roll: " + roll);
console.log(playerOne);
playerOne.addRollDice();
console.log("Dice Roll: " + roll);
console.log(playerOne);


/* console.log(playerOne.addRollDice()); */

console.log(playerOne);
