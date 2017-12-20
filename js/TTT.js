var player=player1;
var player1;
var player2;

function trollolol() {
  if (player==player1){
  document.getElementById("un").innerHTML="X";
  player=player2;
  }
  if (player==player2){
  document.getElementById("un").innerHTML="O";
  player=player1;
  }
}
