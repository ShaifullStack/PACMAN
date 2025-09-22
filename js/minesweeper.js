"use strict";

var gBoard;
const WOOL = "⬜️";
const FLAG= "🚩"
const BOOMS = "💣";

//The model
var gBoard =
{
 minesAroundCount: 4,
 isRevealed: false,
 isMine: false,
 isMarked: false
}

gLevel = {
 SIZE: 4,
 MINES: 2
}

var gGame = {
 isOn: false,
 revealedCount: 0,
 markedCount: 0,
 secsPassed: 0
}



function init() {
  console.log("hello");

  gBoard = buildBoard();

  renderBoard(gBoard, ".board-container");

}

function buildBoard() {
  const SIZE = 4;
  const board = [];

  for (var i = 0; i < SIZE; i++) {
    board.push([]);

    for (var j = 0; j < SIZE; j++) {
      board[i][j] = WOOL;

      if (i === 0 || i === SIZE - 1 || j === 0 || j === SIZE - 1) {
        board[i][j] = WOOL;
      }
    }
  }
  board[1][1] =
    board[2][SIZE - 1] =
    board[SIZE - 3][1] =
    board[SIZE - 4][SIZE - 1] =
      BOOMS;

  // board[2][3] = board[1][3] = board[6][1] = BOOMS;
  return board;
}


function setMinesNegsCount(board){

}


function renderBoard(board) {

}
function onCellClicked(elCell, i, j) {

}

function onCellMarked(elCell, i, j) {

}


function checkGameOver() {

}

function expandReveal(board, elCell,
i, j){

}

