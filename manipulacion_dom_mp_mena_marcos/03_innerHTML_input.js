const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Recepción de órdenes de servicio";
saludo.innerHTML = "<p>Bienvenido al taller mecánico Fix-Up</p>";

const inputTitulo = document.getElementById("inputTitulo");
const inputTexto = document.getElementById("inputTexto");
const inputSaludo = document.getElementById("inputSaludo");
const btnInsertar = document.getElementById("btnInsertar");
const contenidoInsertado = document.getElementById("contenidoInsertado");

inputSaludo.addEventListener("input", function () {
    const nombre = inputSaludo.value.trim();
    saludo.textContent = nombre ? `Hola, ${nombre}. ¿Qué servicio necesita?` : "Bienvenido al taller mecánico Fix-Up";
});

btnInsertar.addEventListener("click", function () {
    const tituloInsertado = document.createElement("h2");
    const textoInsertado = document.createElement("p");

    tituloInsertado.textContent = inputTitulo.value;
    textoInsertado.textContent = inputTexto.value;

    contenidoInsertado.replaceChildren(tituloInsertado, textoInsertado);
});
