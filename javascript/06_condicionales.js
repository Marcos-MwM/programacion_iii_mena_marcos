
const readline = require('node:readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {

    console.log('\n========== CONDICIONAL SIMPLE IF ==========');

    let energia = Number(await rl.question('Rick, ¿cuánta energía tienes? '));

    if (Number.isNaN(energia)) {
        console.log('Ingresa una cantidad numérica.');
    } else if (energia >= 80) {
        console.log('Tienes energía suficiente para continuar la aventura.');
    }

    console.log('\n========== CONDICIONAL IF-ELSE ==========');

    let combustible = Number(await rl.question('¿Cuánto combustible tiene la nave? '));

    if (combustible >= 50) {
        console.log('Tienes combustible suficiente para continuar.');
    } else {
        console.log('No tienes suficiente combustible para viajar.');
    }

    console.log('\n========== CONDICIONAL IF-ELSE IF ==========');

    if (energia >= 80) {
        console.log('Tienes energía para viajar a otra dimensión.');
    } else if (energia > 0) {
        console.log('Tienes poca energía para continuar.');
    } else {
        console.log('No tienes energía para viajar.');
    }

    console.log('\n========== CONDICIONAL IF ANIDADO ==========');

    let personaje = await rl.question('¿Quién pilotará la nave? Rick o Morty: ');

    if (combustible >= 50) {

        if (energia >= 80) {

            if (personaje === 'Rick' || personaje === 'Morty') {
                console.log('¡Viaje autorizado! Prepárense para la aventura.');
            } else {
                console.log('No se reconoce al piloto.');
            }

        } else {
            console.log('No tienes suficiente energía para viajar.');
        }

    } else {
        console.log('No tienes suficiente combustible para viajar.');
    }

    console.log('\n========== CONDICIONAL DE TEXTO ==========');

    if (personaje === 'Morty') {
        console.log('¡Hola, Morty! ¿Listo para la aventura?');
    } else if (personaje === 'Rick') {
        console.log('¡Hola, Rick! ¿A dónde vamos?');
    } else {
        console.log('No conozco ese personaje. Escribe Rick o Morty.');
    }

    rl.close();
}

main();
