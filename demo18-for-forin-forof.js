const textoPar = "par"
const textoImpar = "impar"
// for(let index = 0; index <= 10; index++) {
//     const decisao = index % 2 === 0 ? textoPar : textoImpar
//     console.log(`O número ${index} é ${decisao}`)
// }



// const minhaListaDeTarefas = [
//     {
//         id: parseInt(Math.random() * 10),
//         nome: 'Chines',
//         superPoder: 'Pobre'
//     },
//     {
//         id: Math.random() * 10,
//         nome: 'GR',
//         superPoder: 'Ferida'
//     },
//     {
//         id: Math.random() * 10,
//         nome: 'Leo',
//         superPoder: 'Cicatriz'
//     }
// ]
// console.log(minhaListaDeTarefas)


const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Chines',
        superPoder: 'Pobre'
    },
    {
        id: Math.random() * 10,
        nome: 'GR',
        superPoder: 'Ferida'
    },
    {
        id: Math.random() * 10,
        nome: 'Leo',
        superPoder: 'Cicatriz'
    }
]
for(let index = 0; index < minhaListaDeTarefas.length; index ++) {
    const item = minhaListaDeTarefas[index]
    console.log(
        `
        id: ${item.id}
        nome: ${item.nome}
        `
    )
}


// não precisa do contador
for(const index in minhaListaDeTarefas) {
    const item = minhaListaDeTarefas[index]
    console.log('nome', item.nome)
}


// não precisa usar index
for(const item of minhaListaDeTarefas) {
    console.log('Nome**', item.nome)
}