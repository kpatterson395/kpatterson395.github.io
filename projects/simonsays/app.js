var choices =["#section1", "#section2", "#section3", "#section4"];
var simonSays=[];
var counter=0;
var playerSays=[]; 
var playersTurn=false;
var mode="easy";
var section1= new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var section2= new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var section3= new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'); 
var section4= new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');









//START OF GAME PLAY

$(document).ready(function(){
  
  $("#strict").on("click", function(){
  if(mode==="easy"){
    $("#strict").addClass('btn-success')
    mode="strict";
  }
   else {
     $("#strict").removeClass('btn-success')
     mode="easy";
   }
    
    
  })

  $("#restart").on("click", gameRestart);
  
  $(".section").on("click", function(){
      var elId = $(this).attr("id");
      playSound(elId);
      if(playersTurn){
          playerSays.push("#"+elId);
          console.log("player: "+ playerSays);

          if(!checkPlayer()){
            if (mode==="easy"){
                alert("Incorrect- try again");
                clearPlayer();
                showSimon();
            }
            else {
              alert("Incorrect");
              gameRestart();
            }
            
          }
         else {
           if (playerSays.length===simonSays.length){
            if (counter===20){
              alert("you won!");
              gameRestart();
            }
           else {
              alert("Correct!");
              clearPlayer();
              playGame();
           }

            
          }
         }

   }
    else {
      alert("not your turn");
    }  

  });


  $("#go").on("click", function(){
        $("#strict").prop("disabled", true);
        $("#go").prop("disabled", true);
        playGame();
       
        
  });
  
});



//Initiate Simon's turn

function playGame(){
  addMove();
  updateCounter();
  console.log("simon: "+simonSays);
  showSimon();
  
  
  
}


//Update count of round
function updateCounter() {
  counter++;
  $("#count").html("Score: "+counter);
}


//Add move to game
function addMove(){
  var ran = Math.floor(Math.random()*4);
  var sel = choices[ran];
  simonSays.push(sel);
}


//Highlight Simon's squares
function showSimon(){
  var i=0;
  var moves = setInterval(function(){
    simonPlays(simonSays[i]);
    playSound(simonSays[i].substring(1));
    i++;
    if(i>=simonSays.length){
      clearInterval(moves);
      playersTurn=true;
    }
  }, 600);
}


//Add/Remove highlight class
function simonPlays(simonId){
  $(simonId).addClass("highlightSection");
  setTimeout(function(){
      $(simonId).removeClass("highlightSection");
  }, 300)
}


//Clear Players Arr after turn
function clearPlayer(){
    playerSays=[];
    playersTurn=false;
}



//Check if player's input matches Simon
function checkPlayer(){
  
  for (var a=0; a<playerSays.length; a++){
    if (playerSays[a]!==simonSays[a]){
      return false;
    }
  }
  return true;
}


//Restart game play at score 0
function gameRestart(){
    simonSays=[];
    counter=0;
    clearPlayer();
    $("#count").html("Score: "+counter);
    $("#strict").prop("disabled", false);
    $("#go").prop("disabled", false);

}


function playSound(sectionToPlay){
      if (sectionToPlay==="section1"){
              section1.play();
      }
      else if (sectionToPlay==="section2"){
              section2.play();
      }
      else if (sectionToPlay==="section3"){
              section3.play();
       }
      else if (sectionToPlay==="section4"){
              section4.play();
      }
}