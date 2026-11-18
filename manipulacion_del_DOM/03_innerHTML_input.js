const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Mensaje del otro lado";
saludo.innerHTML = "<h1>Hello con innerHTML</h1>";

const inputTitulo = document.getElementById("inputTitulo");
const inputTexto = document.getElementById("inputTexto");
const btnInsertar = document.getElementById("btnInsertar");
const contenidoInsertado = document.getElementById("contenidoInsertado");

btnInsertar.addEventListener("click", function () {
    const tituloInsertado = document.createElement("h2");
    const textoInsertado = document.createElement("p");

    tituloInsertado.textContent = inputTitulo.value;
    textoInsertado.textContent = inputTexto.value;

    contenidoInsertado.replaceChildren(tituloInsertado, textoInsertado);
});
