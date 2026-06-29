class ColaCircularPedidos {
  constructor(max = 20) {
    this.MAX = max;
    this.arreglo = new Array(this.MAX).fill(null); // arreglo estático
    this.frente = 0;
    this.final = 0;
    this.cantidad = 0;
  }
 
  estaVacia() {
    return this.cantidad === 0;
  }
 
  estaLlena() {
    return this.cantidad === this.MAX;
  }
 
  /**
   * Encolar (insertar) un nuevo pedido al final de la cola. O(1)
   */
  encolar(id, producto, cantidadProd) {
    if (this.estaLlena()) {
      console.log(`No se pudo registrar el pedido ${id}: la cola está llena (overflow evitado).`);
      return false;
    }
 
    const pedido = { id, producto, cantidad: cantidadProd };
 
    this.arreglo[this.final] = pedido;
    this.final = (this.final + 1) % this.MAX; // aritmética modular
    this.cantidad++;
 
    console.log(`Pedido registrado -> ID: ${id}, Producto: ${producto}, Cantidad: ${cantidadProd}`);
    return true;
  }
 
  /**
   * Desencolar (remover) el pedido más antiguo (el del frente). O(1)
   */
  desencolar() {
    if (this.estaVacia()) {
      console.log("No hay pedidos pendientes por atender.");
      return null;
    }
 
    const pedido = this.arreglo[this.frente];
    this.arreglo[this.frente] = null; // libera la celda
    this.frente = (this.frente + 1) % this.MAX; // aritmética modular
    this.cantidad--;
 
    console.log(`Pedido despachado -> ID: ${pedido.id}, Producto: ${pedido.producto}, Cantidad: ${pedido.cantidad}`);
    return pedido;
  }
 
  verFrente() {
    if (this.estaVacia()) {
      console.log("La cola de pedidos está vacía.");
      return null;
    }
    return this.arreglo[this.frente];
  }
 
  tamanio() {
    return this.cantidad;
  }
 
  mostrarCola() {
    console.log("\n--- Estado actual de la cola de pedidos ---");
    if (this.estaVacia()) {
      console.log("(sin pedidos pendientes)");
      console.log("--------------------------------------------\n");
      return;
    }
 
    let indice = this.frente;
    for (let i = 0; i < this.cantidad; i++) {
      const pedido = this.arreglo[indice];
      console.log(`${i + 1}. ID: ${pedido.id} | Producto: ${pedido.producto} | Cantidad: ${pedido.cantidad}`);
      indice = (indice + 1) % this.MAX;
    }
    console.log("--------------------------------------------\n");
  }
}

module.exports = ColaCircularPedidos;