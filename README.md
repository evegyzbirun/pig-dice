# _Pig Dice Game_

#### By _**Evgeniya Meshuris and Evgeny Zbirun**_

#### _This is a dice game application._

## Technologies Used

- _HTML_
- _CSS_
- _JavaScript_
- _jQuery_

## Description

_This is a dice game application. Two players roll dices by turn until someone hit 100 score_

## Setup/Installation Requirements

- _Copy the repository URL named "pig-dice"_
- _Clone the copied repository to your computer_
- _Open the cloned directory named "pig-dice"_
- _From the top of this directory, open index.html_
- _Read the rules of the game_
- _Click Roll or Hold to get your score based on the rules_
- _Click Start Over if you want another game_

## Known Bugs

- _No bugs known_

## License

Licensed under the [MIT License](LICENSE)

Copyright (c) _2022_ _Evgeniya Meshuris and Evgeny Zbirun_

// ******************************\*\*\*\******************************* \\

Game rules:
When player clicks play, a dice will roll
Based off the dice roll, points will be added to current score of round
If player rolls a 1, he loses points for current round and next players turn
If a player wants to end his round , he can click Hold and it will push his points to his total score
Next players turn, same rules as above
Game ends when first player hits 100 points

Describe: diceRoll()
Test: "It should output a random number 1-6"
Code: diceRoll();
Expected Output: 1-6

Describe: toggleTurn();
Test: "It will add currentScore to totalScore to the first's or second's players based on id"
Code: this.id === 1
$("#totalScore1").text(this.totalScore);
$("#diceRoll1").text(0);
$("#currentScore1").text(5);
Expected Output: Player {1, 0, 5, 0}

Describe: on('click', function();
Test: "This will recognize when a score >= 100"
Code: const player1 = new Player1(1);
player1.totalScore + player1.currentScore >= 100;
Expected output: "Winner!"

Describe: reload();
Test: "This will reload the page when Start Over button clicked"
Code: reload();
Expected output: refreshed page
