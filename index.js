const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.status(200).send({message: 'Olá mundo estou esse é meu novo repositório'});
})

app.listen(4001, () => {
    console.log('Api rodando na porta 4001');
})