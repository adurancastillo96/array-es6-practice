const months = ['March', 'Jan', 'Feb', 'Dec'];

// Quisiera ordenar alfabéticamente este array
// months.sort();

// console.log(months);

const nombres = ["oscar", "maria", "pedro", "pablo"];
nombres.sort();
console.log(nombres);


// array de ingresos
const ingresos = [2100, 205000, 14000, 2108];
ingresos.sort(compararIngresos);
console.log(ingresos);
console.log('Con función compacta:',ingresos.sort((a, b) => a - b));

function compararIngresos(ingreso1, ingreso2) {
    console.log("-------------------")
    console.log("Ingreso1:", ingreso1);
    console.log("Ingreso2:", ingreso2);

    if (ingreso1 > ingreso2) {
        return 1;
    }

    if (ingreso1 < ingreso2) {
        return -1;
    }

    return 0;

}

let personas = [{
    nombre: "Pedro",
    edad: 22
}, {
    nombre: "Maria",
    edad: 18
}, {
    nombre: "John",
    edad: 19
}
];

// Nos gustaría ordenar este array de objetos por edad


personas.sort(function (persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return 1;
    }

    if (persona1.edad < persona2.edad) {
        return -1;
    }

    return 0;
});

console.log(personas);
console.log('Con función compacta:',personas.sort((a, b) => a.edad - b.edad));



