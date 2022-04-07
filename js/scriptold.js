// Business logic
//Constructor for each player//

function Player (id) {
  this.id = id;
  this.totalScore = 0;
  this.currentScore = 0;
  this.diceRoll = 0;
}
//Generate a random roll 1-6//
Player.prototype.roll = function() {
  return this.diceRoll = Math.floor(Math.random() * 6) + 1;
}

// totalScore counting
Player.prototype.addRolls = function() {
  if (this.diceRoll === 1) {
    this.currentScore = 0;
  }
  else  {
    this.totalScore += this.diceRoll;
  }
  return this.totalScore;
}

Player.prototype.winner = function() {
  if ((totalScore >= 100 || totalTwoScore >= 100)) {
    return alert("Game is Over"); 
  }
    else if (totalOneScore > totalTwoScore) 
    {
    return alert("Winner: " + "Player 1");
  }
  else {
    return alert("Winner: " + "Player 2");
  }
}

//Hold a currentScore
Player.prototype.hold = function() {
  this.totalScore += this.currentScore;
  this.currentScore = 0; //Reset roundScore to 0 for next turn (does NOT reset totalScore!)
  return this.totalScore; //shows total score on hold//
}

//Display which player and the number rolled
Player.prototype.details = function() {
  return "Points this Round = " + this.currentScore + "!";
}

document.getElementById("Button1").addEventListener("click", functionName1);
document.getElementById("Button1").addEventListener("click", functionName2);

$(document).ready(function(){
  //Variables in the player constuctor (instances of Player object)
    var newPlayer = new Player("Player 1");
    var newPlayer2 = new Player("Player 2");

  //   //Click Player 1 ROLL
  // $("#button-dice").click(function(){
  //   var roll = newPlayer.roll();
  //   newPlayer.addRolls(); //Call .addRolls method on newPlayer
  //   var details = newPlayer.details();

  //   $("#diceOneDisplay").text(roll);
  //   $("#currentOneScore").text(details);
  //   $("#")
  // });

  

  // //Click Player 2 ROLL
  // $("#pTwoRoll").click(function(){
  //   var displayRoll = newPlayer2.roll();
  //   newPlayer2.addRolls(); //Call .addRolls method on newPlayer2
  //   var details = newPlayer2.details();

  //   $("#diceTwoDisplay").text(displayRoll);
  //   $("#currentTwoScore").text(details);
  // });

  //Click HOLD
  $(".hold").click(function(){
    var playerOneHold = newPlayer.hold();
    $("#totalOneScore").text(playerOneHold);

    var playerTwoHold = newPlayer2.hold();
    $("#currentTwoScore").text(playerTwoHold);

  });
});

