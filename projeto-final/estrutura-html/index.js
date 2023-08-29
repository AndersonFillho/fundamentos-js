function onLoad() {
    // console.log(`Carregou a tela!!`, Tela, jogoDaMemoria)
    // const pokemon = {
    //     // sempre relativo ao index.html
    //     img: '../arquivos/bulbasaur.png',
    //     nome: 'Bulbasaur'
    // }
    
    // Tela.atualizarImagens([
    //     pokemon,
    //     pokemon,
    //     pokemon,
    //     pokemon
    // ])
    const dependencias = {
        tela: Tela // a classe Tela é global
    }
    // inicializamos o jogo da memoria
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()
}
window.onload = onLoad