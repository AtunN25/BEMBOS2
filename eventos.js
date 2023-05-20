import { hamburguesas, menus, complementos, bebidas } from "./productos.js";

var PrecioFinal =  0.0;
var PrecioFinal_aux;
var PrecioNeto =  0.0;
var PrecioNeto_aux;
var IGV = 0.0;
var IGV_aux;
var texto_pedido = "";
var texto_precio = "";
var condition = 1;

if(document.querySelector('textarea[name="description-pago1"]')){
  condition = 2;
}

if(condition == 1 ){
  console.log("asd 1 asd");
  var textareaDescripcion1 = document.querySelector('textarea[name="description1"]');
  var textareaDescripcion2 = document.querySelector('textarea[name="description2"]');

  var botonHamburguesas = document.getElementById("hamburguesas");
  var botonClasica = document.getElementById("clasica");
  var botonRealizarPago = document.getElementById("Realizar-pago");

  botonHamburguesas.addEventListener("click", () => {
    //RELACIONAR A LOS BOTONES DEL HTML
    var btnClasica = document.querySelector(".boton-clasica");      
    var btnCheese = document.querySelector(".boton-cheese");
    var btnRoyal = document.querySelector(".boton-royal");
    //HACER APARECER LOS BOTONES
    btnClasica.classList.toggle("hidden");
    btnCheese.classList.toggle("hidden");
    btnRoyal.classList.toggle("hidden")
  });

  //CLASICA
  // Agregar un evento de clic al boton
  botonClasica.addEventListener("click", function() {
    // Obtener el objeto de la hamburguesa "clasica" del array
    var hamburguesaClasica = hamburguesas.find(hamburguesa => hamburguesa.name === 'clasica');
    // Construir el texto a mostrar en el textarea
    texto_pedido = texto_pedido + "Nombre: " + hamburguesaClasica.name + "\n" + 
                                  "Precio: " + hamburguesaClasica.precio + "\n";

    PrecioFinal = PrecioFinal + hamburguesaClasica.precio;
    PrecioFinal_aux = PrecioFinal.toFixed(2);
    PrecioNeto = PrecioFinal / 1.2;
    IGV = PrecioFinal - PrecioNeto;
    PrecioNeto_aux =  PrecioNeto.toFixed(2);
    IGV_aux = IGV.toFixed(2);

    texto_precio =  "Precio Neto: " + "\t" + PrecioNeto_aux + "\n" +
                    "IGV: " + "\t\t" + IGV_aux + "\n" +
                    "Precio Final: " + "\t" + PrecioFinal_aux + "\n";

    // Asignar el texto al valor del textarea
    textareaDescripcion1.value = texto_pedido;
    textareaDescripcion2.value = texto_precio;
  });
  botonRealizarPago.addEventListener("click", function() {
    localStorage.setItem("pedido", texto_pedido);
    localStorage.setItem("precio", texto_precio);
    window.location.href = "interfazDePago.html";
  });
}

if(condition == 2){
  texto_pedido = localStorage.getItem("pedido");
  texto_precio = localStorage.getItem("precio");
  var textareaDescripcion_pago1 = document.querySelector('textarea[name="description-pago1"]');
  var textareaDescripcion_pago2 = document.querySelector('textarea[name="description-pago2"]');
  textareaDescripcion_pago1.value = texto_pedido;
  textareaDescripcion_pago2.value = texto_precio;
}







