let roll = function rollDice() {
  return = 1 + Math.floor(Math.random() * 6);
}

function UserInfo(name) {
  this.name = name;
  this.rollEvent = 0;
  this.turntotal = 0;
  this.total = 0;
}

UserInfo.prototype.addRollDice = function(roll) {
  if (this rollEvent === 1) {
  this.turntotal = 0;
 //alert (your turn is over)
  } else {
    this.turntotal += this.rollEvent;
  }
}

let playerOne = new UserInfo ("player one")
//let playerTwo = new UserInfo ("player two")

playerOne.addRollDice();

playerOne.roll = rollDice();

console.log(roll);
console.log(playerOne.turntotal);