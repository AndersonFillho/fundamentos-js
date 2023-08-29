// enquanto não mudar, não para!
let termoDeParada = true
let contador = 0
while(termoDeParada) {
    termoDeParada = contador < 10
    if(contador % 2 === 0) {
        console.log('Numero par', contador)
    }
    contador += 1
    //contador = contador + 1
}

// roda a primeira vez e testa a variavel depois!
do {
    console.log('Só uma vez! pois termoDeParada é', termoDeParada)
} while(termoDeParada)

//não executa
while(termoDeParada) {
    //não vai executar
    console.log('Nem vai executar')
}

//executa infinito até parar manualmente
while(true) {
    //não vai executar
    console.log('Nem vai executar')
}