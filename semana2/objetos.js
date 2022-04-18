console.log('Objetos');

//Ejemplo 1: Crear un objeto
const myObject = {} //esto es un objeto vacio
console.log('Ejemplo 1: Crear un objeto vacio');
console.log(myObject);

//Ejemplo 2: Crear un objeto con propiedades
const myObject2 = {
    name: "Carlos",
    age: 27
}
console.log('Ejemplo 2: Crear un objeto con propiedades')
console.log(myObject2)

//Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
    name: "Tulio",
    age: 2,
    nicknames: [
        "Tulipan",
        "Tulancingo",
        "Tulish"
    ],
    address: {
        zip_code: "10000",
        street: "Dr Vertiz 11 Benito Juarez",
        city: "CDMX"
    }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])

//Ejemplo 4: Objeto con metodos
const pet = {
    name: "Tulio",
    //Esta es una funsion que se guarda como propiedad
    sayHello: function(){
        //this.name hace referencia a la ropiedad del objeto
        console.log(`${this.name} te saluda en español`)
    }
}
console.log("Ejemplo 4: Objeto con metodos")
pet.sayHello()

//Ejemplo 5: Objeto con metodo que recibe parametros
const myPet2 = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet){
        console.log(`${this.name} say hello to ${yourPet}`)
    }
}
console.log("Ejemplo 5: Objeto con metodo que recibe parametros")
myPet2.sayHelloToMyPet("Tulio")