let personajes = ["Rick", "Morty", "Summer", "Beth", "Jerry"];
console.log("personaje 1: " + personajes[0]);
console.log("personaje 2: " + personajes[1]);
console.log("personaje 3: " + personajes[2]);
console.log("personaje 4: " + personajes[3]);
console.log("personaje 5: " + personajes[4]);
console.log("tamaño del arreglo: " + personajes.length);


console.log("Incluir un arreglo con push");
personajes.push("Nieto");
personajes.push("Eduardo");
console.log("Nuevo tamaño del arreglo: " + personajes.length);
console.log("Nuevo personaje agregado: " + personajes[5]);

console.log("Modificar un elemento del arreglo");
personajes[7]= "Edugduawr";

console.log(personajes);

personajes[0] = "Rick Sanchez";
console.log(personajes);

personajes.pop();
personajes.shift();
personajes.splice(1, 1);
console.log(personajes);