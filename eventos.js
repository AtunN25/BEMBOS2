
const btnHamburguesas = document.getElementById("hamburguesas");
btnHamburguesas.addEventListener("click", () => {
  console.log("Botón de hamburguesas presionado");
  const btnPapas = document.querySelector(".btn-papas");
  const btnGaseosa = document.querySelector(".btn-gaseosa");
  const btnRoyal = document.querySelector(".btn-Royal");
  btnPapas.classList.toggle("hidden");
  btnGaseosa.classList.toggle("hidden");
  btnRoyal.classList.toggle("hidden")
});
