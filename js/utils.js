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

function renderBooms() {
    var i = getRandomIntInclusive(1, gBoard.length -1)
    var j = getRandomIntInclusive(1, gBoard[0].length -1)

    var cell = gBoard[i][j]

    if (cell === BOOMS ) {
        cell = BOOMS
        renderCell({ i, j }, BOOMS)
    }

}


















function shuffle(items) {
    for (var i = items.length - 1; i > 0; i--) {
        const idx = Math.floor(Math.random() * (i + 1))
        const temp = items[i]
        items[i] = items[idx]
        items[idx] = temp
    }
}




function getFormatedTimePassed(timeDiff) {
    const seconds = Math.floor(timeDiff / 1000)
    const milliSeconds = ((timeDiff - seconds * 1000) + '').padStart(3, '0')
    return `${(seconds +'').padStart(2, '0')} : ${milliSeconds}`
  }
  





function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[getRandomIntInclusive(0, 15)]
    }
    return color
}