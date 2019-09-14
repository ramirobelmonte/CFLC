window.onload = function(){

var aceptar = document.querySelector("button[name=aceptar]"),
    cancelar = document.querySelector("button[name=cancelar]"),
    aside = document.querySelector("aside"),
    texto = document.querySelector("p");

function hide(){
  aside.classList.add('hide');
}
function GameOver() {
  texto.innerHTML = "Game Over",
  document.querySelector("div").style.display = "none",
  aside.style.backgroundColor = "#ee5253";
}

aceptar.onclick = hide;
cancelar.onclick = GameOver;

}
