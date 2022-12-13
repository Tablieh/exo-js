const box = document.createElement("div")
box.classList.add("box")

const board = document.querySelector("#board")
var current = document.createElement("p") // balise P qui contient la current player
document.body.appendChild(current)

for (let j = 1; j <= 9; j++) {   //boucle sur tout les box
  
  const newbox = box.cloneNode()    //clone sur la box
  board.appendChild(newbox) //on mettre la box en visible
  newbox.style.color = "white"; 
  var vide = " "
  var player=vide;    //player = vide
  var X="X";    // x
  var O="O";    // o
  current.innerHTML = "Current player : " + player;

      switch (player) { // switch sur la clone de la deuxieme boucle 
        case vide:
          newbox.addEventListener("click", function () {

            newbox.innerText = player; // indeque la player O à la BOX
            player = X // switch la player sur la X
            current.innerHTML = "C'est au tour de : " + player // on modifie la balise P on mettent la curent player

          });
        break;
        
        case O: // si cest player = O

          newbox.addEventListener("click", function () {

            newbox.innerText = player; // indeque la player O à la BOX
            player = X // switch la player sur la X
            current.innerHTML = "C'est au tour de : " + player // on modifie la balise P on mettent la curent player

          });
        break;

        case X: // si cest player = X

          newbox.addEventListener("click", function () {

            newbox.innerText = player; // indeque la player X à la BOX
            player = O // switch la player sur la O
            current.innerHTML = "C'est au tour de : " + player // on modifie la balise P on mettent la curent player

          });
        break;

      }
    }
   


