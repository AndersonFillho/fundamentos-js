const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const ID_BTN_MOSTRAR_TUDO = "mostrarTudo"
const MENSAGEM = {
    sucesso: {
        texto: 'Combinação correta!',
        classe: 'success__title'
    },
    erro: {
        texto: 'Combinação incorreta!',
        classe: 'alert-danger'
    }
}
class Tela {
    static obterCodigoHtml(item) {
        return `
        <div class="card">
        <div class="card-info" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
            <img src="${item.img}" name="${item.nome}" class="card-pokemon" alt="bulbasaur">
        </div>
        <br />
    </div>
    `
    }
    static configurarBotaoVerificarSelecao(funcaoOnClick) {
        window.verificarSelecao = funcaoOnClick
    }
    static alterarConteudoHTML(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }
    static gerarStringHTMLPelaImagem(itens) {
        // para cada item da lista, vai executar a função obterCodigoHtml
        // ao final, vai concatenar tudo em uma única string
        // muda de array para string
        return itens.map(Tela.obterCodigoHtml).join('')
    }
    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }

    static configurarBotaoJogar(funcaoOnclick) {
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnclick
    }
    static exibirPokemons(nomeDoPokemon, img) {
        const elementosHtml = document.getElementsByName(nomeDoPokemon)
        // para cada elemento encontrado na tela, vamos alterar a imagem, para a imagem inicial dele
        // com o forEach, para cada item, dentro dos () setamos o valor de imagem
        elementosHtml.forEach(item => (item.src = img))
    }
    static exibirMensagem(sucesso = true) {
        const elemento = document.getElementById(ID_MENSAGEM)
        if (sucesso) {
            elemento.classList.remove(MENSAGEM.erro.classe)
            elemento.classList.add(MENSAGEM.sucesso.classe)
            elemento.innerText = MENSAGEM.sucesso.texto
        }
        else {
            elemento.classList.remove(MENSAGEM.sucesso.classe)
            elemento.classList.add(MENSAGEM.erro.classe)
            elemento.innerText = MENSAGEM.erro.texto
        }
        elemento.classList.remove(CLASSE_INVISIVEL)
    }
    static configurarBotaoMostrarTudo(funcaoOnClick) {
        const btnMostrarTudo = document.getElementById(ID_BTN_MOSTRAR_TUDO)
        btnMostrarTudo.onclick = funcaoOnClick
    }
}