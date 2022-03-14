// Nos permite transformar el array en un resultado; normalmente se usa para acumular valores

// Ingresos y perdidas del año fiscal
let balance = [33000, -400, -2500, -6000];

let total = balance.reduce((acumulado, siguienteValor) => {
    console.log("Acumulado", acumulado);
    console.log("Siguiente valor", siguienteValor);

    return acumulado + siguienteValor;
})

console.log(total);