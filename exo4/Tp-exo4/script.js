const box = document.createElement("div")
box.classList.add("box")

const board = document.querySelector("#board")
let nb=0;
document.addEventListener("keydown", (e) => {
  if (nb < 225) {
    if (e.code == "ArrowDown") {
      const newbox = box.cloneNode()
      newbox.addEventListener('click', () => {
        newbox.style.backgroundColor = 'black';
      });
      board.appendChild(newbox)
      nb++;
      function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        newbox.style.backgroundColor = bgColor;
      }
      random_bg_color();
    }
    else if (e.code == "ArrowUp") {
      if (nb > 0) {
        var select = document.getElementById('board');
        select.removeChild(select.lastChild);
        nb--;
      }
    }
  }
})
