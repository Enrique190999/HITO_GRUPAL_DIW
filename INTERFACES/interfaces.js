console.log("Interfaces en TypeScript");
console.log("Las interfaces no se pueden hacer con JavaScript");
var relojSumergible = /** @class */ (function () {
    function relojSumergible() {
        this.tiempoMaxBajoElAgua = 1;
        this.profundidadMaxima = 10;
    }
    relojSumergible.prototype.repelerAgua = function () {
        console.log('El agua me resbala');
    };
    return relojSumergible;
}());
var reloj = new relojSumergible();
console.log("Nuestro reloj aguanta " + reloj.tiempoMaxBajoElAgua + "min bajo agua.");
console.log("Nuestro reloj puede bajar " + reloj.profundidadMaxima + "m.");
reloj.repelerAgua();
