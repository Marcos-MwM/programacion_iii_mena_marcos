const bateria = document.getElementById("bateria");
const modelo = document.getElementById("modelo");
const mecanico = document.getElementById("mecanico");

bateria.textContent = "200w";
modelo.textContent = "Hyoundai Kashka 2012";
mecanico.textContent = "Alex Mecánico";


const personaje = document.querySelector(".personaje");
personaje.textContent = "Bedman?";


const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparación nave";

const universo = document.querySelector("#universo");
universo.textContent = "Preparado";

const estado = document.querySelector(".morty,#estado");
estado.textContent("asustado");

const planeta = document.querySelectorAll(".planetas");
console.log(planeta);
console.log(planeta.length);
console.log(planeta[0].textContent);
console.log(planeta[1].textContent);

console.log("Recorrer for");
for (let i = 0; i < planeta.length; i++) {
    console.log(planeta[i].textContent);
}

planeta.forEach(function (planeta) {
    console.log(planeta.textContent);
});
