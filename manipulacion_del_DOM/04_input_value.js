const bateria = document.getElementById("inputBateria");
const agregarBateria = document.getElementById("inputAgregarBateriaPorStack");
const botonCalcular = document.getElementById("calcular");
const resultado = document.getElementById("calculo");

botonCalcular.addEventListener("click", function () {
    const valorBateria = bateria.value.trim();
    const valorAgregado = agregarBateria.value.trim();
    const nivelActual = Number(valorBateria);
    const energiaAgregada = Number(valorAgregado);

    const valoresValidos =
        valorBateria !== "" &&
        valorAgregado !== "" &&
        Number.isFinite(nivelActual) &&
        Number.isFinite(energiaAgregada) &&
        nivelActual >= 0 &&
        nivelActual <= 100 &&
        energiaAgregada >= 0 &&
        energiaAgregada <= 100;

    if (!valoresValidos) {
        resultado.textContent = "Ingresa valores válidos entre 0 y 100.";
        return;
    }

    const nivelFinal = nivelActual + energiaAgregada;

    if (nivelFinal > 100) {
        resultado.textContent = "La batería no puede superar el 100%.";
        return;
    }

    const bateriaFaltante = 100 - nivelFinal;
    resultado.textContent = `Nivel final: ${nivelFinal}%. Falta: ${bateriaFaltante}%.`;
});
