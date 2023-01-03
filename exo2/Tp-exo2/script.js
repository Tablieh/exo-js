const box = document.createElement("div")
box.classList.add("box")

const board = document.querySelector("#board")
/*
board.appendChild(box);
*/
for (let i = 1; i <= 4; i++){
    const newbox = box.cloneNode()
    newbox.innerText = i
    newbox.style.color = "white";   
    board.appendChild(newbox)
    newbox.addEventListener("click", function () {
        newbox.style.transform = "rotate(-40deg)";
        newbox.style.background = "rgb(128, 0, 11)";
            setTimeout(() => {
                newbox.style.transform= "rotate(0deg)";
                newbox.style.background = "rgb(3, 102, 3)";
                }, 700);
    
        }); 
}


   


