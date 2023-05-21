//--------------------------------------------------------
/*PRUEBA NOMAS, TODOS ESTOS VALORES TIENEN QUE SER ENVIADOS DESDE LA INTERFAZ DE PAGO*/
import { hamburguesas, menus, complementos, bebidas } from "./productos.js";
let detalleDeVenta = [];

  detalleDeVenta.push(hamburguesas[0]);
  detalleDeVenta.push(menus[1]);
  detalleDeVenta.push(complementos[2]);
  detalleDeVenta.push(bebidas[3]);
  
let factura = false;

console.log(detalleDeVenta);
//---------------------------------

//!!!!AGREGAR LA CANTIDAD!!!!!!!!!!!!!!
const GenerarBoleta = document.getElementById("Generar-boleta");

GenerarBoleta.addEventListener("click", () => {
  const width = 150;
  const height = 300;

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: [width, height]
  });
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
    const cantidad = 1;
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
});