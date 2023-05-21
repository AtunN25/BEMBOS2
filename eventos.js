import { hamburguesas, menus, complementos, bebidas } from "./productos.js";

var PrecioFinal =  0.0;
var PrecioFinal_aux;
var PrecioNeto =  0.0;
var PrecioNeto_aux;
var IGV = 0.0;
var IGV_aux;
var texto_pedido = "";
var texto_precio = "";
//HACE REFERENCIA AL CAMBIO DE PAGINA ( SELECCION DE PRODUCTO  --  REALIZAR PAGO )
var condition = 1;
var condition_first_aparition = 1;
var enviar_desaparecer = 0;
var enviar_aparecer = 0;
//CREAR ESTOS DOS POR CADA PRODUCTO
var texto_clasica = "";
var clasica_cant = 1;
var texto_cheese = "";
var cheese_cant = 1;
var texto_royal = "";
var royal_cant = 1;

if(document.querySelector('textarea[name="description-pago1"]')){
  condition = 2;
}

if(condition == 1 ){
  var textareaDescripcion1 = document.querySelector('textarea[name="description1"]');
  var textareaDescripcion2 = document.querySelector('textarea[name="description2"]');
  //RELACIONAR ESTAS VARIABLES CON LOS BOTONES DEL HTML POR EL ID
  var botonHamburguesas = document.getElementById("Hamburguesas");
  var botonMenus = document.getElementById("Menus");
  var botonComplementos = document.getElementById("Complementos");
  var botonBebidas = document.getElementById("Bebidas");

  var botonClasica = document.getElementById("Clasica");
  var botonCheese = document.getElementById("Cheese");
  var botonRoyal = document.getElementById("Royal");

  //RELACIONAR A LOS BOTONES DEL HTML
  var btnClasica = document.querySelector(".boton-clasica");      
  var btnCheese = document.querySelector(".boton-cheese");
  var btnRoyal = document.querySelector(".boton-royal");

  var btnPechugon = document.querySelector(".boton-pechugon");      
  var btnBroaster = document.querySelector(".boton-broaster");
  var btnBurger = document.querySelector(".boton-burger");

  var btnNuggets = document.querySelector(".boton-nuggets");      
  var btnSalchipapa = document.querySelector(".boton-salchipapa");
  var btnCheeseFingers = document.querySelector(".boton-cheese-fingers");

  var btnInkaKola = document.querySelector(".boton-inka-kola");      
  var btnCocaCola = document.querySelector(".boton-coca-cola");
  var btnSprite = document.querySelector(".boton-sprite");

  var botonRealizarPago = document.getElementById("Realizar-pago");



  botonHamburguesas.addEventListener("click", () => {
    if(condition_first_aparition == 1){
      btnClasica.classList.toggle("hidden");
      btnCheese.classList.toggle("hidden");
      btnRoyal.classList.toggle("hidden");
      condition_first_aparition = 2;
      enviar_desaparecer = 1;
    }else{
      enviar_aparecer = 1;
      aparecer_boton(enviar_desaparecer,enviar_aparecer);
      enviar_desaparecer = 1;
    }
  });
  botonMenus.addEventListener("click", () => {
    if(condition_first_aparition == 1){
      btnPechugon.classList.toggle("hidden");
      btnBroaster.classList.toggle("hidden");
      btnBurger.classList.toggle("hidden");
      condition_first_aparition = 2;
      enviar_desaparecer = 2; 
    }else{
      enviar_aparecer = 2;
      aparecer_boton(enviar_desaparecer,enviar_aparecer);
      enviar_desaparecer = 2;
    }
  });
  botonComplementos.addEventListener("click", () => {
    if(condition_first_aparition == 1){
      btnNuggets.classList.toggle("hidden");
      btnSalchipapa.classList.toggle("hidden");
      btnCheeseFingers.classList.toggle("hidden");
      condition_first_aparition = 2;
      enviar_desaparecer = 3;
    }else{
      enviar_aparecer = 3;
      aparecer_boton(enviar_desaparecer,enviar_aparecer);
      enviar_desaparecer = 3;
    }
  });
  botonBebidas.addEventListener("click", () => {
    if(condition_first_aparition == 1){
      btnInkaKola.classList.toggle("hidden");
      btnCocaCola.classList.toggle("hidden");
      btnSprite.classList.toggle("hidden");
      condition_first_aparition = 2;
      enviar_desaparecer = 4;
    }else{
      enviar_aparecer = 4;
      aparecer_boton(enviar_desaparecer,enviar_aparecer);
      enviar_desaparecer = 4;
    }
  });

  //CLASICA
  // Agregar un evento de clic al boton
  botonClasica.addEventListener("click", function() {
    // Obtener el objeto de la hamburguesa "clasica" del array
    var hamburguesaClasica = hamburguesas.find(hamburguesa => hamburguesa.name === 'Clasica');

    texto_clasica = "Nombre: " + "\t" + hamburguesaClasica.name + "\n" +   
                    "Precio c/u:" + "\t" + hamburguesaClasica.precio + "\n" +
                    "Cantidad:" + "\t" + "X" + clasica_cant + "\n";
    
    clasica_cant = clasica_cant + 1;
    // Construir el texto a mostrar en el textarea
    PrecioFinal = PrecioFinal + hamburguesaClasica.precio;
    PrecioFinal_aux = PrecioFinal.toFixed(2);
    PrecioNeto = PrecioFinal / 1.2;
    IGV = PrecioFinal - PrecioNeto;
    PrecioNeto_aux =  PrecioNeto.toFixed(2);
    IGV_aux = IGV.toFixed(2);

    texto_precio =  "Precio Neto: " + "\t" + PrecioNeto_aux + "\n" +
                    "IGV: " + "\t\t" + IGV_aux + "\n" +
                    "Precio Final: " + "\t" + PrecioFinal_aux + "\n";

    texto_pedido = texto_clasica + texto_cheese + texto_royal;
    // Asignar el texto al valor del textarea
    textareaDescripcion1.value = texto_pedido;
    textareaDescripcion2.value = texto_precio;
  });

  //CHEESE
  // Agregar un evento de clic al boton
  botonCheese.addEventListener("click", function() {
    // Obtener el objeto de la hamburguesa "clasica" del array
    var hamburguesaCheese = hamburguesas.find(hamburguesa => hamburguesa.name === 'Cheese');

    texto_cheese = "Nombre: " + "\t" + hamburguesaCheese.name + "\n" +   
                    "Precio c/u:" + "\t" + hamburguesaCheese.precio + "\n" +
                    "Cantidad:" + "\t" + "X" + cheese_cant + "\n";

    cheese_cant = cheese_cant + 1;
    // Construir el texto a mostrar en el textarea
    PrecioFinal = PrecioFinal + hamburguesaCheese.precio;
    PrecioFinal_aux = PrecioFinal.toFixed(2);
    PrecioNeto = PrecioFinal / 1.2;
    IGV = PrecioFinal - PrecioNeto;
    PrecioNeto_aux =  PrecioNeto.toFixed(2);
    IGV_aux = IGV.toFixed(2);

    texto_precio =  "Precio Neto: " + "\t" + PrecioNeto_aux + "\n" +
                    "IGV: " + "\t\t" + IGV_aux + "\n" +
                    "Precio Final: " + "\t" + PrecioFinal_aux + "\n";
    texto_pedido = texto_clasica + texto_cheese + texto_royal;
    // Asignar el texto al valor del textarea
    textareaDescripcion1.value = texto_pedido;
    textareaDescripcion2.value = texto_precio;
  });

  //ROYAL
  // Agregar un evento de clic al boton
  botonRoyal.addEventListener("click", function() {
    // Obtener el objeto de la hamburguesa "clasica" del array
    var hamburguesaRoyal = hamburguesas.find(hamburguesa => hamburguesa.name === 'Royal');

    texto_royal = "Nombre: " + "\t" + hamburguesaRoyal.name + "\n" +   
                  "Precio c/u:" + "\t" + hamburguesaRoyal.precio + "\n" +
                  "Cantidad:" + "\t" + "X" + royal_cant + "\n";

    royal_cant = royal_cant + 1;
    // Construir el texto a mostrar en el textarea
    PrecioFinal = PrecioFinal + hamburguesaRoyal.precio;
    PrecioFinal_aux = PrecioFinal.toFixed(2);
    PrecioNeto = PrecioFinal / 1.2;
    IGV = PrecioFinal - PrecioNeto;
    PrecioNeto_aux =  PrecioNeto.toFixed(2);
    IGV_aux = IGV.toFixed(2);

    texto_precio =  "Precio Neto: " + "\t" + PrecioNeto_aux + "\n" +
                    "IGV: " + "\t\t" + IGV_aux + "\n" +
                    "Precio Final: " + "\t" + PrecioFinal_aux + "\n";
    texto_pedido = texto_clasica + texto_cheese + texto_royal;
    // Asignar el texto al valor del textarea
    textareaDescripcion1.value = texto_pedido;
    textareaDescripcion2.value = texto_precio;
  });

  botonRealizarPago.addEventListener("click", function() {
    localStorage.setItem("pedido", texto_pedido);
    localStorage.setItem("precio", texto_precio);
    localStorage.setItem("precio_final", PrecioFinal_aux);
    window.location.href = "interfazDePago.html";
  });
}

if(condition == 2){
  texto_pedido = localStorage.getItem("pedido");
  texto_precio = localStorage.getItem("precio");
  PrecioFinal = localStorage.getItem("precio_final");

  var inputPrecioFinal = document.getElementById("Precio-pago");
  var inputDineroIngresado = document.getElementById("dinero-ingresado");
  var inputDineroDevuelto = document.getElementById("dinero-devuelto");

  var botonGenerarVuelto = document.getElementById("generar-vuelto");

  var textareaDescripcion_pago1 = document.querySelector('textarea[name="description-pago1"]');
  var textareaDescripcion_pago2 = document.querySelector('textarea[name="description-pago2"]');
  textareaDescripcion_pago1.value = texto_pedido;
  textareaDescripcion_pago2.value = texto_precio;
  inputPrecioFinal.value = PrecioFinal;

  botonGenerarVuelto.addEventListener("click", () => {
    var Vuelto_aux = inputDineroIngresado.value - inputPrecioFinal.value;
    inputDineroDevuelto.value = Vuelto_aux.toFixed(2);
  });

}
//HACER APARECER O DESAPARECER LOS BOTONES
function aparecer_boton (desaparecer,aparecer){
  if(desaparecer == 1){
    btnClasica.classList.toggle("hidden");
    btnCheese.classList.toggle("hidden");
    btnRoyal.classList.toggle("hidden");
  }else if(desaparecer == 2){
    btnPechugon.classList.toggle("hidden");
    btnBroaster.classList.toggle("hidden");
    btnBurger.classList.toggle("hidden");
  }else if(desaparecer == 3){
    btnNuggets.classList.toggle("hidden");
    btnSalchipapa.classList.toggle("hidden");
    btnCheeseFingers.classList.toggle("hidden");
  }else if(desaparecer == 4){
    btnInkaKola.classList.toggle("hidden");
    btnCocaCola.classList.toggle("hidden");
    btnSprite.classList.toggle("hidden");
  }
  if(aparecer == 1){
    btnClasica.classList.toggle("hidden");
    btnCheese.classList.toggle("hidden");
    btnRoyal.classList.toggle("hidden")
  }else if(aparecer == 2){
    btnPechugon.classList.toggle("hidden");
    btnBroaster.classList.toggle("hidden");
    btnBurger.classList.toggle("hidden");
  }else if(aparecer == 3){
    btnNuggets.classList.toggle("hidden");
    btnSalchipapa.classList.toggle("hidden");
    btnCheeseFingers.classList.toggle("hidden");
  }else if(aparecer == 4){
    btnInkaKola.classList.toggle("hidden");
    btnCocaCola.classList.toggle("hidden");
    btnSprite.classList.toggle("hidden");
  }
}







