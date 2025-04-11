
const negocio = require('./negocio');
const readlineSync = require('readline-sync');

function mostrarMenu() {
  console.log("\n--- Menú ---");
  console.log("1. Agregar producto");
  console.log("2. Listar productos");
  console.log("3. Salir");
}

function iniciarAplicacion() {
  while (true) {
    mostrarMenu();
    const opcion = readlineSync.questionInt("\n Seleccione una opción:--- ");

    switch (opcion) {
      case 1:
        const nombre = readlineSync.question("Ingrese el nombre del producto: ");
        const precio = readlineSync.questionFloat("Ingrese el precio del producto: ");
        negocio.agregarProducto(nombre, precio);
        break;
      case 2:
        const listaProductos = negocio.listarProductos();
        console.log(listaProductos);
        break;
      case 3:
        console.log("Saliendo de la aplicación.");
        return;
      default:
        console.log("Opción inválida. Intente nuevamente.");
    }
  }
}

module.exports = {
  iniciarAplicacion
};