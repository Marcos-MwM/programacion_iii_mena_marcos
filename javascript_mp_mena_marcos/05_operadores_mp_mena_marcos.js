const costoCambioAceite = 650;
const costoRevisionFrenos = 400;
const cantidadServicios = 2;

const subtotal = costoCambioAceite + costoRevisionFrenos;
const descuento = subtotal >= 1000 ? subtotal * 0.1 : 0;
const total = subtotal - descuento;
const costoPorServicio = total / cantidadServicios;
const serviciosPendientes = cantidadServicios % 2;

console.log('Taller Fix-Up - costo de servicios');
console.log('Cambio de aceite:', costoCambioAceite);
console.log('Revisión de frenos:', costoRevisionFrenos);
console.log('Subtotal:', subtotal);
console.log('Descuento:', descuento);
console.log('Total a pagar:', total);
console.log('Costo promedio por servicio:', costoPorServicio);
console.log('Servicios pendientes al completar pares:', serviciosPendientes);
console.log('¿Aplica descuento?:', subtotal >= 1000);
console.log('¿Hay servicios y descuento?:', cantidadServicios > 0 && descuento > 0);