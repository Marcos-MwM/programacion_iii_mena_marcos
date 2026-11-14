console.log('encuesta de satisfacción - Taller Fix-Up');

// breve encuesta para consumidor
const satisfecho = true;
const recomendaria = true;
const calificacion = 5;
const tiempoEsperaMinutos = 29;
const necesitaRevision = false;

console.log('¿Está satisfecho con el servicio?:', satisfecho);
console.log('¿Recomendaría el taller?:', recomendaria);
console.log('Calificación del servicio:', calificacion, 'de 5');
console.log('Tiempo de espera:', tiempoEsperaMinutos, 'minutos');
console.log('¿Necesita otra evaluación?:', necesitaRevision);

if (satisfecho) {
    console.log('Gracias por confiar en Taller Fix-Up.');

    if (recomendaria && calificacion >= 4) {
        console.log('¡Excelente! Nos alegra que recomiende nuestro servicio');
    } else if (recomendaria || calificacion >= 4) {
        console.log('gracias por su opinión; seguiremos mejorando');
    } else {
        console.log('Tomaremos en cuenta sus comentarios para mejorar');
    }

    } else {
        console.log('Lamentamos que el servicio no haya cumplido sus expectativas');

        if (tiempoEsperaMinutos > 30 || calificacion <= 2) {
            console.log('Revisaremos la atención y los tiempos de espera');
        } else {
            console.log('Analizaremos su experiencia para mejorar nuestro servicio');
        }
    }

if (necesitaRevision && !satisfecho) {
    console.log('Nos comunicaremos para revisar su vehiculo');
} else if (necesitaRevision || tiempoEsperaMinutos > 30) {
    console.log('Podemos darle seguimiento a su visita');
} else {
    console.log('No se requiere seguimiento adicional');
}
