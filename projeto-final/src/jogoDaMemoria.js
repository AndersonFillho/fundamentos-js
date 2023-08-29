class JogoDaMemoria {
    // se mandar um obj = {tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente a propriedade
    // tela
    constructor({ tela, util }) {
        this.tela = tela
        this.util = util
        this.iconePadrao = '../arquivos/padrão.png'
        // caminho do arquivo, sempre relatico ao index.html
        this.pokemonsIniciais = [
            { img: '../arquivos/bulbasaur.png', nome: 'Bulbasaur' },
            { img: '../arquivos/charmander.png', nome: 'Charmander' },
            { img: '../arquivos/psyduck.png', nome: 'Psyduck' },
            { img: '../arquivos/squirtle.png', nome: 'Squirtle' }
        ]
        this.pokemonsEscondidos = []
        this.pokemonsSelecionados = []
    }
    // para usar o this, não podemos usar static!
    inicializar() {
        // vai pegar todas as funções de classe tela!
        // coloca todos os pokemons na tela
        this.tela.atualizarImagens(this.pokemonsIniciais)
        // força a tela a usar o this de jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarPokemonsEscondidos.bind(this))
    }
    embaralhar() {
        const copias = this.pokemonsIniciais
            // duplicar os itens
            .concat(this.pokemonsIniciais)
            // entrar em cada item e criar um id aleatorio
            .map(item => {
                return Object.assign({}, item, { id: Math.random() / 0.5 })
            })
            // ordenar
            .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
        // vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderPokemons(copias)
        }, 1000);
    }
    esconderPokemons(pokemons) {
        //vamos trocar a imagem de todos os pokemons existentes pelo icone padrão
        const pokemonsOcultos = pokemons.map(({ nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        // atualizamos a tela com os pokemons ocultos
        this.tela.atualizarImagens(pokemonsOcultos)
        // guardamos os pokemons para trabalhar com eles depois
        this.pokemonsEscondidos = pokemonsOcultos
    }
    exibirPokemons(nomeDoPokemon) {
        // vamos procurar esse pokemon pelo nome em nosso pokemonsIniciais e vamos obter somente a imagem dele
        const { img } = this.pokemonsIniciais.find(({ nome }) => nomeDoPokemon === nome)
        // vamos criar a função na tela, para exibir somente o heroi selecionado
        this.tela.exibirPokemons(nomeDoPokemon, img)
    }
    verificarSelecao(id, nome) {
        const item = { id, nome }
        // vamos verificar a quantidade de pokemons selecionados e tomar ação se escolheu certo ou errado
        const pokemonsSelecionados = this.pokemonsSelecionados.length
        switch (pokemonsSelecionados) {
            case 0:
                // adiciona a escolha na lista, esperando pela próxima clicada
                this.pokemonsSelecionados.push(item)
                break;
            case 1:
                // se a quantidade for 1, significa que o usuario só pode escolher mais um
                const [opcao1] = this.pokemonsSelecionados
                // zerar itens para não selecionar mais de dois
                this.pokemonsSelecionados = []
                // conferimos se os nomes e ids batem conforme o esperado
                if (opcao1.nome === item.nome &&
                    // aqui verificamos se são ids diferentes para o usuario não clicar duas vezes no mesmo    
                    opcao1.id !== item.id
                ) {
                    this.exibirPokemons(item.nome)
                    // como o padrão é true, não precisa passar nada
                    this.tela.exibirMensagem()
                    // para a execução
                    return;
                }

                this.tela.exibirMensagem(false)
                // fim do case!
                break;
        }
    }
    mostrarPokemonsEscondidos() {
        // Vamos pegar todos os pokemons da tela e colocar seu respectivo valor correto
        const pokemonsEscondidos = this.pokemonsEscondidos
        for( const pokemon of pokemonsEscondidos ) {
            const { img } = this.pokemonsIniciais.find(item => item.nome === pokemon.nome)
            pokemon.img = img
        }
        this.tela.atualizarImagens(pokemonsEscondidos)
    }

    jogar() {
        this.embaralhar()
    }
}