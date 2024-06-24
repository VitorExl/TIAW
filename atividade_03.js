var express = require('express');
var app = express();
var port = 8030;
var hostname = '127.0.0.1';
var nota1 = 0, nota2 = 0, nota3 = 0;
var med = 0;

app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send('Olá, Mundo!!!');
   });
//http://127.0.0.1:8030
app.get('/:prinota/:segnota/:ternota', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    nota1 = parseInt(req.params.prinota, 10);
    nota2 = parseInt(req.params.segnota, 10);
    nota3 = parseInt(req.params.ternota, 10);
    med = (nota1 + nota2 + nota3) / 3;
    if(med >= 0 && med < 3){
        res.send(`<html>
            <head>
                <title>Recebimento de Parâmetro Opcional</title>
            </head>
            <body>
                <h1>Média:</h1>
                <h2>Valor: ${med}</h2>
                <h2>Status: Reprovado</h2>
            </body>
        </html>`);
    } else if (med < 7){
        res.send(`<html>
            <head>
                <title>Recebimento de Parâmetro Opcional</title>
            </head>
            <body>
                <h1>Média:</h1>
                <h2>Valor: ${med}</h2>
                <h2>Status: Exame</h2>
            </body>
        </html>`);
    } else {
        res.send(`<html>
            <head>
                <title>Recebimento de Parâmetro Opcional</title>
            </head>
            <body>
                <h1>Média:</h1>
                <h2>Valor: ${med}</h2>
                <h2>Status: Aprovado</h2>
            </body>
        </html>`);
    }
    

});
app.listen(port, hostname, function () {
    console.log(`O servidor foi iniciado no host ${hostname} e porta ${port}`);
});