// datos.js
let productos = [];

function agregarProductoADatos(producto) {
  productos.push(producto);
}

function obtenerProductosDeDatos() {
  return [...productos]; // Devolver una copia para evitar modificaciones externas directas
}

module.exports = {
  agregarProductoADatos,
  obtenerProductosDeDatos
};