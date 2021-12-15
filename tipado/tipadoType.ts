console.log("Tipado en TypeScript...");

var cadena:string = "Altamente tipado";
var numeroDecimal:number = 99.99;
var aprobado:boolean = true;
var variableDesconocida:any = "Any permite almacenar cualquier dato";

console.log("En TS tienes que indicar de que tipo será la variable, o usar any si no lo sabemos");
console.log(cadena + ". Es de tipo: " + typeof(cadena));
console.log(numeroDecimal + ". Es de tipo: " + typeof(numeroDecimal) );
console.log("En TS tampoco se hacen distinciones entre enteros y doubles");
console.log(aprobado + ". Es de tipo: " + typeof(aprobado));
console.log(variableDesconocida + ". Es de tipo: " + typeof(variableDesconocida));