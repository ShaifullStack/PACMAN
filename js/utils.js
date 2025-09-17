'use strict'

function renderBoard(mat, selector) {

    var strHTML = '<table><tbody>'
    for (var i = 0; i < mat.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < mat[0].length; j++) {

            const cell = mat[i][j]
            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}">${cell}</td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'
    
    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}

// location is an object like this - { i: 2, j: 7 }
function renderCell(location, value) {
    // Select the elCell and set the value
    const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    elCell.innerHTML = value
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // Pad with leading zeros if the hex code is less than 6 characters
  return `#${randomColor.padStart(6, '0')}`;
}

function renderChari() {
    var i = getRandomIntInclusive(1, gBoard.length -1)
    var j = getRandomIntInclusive(1, gBoard[0].length -1)

    var cell = gBoard[i][j]

    if (cell === EMPTY ) {
        cell = SUPERFOOD
        renderCell({ i, j }, SUPERFOOD)
    }

}