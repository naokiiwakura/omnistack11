const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    //return response.send('hello world');
    return response.json({
        evento: 'Semana oministack 11.0',
        aluno:'Elton Naoki Iwakura'
    });
});

app.listen(3333);
