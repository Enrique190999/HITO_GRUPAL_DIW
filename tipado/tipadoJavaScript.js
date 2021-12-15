console.log("Tipado en JavaScript...");

var numero = 34;
var cadena = "hola mundo";
var numeroDecimal = 5.6;
var aprobado = true;

console.log("El tipado en js, es débil, ya que no hay que indicar de que tipo es, si no que este lo deduce.");
console.log(numero + ". Es de tipo: " + typeof(numero) );
console.log(numeroDecimal + ". Ees de tipo: " + typeof(numeroDecimal) );
console.log("No se hacen distinciones entre enteros y doubles, si no que considera a ambos number");
console.log(cadena + ". Es de tipo: " + typeof(cadena));
console.log(aprobado + ". Es de tipo: " + typeof(aprobado));