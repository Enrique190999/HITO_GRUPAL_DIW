console.log("POO con javascript...");

function crearPersona(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function() {
      console.log('Hola! Soy ' + this.name + '.');
    };
    return obj;
  }
  var antonio = crearPersona('Antonio');
  antonio.name;
  antonio.greeting();

  console.log("La POO de js, se nos hace algo extraña. Gracias a TS, podemos crear una POO mucho más comodo y con muchas opciones extra que js no tiene.");