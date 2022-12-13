const box = document.createElement("div")
box.classList.add("box")

const board = document.querySelector("#board")
var current = document.createElement("p") // balise P qui contient la current player
    current.innerHTML = "Current player :";
    document.body.appendChild(current)
    for (let j = 1; j <= 9; j++) {   //boucle sur tout les box
      const newbox = box.cloneNode()    //clone sur la box
      board.appendChild(newbox) //on mettre la box en visible
      newbox.style.color = "white"; 
      var player=" ";    //player variable qui est vide pour switch la player
      var X="X";    // x
      var O="O";    // o
      switch (j) { // switch sur la clone de la deuxieme boucle 
        case j=1: // si 1er case
          current.innerHTML = "C'est au tour de : " + O // on modifie la balise P on mettent la curent player
          newbox.addEventListener("click", function () {
            newbox.innerText = O; // indeque la player O à la 1er BOX
            player=X // switch la player
            current.innerHTML = "C'est au tour de : " +player // on modifie la balise P on mettent la curent player
          });
          break;
        case j=2:
          newbox.addEventListener("click", function () {
            newbox.innerText = player; // indeque la player à la 2er BOX
            player=O // switch la player
            current.innerHTML = "C'est au tour de : " + player // on modifie la balise P on mettent la curent player
          });
        break;
        case j=3:
          newbox.addEventListener("click", function () {
            newbox.innerText = player; // indeque la player à la 3em BOX
            player=X // switch la player
            current.innerHTML = "C'est au tour de : " + player // on modifie la balise P on mettent la curent player
          });
        break;
        case j=4:
          newbox.addEventListener("click", function () {
            newbox.innerText = player; // indeque la player à la 4em BOX
            player=O // switch la player
            current.innerHTML = "C'est au tour de : " + player // on modifie la balise P on mettent la curent player
          });
        break;
        case j=5:
          newbox.addEventListener("click", function () {
            newbox.innerText = player;  // indeque la player à la 5em BOX
            player=X // switch la player
            current.innerHTML = "C'est au tour de : " + player // on modifie la balise P on mettent la curent player
          });
        break;
        case j=6:
          newbox.addEventListener("click", function () {
            newbox.innerText = player;  // indeque la player à la 6em BOX
            player=O // switch la player
            current.innerHTML = "C'est au tour de : " + player // on modifie la balise P on mettent la curent player
          });
        break;
        case j=7:
          newbox.addEventListener("click", function () {
            newbox.innerText = player;  // indeque la player à la 7em BOX
            player=X // switch la player
            current.innerHTML = "C'est au tour de : " + player // on modifie la balise P on mettent la curent player
          });
        break;
        case j=8:
          newbox.addEventListener("click", function () {
            newbox.innerText = player; // indeque la player à la 8em BOX
            player=O // switch la player
            current.innerHTML = "C'est au tour de : " + player // on modifie la balise P on mettent la curent player
          });
        break;
        case j=9:
          newbox.addEventListener("click", function () {
            newbox.innerText = player; // indeque la player à la 9em BOX
            player=X // switch la player
            var t= true; //set valeur en true pour si on a 9 sont cliquee
            if (t == true){ // si 9 on cliquee
              alert("Partie terminée") 
              window.location.reload();     
            }
          });
        break;
        }
    }
   


