let edades = [10, 14, 18, 55];

// Devuélveme la primera 'edad' que sea mayor o igual a 18

let edadMayor = edades.find((edad) => edad >= 18);
console.log(edadMayor);

let edadMayorIndex = edades.findIndex((edad) => edad >= 18);
console.log(edadMayorIndex);

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

// Devlovedme con el método find la primera persona que es mayor de edad

let personaMayorEdad = personas.find((persona) => persona.edad >= 18);
console.log(personaMayorEdad);
