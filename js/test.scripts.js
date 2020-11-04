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

UserInfo.prototype.totals = function() {
  this.total += this.turntotal;
  this.turntotal = 0;
}

UserInfo.prototype.turnTotals = function() {
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
playerOne.turnTotals();
console.log("Dice Roll: " + roll);
console.log(playerOne);


playerOne.turnTotals();
console.log("Dice Roll: " + roll);
console.log(playerOne);

playerOne.totals();
console.log(playerOne);





