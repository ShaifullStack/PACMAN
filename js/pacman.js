"use strict";

const PACMAN = "😷";
var gPacman;

function createPacman() {
  // TODO: initialize gPacman...
  gPacman = {
    pos: { i: 4, j: 6 },
    isSuper: false,
  };
  gBoard[gPacman.pos.i][gPacman.pos.j] = PACMAN;

}

function movePacman(ev) {
  if (!gGame.isOn) return;

  // TODO: use getNextLocation(), nextCell
  const nextPos = getNextLocation(ev);
  if (!nextPos) return;

  // TODO: return if cannot move
  if (gBoard[nextPos.i][nextPos.j] === WALL) return;

  // TODO: hitting a ghost? call gameOver

  if (gBoard[nextPos.i][nextPos.j] === GHOST) {
    if (!gPacman.isSuper === true) {
        gameOver();
      return;
     } else{
           for (var i = 0; i < gGhosts.length; i++) {
    var ghost = gGhosts[i]
    ghost.color=          generateRandomHexColor();
    ghost.isEaten = true;

  }
     }
    
  }
  
  // TODO: hitting food? call updateScore
  if (gBoard[nextPos.i][nextPos.j] === FOOD)  updateScore(1)
  if (gBoard[nextPos.i][nextPos.j] === SUPERFOOD){    
     updateScore(10), gPacman.isSuper = true;
    for (var i = 0; i < gGhosts.length; i++) {
    var ghost = gGhosts[i]
    ghost.color= 'blue' 
  }
  if (ghost.color=== 'blue'&& gPacman.isSuper ) {
    console.log(gPacman ,ghost.color);
    setTimeout((()=>{
      gPacman.isSuper=false} 
      ,5000))
    
  }
}

  // TODO: moving from current location:
  // TODO: update the model
  gBoard[gPacman.pos.i][gPacman.pos.j] = EMPTY;
   if ( gBoard[gPacman.pos.i][gPacman.pos.j]=== EMPTY) {

      setTimeout(()=> {gBoard[gPacman.pos.i][gPacman.pos.j]=SUPERFOOD}
      ,150)
   }
  // TODO: update the DOM
  renderCell(gPacman.pos,EMPTY);

  // TODO: Move the pacman to new location:
  // TODO: update the model
  gPacman.pos = nextPos;
  gBoard[gPacman.pos.i][gPacman.pos.j] = PACMAN;

  // TODO: update the DOM
  renderCell(gPacman.pos, PACMAN);
}

function getNextLocation(eventKeyboard) {
  var nextLocation = { i: gPacman.pos.i, j: gPacman.pos.j };

  switch (eventKeyboard.key) {
    case "ArrowUp":
      nextLocation.i--;
      break;

    case "ArrowDown":
      nextLocation.i++;
      break;

    case "ArrowLeft":
      nextLocation.j--;
      break;

    case "ArrowRight":
      nextLocation.j++;
      break;

    default:
      return null;
  }
  return nextLocation;
}
