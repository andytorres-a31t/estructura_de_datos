const { ColaTurnos } = require("./turnos");

class App {
  constructor() {
    this.colaAtencion = new ColaTurnos();
  }

  iniciar() {
    console.log("Iniciando sistema de turnos...\n");

    this.colaAtencion.registrarTurno("Ana Pérez", "Apertura de cuenta");
    this.colaAtencion.registrarTurno("Luis Gómez", "Reclamo de cobro");
    this.colaAtencion.registrarTurno("María Torres", "Consulta de saldo");

    console.log("\nEstado inicial de la cola:");
    this.colaAtencion.mostrarCola();

    console.log("\n--- Inicia atención ---\n");

    this.colaAtencion.atenderSiguiente();
    this.colaAtencion.mostrarCola();

    this.colaAtencion.atenderSiguiente();

    console.log("\nSiguiente en espera:", this.colaAtencion.siguienteEnEspera());
    console.log("Tamaño actual de la cola:", this.colaAtencion.tamano());
  }
}

// Ejecutar el programa
const app = new App();
app.iniciar();