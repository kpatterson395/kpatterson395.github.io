var playerSel = "";
var compSel= "";
var playerTurn=true;
var squares=9;
var boardID= ["#top-left", "#middle-left", "#bottom-left", "#top-middle", "#middle-middle", "#bottom-middle", "#top-right", "#middle-right", "#bottom-right"]
var winningArr=[["#top-left", "#middle-left", "#bottom-left"], 
                ["#top-middle", "#middle-middle", "#bottom-middle"],
                ["#top-right", "#middle-right", "#bottom-right"],
                ["#top-left", "#top-middle", "#top-right"],
                ["#middle-left", "#middle-middle", "#middle-right"],
                ["#bottom-left", "#bottom-middle", "bottom-right"],
                ["#top-left", "#middle-middle", "#bottom-right"],
                ["#top-right", "#middle-middle", "#bottom-left"]
               ];


$(document).ready(function(){
  

  $(".btn").on("click", function(){
    $(".selection").css("display", "none");
    if ($(this).attr('id')==="xSelect") {
      playerSel = "X";
      compSel="O";
    }
    if ($(this).attr('id')==="oSelect") {
      playerSel = "O";     
      compSel="X";
    }

  });




  $(".box").on("click", function(){
    
    // Ensure the click is legitimate.
    if(isClickLegitimate($(this))){
        // Update the board state with the new character.
        updateBoardState($(this)); 
          // Check if the game is over. 
      if(isWinner()||isGameOver()){
        // If it is, end the game.
        $(".play").css("display", "block");
        $(".play").html("<button type='button' class='btn btn-lg' id='playAgain'>Play Again?</button>");
        // restartGame();
      }
      else {
        // If it isn't, change turns.
        computerTurn();

      }
    }
    
    else if (!isClickLegitimate($(this))){
     alert("That's taken! Try again.");        
    }
    


  });
  $(".play").on("click", function(){
    // window.location.reload(true);
    restartGame();
  });
});



function isClickLegitimate(boxClicked){
  
  // Make sure the box is empty & ensure that it's the players turn.
  var boxClickedId = "#"+boxClicked.attr("id").toString();
  if ($(boxClickedId).data('contents').length===0&&playerTurn){
    return true;
  }
  
}

function updateBoardState(boxClicked){
  //change data contents of selected box
  
  $(boxClicked).data('contents', playerSel);
  //change html of selected box
  $(boxClicked).html(playerSel);
  // update board arr
  updateWinArr("#"+boxClicked.attr("id"), playerSel)
  //player's turn is over
  playerTurn=false;
  squares--;

}


function isGameOver(){
  if (squares===0){
    return true;
  }
  else {
    return false;
  }
}


function computerTurn(){
  idSel = boxSel();
  if($(idSel).data('contents').length===0){
    $(idSel).data('contents', compSel);
    $(idSel).html(compSel);
    updateWinArr(idSel, compSel);
    if(isWinner()){
      alert("GAME OVER");
      $(".play").css("display", "block");
      $(".play").html("<button type='button' class='btn btn-lg' id='playAgain'>Play Again?</button>");
    }
    squares--;
    playerTurn=true;

  }
  else {
    computerTurn();
    }
  }
  
  



  function boxSel(){
      var ran = Math.floor(Math.random()*9);
      return boardID[ran];
  }

function updateWinArr(currentID, currentSel){
  for (var i=0; i< winningArr.length; i++){
    for (var j=0; j<winningArr[i].length; j++){
      winningArr[i][j]=winningArr[i][j].replace(currentID, currentSel);
      
    }
  }
  console.log(winningArr);
}

function isWinner(){
  for (var a = 0; a < winningArr.length; a++){
    if(winningArr[a][0]===winningArr[a][1] && winningArr[a][1]===winningArr[a][2]){
      alert("WINNER IS "+winningArr[a][0]+"!!!");
      return true;
      
    }
    
  }
}

function restartGame(){

    window.location.reload(true);
    var playerSel = "";
    var compSel= "";
    var playerTurn=true;
    var squares=9;
    var boardID= ["#top-left", "#middle-left", "#bottom-left", "#top-middle", "#middle-middle", "#bottom-middle", "#top-right", "#middle-right", "#bottom-right"]
    var winningArr=[["#top-left", "#middle-left", "#bottom-left"], 
                    ["#top-middle", "#middle-middle", "#bottom-middle"],
                    ["#top-right", "#middle-right", "#bottom-right"],
                    ["#top-left", "#top-middle", "#top-right"],
                    ["#middle-left", "#middle-middle", "#middle-right"],
                    ["#bottom-left", "#bottom-middle", "bottom-right"],
                    ["#top-left", "#middle-middle", "#bottom-right"],
                    ["#top-right", "#middle-middle", "#bottom-left"]
                   ];
  }