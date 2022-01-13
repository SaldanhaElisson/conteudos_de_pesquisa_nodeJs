// process.stdout.write() -> vai escrever na saida do terminal
// a vantagem do console.log() é que temos total controle da string


//process.stdin.on("data", data =>(bloco1)) -> .on vai funcionar como ouvido e quando receber algum dado no terminal vai rodar a função seguida
// ele também pode ouvir eventos
// process.exit -> funcinar para sair do .on()

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderiza dizer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) =>{
    process.stdout.write( "\n\n" + questions[index] + ">" )
}

ask()

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim() + '\n')
    if(answers.length < questions.length){
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()
    }
    
})

process.on('exit', () =>{
    console.log(`
    
        Bacana Elisson

        Oque você aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu foi:
        ${answers[1]}

        O que te deixou feliz hoje:
        ${answers[2]}

        VocÊ ajudou ${answers[3]} pessoas hoje!!

        Volte amanhã para novas reflexões
    `)


})
