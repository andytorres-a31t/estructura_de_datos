import java.util.Random;

public class Main {

    public static void main(String[] args) {

        final int cantidad = 10000;
        final int repeticiones = 5;

        CentroOperaciones centro = new CentroOperaciones();
        Random random = new Random();
        int idBuscado = -1;

        // Generar 10000 paquetes y capturar un id válido para la búsqueda
        for (int i = 0; i < cantidad; i++) {
            int id = random.nextInt(100000);
            Paquete paquete = new Paquete(id, "Cliente " + i);
            centro.agregarPaquete(paquete);

            if (i == cantidad / 2) {
                idBuscado = id;
            }
        }

        System.out.println("Prueba de rendimiento con " + cantidad + " paquetes");
        System.out.println("Id buscado: " + idBuscado);
        System.out.println();

        long tiempoLinealTotal = 0;
        for (int i = 0; i < repeticiones; i++) {
            long inicio = System.nanoTime();
            Paquete encontrado = centro.buscarPaqueteLineal(idBuscado);
            long fin = System.nanoTime();
            tiempoLinealTotal += fin - inicio;

            if (encontrado == null) {
                System.out.println("ERROR: Paquete no encontrado en búsqueda lineal.");
                return;
            }
        }
        long tiempoLinealPromedio = tiempoLinealTotal / repeticiones;

        long inicioOrdenamiento = System.nanoTime();
        centro.ordenarPaquetes();
        long finOrdenamiento = System.nanoTime();
        long tiempoOrdenamiento = finOrdenamiento - inicioOrdenamiento;

        long tiempoBinarioTotal = 0;
        for (int i = 0; i < repeticiones; i++) {
            long inicio = System.nanoTime();
            Paquete encontrado = centro.buscarPaqueteBinario(idBuscado);
            long fin = System.nanoTime();
            tiempoBinarioTotal += fin - inicio;

            if (encontrado == null) {
                System.out.println("ERROR: Paquete no encontrado en búsqueda binaria.");
                return;
            }
        }
        long tiempoBinarioPromedio = tiempoBinarioTotal / repeticiones;

        System.out.println("RESULTADOS");
        System.out.println("------------------------");
        System.out.println("Búsqueda lineal promedio: " + tiempoLinealPromedio + " ns");
        System.out.println("Ordenamiento: " + tiempoOrdenamiento + " ns");
        System.out.println("Búsqueda binaria promedio: " + tiempoBinarioPromedio + " ns");
        System.out.println("Costo total binaria: " + (tiempoOrdenamiento + tiempoBinarioPromedio) + " ns");

        if (tiempoBinarioPromedio < tiempoLinealPromedio) {
            System.out.println("Análisis: la búsqueda binaria es más rápida después de ordenar la lista.");
        } else {
            System.out.println("Análisis: la búsqueda lineal es comparable o más rápida en esta ejecución, pero hay que considerar el costo de ordenar.");
        }
    }
}