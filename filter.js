let peces = ["Dory", "Nemo", "Payasín"];

// Utilizade el método filter para obtener un nuevo array solo con los peces que tienen más de 4 carácteres y mostradlo por consola

//let nuevosPeces = peces.filter((pez) => pez[0] == "D");

// Alternativa
let nuevosPeces = peces.filter(comprobarPez);

function comprobarPez(pez) {
    return pez.length > 4; // solo será true si el pez tiene más de 4 carácteres
}

console.log(nuevosPeces);



