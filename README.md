# Tic-Tac-Toe

#### January 25th, 2018


## Description

This is a webpage that allows two human players to play a game of tic-tac-toe. The page declares Tic Tac Toe at the top, along with the names of the creators. The body of the page has the tic-tac-toe hash. You play by clicking in the box you want to put your mark on. The first player is X's, and the second O's. If someone wins, the page will say which player has won. In the case of a tie game, the page will say it's a cat's game. When the game is either won or a draw, a button will appear that refreshes the page and allows the players to go again.

Link to gh-pages: https://eyesicedover.github.io/tic-tac-toe/

## Specs

1. Player 1 clicks on panel. An X appears on that panel.
* Example input: Player clicks on top left panel.
* Example output: Top left panel shows an X.

2. Player 2 clicks on a panel. An O appears on that panel.
* Example input: Player clicks on top left panel.
* Example output: Top left panel shows an X.

3. Program runs logic determining whether a player has won after every turn.
* Example input: Player 1 puts a second X in a row.
* Example output: The computer calls on backend logic telling it whether 1 of 12 possibilities are true. In this case, Player 1 has not won. Continue to next players turn.

4. Run through steps one through three until either player has three boxes in a row.
* Example input: Player one has top right box, top middle box, and top left box checked.
* Example output: "Player One Wins!"

5. If all spaces are checked, but neither player has three in a row, return cat's game.
* Example input: All boxes filled, no rows of three.  
* Example output: "Cat's game!"


## Built With

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery


## Versioning

Version 1.0

## Authors

**John Rykken and Stephanie Faber**

## License

This project is licensed under the MIT License.

## Acknowledgments

Copyright (c) 2018 **_John Rykken_** **_Stephanie Faber_**
