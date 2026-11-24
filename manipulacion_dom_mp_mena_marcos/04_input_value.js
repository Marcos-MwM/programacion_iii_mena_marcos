const bateria = document.getElementById("inputBateria");
const carga = document.getElementById("inputCarga");
const botonCalcular = document.getElementById("calcular");
const resultado = document.getElementById("calculo");

botonCalcular.addEventListener("click", function () {
    const nivelActual = Number(bateria.value);
    const cargaAgregada = Number(carga.value);

    if (bateria.value === "" || carga.value === "" ||
        nivelActual < 0 || nivelActual > 100 ||
        cargaAgregada < 0 || cargaAgregada > 100) {
        resultado.textContent = "Ingresa porcentajes válidos entre 0 y 100.";
        return;
    }

    const nivelFinal = nivelActual + cargaAgregada;

    if (nivelFinal > 100) {
        resultado.textContent = "La carga no puede superar el 100%.";
        return;
    }

    resultado.textContent = `Carga final: ${nivelFinal}%. Falta: ${100 - nivelFinal}%.`;
});
