
console.log("abriendo portales de la nave");
let portal= 1;
while (portal <= 5){
    console.log("Portal " + portal + " abierto");
    portal++;
}
console.log("todos los portales abiertos");
console.log("cuenta regresiva para cerrar portales");
let cuentaRegresiva = 5;
while (cuentaRegresiva >= 1){
    console.log("Cerrando portal " + cuentaRegresiva);
    cuentaRegresiva--;
}
console.log("todos los portales cerrados");

console.log("recargando energia de la nave");
let energia = 50;
let recarga =10;
let totalRecarga = 0;
while (energia < 100){
    energia += recarga;
    totalRecarga += recarga;
    console.log("Nivel de energia: " + energia + "%");
}
console.log("Total de energia recargada: " + totalRecarga + "%");
console.log("Consumo de combustible de la nave");
let combustible = 100;
let consumo = 15;
let totalConsumo = 0;
while (combustible >= consumo){
    totalConsumo -= consumo;
    let viaje = 1;
    console.log("Viaje " + viaje + " realizado");
    combustible -= consumo;
    console.log("Nivel de combustible: " + combustible + "%");
    if (combustible < 50){
        console.log("Advertencia: Nivel de combustible bajo. Considera recargar antes del próximo viaje.");
}
    console.log("Nivel de combustible: " + combustible + "%");
}
console.log("Total de combustible consumido: " + totalConsumo + "%");

console.log("Activar portales de la nave con DO-WHILE");
let energiaPortales = 50;
do{ console.log("Activando portales de la nave. Nivel de energia: " + energiaPortales + "%");
    energiaPortales -= 10;
} while (energiaPortales >= 0);
console.log("Todos los portales han sido activados y la energia de la nave se ha agotado.");

console.log("comprar una pistola de portales para rick");
let ahorros = 100;
let meta = 200;
let ahorroSemanal = 20;
let semanas = 0;
do{
    ahorros += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorros actuales: $" + ahorros);
} while (ahorros < meta);
console.log("¡Felicidades! Has alcanzado tu meta de ahorros para comprar la pistola de portales en " + semanas + " semanas.");

let cristales = [35, 60, 45, 80, 70, 90, 55];
let objetivo = 150;
let energiaTotal = 0;
let indice = 0;
while (indice < cristales.length){
    let cristalEnergia = cristales[indice];
    energiaTotal += cristalEnergia;
    ++indice;
    if (cristalEnergia < 20){
        console.log(cristalEnergia + " cristales recolectados. Energía total: " + energiaTotal);
        continue;
    }
    energiaTotal += cristalEnergia;
    console.log(cristalEnergia + " cristales recolectados. Energía total: " + energiaTotal);
    if (energiaTotal >= objetivo){
        console.log("¡Objetivo de energía alcanzado! Energía total: " + energiaTotal);
        break;
    }
}