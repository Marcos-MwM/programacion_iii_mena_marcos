const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const edad = document.getElementById("edad");
const registrar = document.getElementById("registrar");
const aviso = document.getElementById("aviso");
const seccion_carros = document.getElementById("seccion_carros");
const modelo_carro = document.getElementById("modelo_carro");
const registrar_modelo = document.getElementById("registrar_modelo");
const lista_modelos = document.getElementById("lista_modelos");

registrar.addEventListener("click", function () {
    const nombre = nombres.value.trim();
    const apellido = apellidos.value.trim();
    const edades = edad.value.trim();

    if (nombre === "" || apellido === "" || edades === "") {
        aviso.textContent = "Datos faltantes";
        return;
    }

    aviso.textContent = "";
    registrar.hidden = true;
    seccion_carros.hidden = false;
});

registrar_modelo.addEventListener("click", function () {
    const modelo = modelo_carro.value.trim();

    if (modelo === "") {
        aviso.textContent = "Ingrese modelo de auto";
        return;
    }

    const elemento = document.createElement("li");
    elemento.textContent = modelo;
    lista_modelos.appendChild(elemento);
    modelo_carro.value = "";
    modelo_carro.focus();
    aviso.textContent = "";
});
