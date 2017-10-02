// show if player 'X' or 'O' turn 

// provide 'X' or 'O' in individual td cells

// input 'X' or 'O' (mouseclick)

// game logic
    // identify winner
        // can win by 3 in a row, top, middle, bottom in X,Y coordinates and 2 diagonal 

    // identify cat's game
        // no winner (tie game)

// restart gameboard button


/*----- Functions -----*/

function startGame() {
    for (var i = 1; i <= 9; i++) {
        restart(i);
}
}

function nextMove(box) {
    box.innerText = document.turn;
    addChar();
}

function addChar() {     //check who's turn
    if (document.turn == "X") {
        document.turn = "O";
    } else {
        document.turn = "X"
    }
}

function restart(number) {
    document.getElementById("box" + number).innerText = "";
}

// check if someone won
// function idWinner(checkFor){
//     var point = checkFor[checkFor.length - 1],
//     rest = checkFor.slice(0, checkFor.length - 1),
//     idWinner;
//     if (gameBoard[0, 1, 2] === 'x') {
//         win();
//     } else {
//         if (gameboard) {
//         return false;
//         }
//     }
    // loop thru array and check for conditions

    // set char to check for
    // if add turn check for x if even check for o

//     }
// }

// // check for winning conditions
//     function checkWinners(marksArray, name) {
//         for (i = 0; i < winning.length; i++) {
//             var numWins = 0;
//         for (var j = 0; j < winning[i].length; j++) {
//             if(marksArray.indexOf(winning[i][j] !== -1)) {
//                 numWins++;
//             }
//             if(numWins === 3) {
//                 alert("Game over: " + name + " wins!");
//                 playNewGame();
//             }
//         }
//     }
// }

// function win() {
    // show message
    // prevent player from adding more char
    // reset gameboard
// }
