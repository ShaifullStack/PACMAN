"use strict";

const WALL = "&#8251;";
const FOOD = "&middot;";
const EMPTY = " ";
const SUPERFOOD= '🍒'
var countFood =0;
  var gTotalFood= 60


const gGame = {
  score: 0,
  isOn: false,
};
var gBoard;

function init() {
  console.log("hello");

  gBoard = buildBoard();

  createPacman();
  createGhosts();
generateRandomHexColor()
 

  renderBoard(gBoard, ".board-container");
  var elBtn = document.querySelector(".modal");
  elBtn.style.display = "none";
  gGame.isOn = true;
 	setInterval(renderChari, 1000)
  
}

function buildBoard() {
  const size = 10;
  const board = [];

  for (var i = 0; i < size; i++) {
    board.push([]);

    for (var j = 0; j < size; j++) {
      board[i][j] = FOOD;

      if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        board[i][j] = WALL;
      }
    }
  }
  board[1][1] = board[1][size-2] = board[size-2][1] =board[size-2][size-2] = SUPERFOOD;


  board[5][3] = board[6][3] = board[7][3] = WALL;
  return board;
}

function updateScore(diff) {
  // Model
  gGame.score += diff;

  // DOM
  const elScore = document.querySelector(".score span");
  elScore.innerText = gGame.score;
  // console.log(gGame.score,diff);

  countFood++  
  if (gGame.score === gTotalFood)
  victorious()
if (gTotalFood.length < gGame.score) 
  console.log(gTotalFood.length , gGame.score);
  
}

function victorious() {
  var elModal = document.querySelector(".modal ");
  gGame.isOn = false;
  elModal.style.display = "block";

  var elSpan = document.querySelector('.modal span')
  console.log(elSpan);
  
  elSpan.innerText = 'You win'
  
  
}



function gameOver() {
  var elBtn = document.querySelector(".modal");
  gGame.isOn = false;
  elBtn.style.display = "block";
  
  console.log("Game Over");
}


function restGame() {
 gGhosts = []
   gGame.isOn = true;
  init()

}