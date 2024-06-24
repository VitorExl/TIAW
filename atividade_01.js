var express = require('express');
var app = express();
var port = 8030;
var hostname = '127.0.0.1';
var fahr = 0;
app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send('Olá, Mundo!!!');
   });
//http://127.0.0.1:8030
app.get('/:temp', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    fahr = (req.params.temp * 1.8) + 32;
    res.send(`<html>
 <head>
 <title>Recebimento de Parâmetro Opcional</title>
 </head>
 <body>
 <h1>Temperatura em Fahrenheit:</h1>
 <h2>ID: ${fahr}</h2>
 </body>
 </html>`);

});
app.listen(port, hostname, function () {
    console.log(`O servidor foi iniciado no host ${hostname} e porta ${port}`);
});