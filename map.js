// Cada elemento del array es 'substituido' por la evaluación de la función de callback. En este caso, por el número de carácteres que tiene cada nombre

const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nuevoArr = arr.map((e) => e.length);

console.log(nuevoArr); // Devuelve [3, 5, 5, 9, 9]

// utiliza el método map para crear un nuevo array transforme todos los nombres a mayúsculas

const nombresMaysculas = arr.map((e) => e.toUpperCase());
console.log(nombresMaysculas);

// // utiliza el método map para crear un nuevo array donde cada elemento contga solo los dos primeros carácteres de cada uno de los nombres ["An", "Pa", "Pe"].... utulizar el método substring
// const nombresDosPrimerasLetras = arr.map((e) => e.substring(0, 2));

//console.log(nombresDosPrimerasLetras);