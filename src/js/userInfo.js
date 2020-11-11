export default function UserInfo(name) {
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
  } else if (this.diceRoll > 1) {
    this.turntotal += this.diceRoll;
  }
}

UserInfo.prototype.winnerCheck = function () {
  if (this.total >= 100) {
    alert("You won! Huzzah!");
  }
}
