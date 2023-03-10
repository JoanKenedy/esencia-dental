const menuBar = document.getElementById("abrir");
const menu = document.getElementById("menu");
const link = document.querySelectorAll(".link");

menuBar.addEventListener("click", function () {
  menu.classList.toggle("aparece_menu");
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
      menu.classList.remove("aparece_menu");
    });
  }
});

const buttons = document.querySelectorAll(".btn_info");
const cardUno = document.querySelector(".card_uno");
const cardDos = document.querySelector(".card_dos");
const cardTres = document.querySelector(".card_tres");

const flipear = () => {
  cardUno.classList.toggle("flipear");
};
const flipearDos = () => {
  cardDos.classList.toggle("flipear");
};
const flipearTres = () => {
  cardTres.classList.toggle("flipear");
};

for (let i = 0; i < link.length; i++) {
  if (buttons[0]) {
    buttons[0].addEventListener("click", flipear);
  }
  if (buttons[1]) {
    buttons[1].addEventListener("click", flipearDos);
  }
  if (buttons[2]) {
    buttons[2].addEventListener("click", flipearTres);
  }
}
