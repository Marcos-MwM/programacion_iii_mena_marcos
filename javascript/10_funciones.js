console.log("Funciones")

function abrirPortal(portal){
    console.log("Portal " + portal + " abierto");
}
abrirPortal(1);

function pilotoNave(nombrePiloto){
    console.log("Piloto de la nave: " + nombrePiloto);
}
pilotoNave("Rick");
pilotoNave("Morty");

function recargarEnergia(energiaActual, recarga){
    let energiaTotal = energiaActual + recarga;
    if (energiaTotal > 100){
        energiaTotal = 100;
    }
    console.log("Nivel de energia: " + energiaTotal + "%");
    return energiaTotal;
}

let energiaPistola = 50;
energiaPistola = recargarEnergia(energiaPistola, 30);
console.log("Nivel de energia de la pistola: " + energiaPistola + "%");

function evaluarMision(nombrePiloto, energia, combustible){
    if (energia >= 50 && combustible >= 30){
        console.log(nombrePiloto + " esta listo para la mision.");
    } else if (energia >= 30 && combustible >= 15){
        console.log(nombrePiloto + " puede hacer una mision corta.");
    } else {
        console.log(nombrePiloto + " necesita recargar antes de salir.");
    }
}

evaluarMision("Rick", 60, 40);

let cantidad_cristales = [2, 3, 4, 5, 6];

function recolectarCristales(arreglo){
    let i = 0;
    let cristales = 0;
    while (i < arreglo.length){
        cristales += arreglo[i];
        i++;
    }
    return cristales;
}

let valorDeMision = recolectarCristales(cantidad_cristales);
console.log("Se obtuvo " + valorDeMision + " cristales.");

let misionesResultados = [67,51,26,87,43];
function contarMisiones(arreglo){
    let i=0;
    let misionesCalificar = arreglo[i];
    let misionesLogradas=0;
    while (i < arreglo.length){
        if (misionesCalificar > 50){
            misionesLogradas++;
        }
        i++;
    }
    return misionesLogradas;
}

let valor=contarMisiones(misionesResultados);
console.log(valor + " misiones logradas");

function contarMisiones2(arreglo){
    let misionesLogradas = 0;
    for ( let i=0;i < arreglo.length; i++){
        if (arreglo[i] > 50){
            misionesLogradas++;
        }
    }
    return misionesLogradas;
}

valor = contarMisiones2(misionesResultados);
console.log(valor + "misiones logradas")