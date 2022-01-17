# Modulos

## Exportando modulos no NodeJs

Dentro do recurso `modules` existe um objeto vazio chamado `exports` que armazena recursos a ser exportado na aplicações, como podemos ver no exemplo a seguir:

```
const nome = 'Elisson'
const sobrenome = 'Saldanha'

const falaNome = () => {
    console.log(nome, sobrenome)
}

// estamos guardando a função fala nome em um parametro dentro do objeto exports para exportar
module.exports.nome = falaNome

console.log(module.exports)

// o resulta será um objeto com o parametro nome
```
Então para exportar alguma coisa, basta guardar dentro do objeto `module.exports` que faz parte do core do Node

Existe alguns atalhos para encurtar o codigo. Invés de digitar `module.exports` podemos apenar colocar `exports` como no exemplo abaixo e obtera o mesmo resultado

```
const nome = 'Elisson'
const sobrenome = 'Saldanha'

const falaNome = () => {
    console.log(nome, sobrenome)
}

module.exports.nome = falaNome

//utilizando apena exports, mas refereciando o mesmo local
exports.sobrenome = sobrenome

console.log(module.exports)

// O resultado será: { nome: [Function: falaNome], sobrenome: 'Saldanha' }

```

Também podemos utilizar o `this.` para guardar os recursos no `module.exports` entranto não é muito utilizado. exemplo a seguir

```
const nome = 'Elisson'
const sobrenome = 'Saldanha'

const falaNome = () => {
    console.log(nome, sobrenome)
}

module.exports.falaNome = falaNome
exports.sobrenome = sobrenome
this.nome = nome

console.log(module.exports)

// O resulta será:
//{
//  falaNome: [Function: falaNome],
//  sobrenome: 'Saldanha',
//  nome: 'Elisson'
// }

```
## Importando no Node

Para importar algo basta utilizarmos `require` refereciando o caminho do arquivo onde guardamos os recursos no `exports`. Como no exemplo a seguir:

```
// o arquivo que estou exportanto ateriomente é app, por is estamos refereciando aqui
const pessoa = require('./app)


console.log(pessoa)

// O resulta será:
//{
//  falaNome: [Function: falaNome],
//  sobrenome: 'Saldanha',
//  nome: 'Elisson'
// }

```

e também podemos importar por destrução, somente um parametro onde há diversos, como no caso anterios que tem varios parametro dentro do `module.exports`

```
const {falaNome} = require('./app)

console.log(falaNome)

// resultado será: Function:falaNome

```

Para importar algum modulo baixado pelo npm ou do core do node, basta  colocar  o nome do modulo, como no exemlo a seguir:

```
const path = require('path')
//path é modulo do core do node, como podemos percebe não precisou eu digitar o caminho do arquivo
```

