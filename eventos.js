
import { hamburguesas, menus, complementos, bebidas } from "./productos.js";

var PrecioFinal =  0.0;
var PrecioFinal_aux;
var PrecioNeto =  0.0;
var PrecioNeto_aux;
var IGV = 0.0;
var IGV_aux;
var texto_pedido = "";
var texto_precio = ""

/* ********************************************* */
const btnHamburguesas = document.getElementById("hamburguesas");
btnHamburguesas.addEventListener("click", () => {
  //RELACIONAR A LOS BOTONES DEL HTML
  const btnClasica = document.querySelector(".boton-clasica");      
  const btnCheese = document.querySelector(".boton-cheese");
  const btnRoyal = document.querySelector(".boton-royal");
  //HACER APARECER LOS BOTONES
  btnClasica.classList.toggle("hidden");
  btnCheese.classList.toggle("hidden");
  btnRoyal.classList.toggle("hidden")
});
/* *********************************************** */

// AGARRA EL "TEXTTAREA 1" Y LO GUARDA EN ESTA VARIABLE
const textareaDescripcion1 = document.querySelector('textarea[name="description1"]');
const textareaDescripcion2 = document.querySelector('textarea[name="description2"]');

const textareaDescripcion_pago1 = document.querySelector('textarea[name="description-pago1"]');
const textareaDescripcion_pago2 = document.querySelector('textarea[name="description-pago2"]');

// Obtener el boton de "clasica" por su ID (NOMBRE DE VARIABLE DIFERENTE)
const botonClasica = document.getElementById("clasica"); 

// Agregar un evento de clic al boton
botonClasica.addEventListener("click", function() {

  // Obtener el objeto de la hamburguesa "clasica" del array
  const hamburguesaClasica = hamburguesas.find(hamburguesa => hamburguesa.name === 'clasica');

  // Construir el texto a mostrar en el textarea
  texto_pedido = texto_pedido + "Nombre: " + hamburguesaClasica.name + "\n" + 
                                "Precio: " + hamburguesaClasica.precio + "\n";
  PrecioFinal = PrecioFinal + hamburguesaClasica.precio;
  PrecioFinal_aux = PrecioFinal.toFixed(2);
  PrecioNeto = PrecioFinal / 1.2;
  IGV = PrecioFinal - PrecioNeto;
  PrecioNeto_aux =  PrecioNeto.toFixed(2);
  IGV_aux = IGV.toFixed(2);

  texto_precio = "Precio Neto: " + "\t" + PrecioNeto_aux + "\n" +
              "IGV: " + "\t\t" + IGV_aux + "\n" +
              "Precio Final: " + "\t" + PrecioFinal_aux + "\n";

  // Asignar el texto al valor del textarea
  textareaDescripcion1.value = texto_pedido;
  textareaDescripcion2.value = texto_precio;
});