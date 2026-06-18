import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class CentroOperaciones {

    private ArrayList<Paquete> paquetes;

    public CentroOperaciones() {
        paquetes = new ArrayList<>();
    }

    public void agregarPaquete(Paquete p) {
        paquetes.add(p);
    }

    // BUSQUEDA LINEAL
    public Paquete buscarPaqueteLineal(int idBuscado) {

        for (Paquete p : paquetes) {
            if (p.getId() == idBuscado) {
                return p;
            }
        }

        return null;
    }

    // ORDENAR POR ID
    public void ordenarPaquetes() {

        Collections.sort(paquetes,
                Comparator.comparingInt(Paquete::getId));
    }

    // VERIFICAR SI ESTA ORDENADO
    private boolean estaOrdenado() {

        for (int i = 0; i < paquetes.size() - 1; i++) {

            if (paquetes.get(i).getId()
                    > paquetes.get(i + 1).getId()) {

                return false;
            }
        }

        return true;
    }

    // BUSQUEDA BINARIA
    public Paquete buscarPaqueteBinario(int idBuscado) {

        if (!estaOrdenado()) {
            System.out.println(
                    "Error: La lista no está ordenada.");
            return null;
        }

        int izquierda = 0;
        int derecha = paquetes.size() - 1;

        while (izquierda <= derecha) {

            int medio =
                    izquierda + (derecha - izquierda) / 2;

            int idActual =
                    paquetes.get(medio).getId();

            if (idActual == idBuscado) {
                return paquetes.get(medio);
            }

            if (idActual < idBuscado) {
                izquierda = medio + 1;
            } else {
                derecha = medio - 1;
            }
        }

        return null;
    }
}