/**
 * 
 *  Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.

        Create a Tic-Tac-Toe game grid using your HTML element of choice.
        When a cell in the grid is clicked, an X or O should appear in that spot depending on whose 
            turn it is.
        A heading should say whether it is X's or O's turn and change with each move made.
        A button should be available to clear the grid and restart the game.
        When a player has won, or the board is full and the game results in a draw, a Bootstrap 
            alert or similar Bootstrap component should appear across the screen announcing the winner.
 * 
 */

// Selects all square classes to be called upon
const squares = document.querySelectorAll(`.square`);

// Creates two players that will be alternated per turn
const player1 = `X`;
const player2 = `O`;

// Sets the current player
let currentPlayer = ``;

// Sets whether a winner can be declared
let winner = false;

// Hides the Player turns/wins/draw alerts for now
    $(`#player1Turn`).hide();
    $(`#player2Turn`).hide();
    $(`#player1Wins`).hide();
    $(`#player2Wins`).hide();
    $(`#draw`).hide();

// Every square is labeled out to be compared to winning patterns
let square1 = $(`#square1`);
let square2 = $(`#square2`);
let square3 = $(`#square3`);
let square4 = $(`#square4`);
let square5 = $(`#square5`);
let square6 = $(`#square6`);
let square7 = $(`#square7`);
let square8 = $(`#square8`);
let square9 = $(`#square9`);

// Holds all the winning patterns
const winningPatternPatterns = [
    [square1,square2,square3],
    [square4,square5,square6],
    [square7,square8,square9],
    [square1,square4,square7],
    [square2,square5,square8],
    [square3,square6,square9],
    [square1,square5,square9],
    [square3,square5,square7]
]

// Turns taken
let gameTurns = 0;

// Used when the game ends
let gameEnd = () => {
    $(`.square`).off('click');
}

// Checks if there is a winner by comparing currentPlayer to winningPatternPatterns array
const checkWinner = (currentPlayer, a, b, c) => {
    
    // If a winner is determined, this will run
    if (a.text() === currentPlayer && b.text() === currentPlayer && c.text() === currentPlayer) {
        winner = true;

        // highlights winning squares
        a.addClass(`text-info bg-dark`);
        b.addClass(`text-info bg-dark`);
        c.addClass(`text-info bg-dark`);

        if(currentPlayer === player1) {
            $(`#player1Turn`).hide();
            $(`#player2Turn`).hide();
            $(`#player1Wins`).show();
            currentPlayer = `Player 1`;
        } else {
            $(`#player1Turn`).hide();
            $(`#player2Turn`).hide();
            $(`#player2Wins`).show();
            currentPlayer = `Player 2`;
        }

        console.log(`${currentPlayer} Wins!!`);
        gameEnd();
    }
}

// When called, compares the squares of the currentPlayer and the winning patterns
const compareSquares = () => {
    checkWinner(currentPlayer, ...winningPatternPatterns[0])
    checkWinner(currentPlayer, ...winningPatternPatterns[1])
    checkWinner(currentPlayer, ...winningPatternPatterns[2])
    checkWinner(currentPlayer, ...winningPatternPatterns[3])
    checkWinner(currentPlayer, ...winningPatternPatterns[4])
    checkWinner(currentPlayer, ...winningPatternPatterns[5])
    checkWinner(currentPlayer, ...winningPatternPatterns[6])
    checkWinner(currentPlayer, ...winningPatternPatterns[7])

    // This ends the game if it's a draw
    if(gameTurns === 9 && winner === false) {
        gameEnd();
        $(`#player1Turn`).hide();
        $(`#player2Turn`).hide();
        $(`#draw`).show();
    }
}

// Code block containing the underlying logic
const gameStart = () => {

    $(`#startUp`).hide();
    $(`#player1Turn`).show();
    currentPlayer = player1;
    console.log(`It's player 1's turn!`)
    
    // For loop that iterates through each square per click
    squares.forEach(() => {
    
        // Event listener for every time a square is clicked
        $(`.square`).on(`click`, function(){

            // If statement that switches between Player 1 and 2's turns per click
            if(currentPlayer === player1) {

                // If statement that prevents the player from overriding another player's choice
                if((this.textContent !== `O`) && (this.textContent !== `X`)){
                    $(this).text(currentPlayer);

                    gameTurns++
                    $(`#player1Turn`).hide();
                    $(`#player2Turn`).show();
                    
                    // When game turns are over 4, starts checking winners
                    if(gameTurns > 4) {
                        compareSquares();
                    };

                    currentPlayer = player2;
                    console.log(gameTurns);
                    console.log(`It is Player Two's Turn`);
                }
            } else {
                if((this.textContent !== `O`) && (this.textContent !== `X`)){
                    $(this).text(currentPlayer);
                    
                    gameTurns++
                    $(`#player2Turn`).hide();
                    $(`#player1Turn`).show();
                    
                    if(gameTurns > 4) {
                        compareSquares();
                    };

                    currentPlayer = player1;
                    console.log(gameTurns);
                    console.log(`It is Player One's Turn`);
                };
            };
        }); 
    });
};

// Resets the entire game, no page reloading
const gameReset = () => {
    currentPlayer = ``;
    gameTurns = 0;
    winner = false;

    $(`#player1Turn`).hide();
    $(`#player2Turn`).hide();
    $(`#player1Wins`).hide();
    $(`#player2Wins`).hide();
    $(`#draw`).hide();

    $(`.square`).text(``);
    $(`.square`).removeClass(`text-info bg-dark`);

    if(currentPlayer === ``){
        gameStart();
    }
};

document.getElementById(`buttonStart`).addEventListener(`click`, () => gameStart());
document.getElementById(`buttonRestart`).addEventListener(`click`, () => gameReset());