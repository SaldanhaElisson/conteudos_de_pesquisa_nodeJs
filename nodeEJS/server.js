const express = require('express')

const app = express();

// configurando o ejs
app.set("view engine", "ejs");

// criando rotas e o que elas vão chamar
// res.render espera que o arquivo esteja dentro da pasta views
app.get("/", function(req, res){
    res.render("index")
})

// ele vai ficar ouvindo uma porta, nesse caso 8080, e quando escutar ele vai executar o app.get
app.listen(8080)
console.log("rodando")