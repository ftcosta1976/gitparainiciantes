const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.status(200).send({message: 'Olá mundo estou esse é meu novo repositório'});
})

app.get('/ola', (req,res) => {
    res.status(200).send({message: 'Rota Olá mundo estou testando desktop'});
})


app.listen(4001, () => {
    console.log('Api rodando na porta 4001');
})
