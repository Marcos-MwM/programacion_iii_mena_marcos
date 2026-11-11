let nave ={
 nombre: "Nave Espacial",
 combustible: 100,
 velocidad: 5000,
 tripulantes: ["Rick", "Morty", "Summer"],
 averia: false,   
}

console.log("Acceder alas propiedades de la nave");
console.log("Nombre de la nave: " + nave.nombre);
console.log("Combustible de la nave: " + nave.combustible + "%");
console.log("Velocidad de la nave: " + nave["velocidad"] + " km/h");
console.log("Tripulantes de la nave: " + nave.tripulantes.join(", "));
console.log("Averia de la nave: " + (nave.averia ? "Averiada" : "Operativa"));

console.log("Agregar una nueva propiedad a la nave");
nave.puertas = 3;
console.log("Número de puertas de la nave: " + nave.puertas);

console.log("Modificar una propiedad existente de la nave");
nave.combustible = 80;
console.log("Nuevo nivel de combustible de la nave: " + nave.combustible + "%");

console.log("Eliminar una propiedad de la nave");
delete nave.averia;
console.log("Propiedades actuales de la nave: " + Object.keys(nave).join(", "));

console.log(nave);

for (let propiedad in nave){
    console.log(propiedad + ": " + nave[propiedad]);
}

let inventario={
    cristrales: 100,
    misings: 50,
    clones: 20,
    senuelos: 10,
}

for (let propiedad in inventario){
    let cantidadDeUnidades = 0;
    cantidadDeUnidades+=Object.entries(propiedad);
    console.log(cantidadDeUnidades);
}
console.log("Unidades de inventario");
for (let [propiedad,valor] of Object.entries(inventario)){
    console.log(propiedad + ": " + valor);
}

let cantidad = 0;

for (let propiedad in inventario){
    cantidad += inventario[propiedad];
    console.log(cantidad);
}


