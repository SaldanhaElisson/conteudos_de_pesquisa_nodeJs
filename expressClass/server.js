// estamos importando o modulo
// se você não sabe sobre exports e require
// tem um artigo no meu linkedin explicando
const express = require('express')

// estamos refereciando a função
const app = express();

// os servidores  funciona como pedido (req) e resposta (res)
// quando eu direciona a pagina "/" na url ele fará o pedio
// e mandará a resposta (res) enviando um "hello worf"
app.get('/', (req, res) => {
    res.send('Helllo word!');
})


// mas antes de rodar o servidor precisamos dizer para a maquina
// em qual porta eśta rodando a aplicação
// sempre utilize portas onde não tem outra aplicação rodando
// nesse caso ele vai funcionar na porta 3000
// coloquei um console.log() para verificar se o sevidor está ativo
app.listen(3000, () =>{
    console.log('servidor rodando na porta 3000')
});

// pronto agora basta acessa  a url da maquina local
// que nesse caso é http:://localhost:3000/
// digite esse link e pronto, estará seu pequeno site :D