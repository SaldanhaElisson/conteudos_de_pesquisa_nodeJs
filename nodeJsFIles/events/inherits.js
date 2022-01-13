// agora vamos entender como a função event é passada para outras funções


const { EventEmitter } = require('events')

// estamos construindo uma função construtura que herda as funções do eventEmitter
function Character(name) {
    this.name = name
}


// estamos utilizando herença utilizando prototypes
Character.prototype = Object.create(EventEmitter.prototype)
Character.prototype.constructor = Character


const chapolin = new Character("chapolin")


chapolin.on("ola", () => console.log('eu!'))



console.log("quem poderá me defender?")

chapolin.emit("ola")





