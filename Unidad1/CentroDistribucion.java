import java.util.ArrayList;
import java.util.Stack;

public class CentroDistribucion {
    private ArrayList<Paquete> inventario;

    public CentroDistribucion() {
        this.inventario = new ArrayList<>();
    }

    public void recibirCajaCamion(Paquete p) {
        Stack<Paquete> stack = new Stack<>();
        stack.push(p);
        this.inventario.add(p);
    }

    public Paquete despacharACliente() {
        if (!this.inventario.isEmpty()) {
            return this.inventario.remove(this.inventario.size() - 1);
        }
        return null;
    }

    // MERGE SORT — O(n log n) siempre
    // Estable y predecible. Usa memoria extra O(n)
    public void ordenarRutaMerge() {
        if (this.inventario.size() <= 1) return;
        ArrayList<Paquete> resultado = mergeSort(this.inventario);
        this.inventario.clear();
        this.inventario.addAll(resultado);
    }

    private ArrayList<Paquete> mergeSort(ArrayList<Paquete> lista) {
        if (lista.size() <= 1) return lista;

        int medio = lista.size() / 2;
        ArrayList<Paquete> izq = mergeSort(new ArrayList<>(lista.subList(0, medio)));
        ArrayList<Paquete> der = mergeSort(new ArrayList<>(lista.subList(medio, lista.size())));

        return merge(izq, der);
    }

    private ArrayList<Paquete> merge(ArrayList<Paquete> izq, ArrayList<Paquete> der) {
        ArrayList<Paquete> resultado = new ArrayList<>();
        int i = 0, j = 0;
        while (i < izq.size() && j < der.size()) {
            if (izq.get(i).getCodigoPostal() <= der.get(j).getCodigoPostal())
                resultado.add(izq.get(i++));
            else
                resultado.add(der.get(j++));
        }
        while (i < izq.size()) resultado.add(izq.get(i++));
        while (j < der.size()) resultado.add(der.get(j++));
        return resultado;
    }
}
