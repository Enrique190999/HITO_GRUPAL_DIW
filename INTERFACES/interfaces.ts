console.log("Interfaces en TypeScript");
console.log("Las interfaces no se pueden hacer con JavaScript");

interface sumergibleInterface {
    tiempoMaxBajoElAgua: number;
    profundidadMaxima: number;

    repelerAgua(): void;
}

class relojSumergible implements sumergibleInterface {
    tiempoMaxBajoElAgua = 1;
    profundidadMaxima = 10;
    repelerAgua() {
        console.log('El agua me resbala');
    }
}
let reloj = new relojSumergible();

console.log("Nuestro reloj aguanta " + reloj.tiempoMaxBajoElAgua + "min bajo agua.");
console.log("Nuestro reloj puede bajar " + reloj.profundidadMaxima + "m.");
reloj.repelerAgua();
