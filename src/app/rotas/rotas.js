const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

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
        
        const livroDao = new LivroDao(db);
        
        livroDao.lista(function (erro, resultados) {

            resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: resultados
                }
            );

        });




        // db.all('SELECT * FROM livros', function (erro, resultados) {

        //     resp.marko(
        //         require('../views/livros/lista/lista.marko'),
        //         {
        //             livros: resultados
        //         }
        //     );

        // });


    });
}

