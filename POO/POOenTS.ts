console.log("POO en TypeScript...");
class Persona{
    private nombre:string;

    constructor(nombre:string){
        this.nombre=nombre;
    }
    saludar(){
        return console.log("Hola, soy " + this.nombre);
    }
}
var pepe = new Persona("Pepe");
pepe.saludar();