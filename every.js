// Comprube si todos los elementos del array tienen exactamente un carácter

const arr = ["a", "b", "c", "d"];
console.log(arr.every((e) => e.length == 1)); // true

const arr2 = ["a", "v", "ff"];
console.log(arr2.every((e) => e.length == 1)); // false

// array de personas

let personas = [{
    nombre: "Pedro",
    edad: 10
}, {
    nombre: "Maria",
    edad: 18
}, {
    nombre: "John",
    edad: 19
}
];

// Compruebame utilizamdo el método 'every' si todas las personas son mayores de edad o no
const todasMayorEdad = personas.every(persona => persona.edad >= 18);
console.log("Son todas las personas mayores de edad?", todasMayorEdad);