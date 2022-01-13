// event faz parte do core do nodeJs

const { EventEmitter } = require('events')

const ev = new EventEmitter()

// nessa função estou esperando receber a emissão
// quando ele ouvir o que foi emitido, irá executar um função com o argumento enviado pela função da emissão
ev.on('saySomething', (mesange) =>{
    console.log('Eu ouvi vocÊ: ', mesange)

})

// estou emitindo eventos e estou enviando um argumento na segunda string
ev.emit('saySomething', 'elisson')
ev.emit('saySomething', 'elisson')

// ouvindo uma unica vez utiliza o .once conforme como está a baixo

ev.once('saySomething', (mesange) =>{
    console.log('Eu ouvi vocÊ: ', mesange)

})