
let expr = "manzana";
switch (expr) {
    case "manzana":
        console.log("Las manzanas cuestan $1 cada una.");
        break;
    case "pera":
        console.log("Las peras cuestan $2 cada una.");
        break;
    case "naranja":
        console.log("Las naranjas cuestan $1.5 cada una.");
        break;
    // Puedes agregar más casos según sea necesario
    default:
        console.log(`Lo siento, no contamos con ${expr}.`);
        break; // El break es opcional en el default, pero es buena práctica incluirlo
} console.log("Desea algo más?")