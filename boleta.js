import { hamburguesas, menus, complementos, bebidas } from "./productos.js";

const GenerarBoleta = document.getElementById("Generar-boleta");

GenerarBoleta.addEventListener("click", () => {
  // Crea un nuevo objeto jsPDF
  //var doc = new jsPDF();
  // Define las dimensiones del PDF para una boleta de comida rápida (en milímetros)
  const width = 150;
  const height = 300;

  // Crea un nuevo objeto jsPDF con las dimensiones especificadas
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: [width, height]
  });

  // Agrega el título de la boleta
  doc.setFontSize(18);
  doc.text("BEMBOS", 60, 10);
  doc.setFontSize(12);
  doc.text("RUC 20392943949", 10, 20);
  doc.text("BOLETA DE VENTA ELECTRÓNICA", 10, 30);
  doc.text("Jr Camino Real 18045", 10, 40);
  const numeroBoleta = Math.floor(10000000 + Math.random() * 90000000); // Genera un número aleatorio de 8 dígitos
  doc.text("Número de boleta: " + numeroBoleta, 10, 50);
  // Obtiene la fecha y hora actual
  const fechaActual = new Date();
  const fechaFormateada = fechaActual.toLocaleString();

  doc.text("Fecha y hora de emisión: " + fechaFormateada, 10, 60);
  
  // Agrega la descripción y los detalles de los productos
  doc.text("================================================", 10, 70);
  doc.text("Descripción", 10, 80);
  doc.text("Cantidad x P.unitario                   Total", 10, 90);
  doc.text("pnv - Clasica Regular", 10, 100);
  doc.text("1 X 11.90                                11.90", 10, 110);
  doc.text("================================================", 10, 120);
  doc.text("P.GRAVADA                                  9.92", 10, 130);
  doc.text("P.GRAVADA                                   1.79", 10, 140);
  doc.text("ASDDSA", 10, 150);
  doc.text("IMPORTE TOTAL                            11.90", 10, 160);
  doc.text("================================================", 10, 170);
  doc.text("Son : ONCE CON 90/100 SOLES", 10, 180);
  doc.text("================================================", 10, 190);
  doc.text("EFECTIVO SOLES                             20.00", 10, 200);
  doc.text("Vuelto                                      8.10", 10, 210);
  doc.text("================================================", 10, 220);
  doc.text("Cajero: DIEGO LUCHO MAMANI QUISPE               ", 10, 230);

  // Guarda el PDF o abre en una nueva pestaña
  doc.save("boleta.pdf");
});