// Exporta uma função
module.exports = (app) => {

    // Rota Padrão "/"
    app.get('/', function (req, resp) {
        resp.send(
            `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Casa do Código</h1>
                </body>
            </html>
            `        
        );
    });

    // Rota Livros "/livros"
    app.get('/livros', function (req, resp) {
        resp.send(
            `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Listagem de livros</h1>
                </body>
            </html>
            `        
        );
    });
}

