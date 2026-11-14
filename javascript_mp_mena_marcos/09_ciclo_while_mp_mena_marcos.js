console.log("Taller Fix-Up - Ciclo while");

console.log("Recibiendo autos en el taller");
let autosRecibidos = 1;

while (autosRecibidos <= 5) {
    console.log("Auto " + autosRecibidos + " registrado para revision");
    autosRecibidos++;
}

console.log("Ya se registraron todos los autos");
console.log("Llamando los autos que esperan en el taller");

let turno = 5;
while (turno >= 1) {
    console.log("Atendiendo el turno " + turno);
    turno--;
}

console.log("Todos los turnos fueron atendidos");

console.log("Reponiendo aceite para los servicios");
let aceite = 50;
let cantidadReponer = 10;
let totalRepuesto = 0;

while (aceite < 100) {
    aceite += cantidadReponer;
    totalRepuesto += cantidadReponer;
    console.log("Aceite disponible: " + aceite + " litros");
}

console.log("Total de aceite repuesto: " + totalRepuesto + " litros");

console.log("Uso de aceite en los cambios");
let aceiteRestante = 100;
let aceitePorAuto = 15;
let totalUtilizado = 0;
let auto = 1;

while (aceiteRestante >= aceitePorAuto) {
    console.log("Cambio de aceite terminado para el auto " + auto);
    aceiteRestante -= aceitePorAuto;
    totalUtilizado += aceitePorAuto;
    auto++;
    console.log("Quedan " + aceiteRestante + " litros de aceite");
    if (aceiteRestante < 50) {
        console.log("Aviso: queda poco aceite, hay que pedir mas");
    }
}

console.log("Aceite utilizado en total: " + totalUtilizado + " litros");

console.log("Revision del motor con do-while");
let pasoRevision = 1;

do {
    console.log("Paso " + pasoRevision + ": revisando una parte del motor");
    pasoRevision++;
} while (pasoRevision <= 3);

console.log("Termino la revision del motor");

console.log("Ahorro del taller para comprar una herramienta");
let ahorroTaller = 500;
let precioHerramienta = 900;
let ahorroSemanal = 100;
let semanas = 0;

do {
    ahorroTaller += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": el taller tiene $" + ahorroTaller);
} while (ahorroTaller < precioHerramienta);

console.log("El taller ya puede comprar la herramienta despues de " + semanas + " semanas");
