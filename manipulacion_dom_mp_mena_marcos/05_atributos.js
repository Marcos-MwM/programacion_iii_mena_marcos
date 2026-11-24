const personal = document.getElementById("personal");
const informacion = document.getElementById("informacion");
const verEspecialidad = document.getElementById("verEspecialidad");
const cambiarPersonal = document.getElementById("cambiarPersonal");
const cambiarEstilo = document.getElementById("cambiarEstilo");

cambiarPersonal.addEventListener("click", function () {
    if (personal.dataset.rol === "Mecánico") {
        personal.setAttribute("src", "mecanico_pedro.webp");
        personal.setAttribute("alt", "Pedro, especialista de Fix-Up");
        personal.dataset.rol = "Especialista";
        personal.dataset.especialidad = "Diagnóstico y reparación";
        cambiarPersonal.textContent = "Ver mecánico";
    } else {
        personal.setAttribute("src", "mecanico_juan.webp");
        personal.setAttribute("alt", "Juan, mecánico de Fix-Up");
        personal.dataset.rol = "Mecánico";
        personal.dataset.especialidad = "Mantenimiento general";
        cambiarPersonal.textContent = "Ver especialista";
    }

    informacion.textContent = `${personal.dataset.rol}: ${personal.dataset.especialidad}`;
});

verEspecialidad.addEventListener("click", function () {
    informacion.textContent = `${personal.dataset.rol}: ${personal.dataset.especialidad}`;
});

cambiarEstilo.addEventListener("click", function () {
    if (personal.style.borderRadius === "50%") {
        personal.style.borderRadius = "0";
        personal.style.border = "4px solid #1565c0";
    } else {
        personal.style.borderRadius = "50%";
        personal.style.border = "4px solid #f57c00";
    }
});
