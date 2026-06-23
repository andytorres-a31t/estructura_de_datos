class Turno {
  constructor(id, nombreCliente, motivo) {
    this.id = id;
    this.nombreCliente = nombreCliente;
    this.motivo = motivo;
    this.horaRegistro = new Date().toLocaleTimeString();
  }
}

class ColaTurnos {
  constructor() {
    this.items = [];
    this.contadorId = 1;
  }

  // Encolar: registrar un nuevo cliente al final de la cola
  registrarTurno(nombreCliente, motivo) {
    const turno = new Turno(this.contadorId++, nombreCliente, motivo);
    this.items.push(turno);
    console.log(`Turno #${turno.id} registrado para ${nombreCliente} (${motivo})`);
    return turno;
  }

  // Desencolar: atender al cliente que lleva más tiempo esperando
  atenderSiguiente() {
    if (this.estaVacia()) {
      console.log("No hay clientes en espera.");
      return null;
    }
    const turno = this.items.shift();
    console.log(`Atendiendo turno #${turno.id} - ${turno.nombreCliente} (${turno.motivo})`);
    return turno;
  }

  // Ver quién sigue sin sacarlo de la cola
  siguienteEnEspera() {
    if (this.estaVacia()) {
      console.log("No hay clientes en espera.");
      return null;
    }
    return this.items[0];
  }

  estaVacia() {
    return this.items.length === 0;
  }

  tamano() {
    return this.items.length;
  }

  mostrarCola() {
    if (this.estaVacia()) {
      console.log("La cola de turnos está vacía.");
      return;
    }
    console.log("Cola de turnos actual:");
    this.items.forEach((turno, index) => {
      console.log(
        `  ${index + 1}. Turno #${turno.id} - ${turno.nombreCliente} (${turno.motivo}) - Registrado a las ${turno.horaRegistro}`
      );
    });
  }
}

// ----------------------
// Simulación de uso
// ----------------------
const colaAtencion = new ColaTurnos();

colaAtencion.registrarTurno("Ana Pérez", "Apertura de cuenta");
colaAtencion.registrarTurno("Luis Gómez", "Reclamo de cobro");
colaAtencion.registrarTurno("María Torres", "Consulta de saldo");

colaAtencion.mostrarCola();

console.log("\n--- Inicia atención ---\n");

colaAtencion.atenderSiguiente(); // Atiende a Ana Pérez (la primera en llegar)
colaAtencion.mostrarCola();

colaAtencion.atenderSiguiente(); // Atiende a Luis Gómez

console.log("\nSiguiente en espera:", colaAtencion.siguienteEnEspera());

console.log("\nTamaño actual de la cola:", colaAtencion.tamano());

module.exports = { ColaTurnos, Turno };