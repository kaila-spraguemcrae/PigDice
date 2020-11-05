//business logic

// function rollDice() {
//   let randomNumber = 1 + Math.floor(Math.random() * 6);
//   return randomNumber;
// }


function UserInfo(name) {
  this.name = name;
  this.diceRoll = 0;
  this.turntotal = 0;
  this.total = 0;
}
UserInfo.prototype.diceRolls = function () {
  this.diceRoll = 1 + Math.floor(Math.random() * 6);
}


UserInfo.prototype.totals = function () {
  this.total += this.turntotal;
  this.turntotal = 0;
}

UserInfo.prototype.turnTotals = function () {
  if (this.diceRoll === 1) {
    this.turntotal = 0;
    alert("You rolled a 1! Your turn is over")
  } else if (this.diceRoll > 1) {
    this.turntotal += this.diceRoll;
  }
}

function winner(player) {
  if (playerOne.total >= 100) {
    alert("Player One Won!");
  } else if (playerTwo.total >= 100) {
    alert('Player Two Won!');
  }
}

let playerOne = new UserInfo("player one");
let playerTwo = new UserInfo("player two");

// UI Logic
$(document).ready(function () {
  $("#button").click(function () {
    $(".game-board").show();
    $(".intro").hide();
  });


  $("#p1-roll").click(function () {
    playerOne.diceRolls();
    $("#placeholder1").text(playerOne.diceRoll);
    playerOne.turnTotals();
    $(".p1-turntotal").text(playerOne.turntotal);
  });

  $("#p1-hold").click(function () {
    playerOne.totals();
    $(".p1-total").text(playerOne.total);
    $(".p1-turntotal").text(playerOne.turntotal);
    winner(playerOne.total);
  });

  $("#p2-roll").click(function () {
    playerTwo.diceRolls();
    $("#placeholder2").text(playerTwo.diceRoll);
    playerTwo.turnTotals();
    $(".p2-turntotal").text(playerTwo.turntotal);
  });

  $("#p2-hold").click(function () {
    playerTwo.totals();
    $(".p2-total").text(playerTwo.total);
    $(".p2-turntoal").text(playerTwo.turntotal);
    winner(playerTwo.total);
  })

});