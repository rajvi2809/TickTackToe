Rajvi Khatri
202412079
IT643 – Assignment 1

Rock Paper Scissors – Concepts

1. Player
Context:
 Represents the human user playing the game.
Selects one of the three moves (Rock, Paper, or Scissors) by clicking a button.


Score increments when the player's chosen move beats the computer's move.



2. Computer
Context:
 Acts as the system-generated opponent.
Randomly selects a move (Rock, Paper, or Scissors) using game logic.


Score increments when the computer’s move beats the player’s move.



3. Move Buttons
Context:
 Three buttons/icons: Rock, Paper, Scissors.
Capture the player's input when clicked.


Trigger the game logic to compare the selected move with the computer’s move.



4. Scoreboard
Context:
 Displays the current scores of Player and Computer.
Updates dynamically after every round based on the game result.


Provides a quick overview of who is leading in the game.



5. Result Display
Context:
 Shows the outcome of each round in text form:
Example messages:


“You Win! Scissor beats Paper”


“Computer Wins! Rock beats Scissor”


“It’s a Draw!”


Uses color or design to highlight the result message.



6. Reset Button
Context:
 Resets the Player and Computer scores to 0.
Clears the result message and prepares the game for a new session.


Provides a way to restart the game at any time.



7. Game Logic
Context:
 Compare the Player’s move with the Computer’s move.
Determines the round result (Win/Loss/Draw) based on the rules:



//Normal read me file for better understanding
Rock beats Scissors


Scissors beat Paper


Paper beats Rock


Updates the scoreboard and result display.





Overview


A classic Tic-Tac-Toe game built for web browsers where players alternate between X and O.

Features


Interactive 3×3 game board

Turn-based gameplay (X and O alternate)

Automatic win/draw detection

Visual winner announcement

New Game and Reset buttons

Score tracking (through UI elements)

How to Play


Open the game in your browser

Players take turns clicking empty boxes:

First player is always O

Second player is X

The game automatically:

Detects winning patterns (3 in a row)

Announces draws when board is full

Use buttons to:

Start a New Game

Reset the current game

Game Rules


Players alternate placing their marks (O and X)

First to get 3 marks in a row (horizontal, vertical or diagonal) wins

Game ends in draw if all boxes are filled without a winner

Controls


Mouse Click: Place your mark in an empty box

New Game Button: Start fresh with clean board

Reset Button: Restart current game

No additional installations needed

Running the Game


Simply open the HTML file containing this JavaScript in your browser.

Enjoy the game! ❌⭕
