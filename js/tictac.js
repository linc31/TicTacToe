var littleBoxes = document.getElementsByClassName('box');
for (var i = 0; i < littleBoxes.length; i++) {
    littleBoxes[i].addEventListener('click', addPlayerMark);
}

var turnCount = 1;
var xMark = [];
var oMark = [];
var winningCombos = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"],
["1", "4", "7"],["2", "5", "8"], ["3", "6", "9"],
["1", "5", "9"],["3", "5", "7"]];

function addChar(evnt) {
    if (event.target.innerHTML.length === 0) {
        if (turnCount % 2 === 0) {
            xMark.push(event.target.id);
            console.log(xMark);
            event.target.innerHTML = "X";
            event.target.style.background = "red";
        } else {
            oMark.push(event.target.id);
            console.log(oMark);
            event.target.innerHTML = "O";
            event.target.style.background = "blue";
        }
    } else {
        alert("Try again!");
    }
    turnCount++;
    checkWin(xMark, "X");
    checkWin(oMark, "O");
    if (turnCount === 9) {
        alert("Cat's Game!");
    }
}

function checkWinners(marksArray, name) {
    for (i = 0; i < winningCombos.length; i++) {
        var numWins = 0;
    for (var j = 0; j < winningCombos[i].length; j++) {
        if(marksArray.indexOf(winningCombos[i][j] !== -1)) {
            numWins++;
        }
        if(numWins === 3) {
            alert("Game over: " + name + " wins!");
            playNewGame();
        }
    }
    }
}

// checkWin = function (arr) {
//     var point = arr[arr.length - 1],
//      rest = arr.slice(0, arr.length - 1),
//      winningTiles;
//    if (arr.length < 1) { return false; }
//    winningTiles = point.wins(rest);
//    if (winningTiles.length > 0) { return winningTiles; } else { return false; }
//  };