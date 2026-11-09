console.log("Taller Fix-Up - Ciclo for");

const ordenPrioritaria = 3;

for (let orden = 1; orden <= 5; orden++) {
    console.log("Revisando orden de servicio " + orden);
    if (orden === ordenPrioritaria) {
        console.log("Esta orden necesita atencion primero");
    } else {
        console.log("La orden " + orden + " puede esperar su turno");
    }
}

console.log("Clasificacion de kilometraje de vehiculos");

let kilometrajes = [12000, 35000, 64000, 88000, 105000];
let revisionesNormales = 0;
let revisionesCompletas = 0;

for (let i = 0; i < kilometrajes.length; i++) {
    if (kilometrajes[i] >= 80000) {
        console.log("Vehiculo " + (i + 1) + ": se recomienda revision completa");
        revisionesCompletas++;
    } else {
        console.log("Vehiculo " + (i + 1) + ": mantenimiento normal");
        revisionesNormales++;
    }
}

console.log("Revisiones normales: " + revisionesNormales);
console.log("Revisiones completas: " + revisionesCompletas);

console.log("Nivel de aceite disponible en el taller");
let aceiteDisponible = 50;

for (let nivelAceite = 0; nivelAceite <= 100; nivelAceite += 10) {
    if (aceiteDisponible >= nivelAceite) {
        console.log("Nivel de aceite: " + nivelAceite + "%");
    }
}

console.log("Autos atendidos durante la semana");
let totalAutos = 0;
let dias = 5;

for (let dia = 1; dia <= dias; dia++) {
    let autosAtendidos = dia + 2;
    totalAutos += autosAtendidos;
    console.log("Dia " + dia + ": se atendieron " + autosAtendidos + " autos");
}

console.log("Total de autos atendidos: " + totalAutos);
console.log("Promedio de autos por dia: " + (totalAutos / dias));

console.log("Revision de servicios del taller");
let servicios = ["Cambio de aceite", "Frenos", "Alineacion", "Diagnostico de motor"];
let serviciosRevisados = 0;
let serviciosPendientes = 0;

for (let i = 0; i < servicios.length; i++) {
    if (i < 2) {
        console.log(servicios[i] + ": servicio disponible");
        serviciosRevisados++;
    } else {
        console.log(servicios[i] + ": revisar agenda del mecanico");
        serviciosPendientes++;
    }
}

console.log("Servicios disponibles: " + serviciosRevisados);
console.log("Servicios por confirmar: " + serviciosPendientes);

console.log("Personal de Fix-Up");
let mecanicos = ["Fernando Suarez", "Laura Mendez", "Carlos Ruiz"];

for (let i = 0; i < mecanicos.length; i++) {
    console.log("Mecanico: " + mecanicos[i]);
}

console.log("Datos del vehiculo en revision");
let vehiculo = {
    taller: "Taller Fix-Up",
    modelo: "Hyundai Mastar 64x",
    placa: 212,
    problema: "Sobrecalentamiento en la maquinaria",
    encargado: "Fernando Suarez",
    terminado: false,
    servicios: ["Diagnostico de motor", "Cambio de aceite"]
};

for (let propiedad in vehiculo) {
    console.log(propiedad + ": " + vehiculo[propiedad]);
    if (propiedad === "servicios") {
        for (let i = 0; i < vehiculo[propiedad].length; i++) {
            console.log("Servicio solicitado: " + vehiculo[propiedad][i]);
        }
    }
}

console.log("Ordenes de servicio");
let ordenes = [
    { numero: 1, servicio: "Cambio de aceite", costo: 650, vehiculo: "Hyundai" },
    { numero: 2, servicio: "Revision de frenos", costo: 400, vehiculo: "Nissan" },
    { numero: 3, servicio: "Alineacion", costo: 500, vehiculo: "Ford" }
];

let totalCobrado = 0;
let ordenesCostosas = 0;

for (let orden of ordenes) {
    console.log("Orden " + orden.numero + ": " + orden.servicio + " para " + orden.vehiculo + " - $" + orden.costo);
    totalCobrado += orden.costo;
    if (orden.costo >= 500) {
        ordenesCostosas++;
    }
}

console.log("Total cobrado por los servicios: $" + totalCobrado);
console.log("Ordenes de $500 o mas: " + ordenesCostosas);
