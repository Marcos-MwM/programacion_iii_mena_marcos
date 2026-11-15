let mecanicos = ["Luis", "Ana", "Carlos", "María", "Pedro"];
console.log("Mecánico 1: " + mecanicos[0]);
console.log("Mecánico 2: " + mecanicos[1]);
console.log("Mecánico 3: " + mecanicos[2]);
console.log("Mecánico 4: " + mecanicos[3]);
console.log("Mecánico 5: " + mecanicos[4]);
console.log("Tamaño del arreglo: " + mecanicos.length);

console.log("Agregar nuevos empleados al taller con push");
mecanicos.push("Sergio");
mecanicos.push("Diana");
console.log("Nuevo tamaño del arreglo: " + mecanicos.length);
console.log("Nuevo empleado agregado: " + mecanicos[5]);

console.log("Modificar un elemento del arreglo");
mecanicos[7] = "Roberto";

console.log(mecanicos);

mecanicos[0] = "Luis García";
console.log(mecanicos);

mecanicos.pop();
mecanicos.shift();
mecanicos.splice(1, 1);
console.log(mecanicos);