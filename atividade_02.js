var express = require('express');
var app = express();
var port = 8030;
var hostname = '127.0.0.1';
var lado1 = 0, lado2 = 0, lado3 = 0;
var igual = 0;

app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send('Olá, Mundo!!!');
   });
//http://127.0.0.1:8030
app.get('/:ladoum/:ladodois/:ladotres', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    lado1 = parseInt(req.params.ladoum, 10);
    lado2 = parseInt(req.params.ladodois, 10);
    lado3 = parseInt(req.params.ladotres, 10);
    if(lado1 == lado2) igual++;
    if(lado2 == lado3) igual++;
    if(lado3 == lado2) igual++;
    if(igual == 0 ){
        res.send(`<html>
            <head>
                <title>Recebimento de Parâmetro Opcional</title>
            </head>
            <body>
                <h2>Status: Escaleno</h2>
            </body>
        </html>`);
    } else if (igual == 1){
        res.send(`<html>
            <head>
                <title>Recebimento de Parâmetro Opcional</title>
            </head>
            <body>
                <h2>Status: Isósceles</h2>
            </body>
        </html>`);
    } else if(igual == 3){
        res.send(`<html>
            <head>
                <title>Recebimento de Parâmetro Opcional</title>
            </head>
            <body>
                <h2>Status: Equilátero</h2>
            </body>
        </html>`);
    }
    

});
app.listen(port, hostname, function () {
    console.log(`O servidor foi iniciado no host ${hostname} e porta ${port}`);
});