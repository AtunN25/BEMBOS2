import { hamburguesas, menus, complementos, bebidas } from "./productos.js";

var detalleDeVenta = [];

var PrecioFinal =  0.0;
var PrecioFinal_aux;
var PrecioNeto =  0.0;
var PrecioNeto_aux;
var IGV = 0.0;
var IGV_aux;

var texto_hamburguesa = "";
var texto_pedido = "";
var texto_precio = "";

var texto_RUC = "";
var texto_DNI = "";
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

//Cancelar Pedido
var texto_cancelar = "";

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

  var botonRUC = document.getElementById("RUC");
  var botonDNI = document.getElementById("DNI");

  var botonAnadirRUC = document.getElementById("anadir-ruc");
  var botonAnadirDNI = document.getElementById("anadir-dni");

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

  var btnRUC = document.querySelector(".boton-anadir-RUC");
  var btnanadirRUC = document.querySelector(".txt-RUC");

  var btnDNI = document.querySelector(".boton-anadir-DNI");
  var btnanadirDNI = document.querySelector(".txt-DNI");

  var btnsinpedido = document.querySelector(".txt-NULL");

  var botonRealizarPago = document.getElementById("Realizar-pago");

  var botonCancelarPedido = document.getElementById("Cancelar-Pedido");
  var botonAnularProducto = document.getElementById("Anular-Producto");


  botonAnadirRUC.addEventListener("click", function(){
    var inputRUC = document.getElementById("RUCtxt");
    texto_RUC = "RUC: " + inputRUC.value;
   // Asignar el texto al valor del textarea
   textareaDescripcion1.value = texto_pedido + texto_RUC;
   textareaDescripcion2.value = texto_precio + texto_RUC;
  });

  botonAnadirDNI.addEventListener("click", function(){
    var inputDNI = document.getElementById("DNItxt");
    texto_DNI = "DNI: " + inputDNI.value;

   // Asignar el texto al valor del textarea
   textareaDescripcion1.value = texto_pedido + texto_DNI;
   textareaDescripcion2.value = texto_precio + texto_DNI;
  });

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

  botonRUC.addEventListener("click", () => {
    if(condition_first_aparition == 1){
      btnRUC.classList.toggle("hidden");
      btnanadirRUC.classList.toggle("hidden");
      condition_first_aparition = 2;
      enviar_desaparecer = 5;
    }else{
      enviar_aparecer = 5;
      aparecer_boton(enviar_desaparecer,enviar_aparecer);
      enviar_desaparecer = 5;
    }
  });
  botonDNI.addEventListener("click", () => {
    if(condition_first_aparition == 1){
      btnDNI.classList.toggle("hidden");
      btnanadirDNI.classList.toggle("hidden");
      condition_first_aparition = 2;
      enviar_desaparecer = 6;
    }else{
      enviar_aparecer = 6;
      aparecer_boton(enviar_desaparecer,enviar_aparecer);
      enviar_desaparecer = 6;
    }
  });




  //ENLISTA LOS PRODUCTOS



  /*function agregarHamburguesa(nombreHamburguesa) {
    // Obtener el objeto de la hamburguesa del array
    var hamburguesa = hamburguesas.find(hamburguesa => hamburguesa.name === nombreHamburguesa);
  
    // Verificar si el objeto ya existe en detalleDeVenta
    var detalle = detalleDeVenta.find(detalle => detalle.name === hamburguesa.name);
    if (detalle) {
      // Si ya existe, incrementar la cantidad
      detalle.cantidad += 1;
    } else {
      // Si no existe, agregar un nuevo objeto al arreglo
      detalleDeVenta.push({
        name: hamburguesa.name,
        cantidad: 1,
        precio: hamburguesa.precio
      });
    }
  
    // Construir el texto a mostrar en el textarea
    texto_hamburguesa = "Nombre: " + "\t" + hamburguesa.name + "\n" +
      "Precio c/u:" + "\t" + hamburguesa.precio + "\n" +
      "Cantidad:" + "\t" + "X" + detalle.cantidad + "\n";
  
    // Actualizar los totales
    PrecioFinal += hamburguesa.precio;
    PrecioFinal_aux = PrecioFinal.toFixed(2);
    PrecioNeto = PrecioFinal / 1.2;
    IGV = PrecioFinal - PrecioNeto;
    PrecioNeto_aux = PrecioNeto.toFixed(2);
    IGV_aux = IGV.toFixed(2);
  
    texto_precio = "Precio Neto: " + "\t" + PrecioNeto_aux + "\n" +
      "IGV: " + "\t\t" + IGV_aux + "\n" +
      "Precio Final: " + "\t" + PrecioFinal_aux + "\n";
  
    // Construir el texto completo del pedido
    texto_pedido = texto_hamburguesa + texto_DNI + texto_RUC;
  
    // Asignar el texto al valor del textarea
    textareaDescripcion1.value = texto_pedido;
    textareaDescripcion2.value = texto_precio + texto_DNI + texto_RUC;
  }
  
  // Agregar eventos de clic a los botones de hamburguesas
  botonClasica.addEventListener("click", function() {
    agregarHamburguesa("Clasica");
  });
  
  botonCheese.addEventListener("click", function() {
    agregarHamburguesa("Cheese");
  });
  
  botonRoyal.addEventListener("click", function() {
    agregarHamburguesa("Royal");
  });
  */




  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //CLASICA
  // Agregar un evento de clic al boton
  botonClasica.addEventListener("click", function() {
     // Obtener el objeto de la hamburguesa "clasica" del array
   var hamburguesaClasica = hamburguesas.find(hamburguesa => hamburguesa.name === 'Clasica');

   // Verificar si el objeto ya existe en detalleDeVenta
   var detalleClasica = detalleDeVenta.find(detalle => detalle.name === hamburguesaClasica.name);
   if (detalleClasica) {
     // Si ya existe, incrementar la cantidad
     detalleClasica.cantidad += 1;
   } else {
     // Si no existe, agregar un nuevo objeto al arreglo
     detalleDeVenta.push({
       name: hamburguesaClasica.name,
       cantidad: 1,
       precio: hamburguesaClasica.precio
     });
   }

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

   texto_pedido = texto_clasica + texto_cheese + texto_royal + texto_DNI + texto_RUC;
   // Asignar el texto al valor del textarea
   textareaDescripcion1.value = texto_pedido;
   textareaDescripcion2.value = texto_precio + texto_DNI + texto_RUC;
  });



  //CHEESE
  // Agregar un evento de clic al boton
  botonCheese.addEventListener("click", function() {
      // Obtener el objeto de la hamburguesa "cheese" del array
    var hamburguesaCheese = hamburguesas.find(hamburguesa => hamburguesa.name === 'Cheese');

    // Verificar si el objeto ya existe en detalleDeVenta
    var detalleCheese = detalleDeVenta.find(detalle => detalle.name === hamburguesaCheese.name);
    if (detalleCheese) {
      // Si ya existe, incrementar la cantidad
      detalleCheese.cantidad += 1;
    } else {
      // Si no existe, agregar un nuevo objeto al arreglo
      detalleDeVenta.push({
        name: hamburguesaCheese.name,
        cantidad: 1,
        precio: hamburguesaCheese.precio
      });
    }
  
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
    texto_pedido = texto_clasica + texto_cheese + texto_royal + texto_DNI + texto_RUC;
    // Asignar el texto al valor del textarea
    textareaDescripcion1.value = texto_pedido;
    textareaDescripcion2.value = texto_precio + texto_DNI + texto_RUC;
  });

  //ROYAL
  // Agregar un evento de clic al boton
  botonRoyal.addEventListener("click", function() {
      // Obtener el objeto de la hamburguesa "royal" del array
    var hamburguesaRoyal = hamburguesas.find(hamburguesa => hamburguesa.name === 'Royal');

    // Verificar si el objeto ya existe en detalleDeVenta
    var detalleRoyal = detalleDeVenta.find(detalle => detalle.name === hamburguesaRoyal.name);
    if (detalleRoyal) {
      // Si ya existe, incrementar la cantidad
      detalleRoyal.cantidad += 1;
    } else {
      // Si no existe, agregar un nuevo objeto al arreglo
      detalleDeVenta.push({
        name: hamburguesaRoyal.name,
        cantidad: 1,
        precio: hamburguesaRoyal.precio
      });
    }
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
    texto_pedido = texto_clasica + texto_cheese + texto_royal + texto_DNI + texto_RUC;
    // Asignar el texto al valor del textarea
    textareaDescripcion1.value = texto_pedido;
    textareaDescripcion2.value = texto_precio + texto_DNI + texto_RUC;

  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  botonRealizarPago.addEventListener("click", function() {
    localStorage.setItem("pedido", texto_pedido);
    localStorage.setItem("precio", texto_precio);
    localStorage.setItem("precio_final", PrecioFinal_aux);
    localStorage.setItem("detalleDeVenta", JSON.stringify(detalleDeVenta));
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

  let factura = false;
  var GenerarBoleta = document.getElementById("Generar-boleta");

  var detalleDeVentaJSON = localStorage.getItem("detalleDeVenta");
  var detalleDeVenta = JSON.parse(detalleDeVentaJSON);
  console.log(detalleDeVenta)

  //GENERA LA BOLETA EN UN PDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  GenerarBoleta.addEventListener("click", () => {
    const width = 150;
    const height = 300;

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [width, height]
    });

    // Agrega el estilo de fuente al contenedor de la boleta
    doc.setFont("Manjari", "sans-serif");

    doc.setFontSize(18);
    doc.text("BEMBOS", 60, 10);
    doc.setFontSize(12);
    doc.text("RUC 20392943949", 10, 20);
    //------------------------------------------------------------
    if(factura){
      doc.text("FACTURA", 10, 30);
    }else{
      doc.text("BOLETA DE VENTA ELECTRÓNICA", 10, 30);
    }

    //------------------------------------------------------------
    doc.text("Jr Camino Real 18045", 10, 40);
    const numeroBoleta = Math.floor(10000000 + Math.random() * 90000000); // Genera un número aleatorio de 8 dígitos

    doc.text("Número de boleta: " + numeroBoleta, 10, 50);
    // Obtiene la fecha y hora actual
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleString();

    doc.text("Fecha y hora de emisión: " + fechaFormateada, 10, 60);
    doc.text("================================================", 10, 70);
    doc.text("Descripción", 10, 80);
    doc.text("Cantidad x P.unitario                   Total", 10, 90);

    let yPosition = 100;
    let total = 0;

    for (let i = 0; i < detalleDeVenta.length; i++) {
      const producto = detalleDeVenta[i];
      const { name, precio } = producto;
      const cantidad = detalleDeVenta[i].cantidad;
      const subtotal = cantidad * precio;

      doc.text(name, 10, yPosition);
      doc.text(`${cantidad} X ${precio.toFixed(2)}                                      ${subtotal.toFixed(2)}`, 10, yPosition + 10);

      yPosition += 20;
      total += subtotal;
    }

    doc.text("================================================", 10, yPosition);
    doc.text("IGV                                                " + (total * 0.18).toFixed(2), 10, yPosition + 10);
    doc.text("VALOR NETO                               " + (total * 0.82).toFixed(2), 10, yPosition + 20);
    doc.text("IMPORTE TOTAL                          " + total.toFixed(2), 10, yPosition + 30);
    doc.text("================================================", 10, yPosition + 40);
    doc.text("Cajero: DIEGO LUCHO MAMANI QUISPE               ", 10, yPosition + 50);

    doc.save("boleta.pdf");
    localStorage.removeItem("detalleDeVenta");
  });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

botonAnularProducto.addEventListener("click", function(){
  
});

botonCancelarPedido.addEventListener("click", function(){
  texto_clasica = "";
  clasica_cant = 1;

  texto_cheese = "";
  cheese_cant = 1;

  texto_royal = "";
  royal_cant = 1;

  PrecioFinal =  0.0;
  PrecioFinal_aux;
  PrecioNeto =  0.0;
  PrecioNeto_aux;
  IGV = 0.0;
  IGV_aux;
  texto_pedido = "";
  texto_precio = "";

  texto_RUC = "";
  texto_DNI = "";

  texto_cancelar = "Pedido Cancelado";

  textareaDescripcion1.value = texto_cancelar;
  textareaDescripcion2.value = texto_cancelar;
});

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
}else if(desaparecer == 5){
  btnRUC.classList.toggle("hidden");
  btnanadirRUC.classList.toggle("hidden");
}else if(desaparecer == 6){
  btnDNI.classList.toggle("hidden");
  btnanadirDNI.classList.toggle("hidden");
}

if(aparecer == 1){
  btnClasica.classList.toggle("hidden");
  btnCheese.classList.toggle("hidden");
  btnRoyal.classList.toggle("hidden");
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
}else if(aparecer == 5){
  btnRUC.classList.toggle("hidden");
  btnanadirRUC.classList.toggle("hidden");
}else if(aparecer == 6){
  btnDNI.classList.toggle("hidden");
  btnanadirDNI.classList.toggle("hidden");
}
}