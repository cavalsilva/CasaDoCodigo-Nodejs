// Chamando o código do custom.express
const app = require('./src/config/custom-express');

app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});