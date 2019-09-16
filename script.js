// muchas variables para llamar a muchos elementos :)
var aceptar = document.querySelector("button[name=aceptar]"),
    cancelar = document.querySelector("button[name=cancelar]"),
    aside = document.querySelector("aside"),
    texto = document.querySelector("p"),
    body = document.querySelector("body"),
    article = document.querySelector("article"),
    Opcion1 = document.querySelector("button[name=Opcion1]"),
    Opcion2 = document.querySelector("button[name=Opcion2]");

function Jota() {
  body.style.backgroundImage = "url('https://uccdb66c64c609d772b03aba0a49.previews.dropboxusercontent.com/p/thumb/AAjgccUwMqZjaF8hFPUluETjZDpoQ7DWyF9ft0MBXuRVvsUqaUQcIqff0KZGnEvzpgXbt748kMTgsrs-5fq8NH0AXqGfxdj5SwY2QZYIiK35_Jziw8tkjUaB0HLpPfYDLIZk_XUanpM_UJm0oRMK__vta7tc08tT8miKIsKQLRJVaTHxoxJBqOR2ri9me-MAVmZ_niQ_ccXTEwu3Bhj8GuSQIRN8od5QzDKYug2l28eRqlkZ4qWNfTPIy13oYyqPMIleDpyXeQ2iGIbSvmEolC5HjMfkC4il-UySCzxCgNt0i-3fSYdvzhaU67ABEhuMsZ9jTEWO7lNB6tlco8L4GTCgQn21ebCfOaHgB9_d4I0lyg/p.jpeg')";
  article.textContent = "Aqui Jota mirando el cielo, pensando ¿dónde joraca puse el regalo de Naty?"
  Opcion1.textContent = "Pat quiere el regalo"
  Opcion2.textContent = "Mili anda en bici"
}
function Seba() {
  body.style.backgroundImage = "url('https://uc9c74c3e16d5c67153f451d3214.previews.dropboxusercontent.com/p/thumb/AAhzqkkqg0FzMNFPxLj2XygrMCcWDr6HJ_AuntKo0Mj6dIhE-QF5wv2PwlX1U5xJZTQy2LoqQRQmTGJGM4YhJpe5en3rar1S_OvRmuXQN-qElw1SZ_QuJtuE5tu5SIcYFirlTz4UndjGxVQLpkLvzidM_MBx1Wgn-eTn9bLuMZzL_nmtxY8inS9AX1mRnbENT6j1wHrr_QQZV66dTWJr6u5NRVjntKApmU6203e9GAE1rnIOt_pwdONyF_Rzh9F88FObmnBQkT4_pjwSRGwtwTaV2Ztvl3s1WPiy4Ag3WTg8v1IuoMLOzk6-x3Duoy7cJiKiTGrctffo1hBPS5Fh4zkf5vyB7YIDveP8IJ4RT-vdRw/p.jpeg')";
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
