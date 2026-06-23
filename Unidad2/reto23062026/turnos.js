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

  registrarTurno(nombreCliente, motivo) {
    const turno = new Turno(this.contadorId++, nombreCliente, motivo);
    this.items.push(turno);
    console.log(`Turno #${turno.id} registrado para ${nombreCliente} (${motivo})`);
    return turno;
  }

  atenderSiguiente() {
    if (this.estaVacia()) {
      console.log("No hay clientes en espera.");
      return null;
    }
    const turno = this.items.shift();
    console.log(`Atendiendo turno #${turno.id} - ${turno.nombreCliente} (${turno.motivo})`);
    return turno;
  }

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
        `${index + 1}. Turno #${turno.id} - ${turno.nombreCliente} (${turno.motivo}) - ${turno.horaRegistro}`
      );
    });
  }
}

module.exports = { ColaTurnos };
