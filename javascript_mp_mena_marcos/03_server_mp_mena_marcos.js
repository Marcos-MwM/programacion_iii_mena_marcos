const { createServer } = require('node:http');

// datos de un automovil generico 
const problemas_detectados = {
    id_vehiculo: 1,
    problema: 'sobrecalentamiento en la maquinaria',
    encargado: 'Fernando Suarez',
    terminado: false
};
const servicios = ['Cambio de aceite', 'Frenos', 'Alineación', 'Diagnóstico de motor'];



const server = createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, {
            'Allow': 'GET',
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<h1>405 - Método no permitido</h1>');
        return;
    }

    if (req.url === '/') {
        const inicio = `<!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="utf-8">
                <title>Taller Fix-Up</title>
            </head>
            <body>
                <nav>
                    <a href="/">Inicio</a> |
                    <a href="/servicios">Servicios</a> |
                    <a href="/evaluacion">Evaluacion</a>
                </nav>

                <h1>Taller Fix-Up</h1>
                <p>Mecánica automotriz de confianza: diagnóstico, mantenimiento y reparación para tu vehículo.</p>

                <h2>¿Qué hacemos?</h2>
                <ul>
                    <li>Diagnóstico de motor</li>
                    <li>Cambio de aceite y frenos</li>
                    <li>Reparación de sobrecalentamiento</li>
                </ul>

                <p>Atendemos todo tipo de vehículos, desde autos particulares hasta maquinaria.</p>
            </body>
            </html>`;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(inicio);
        return;
    }

    if (req.url === '/evaluacion') {
        let lista ='';
        for (let [lista_nombre,valor] of Object.entries(problemas_detectados)){
            lista += `<li>${lista_nombre}: ${valor}</li>`;
        };
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<h1>Listado de problemas de su auto</h1><ul>${lista}</ul>`);
        return;
    }
    if (req.url === '/servicios') {
        const lista = servicios.map(s => `<li>${s}</li>`).join('');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<h1>Servicios</h1><ul>${lista}</ul>`);
        return 
    }

    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 - Página no encontrada</h1>');
});

server.listen(3000, () => {
    console.log('Servidor disponible en http://localhost:3000');
});