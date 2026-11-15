let vehiculo = {
    modelo : "Hyundai Verna",
    combustible : 20,
    velocidad : 20,
    mecanicos : ["Luis","Miyo","Eduardo"],
    enReparacion: true,
}

console.log("Revisando Status Del Vehículo");
console.log("Nombre del vehículo: " + vehiculo.modelo);
console.log("Combustible del vehículo: " + vehiculo.combustible + "%");
console.log("Velocidad del vehículo: " + vehiculo["velocidad"] + " km/h");
console.log("Mecánicos del vehículo: " + vehiculo.mecanicos.join(", "));
console.log("En reparación: " + (vehiculo.enReparacion ? "Sí" : "No"));

vehiculo.placa = "ACDC - 1012";
console.log("Placa agregada: " + vehiculo.placa);

vehiculo.enReparacion = false;
console.log("Vehiculo reparado");

delete vehiculo.mecanicos;
console.log("No es necesario mecánico porque el vehículo ya fue reparado");

console.log(vehiculo);

for (let informacion in vehiculo){
    console.log(informacion + ":" + vehiculo[informacion])
};


console.log("Cantidad de propiedades: " + Object.keys(vehiculo).length);
console.log("Propiedades: " + Object.keys(vehiculo).join(", "));

for (let clave of Object.keys(vehiculo)){
    console.log("Clave: " + clave);
}

console.log("Valor");
console.log(Object.values(vehiculo));


for (let valor of Object.values(vehiculo)){
    console.log("Valor: " + valor);
}

console.log("Claves y valores juntos")
console.log(Object.entries(vehiculo));

for (let [clave, valor] of Object.entries(vehiculo)){
    console.log(clave + ": " + valor);
}

console.log("¿Tiene placa? " + ("placa" in vehiculo ? "Sí" : "No"));
console.log("¿Tiene mecánicos? " + ("mecanicos" in vehiculo ? "Sí" : "No"));
// "mecanicos" ya no existe 