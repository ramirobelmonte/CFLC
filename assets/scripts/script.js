// muchas variables para llamar a muchos elementos :)
var aceptar = document.querySelector("#aceptar"),
    cancelar = document.querySelector("#cancelar"),
    aside = document.querySelector("aside"),
    texto = document.querySelector("p"),
    body = document.querySelector("body"),
    article = document.querySelector("article"),
    Opcion1 = document.querySelector("button[name=Opcion1]"),
    Opcion2 = document.querySelector("button[name=Opcion2]"),
    video = document.querySelector("video");

function Jota() {
  body.style.backgroundImage = "url('')";
  article.textContent = "Aqui Jota mirando el cielo, pensando ¿dónde joraca puse el regalo de Naty?"
  Opcion1.textContent = "Pat quiere el regalo"
  Opcion2.textContent = "Mili anda en bici"
}
function Seba() {
  body.style.backgroundImage = "url('')";
  article.textContent = "Hola Naty, feliz cumple, los más mejores deseos de los deseos del mundo mundial"
  Opcion1.textContent = "Ale roba el regalo"
  Opcion2.textContent = "Nico quiere poner musica"
}

// botones del incio
aceptar.addEventListener("click", function () {
  aside.style.opacity = "0";
  setTimeout(function () {
    aside.classList.add("hide");
  }, 600)
});

cancelar.addEventListener("click", function () {
  texto.innerHTML = "Game Over",
  document.querySelector("div").style.display = "none",
  aside.style.backgroundColor = "#ee5253";
});

// sos el puto fullstack ramiro
Opcion1.addEventListener("click", Jota);
Opcion2.addEventListener("click", Seba);
