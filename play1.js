// create an array of animals
let animals = ["dog", "cat", "tortoise", "unicorn", "vulture", "walrus", "yak", "zebra"];

//recorrer el array con forEach
animals.forEach(animal => {
    console.log(animal);
});

// recorrer con let of
// for (let animal of animals) {
//     console.log(animal);
// }

// recorrer con for in
// for (let index in animals) {
//     console.log(animals[index]);
// }

// En ES6 (JavaScript moderno) podemos definiar una función que retorna un resultado en una sola línea

// Ejemplo:

// function sumar(a, b) {
//     return a + b;
// }


// Ejemplo de función en ES6
// Normalmente definimos la función con const, porque nunca vamos a modificar el valor de esta variable

const sumar = (a, b) => a + b; // return implícito
const mostrarMayuscualas = (texto) => texto.toUpperCase();

console.log(sumar(1, 2));
console.log(mostrarMayuscualas("patata"));
