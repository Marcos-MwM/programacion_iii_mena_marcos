console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);

const parrafos = document.getElementsByTagName("p");
console.log(parrafos);   

titulo.textContent = "Manipulación del DOM con JavaScript";

const boton = document.getElementById("boton");
const descripcion = document.getElementById("descripcion");

boton.addEventListener("click", function() {
    console.log("¡Haz hecho clic en el botón!");
    descripcion.textContent = "¡Haz hecho clic en el botón!";
    alert("¡Haz hecho clic en el botón!");
});

const personaje = document.getElementById("personaje");
const mensaje = document.getElementById("mensaje");
let personajes = ["morty","rick"];

personaje.addEventListener("click",function(){
    if (mensaje.textContent == "Hola,morty"){
        mensaje.textContent = ("Hola",personajes[0]);
    }
    else {
        mensaje.textContent = ("Hola",personajes[1]);
    };
    alert("Haz cambiado de personaje");
});

const nuevoViaje = document.getElementById("nuevoViaje");
const contador = document.getElementById("contador")
let viajes= 0;
nuevoViaje.addEventListener("click",function(){
    viajes++;
    contador.textContent = viajes;
})

