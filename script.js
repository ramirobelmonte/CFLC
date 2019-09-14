window.onload = function(){

var aceptar = document.querySelector("button[name=aceptar]");

function hidden() {
  x = document.querySelector("aside"),
  x.classList.add('hidden');
}
aceptar.onclick = hidden;

}
