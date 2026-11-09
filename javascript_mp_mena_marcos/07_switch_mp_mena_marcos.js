console.log('Evaluación de Vehículo');
console.log('Datos del vehículo:');
let kilometraje = 12000;
let ultimoCambioDeLlantas = 4;
let antiguedad = 2013;
let recomendarPlanEconomico = true;
let cantidadEstimada = 0;
console.log('Inserte el kilometraje de su vehículo:');
switch (true) {
    case (kilometraje<=29999):{
        console.log('No es necesario ningun cambio de respuestos');
        break;
    }
    case kilometraje >= 30000 && kilometraje <= 59999:{
        console.log('Se recomienda cambio de bujia');
        break;
    }
    case kilometraje >= 60000 && kilometraje <= 89999 || ultimoCambioDeLlantas <= 2:{
        console.log('Se recomienda cambiar llantas');
        break
    }
    case kilometraje >= 60000 && kilometraje <= 89999:{
        console.log('Se recomienda revisar el estado de las llantas');
        break;
    }
    case kilometraje >= 90000 && kilometraje <= 119999:{
        console.log('Se recomienda cambiar llantas, bujías y correa de distribución');
        break;
    }
    default:{
        console.log('Se recomienda cambiar llantas,bugia y correa de distribución');
        break
    }
        
}

let edadVehiculo = 2026 - antiguedad;
console.log('Evaluación por antigüedad del vehículo:');
switch (true) {
    case edadVehiculo <= 5:
        console.log('El vehículo tiene poca antigüedad; siga el mantenimiento preventivo.');
        break;
    case edadVehiculo <= 10:
        console.log('Se recomienda revisar periódicamente los componentes de desgaste.');
        break;
    default:
        console.log('Por la antigüedad, se recomienda una revisión general del vehículo.');
        break;
}

console.log('Plan de mantenimiento:');
switch (recomendarPlanEconomico) {
    case true:
        console.log('Priorice las reparaciones urgentes y cotice repuestos alternativos.');
        break;
    case false:
        console.log('Realice el mantenimiento completo recomendado.');
        break;
}
