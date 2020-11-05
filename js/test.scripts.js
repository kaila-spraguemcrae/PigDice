//business logic

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

function winner(player) {
  if (playerOne.total >= 100){
    alert("Player One Won!");
  } else if (playerTwo.total >= 100){
    alert('Player Two Won!');
  }
}

let playerOne = new UserInfo ("player one");
let playerTwo = new UserInfo ("player two");

playerTwo.total = 100

//UI Logic
$(document).ready(function(){
  $("#button").click(function(){
    $(".game-board").show();
    $(".intro").hide();
  });
});




//-------How to call:--------

// playerOne.turnTotals();
// console.log("Dice Roll: " + roll);
// console.log("turn total: " + playerOne.turntotal);


// playerOne.turnTotals();
// console.log("Dice Roll: " + roll);
// console.log("turn total: " + playerOne.turntotal);

// playerOne.totals();
// console.log("total: " + playerOne.total);

// playerOne.turnTotals();
// console.log("Dice Roll: " + roll);
// console.log("turn total: " + playerOne.turntotal);


// playerOne.turnTotals();
// console.log("Dice Roll: " + roll);
// console.log("turn total: " + playerOne.turntotal);

// playerOne.totals();
// console.log("total: " + playerOne.total);

//--------------

// winner(playerOne);


