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

// Allows for all the square spans to be modified
const squares = document.querySelectorAll(".square");

// Creates two players that will be alternated per turn
let isPlayerOneTurn = true;
let isPlayerTwoTurn = false;

console.log(`It is Player One's Turn`);

// Hides the Player turns for now
    $(`#player1Turn`).hide();
    $(`#player2Turn`).hide();

// Holds all the winning patterns
const winningPatternPatterns = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

// Stores the Players' squares
const player1Squares = [];
const player2Squares = [];


// Function that compares the the numbers between the player squares and the winning squares
// const compareSquares = (playerSquares, winningSquares) => {
//     for (let i = 0; i < playerSquares.length; i++) {
//         if (playerSquares)}
// };

// Game starts here, loops through after a square is clicked
squares.forEach((square) => {
    
    // Event listener for every time a square is clicked
    square.addEventListener("click", (square) => {

        // Creates an index to hold the current index number
        const index = square.target.dataset.index;
        console.log(`Square ${index} clicked`);

        // If statement that switches between Player 1 and 2's turns per click
        if(isPlayerOneTurn) {

            // If statement that prevents the player from overriding another player's choice
            if((square.target.textContent != `o`) && (square.target.textContent != `x`)){
                $(square.target).text(`o`);
                player1Squares.push(index);
                isPlayerOneTurn = false;
                isPlayerTwoTurn = true;
                console.log(player1Squares);
                console.log(`It is Player Two's Turn`);
            }
        } else if((square.target.textContent != `o`) && (square.target.textContent != `x`)) {
            if(square.target.textContent != `x`){
                $(square.target).text(`x`);
                player2Squares.push(index);
                isPlayerTwoTurn = false;
                isPlayerOneTurn = true;
                console.log(player2Squares);
                console.log(`It is Player One's Turn`);
            } 
        };
    });    
});

