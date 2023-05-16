
import { hamburguesas, menus, complementos, bebidas } from "./productos.js";

/* ********************************************* */
const btnHamburguesas = document.getElementById("hamburguesas");
btnHamburguesas.addEventListener("click", () => {
  console.log("Botón de hamburguesas presionado");    //PARA QUE ESTA LINEA DE CODIGO??
  //OBTENIENDO CLASICA CHEESE ROYAL
  const btnClasica = document.querySelector(".boton_clasica");      
  const btnCheese = document.querySelector(".boton-cheese");
  const btnRoyal = document.querySelector(".btn-royal");
  btnClasica.classList.toggle("hidden");
  btnCheese.classList.toggle("hidden");
  btnRoyal.classList.toggle("hidden")
});
/* *********************************************** */


// Obtener el textarea por su atributo name
const textareaDescripcion = document.querySelector('textarea[name="description1"]');


// Obtener el boton de "clasica" por su ID
const botonClasica = document.getElementById("clasica");           
// Agregar un evento de clic al boton
botonClasica.addEventListener("click", function() {
  // Obtener el objeto de la hamburguesa "clasica" del array
  const hamburguesaClasica = hamburguesas.find(hamburguesa => hamburguesa.name === 'clasica');

  // Imprimir el nombre y el precio de la hamburguesa en la consola
  console.log("Nombre: " + hamburguesaClasica.name);
  console.log("Precio: " + hamburguesaClasica.precio);

  // Construir el texto a mostrar en el textarea
  const texto = "Nombre: " + hamburguesaClasica.name + "\n" +
               "Precio: " + hamburguesaClasica.precio;

  // Asignar el texto al valor del textarea
  textareaDescripcion.value = texto;
});