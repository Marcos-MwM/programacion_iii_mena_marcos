const personaje = document.getElementById("personaje");
const cambiar = document.getElementById("cambiar");
const verDimension = document.getElementById("verDimension")
const dimension =document.getElementById("dimension")
const cambiarEstilo = document.getElementById("cambiarEstilo");


cambiar.addEventListener("click", function () {
    if (personaje.dataset.dimension === "C-137") {
        personaje.setAttribute("src", "imagen.webp");
        personaje.setAttribute("alt", "Imagen del personaje");
        personaje.dataset.dimension = "C-131";
    } else {
        personaje.setAttribute("src", "token.webp");
        personaje.setAttribute("alt", "Falta token");
        personaje.dataset.dimension = "C-137";
    }

    dimension.textContent = personaje.dataset.dimension;

});

verDimension.addEventListener("click",function(){
    dimension.textContent = personaje.dataset.dimension
});

cambiarEstilo.addEventListener("click", function () {
    if (personaje.style.borderRadius === "" || personaje.style.borderRadius === "50%") {
        personaje.style.border = "5px solid #5b21b6";
        personaje.style.borderRadius = "16px";
        personaje.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
        dimension.style.color = "#5b21b6";
        dimension.style.backgroundColor = "#ede9fe";
    } else if (personaje.style.borderRadius === "16px") {
        personaje.style.border = "5px solid #0891b2";
        personaje.style.borderRadius = "0px";
        personaje.style.boxShadow = "0 4px 12px rgba(8, 145, 178, 0.4)";
        dimension.style.color = "#0e7490";
        dimension.style.backgroundColor = "#cffafe";
    } else {
        personaje.style.border = "5px solid #ea580c";
        personaje.style.borderRadius = "50%";
        personaje.style.boxShadow = "0 4px 12px rgba(234, 88, 12, 0.4)";
        dimension.style.color = "#c2410c";
        dimension.style.backgroundColor = "#ffedd5";
    }
});
