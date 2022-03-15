// Tengo un array de peces, quiero saber si "Nemo" está en este array

let peces = ["Dory", "Nemo", "Payasín"];

// Si encuentras un elemento que sea exactamente igual "Nemo"; debes devolver true

let pezEncontrado = peces.some((pez) => pez == "Burbujas");

console.log(pezEncontrado);