import { hamburguesas, menus, complementos, bebidas } from "./productos.js";

var detalleDeVenta = [];

var PrecioFinal =  0.0;
var PrecioFinal_aux;
var PrecioNeto =  0.0;
var PrecioNeto_aux;
var IGV = 0.0;
var IGV_aux;

var condicionHamburguesa = 0;

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

  function agregarHamburguesa(nombreHamburguesa,con) {
    // Obtener el objeto de la hamburguesa del array
    var hamburguesa = hamburguesas.find(hamburguesa => hamburguesa.name === nombreHamburguesa);
    var detalle = detalleDeVenta.find(detalle => detalle.name === hamburguesa.name);
    // Verificar si el objeto ya existe en detalleDeVenta
    if (detalle){
      // Si ya existe, incrementar la cantidad
      detalle.cantidad += 1;
    }else{
      // Si no existe, agregar un nuevo objeto al arreglo
      detalleDeVenta.push({
        name: hamburguesa.name,
        cantidad: 1,
        precio: hamburguesa.precio
      });
      var detalle = detalleDeVenta.find(detalle => detalle.name === hamburguesa.name);
    }
  
    if(con == 1){
      texto_clasica = "Nombre: " + "\t" + hamburguesa.name + "\n" +
      "Precio c/u:" + "\t" + hamburguesa.precio + "\n" +
      "Cantidad:" + "\t" + "X" + detalle.cantidad + "\n";
    }else if (con == 2){
      texto_cheese = "Nombre: " + "\t" + hamburguesa.name + "\n" +
      "Precio c/u:" + "\t" + hamburguesa.precio + "\n" +
      "Cantidad:" + "\t" + "X" + detalle.cantidad + "\n";
    }else if (con == 3){
      texto_royal = "Nombre: " + "\t" + hamburguesa.name + "\n" +
      "Precio c/u:" + "\t" + hamburguesa.precio + "\n" +
      "Cantidad:" + "\t" + "X" + detalle.cantidad + "\n";
    }
    texto_hamburguesa = texto_clasica + texto_cheese + texto_royal;
  
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
    condicionHamburguesa = 1;
    agregarHamburguesa("Clasica",condicionHamburguesa);
  });
  
  botonCheese.addEventListener("click", function() {
    condicionHamburguesa = 2;
    agregarHamburguesa("Cheese",condicionHamburguesa);
  });
  
  botonRoyal.addEventListener("click", function() {
    condicionHamburguesa = 3;
    agregarHamburguesa("Royal",condicionHamburguesa);
  });

  botonAnularProducto.addEventListener("click", function(){
    //window.location.href = "index.html";
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

  
  //LA lista VA A LA OTRA INTERFAZ
  botonRealizarPago.addEventListener("click", function() {
    localStorage.setItem("pedido", texto_pedido);
    localStorage.setItem("precio", texto_precio);
    localStorage.setItem("precio_final", PrecioFinal_aux);
    localStorage.setItem("detalleDeVenta", JSON.stringify(detalleDeVenta));
    window.location.href = "interfazDePago.html";
  });


}

//LA OTRA INTERFAZ
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