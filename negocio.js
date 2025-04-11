const datos = require('./datos');

function agregarProducto(nombre, precio) {
  const nuevoProducto = {
    id: datos.obtenerProductosDeDatos().length + 1,
    nombre: nombre,
    precio: precio
  };
  datos.agregarProductoADatos(nuevoProducto);
  console.log(`[Negocio] Producto "${nombre}" agregado.`);
}

function listarProductos() {
  const productos = datos.obtenerProductosDeDatos();
  if (productos.length === 0) {
    return "[Negocio] No hay productos en la lista.";
  }
  let mensaje = "[Negocio] Lista de Productos:\n";
  productos.forEach(producto => {
    mensaje += `- ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}\n`;
  });
  return mensaje;
}

module.exports = {
  agregarProducto,
  listarProductos
};