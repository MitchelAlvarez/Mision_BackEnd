//Ejemplo 5: Uso de Map para convertit todos los nombres de una lista en minusculas
const nombres = ['Alberto', 'Luis', 'Pedro', 'Ignacio'];
const nameToLowerCase = nombres.map(function(name){return name.toLowerCase()});
console.log("Ejemplo 5: Uso de Map para convertit todos los nombres de una lista en minusculas")
console.log(nameToLowerCase)

//otra forma de hacerlo: nombres.map((name) => name.toLowerCase())