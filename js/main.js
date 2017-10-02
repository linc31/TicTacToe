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

/*----- Variables -----*/
var turnCount = 1;
var gameBoard = new Array(9);
var xMark = [];
var oMark = [];
var winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

var boxes = document.getElementsByClassName('box');
for (var i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', addChar);
}

/*----- Event Listeners -----*/
document.querySelector('td').addEventListener('click', addChar);
document.querySelector('button').addEventListener('click', resetBoard);


/*----- Functions -----*/

//click function
function mouseClick() {
    //when this id is clicked
    addChar(xMark, oMark);
}

function addChar(event) {     //check who's turn
    if (turnCount % 2 !== 0) { //check if it is an odd turn for X
    xMark.push(event.target.id);
    if gameBoard[number] === null { //check array if index is null
        addChar(gameBoard[i]); // add char to gambeboard at this index
        gameBoard[number] = 'x';
        //change view to display added char
        // check for winner
        // if turncount is greater than 4
        if(turnCount > 4) {
            console.log(xMark);
            event.target.innerHTML = "X";
        } else {
            if(turnCount += 1) {
            return idWinner = 'o';
            }
        }
        idWinner('x')
        } else {
            // do ^ for O
        }
        idWinner('o')
    }
}

// check if someone won
function idWinner(checkFor){
    var point = checkFor[checkFor.length - 1],
    rest = checkFor.slice(0, checkFor.length - 1),
    idWinner;
    if (gameBoard[0, 1, 2] === 'x') {
        win();
    } else {
        if (gameboard) {
        return false;
        }
    }
    // loop thru array and check for conditions

    // set char to check for
    // if add turn check for x if even check for o

    }
}

// check for winning conditions
    function checkWinners(marksArray, name) {
        for (i = 0; i < winning.length; i++) {
            var numWins = 0;
        for (var j = 0; j < winning[i].length; j++) {
            if(marksArray.indexOf(winning[i][j] !== -1)) {
                numWins++;
            }
            if(numWins === 3) {
                alert("Game over: " + name + " wins!");
                playNewGame();
            }
        }
    }
}

function win() {
    // show message
    // prevent player from adding more char
    // reset gameboard
}

function resetBoard() {
    for (var i = 0; i < gameBoard.length; i++) {
        gameBoard[i].innerHTML = '';
    }
    playerTurn = 0;
}