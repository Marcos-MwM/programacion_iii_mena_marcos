console.log("Bienvenido a Fix-Up: Taller Mecánico")
console.log("Información de un vehículo")
const vehiculo = "Hyoundai Mastar 64x";
let placa = 212;
const registrado = true;

let vacio = null; // null representa la ausencia intencional de un valor
let indefinido; // undefined indica que todavía no se asignó un valor
const vehiculo_id_secreto = Symbol("id"); // symbol crea un identificador único

const piezas = ["id_vehiculo", 123, "thing"];
const problemas_detectados = {
    id_vehiculo: 1,
    problema: "sobrecalentamiento en la maquinaria",
    encargado: "Fernando Suarez",
    terminado: false
};

const conductor = {
    nombre: "Asociado",
    [vehiculo_id_secreto]: 12345
};

console.log(vehiculo);
console.log(placa);
console.log(registrado);
console.log(vacio);
console.log(indefinido);
console.log(piezas);
console.log(problemas_detectados);
console.log(conductor);
console.log(conductor[vehiculo_id_secreto]);
