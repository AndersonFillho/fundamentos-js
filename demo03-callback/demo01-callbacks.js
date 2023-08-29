const fs = require('fs')
fs.readFile('./arq1.txt', (error, resposta)=> {
    if(error) {
        console.error('Deus ruim***', error.stack)
        return;
    }
    fs.readFile('./arq2.txt', (errorArq2, respostaArq2) => {
        if(errorArq2) {
            console.error('Deus ruim no arq2', errorArq2)
            return;
        }
        fs.readFile('./arq3.txt', (errorArq3, respostaArq3) => {
            if(errorArq3) {
                console.error('Deus ruim no arq3', errorArq3)
                return;
            }

            const conteudo = `${respostaArq1}\n${respostaArq2}\n${respostaArq3}`
            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) => {
                if(errorWrite) {
                    console.error('Deus ruim na gravação', errorWrite)
                    return;
                }
                console.log('Arquivo salvo com sucesso')
            })
        })
    })
})