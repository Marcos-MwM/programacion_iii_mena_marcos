console.log("Misión Interdimensional");

const cristalesObjetivos = 200;
const cristalesRecolectados = 150;
const combustibleInicial = 1000;
const combustibleConsumido = 850;
const mortyHerido = "si";
const naveAveriada = "no";
let bonificacion = 0;

const porcentajeCumplimiento = (cristalesRecolectados / cristalesObjetivos) * 100;
const combustibleRestante = combustibleInicial - combustibleConsumido;

console.log("RESULTADOS DE LA MISIÓN");

switch (true) {
    case porcentajeCumplimiento >= 90:
        console.log("Misión Cumplida con Éxito");
        break;
    case porcentajeCumplimiento >= 70:
        console.log("Misión Cumplida Parcialmente");
        break;
    case porcentajeCumplimiento >= 50:
        console.log("Misión Regular, se requiere mejorar el desempeño");
        break;
    default:
        console.log("Misión Fallida y Peligro de Extinción");
}

console.log("Evaluación de bonificación por desempeño");

switch (porcentajeCumplimiento >= 90 && combustibleRestante >= 200) {
    case true:
        bonificacion = 1000;
        console.log("Bonificación otorgada por desempeño excelente.");
        break;
    default:
        console.log("No se otorga bonificación por desempeño.");
}

console.log("Regreso seguro a la dimensión original");

switch (`${mortyHerido}-${naveAveriada}`) {
    case "no-no":
        console.log("Regreso seguro a la dimensión original.");
        break;
    case "si-no":
        console.log("Regreso a la dimensión original con precaución, Morty está herido.");
        break;
    case "no-si":
        console.log("Regreso a la dimensión original con precaución, la nave está averiada.");
        break;
    case "si-si":
        console.log("Regreso a la dimensión original con precaución, Morty está herido y la nave está averiada.");
        break;
}

console.log("Resumen de la misión");

console.log("Cristales Objetivos:", cristalesObjetivos);
console.log("Cristales Recolectados:", cristalesRecolectados);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible Inicial:", combustibleInicial);
console.log("Combustible Consumido:", combustibleConsumido);
console.log("Combustible Restante:", combustibleRestante);
console.log("Morty Herido:", mortyHerido);
console.log("Nave Averiada:", naveAveriada);
console.log("Bonificación Otorgada:", bonificacion);

let energia = 50;
switch (true) {
    case energia >= 80:
        console.log("Tienes energía para viajar a otra dimensión.");
        break;
    case energia > 0:
        console.log("Tienes poca energía para continuar.");
        break;
    default:
        console.log("No tienes energía para viajar.");
}

console.log("\nCalculadora básica");

const primerNumero = 10;
const segundoNumero = 5;
const operador = "+";
let resultadoCalculadora;

switch (operador) {
    case "+":
        resultadoCalculadora = primerNumero + segundoNumero;
        break;
    case "-":
        resultadoCalculadora = primerNumero - segundoNumero;
        break;
    case "*":
        resultadoCalculadora = primerNumero * segundoNumero;
        break;
    case "/":
        if (segundoNumero === 0) {
            console.log("No se puede dividir entre cero.");
        } else {
            resultadoCalculadora = primerNumero / segundoNumero;
        }
        break;
    default:
        console.log("Operación no válida.");
}

if (resultadoCalculadora !== undefined) {
    console.log(`${primerNumero} ${operador} ${segundoNumero} = ${resultadoCalculadora}`);
}