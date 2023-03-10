const listElementsUno = document.querySelector(".btn_despegaUno");
const menuApareceUno = document.querySelector(".menu_apareceUno");
const listElementsDos = document.querySelector(".btn_despegaDos");
const menuApareceDos = document.querySelector(".menu_apareceDos");
const listElementsTres = document.querySelector(".btn_despegaTres");
const menuApareceTres = document.querySelector(".menu_apareceTres");
const listElementsCuatro = document.querySelector(".btn_despegaCuatro");
const menuApareceCuatro = document.querySelector(".menu_apareceCuatro");
const listElementsCinco = document.querySelector(".btn_despegaCinco");
const menuApareceCinco = document.querySelector(".menu_apareceCinco");
const listElementsSeis = document.querySelector(".btn_despegaSeis");
const menuApareceSeis = document.querySelector(".menu_apareceSeis");

listElementsUno.addEventListener("click", () => {
  menuApareceUno.classList.toggle("aparecer_submenu");
});

listElementsDos.addEventListener("click", () => {
  menuApareceDos.classList.toggle("aparecer_submenu");
});

listElementsTres.addEventListener("click", () => {
  menuApareceTres.classList.toggle("aparecer_submenu");
});

listElementsCuatro.addEventListener("click", () => {
  menuApareceCuatro.classList.toggle("aparecer_submenu");
});

listElementsCinco.addEventListener("click", () => {
  menuApareceCinco.classList.toggle("aparecer_submenu");
});

listElementsSeis.addEventListener("click", () => {
  menuApareceSeis.classList.toggle("aparecer_submenu");
});
