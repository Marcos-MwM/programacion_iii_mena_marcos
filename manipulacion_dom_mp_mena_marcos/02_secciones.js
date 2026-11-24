const bateria = document.getElementById("bateria");
const modelo = document.getElementById("modelo");
const mecanico = document.getElementById("mecanico");

bateria.textContent = "12 volts";
modelo.textContent = "Hyundai Kia 2012";
mecanico.textContent = "Alex Mecánico";

const servicio = document.querySelector(".servicio");
servicio.textContent = "Cambio de aceite prioritario";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Vehículos en preparación";

const estadoTaller = document.querySelector("#estado_taller");
estadoTaller.textContent = "Servicio preparado";

const estado = document.querySelector("#estado");
estado.textContent = "Vehículo listo";

const repuestos = document.querySelectorAll(".repuestos");
console.log(repuestos);
console.log(repuestos.length);
console.log(repuestos[0].textContent);
console.log(repuestos[1].textContent);

console.log("Recorrer con for");
for (let i = 0; i < repuestos.length; i++) {
    console.log(repuestos[i].textContent);
}

repuestos.forEach(function (repuesto) {
    console.log(repuesto.textContent);
});