var player = 1;
// var table= new Array(9);
// for(var i=0; i<table.length; i++){ table[i]=0; }

var cptTour = 0;
function switchJoueur(block) {
    cptTour++;

    if (player == 1){
      block.setAttribute("class", "play1");/* change la classe*/
      idelt= block.getAttribute('id');/récupérer l'id de l'elemnt cliqué dans une variable "idelt"*/
      player = 2;/*permet le switch des joueurs*/
      console.log ("c'etait le "+cptTour+ " tours, et la case "+idelt+" à été cliqué"); /*affiche le tour et la case cliqué dans la console*/
      winTest();/* appel de Fn qui verifie au momment de click si le joueur gagne*/
      document.getElementById('tourNbTour').innerHTML="c'est le tour du joueur 2";/*affiche quel joueur doit jouer*/
    }

    else if(player == 2){
      block.setAttribute("class", "play2");
      idelt= block.getAttribute('id');
      player = 1;
      console.log ("c'etait le "+cptTour+ " tours, et la case "+idelt+" à été cliqué");
      winTest();
      document.getElementById('tourNbTour').innerHTML="c'est le tour du joueur 1";
    }

    block.onclick=function(){
      return false;
    };
}
function winTest(){
  var win1Score= 0;
  var win1 = false;
    if(document.getElementById('0').className== "play1" && document.getElementById('1').className== "play1"&&document.getElementById('2').className== "play1")
      {win1 = true;}
    else if(document.getElementById('3').className== "play1" && document.getElementById('4').className== "play1"&&document.getElementById('5').className== "play1")
      {win1 = true;}
    else if(document.getElementById('6').className== "play1" && document.getElementById('7').className== "play1"&&document.getElementById('8').className== "play1")
      {win1 = true;}
    else if(document.getElementById('0').className== "play1" && document.getElementById('3').className== "play1"&&document.getElementById('6').className== "play1")
      {win1 = true;}
    else if(document.getElementById('1').className== "play1" && document.getElementById('4').className== "play1"&&document.getElementById('7').className== "play1")
      {win1 = true;}
    else if(document.getElementById('2').className== "play1" && document.getElementById('5').className== "play1"&&document.getElementById('8').className== "play1")
      {win1 = true;}
    else if(document.getElementById('0').className== "play1" && document.getElementById('4').className== "play1"&&document.getElementById('8').className== "play1")
      {win1 = true;}
    else if(document.getElementById('6').className== "play1" && document.getElementById('4').className== "play1"&&document.getElementById('2').className== "play1")
      {win1 = true;}

    if(win1){
      document.getElementById('winJ1').style.display="block";
      win1Score++;
      document.getElementById('scoreJ1').innerHTML=win1Score;
      /*document.getElementById('resetGame').style.display="block";*/
    }

    var win2 = false;
      if(document.getElementById('0').className== "play2" && document.getElementById('1').className== "play2"&&document.getElementById('2').className== "play2")
        {win2 = true;}
      else if(document.getElementById('3').className== "play2" && document.getElementById('4').className== "play2"&&document.getElementById('5').className== "play2")
        {win2 = true;}
      else if(document.getElementById('6').className== "play2" && document.getElementById('7').className== "play2"&&document.getElementById('8').className== "play2")
        {win2 = true;}
      else if(document.getElementById('0').className== "play2" && document.getElementById('3').className== "play2"&&document.getElementById('6').className== "play2")
        {win2 = true;}
      else if(document.getElementById('1').className== "play2" && document.getElementById('4').className== "play2"&&document.getElementById('7').className== "play2")
        {win2 = true;}
      else if(document.getElementById('2').className== "play2" && document.getElementById('5').className== "play2"&&document.getElementById('8').className== "play2")
        {win2 = true;}
      else if(document.getElementById('0').className== "play2" && document.getElementById('4').className== "play2"&&document.getElementById('8').className== "play2")
        {win2 = true;}
      else if(document.getElementById('6').className== "play2" && document.getElementById('4').className== "play2"&&document.getElementById('2').className== "play2")
        {win2 = true;}

      if(win2){
        document.getElementById('winJ2').style.display="block";
        win2Score++;
        document.getElementById('scoreJ1').innerHTML=win2Score;
      }

}
function disparition(block){/*permet de faire disparaitre la div winJ1 || winJ2 au click*/
  block.style.display="none";
}

function ResetManche(){
  document.getElementsByTagName('td').setAttribute("class", "classBase")
}
// function  grilleT(){ /*permet de générer un tableau ... mais je n'arrivais pas à affecter le "i" de ma boucle en id de td
// var grille = [];
// var lignes = 3;
// var colonnes = 3;
// var totalCases = lignes * colonnes;
//
// // init grille
// for(i = 0; i < totalCases; i++) {
// 	grille.push(i);
//   }
//
//   document.write("<table>");
//   // on affiche avec une double boucle pour l'effet grille
//   for(j = 0; j < lignes; j++) {
// 	   document.write("<tr>");
//
// 	    for(k = 0; k < colonnes; k++) {
// 		       document.write("<td class='classBase'onclick='switchJoueur(this);'><strong>");
// 		       document.write(grille[k + (j*colonnes)]);
// 		       document.write("</strong></td>");
// 	         }
//
// 	   document.write("</tr>"); // Quand la 2eme boucle se termine, on passe une ligne
//   }
//   document.write("</table>");
//}
