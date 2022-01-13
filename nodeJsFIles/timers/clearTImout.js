// ClearTimeout cancela um Timeou

// setTimeOut vai rodar uma função depois de X milissegundos

const timeOut = 3000
const finished = () => console.log('done!')

let time = setTimeout(finished, timeOut)

clearTimeout(time)
