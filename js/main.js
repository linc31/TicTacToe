// show if player 'X' or 'O' turn 

// provide 'X' or 'O' in individual td cells

// input 'X' or 'O' (mouseclick)

// game logic
    // identify winner
        // can win by 3 in a row, top, middle, bottom in X,Y coordinates and 2 diagonal 

    // identify cat's game
        // no winner (tie game)

// restart gameboard button

// if x + [0, 1, 2];
// && turn is > 4;
// then check if x occupies 0-2, 3-5, 6-8

var turnCount = 1;
var gameBoard = new Array(9);

function addChar(number){
    //check who's turn
    if (turnCount % 2 !== 0) { //check if it is an odd turn for X
    //check array if index is null
    if gameBoard[number] === null {
        // add chat to gambeboard at this index
        gameBoard[number] = 'X'
        //change view to display added char
        idWinner()
        } else {
            // do ^ for O
        }
    }
}

function idWinner(){
    // check if someone won
}


// idWinner (char)
//     boardArr[0, 1, 2, 3, 4, 5, 6, 7, 8] = null;

// // turn count = global variable
// if (turn[i] % 2 !== 0){
//     place 'O' in id;  //check if array is !null
// } else {
//     turn count ++1
// }

// if any id[0-8] is clicked
//     then check who's turn 
// if turn % 2 !== 0
//     = X turn
//  check if array is empty
// if boardArr[0]=== null
// add x to boardArr
// turn count +=1