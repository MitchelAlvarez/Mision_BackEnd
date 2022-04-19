//Ejemplo 6: Uso de map para convertir todos los nombres en una lista mayusculas con sus primeras 3 letras
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const countriesFirstThreeLetters = countries.map((country) => country.toUpperCase().slice(0,3)) //el metodo slice obtiene solo la longitud marcada del string
console.log("Ejemplo 6: Uso de map para convertir todos los nombres en una lista mayusculas con sus primeras 3 letras")
console.log(countriesFirstThreeLetters)