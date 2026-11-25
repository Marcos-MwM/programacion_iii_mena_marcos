let vehiculos = [
    {id:1,placa:"PBA-1234",cliente:"Ramlethal",estado:"recibido"},
    { id: 2, placa: "GYE-5678", cliente: "Ana", estado: "en reparación" },
    { id: 3, placa: "UIO-9012", cliente: "Luis", estado: "listo" }
];

let siguienteId =4;
let idEditando =null;

const formulario = document.getElementById("formulario");
const cliente = document.getElementById("cliente");
const placa = document.getElementById("placa");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");
const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

function limpiarFormulario(){
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
    formulario.reset();
}
;
function mostrarVehiculos(){
    contenedor.replaceChildren();
    vehiculos.forEach(function(vehiculo){
    const tarjeta=document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const titulo= document.createElement("h3");
    titulo.textContent = vehiculo.placa;

    const pEstado= document.createElement("p");
    pEstado.textContent = `ESTADO ${vehiculo.estado}`;

    const pCliente = document.createElement('p');
    pCliente.textContent =`Cliente: ${vehiculo.cliente}`;

    const btnEditar = document.createElement('button');
    btnEditar.type = "button";
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click",function(){
        editarVehiculo(vehiculo.id);
    })
    const btnEliminar = document.createElement('button');
    btnEliminar.type= "button";
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click",function(){
        eliminarVehiculo(vehiculo.id);
    })

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(pCliente);
    tarjeta.appendChild(pEstado);
    tarjeta.appendChild(btnEditar);
    tarjeta.appendChild(btnEliminar);
    contenedor.appendChild(tarjeta);

    });
    
    cantidad.textContent = vehiculos.length;

};
mostrarVehiculos();

function editarVehiculo(id){
    const vehiculo = vehiculos.find(function(v){
        return v.id === id;
    })
    placa.value = vehiculo.placa;
    cliente.value = vehiculo.cliente;
    estado.value =vehiculo.estado;

    idEditando=vehiculo.id;
    guardar.textContent = "Guardar cambios";
    cancelar.hidden = false;
    placa.focus();
}

function eliminarVehiculo(id){
    const confirmar = confirm("¿Seguro que deseas borrar este vehículo");
    if (!confirmar){
        return;
    }
    vehiculos = vehiculos.filter(function(v){
        return v.id !== id;
    });
    if (idEditando === id){
        limpiarFormulario();
    }

    mostrarVehiculos();
}

formulario.addEventListener("submit",function(event){
    event.preventDefault();
    const placaVehiculo = placa.value.trim();
    const clienteVehiculo = cliente.value.trim();
    const estadoVehiculo = estado.value.trim();
    if (placaVehiculo === "" || clienteVehiculo === ""){
    alert("Por favor, completa todos los campos.");
    return;
}
    if (idEditando==null){
        vehiculos.push({
            id:siguienteId,
            placa:placaVehiculo,
            cliente:clienteVehiculo,
            estado:estadoVehiculo
        })
    siguienteId++;}
        
    else{
        const vehiculo = vehiculos.find(function(v){
            return v.id === idEditando;
        }) ;
        vehiculo.placa = placaVehiculo;
        vehiculo.cliente = clienteVehiculo;
        vehiculo.estado = estadoVehiculo;
    
    }
    limpiarFormulario();
    mostrarVehiculos();
});
cancelar.addEventListener("click",function(){
    formulario.limpiarFormulario;
})
