let personajes =[
    {
        id:1,
        nombre: "rick",
        dimension: "c-137",
        estado: "vivo"
    },
    {
        id:2,
        nombre: "morty",
        dimension: "c-137",
        estado: "vivo"
    },
    {
        id:3,
        nombre: "jerry",
        dimension: "c-137",
        estado: "desconocido"
    },

]
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const dimension = document.getElementById("dimension");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");
let idEditando = null;

function editarPersonaje(id) {
    const personaje = personajes.find(function(personajeActual) {
        return personajeActual.id === id;
    });
    nombre.value = personaje.nombre;
    dimension.value = personaje.dimension.toUpperCase();
    estado.value = personaje.estado;
    idEditando = personaje.id;
    guardar.textContent = "Guardar cambios";
    cancelar.hidden = false;
    nombre.focus();
}

function eliminarPersonaje(id) {
    personajes = personajes.filter(function(personaje) {
        return personaje.id !== id;
    });

    if (idEditando === id) {
        idEditando = null;
        guardar.textContent = "Agregar";
        cancelar.hidden = true;
        formulario.reset();
    }

    mostrarPersonajes();
}

function mostrarPersonajes() {
    contenedor.replaceChildren();
    personajes.forEach(function(personaje){
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        const titulo = document.createElement("h3");
        titulo.textContent = personaje.nombre;
        const parrafoDimension = document.createElement("p");
        parrafoDimension.textContent = `Dimension: ${personaje.dimension}`;
        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = `Estado: ${personaje.estado}`;
        const editar = document.createElement("button");
        editar.type = "button";
        editar.textContent = "Editar";
        editar.addEventListener("click", function(){
            editarPersonaje(personaje.id);
        });
        const eliminar = document.createElement("button");
        eliminar.type = "button";
        eliminar.textContent = "Eliminar";
        eliminar.addEventListener("click", function(){
            eliminarPersonaje(personaje.id);
        });
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(parrafoDimension);
        tarjeta.appendChild(parrafoEstado);
        tarjeta.appendChild(editar);
        tarjeta.appendChild(eliminar);
        contenedor.appendChild(tarjeta);
    });
    cantidad.textContent = personajes.length;
}

mostrarPersonajes();

let siguientesId = 4;
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const nombrePersonaje = nombre.value.trim();
    const dimensionPersonaje = dimension.value.trim();
    const estadoPersonaje = estado.value.trim();

    if(nombrePersonaje === "" || dimensionPersonaje === "" || estadoPersonaje === ""){
        alert("Por favor, completa todos los campos.");
        return;
    }
 
    if (idEditando === null) {
        const nuevoPersonaje = {
            id: siguientesId,
            nombre: nombrePersonaje,
            dimension: dimensionPersonaje,
            estado: estadoPersonaje
        };
        siguientesId++;
        personajes.push(nuevoPersonaje);
    } else {
        const personaje = personajes.find(function(p){
            return p.id === idEditando;
        });
        personaje.nombre = nombrePersonaje;
        personaje.dimension = dimensionPersonaje;
        personaje.estado = estadoPersonaje;
    }
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
    formulario.reset();
    mostrarPersonajes();
});

cancelar.addEventListener("click", function(){
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
    formulario.reset();
});
