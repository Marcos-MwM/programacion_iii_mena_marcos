let costoDeRepuestos = [130, 232, 123, 459];
let repuestoDañado = [1, 2];
let total = 0;

for (let i = 0; i < costoDeRepuestos.length; i++) {
    console.log("Revisión del costo de repuestos del taller: " + i);

    if (!repuestoDañado.includes(i)) {
        total += costoDeRepuestos[i];
        console.log("Repuesto valido: " + costoDeRepuestos[i] + " pesos");
    } else {
        console.log("El repuesto que costo: " + costoDeRepuestos[i] + " pesos llegó dañado, no se cuenta en el total.");
    }
}

console.log("Total de gastos por repuestos del taller: " + total + " pesos");


let cristalesEnergia = [10, 20, 30, 40, 50];
let cristalesDobles = cristalesEnergia.map(elemento => {return elemento * 2});
console.log("Cristales de energía: " + cristalesEnergia);
console.log("Cristales dobles: " + cristalesDobles);
let validos = cristalesEnergia.filter(cristales => cristales >= 50);
let resultado = cristalesEnergia.reduce((acumulador, elemento) => {return acumulador + elemento}, 0);
console.log("Cristales válidos: " + validos);
console.log("Suma total: " + resultado);

let repuestos = [
    {id: 1, nombre: "Filtro de aceite", precio: 150},
    {id: 2, nombre: "Batería", precio: 2200},
    {id: 3, nombre: "Pastillas de freno", precio: 950},
    {id: 4, nombre: "Amortiguadores", precio: 1800}
];

for (let repuesto of repuestos) {
    console.log("ID: " + repuesto.id);
    console.log("Repuesto: " + repuesto.nombre);
    console.log("Precio: $" + repuesto.precio);
}

let clientes = [
    {id: 1, nombre: "Juan", auto: "Toyota Corolla", servicio: "Cambio de aceite"},
    {id: 2, nombre: "María", auto: "Chevrolet Aveo", servicio: "Frenos"},
    {id: 3, nombre: "Carlos", auto: "Ford Focus", servicio: "Alineación"}
];

for (let cliente of clientes) {
    console.log("Cliente: " + cliente.nombre);
    console.log("Auto: " + cliente.auto);
    console.log("Servicio: " + cliente.servicio);
}

let trabajos = [
    {mecanico: "Luis", horas: 3, costo: 1200},
    {mecanico: "Ana", horas: 5, costo: 1900},
    {mecanico: "Pedro", horas: 2, costo: 800}
];

for (let trabajo of trabajos) {
    console.log("Mecánico: " + trabajo.mecanico);
    console.log("Horas trabajadas: " + trabajo.horas);
    console.log("Costo del servicio: $" + trabajo.costo);
}

let costosServicios = [1200, 1900, 800, 2500];
let serviciosDobles = costosServicios.map(costo => costo * 2);
console.log("Costos de servicios: " + costosServicios);
console.log("Costos con descuento doble: " + serviciosDobles);

let serviciosCaros = costosServicios.filter(costo => costo >= 1500);
let totalCostos = costosServicios.reduce((acumulador, costo) => acumulador + costo, 0);
console.log("Servicios caros: " + serviciosCaros);
console.log("Total de costos del taller: $" + totalCostos);    