function factorialCola(n, acumulador = 1) { 
    // TODO: Escribe tu versión aquí 
    if (n <= 1) {
        return acumulador;
    }
    return factorialCola(n - 1, acumulador * n);
}
