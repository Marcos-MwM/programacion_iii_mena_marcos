let cristales=[30, 50, 20, 10, 5];
let posicion = 2;
let nuevaEnergia = 15;
for (let i=0; i<cristales.length; i++){
    console.log("Posición ", i);
    console.log("Cantidad de cristales: " + cristales[i]);
    if (posicion >= 0 && posicion < cristales.length){
        cristales[posicion] = nuevaEnergia;
    } else {
        console.log("Posición fuera de rango");
    }
}
console.log(cristales);

let personajes = [ 
    {id: 1, nombre: "Rick", edad: 70, energia: 100}, 
    {id: 2, nombre: "Morty", edad: 14, energia: 80}, 
    {id: 3, nombre: "Summer", edad: 17, energia: 90}];

for (let personaje of personajes){
    console.log("ID: " + personaje.id);
    console.log("Nombre: " + personaje.nombre);
    console.log("Edad: " + personaje.edad);
    console.log("Energía: " + personaje["energia"]);
};

let misiones = [{piloto:"Rick", cristales:[80, 70, 50]}, {piloto:"Morty", cristales:[52, 32, 92]}, {piloto:"Summer", cristales:[25, 45, 69]}];

for (let mision of misiones){
    let totalCristales = 0;
    console.log("Piloto: " + mision.piloto);
    for (let cristal of mision.cristales){
        totalCristales += cristal;
        console.log("Cristales recolectados: " + cristal);
    }
    console.log("Total de cristales recolectados: " + totalCristales);
}

let cristalesEnergia = [10, 20, 30, 40, 50];
let cristalesDobles = cristalesEnergia.map(elemento => {return elemento * 2});
console.log("Cristales de energía: " + cristalesEnergia);
console.log("Cristales dobles: " + cristalesDobles);
let validos = cristalesEnergia.filter(cristales => cristales >= 50);
let resultado = cristalesEnergia.reduce((acumulador, elemento) => {return acumulador + elemento}, 0);
console.log("Cristales válidos: " + validos);
console.log("Suma total: " + resultado);    