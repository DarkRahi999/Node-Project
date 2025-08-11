const http = require('http');
const port = 8080;
const hostName = '127.0.0.1';
const handleRoute = require('./module');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        handleRoute('./src/index.html', 200, req, res);
    } else if (req.url === '/about') {
        handleRoute('./src/about.html', 200, req, res);
    } else if (req.url === '/contact') {
        handleRoute('./src/contact.html', 200, req, res);
    } else if (req.url === '/help') {
        handleRoute('./src/help.html', 200, req, res);
    } else {
        handleRoute('./src/error.html', 404, req, res);
    }
});

server.listen(port, hostName, () => {
    console.log(`Server running successfully at http://${hostName}:${port}/`);
});