console.log('Ciclo for')

const numeroValidar = 3;

for(let i=1 ;i<=5; i++){
    console.log("Iteración número: " ,i)

    if (i === numeroValidar) {
        console.log("Validación correcta: se encontró el número", numeroValidar);
    } else {
        console.log("El número", i, "no coincide con", numeroValidar);
    }
}

console.log("Clasificación de dimensiones");

let totalPeligrosas = 0;
let totalSeguras = 0;

for (let dimension = 1; dimension <= 10; dimension++) {
    if (dimension % 2 === 0) {
        console.log("Dimensión " + dimension + ": peligrosa");
        totalPeligrosas++;
    } else {
        console.log("Dimensión " + dimension + ": segura");
        totalSeguras++;
    }
}

console.log("Total de dimensiones peligrosas: " + totalPeligrosas);
console.log("Total de dimensiones seguras: " + totalSeguras);

let energia = 50;
for (
    let i=0; i<=100; i+=10
){
    if (energia >= i){
            console.log("nivel de energia " + i + "%")
    }
}

let totalCristal = 8;
let dias = 7;
for (let dia = 1; dia <= dias; dia++){
    let cristalesRecolectados = dia * 5+5;
    totalCristal += cristalesRecolectados;
    console.log("Día " + dia + ": Cristales recolectados: " + cristalesRecolectados);
}
console.log("Total de cristales recolectados: " + totalCristal);
console.log("Promedio de cristales recolectados por día: " + (totalCristal / dias).toFixed(2));

console.log("REcoleccion de cristales de morty");
let cristales=[35,60,45,80,70,90,55];
let totalCristales = 0;
let viajesExitosos = 0;

for (let i = 0; i < cristales.length; i++) {
    totalCristales += cristales[i];
    if (cristales[i] > 50) {
        viajesExitosos++;
    }else{
    console.log("viaje"+ (i+1) +"No se recolectaron cristales en este viaje.");
    }
}

console.log("Total de cristales recolectados: " + totalCristales);
console.log("Viajes exitosos: " + viajesExitosos);

console.log("recorrer personajes de rick y morty");
let personajes = ["Rick", "Morty", "Summer", "Beth", "Jerry"];

for (let i = 0; i < personajes.length; i++) {
    console.log("Personaje: " + personajes[i]);
}

console.log("Recorrer propiedades de la nave con for in");
let nave = {
    nombre: "Nave Espacial",
    combustible: 100,
    velocidad: 5000,
    tripulantes: ["Rick", "Morty", "Summer"]
};

for (let propiedad in nave) {
    console.log(propiedad + ": " + nave[propiedad]);
    if (propiedad === "tripulantes") {
        for (let i = 0; i < nave[propiedad].length; i++) {
            console.log("Tripulante: " + nave[propiedad][i]);
        }
    }
}

let misiones = [
    { nombre: "Misión 1", estado: "completada", cristalesRecolectados: 10, cristalesObjetivos: 10 ,personaje: "Rick"},
    { nombre: "Misión 2", estado: "en progreso", cristalesRecolectados: 5, cristalesObjetivos: 10 ,personaje: "Morty"},
    { nombre: "Misión 3", estado: "pendiente", cristalesRecolectados: 0, cristalesObjetivos: 10 ,personaje: "Summer"}
];

let existosas = 0;
for (let mision of misiones) {
    let porcentajeCumplimiento = (mision.cristalesRecolectados / mision.cristalesObjetivos) * 100;
    console.log("Misión: " + mision.nombre + "completada por " + mision.personaje + " - Porcentaje de cumplimiento: " + porcentajeCumplimiento.toFixed(2) + "%");
    if (porcentajeCumplimiento >= 80) {
        existosas++;
    } else {
        console.log("La misión " + mision.nombre + " no se completó con éxito.");
    }
}

console.log("Total de misiones exitosas: " + existosas);