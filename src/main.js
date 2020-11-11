import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UserInfo from './js/userInfo.js';

$(document).ready(function () {
  let playerOne = new UserInfo("player one");
  let playerTwo = new UserInfo("player two");
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
    playerOne.winnerCheck();
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
    $(".p2-turntotal").text(playerTwo.turntotal);
    playerTwo.winnerCheck();
  });

});