const { createServer } = require('node:http');

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
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Hello World</h1>');
        return;
    }

    if (req.url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Página de contacto</h1>');
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 - Página no encontrada</h1>');
});

server.listen(3000, () => {
    console.log('Servidor disponible en http://localhost:3000');
});