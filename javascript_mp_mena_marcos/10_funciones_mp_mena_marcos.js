console.log("Gestión de taller Mecánico");

function abrirSucursales(nombre,lugar){
    console.log("Abriendo sucursal "+nombre+" en "+lugar);
};

abrirSucursales("Taller Mecánico Fix-Up","Quevedo");



function asignarMecanico(nombre){
    console.log("EL MECÁNICO ASIGNADO ES: " + nombre);
};

asignarMecanico("Fernando Andrade");
asignarMecanico("Fede Endoza");

let energiaSobrante1=20;
let energiaSobrante2=40;
let tiempoRecargaPorLote=30;
let energiaFinalNecesaria1=120;
let energiaFinalNecesaria2=150;

function recargarBateria(energiaSobrante,tiempoPorCarga, energiaFinal){
    let procesoCarga = energiaSobrante;
    let tiempoDeCarga=0;
    do{
        if (procesoCarga >= energiaFinal){
            break;
        }
        else{
            console.log("Recargando...");
            procesoCarga += 20;
            let energiaPorcentaje =  Math.min(procesoCarga * 100 / energiaFinal,100);
            console.log("Cargado un:"+ energiaPorcentaje.toFixed(2) + " %");
            tiempoDeCarga += tiempoPorCarga ;
            console.log("Tiempo de carga:"+ tiempoDeCarga );
        }
        
    }
    while(procesoCarga < energiaFinal);
console.log("Energia Completamente cargada");
};

recargarBateria(energiaSobrante1,tiempoRecargaPorLote,energiaFinalNecesaria1);
recargarBateria(energiaSobrante2,40,energiaFinalNecesaria2);

let repuestosUsandos = [ 22,41,12,87,19,32];

function sumarRepuestos(listaRepuestos){
    let repuestosTotales=0;
    for ( let i = 0; i<= listaRepuestos.length; i++){
        if (listaRepuestos[i]>=0){
            repuestosTotales += listaRepuestos[i];
        }
    }
    return repuestosTotales
};

let valorFinal= sumarRepuestos(repuestosUsandos);
console.log("Usamos un total de " + valorFinal);


function evaluarVehiculo(cliente, aceite, frenos){
    if (aceite >= 50 && frenos >= 30){
        console.log("El auto de " + cliente + " esta listo para entregar.");
    } else if (aceite >= 30 && frenos >= 15){
        console.log("El auto de " + cliente + " necesita una reparacion menor.");
    } else {
        console.log("El auto de " + cliente + " necesita revision completa antes de salir.");
    }
}

evaluarVehiculo("Will", 60, 40);   
evaluarVehiculo("Ana", 35, 20);  
evaluarVehiculo("Makise", 20, 10); 