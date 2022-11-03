let player1 = true

let player1Squares = []
let player2Squares = []

let winningSquares = [["top-left", "top-middle", "top-right"], ["middle-left", "middle-middle", "middle-right"], ["bottom-left", "bottom-middle", "bottom-right"],
["top-left", "middle-left", "bottom-left"], ["top-middle", "middle-middle", "bottom-middle"], ["top-right", "middle-right", "bottom-right"],
["top-left", "middle-middle", "bottom-right"], ["top-right", "middle-middle", "bottom-left"]]

// for each arr in winningSquares, check if player arr contains all items
function checkForWinner(playerArr) {
  let winning = false
  if (playerArr.length < 2) {
    return winning;
  }
  else {
    winningSquares.forEach((i) => {

      let checker = i.every(v => playerArr.includes(v))
      if (checker) {
        winning = true
      }
    })
  }
  return winning
}

function reset() {
  $(".box").each(function () {
    $(this).css({ "background-color": "white" }).removeClass('disabled')

  })

  player1Squares = []
  player2Squares = []
}

function gameOver(player) {
  let totalLength = player1Squares.length + player2Squares.length
  console.log(totalLength)
  if (totalLength === 9) {
    $(".box").each(function () {
      $(this).css({ "background-color": "#414142" })
    })

    $(".player-display").text('Game Over! No Winner')
    return true
  }
  return false
}

//unbind
$(document).ready(function () {
  $(".box").on("click", function () {
    let id = $(this).attr('id')
    if ($(this).hasClass('disabled')) {
      $(".alert").addClass("appear")
      setTimeout(() => {
        $(".alert").removeClass("appear")
      }, 2000)
      // alert('That square has been used, try again')
    }
    else if (player1) {
      player1Squares.push(id)

      $(this).css({ "background-color": "#7a565b" }).addClass('disabled')

      if (checkForWinner(player1Squares)) {
        $(".box").each(function () {
          $(this).css({ "background-color": "#7a565b" })
        })
        $(".player-display").text('Player 1 Wins!')
      }
      else {
        if (!gameOver()) {
          $(".player-display").text("Player 2 - it's your turn!")
          player1 = false
        }
      }


    } else {
      player2Squares.push(id)

      $(this).css({ "background-color": "#56677a" }).addClass('disabled')

      if (checkForWinner(player2Squares)) {
        $(".box").each(function () {
          $(this).css({ "background-color": "#56677a" })
        })
        $(".player-display").text('Player 2 Wins!')
      } else {
        if (!gameOver()) {
          $(".player-display").text("Player 1 - it's your turn!")
          player1 = true
        }
      }
    }
  })

  $(".reset").on("click", function () {
    reset()
    $(".player-display").text("Player 1 - it's your turn!")
  })

})