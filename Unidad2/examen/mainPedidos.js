const ColaCircularPedidos = require("./ColaCircularPedidos");

function main() {
  const cola = new ColaCircularPedidos(20);
 
  console.log("=== Llegada de pedidos a la cafetería ===\n");
  cola.encolar("P001", "Capuchino", 2);
  cola.encolar("P002", "Latte Macchiato", 1);
  cola.encolar("P003", "Croissant", 3);
  cola.encolar("P004", "Americano", 1);
 
  cola.mostrarCola();
 
  console.log("=== El personal de barra empieza a despachar (FIFO) ===\n");
  cola.desencolar(); // se despacha P001, el primero en llegar
  cola.desencolar(); // se despacha P002
 
  cola.mostrarCola();
 
  console.log("=== Llegan nuevos pedidos mientras la cola sigue activa ===\n");
  cola.encolar("P005", "Té helado", 2);
  cola.encolar("P006", "Mocaccino", 1);
 
  cola.mostrarCola();
 
  console.log("=== Próximo pedido a atender (sin removerlo) ===");
  console.log(cola.verFrente());
  console.log(`\nPedidos pendientes en total: ${cola.tamanio()}`);
}
 
main();