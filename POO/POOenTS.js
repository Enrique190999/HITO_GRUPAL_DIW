var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.saludar = function () {
        return console.log("Hola, soy " + this.nombre);
    };
    return Persona;
}());
var pepe = new Persona("Pepe");
pepe.saludar();
