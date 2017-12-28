var player=1;
var tourJoueur= "joueur 1";
var nbTours=0;
document.getElementById('tourEtNbTour').document.write("c'est au tour du "+tourJoueur+" et c'est le tour "+nbTours);
function switchJoueur(block) {/*
/*  var player1=block.style.backgroundColor="green";
  var player2=block.style.backgroundColor="blue";*/

  if (player==1){
  block.setAttribute("class", "play1");
    player=2;
      /*console.log ("joueur 1");*/
    tourJoueur= "joueur 2";
    nbTours++;
    console.log (nbTours);
  }

  else if (player==2){
    block.setAttribute("class", "play2");
    player=1;
      /*console.log ("joueur 2");*/
    tourJoueur= "joueur 1";
    nbTours++;
    console.log (nbTours);
  }

  block.onclick=function(){
    return false;
  };
}

function  grilleT(){
var grille = [];
var lignes = 3;
var colonnes = 3;
var totalCases = lignes * colonnes;

// init grille
for(i = 0; i < totalCases; i++) {
	grille.push(i);
  }

  document.write("<table>");
  // on affiche avec une double boucle pour l'effet grille
  for(j = 0; j < lignes; j++) {

	document.write("<tr>");

	for(k = 0; k < colonnes; k++) {
		document.write("<td class='classBase'onclick='switchJoueur(this);'><strong>");
		document.write(grille[k + (j*colonnes)]);
		document.write("</strong></td>");
	}

	 document.write("</tr>"); // Quand la 2eme boucle se termine, on passe une ligne
  }
  document.write("</table>");
}
