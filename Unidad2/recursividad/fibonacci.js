function fibonacci(n) { 
    if (n <= 1) { 
        return n; 
    } 
    return fibonacci(n - 1) + fibonacci(n - 2); 

} 

function fibonacci(n, profundidad = 0) {
    const sangria = "  ".repeat(profundidad); // dos espacios por nivel
    console.log(`${sangria}fib(${n})`);
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1, profundidad + 1) + fibonacci(n - 2, profundidad + 1);
}

fibonacci(4);