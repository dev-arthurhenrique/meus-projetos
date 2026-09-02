const produtos = [
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/kEGU1gGySIe63lyL7AnwXEw4rQn.jpg' ,nome: 'The Flash', genero:'Serie', classificacao: 'imagens/12_Box_Borda.png', data: '7 de outubro de 2014'},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/lcGQaSrWkkxGuh0JJqyN2TkuNqb.jpg' ,nome: 'Diarios de um Vampiro', genero:'Serie', classificacao: 'imagens/14_Box_Borda.png', data: '10 de setembro de 2009'},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/g7ocbs1UieVybM3kypqXBfPczaL.jpg' ,nome: 'Beleza Verdadeira', genero:'Serie', classificacao: 'imagens/14_Box_Borda.png', data: '9 de dezembro de 2020'},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/ivYf2beO8LXYVzvqRvVR7T0z7qL.jpg' ,nome: 'Cara de Sapo', genero:'Filme', classificacao: 'imagens/L_Box_Borda.png', data: '9 de setembro de 2012'},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/qrp4ExXJhbAo1lKWbfiBKn6vXAF.jpg' ,nome: 'My Little Pony:A Amizade é Mágica', genero:'Serie', classificacao: 'imagens/L_Box_Borda.png', data: '10 de outubro de 2010'},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/9iSKL0loq9dHbZZExFUd6z34pAq.jpg' ,nome: 'Stranger Things', genero:'Serie', classificacao: 'imagens/16_Box_Borda.png', data: '15 de julho de 2016'},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/gMTfrLvrDaD0zrhpLZ7zXIIpKfJ.jpg' ,nome: 'It Bem-Vindos a Derry', genero:'Serie', classificacao: 'imagens/18_Box_Borda.png', data: '26 de outubro de 2025'},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/o4ki1gYHkP6IWNdwjHvI9vzfpuC.jpg' ,nome: 'Crepusculo', genero:'Filme', classificacao: 'imagens/14_Box_Borda.png', data: '19 de dezembro de 2008'},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/tiUtJXN4OZaK2PQM0q8mbbBgKS4.jpg' ,nome: 'Avatar Aang O Último Mestre do Ar', genero:'Filme', classificacao: 'imagens/12_Box_Borda.png', data: '25 de Julho de 2026'},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/tlWgu5Kp37C7XsgJVLmYsPKiAd6.jpg' ,nome: 'Os 100', genero:'Serie', classificacao: 'imagens/16_Box_Borda.png', data: '19 de março de 2014'},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/tfM1T6tAivjvy0sLwt6Y9WvlmzB.jpg' ,nome: 'Sonic 3 O filme', genero:'Filme', classificacao: 'imagens/12_Box_Borda.png', data: '25 de deezembro de 2024'},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/504rKeAKejZO2ONKSikdsW7bgO8.jpg' ,nome: 'Death Note', genero:'Serie', classificacao: 'imagens/16_Box_Borda.png', data: '3 de outubro de 2006'}
]

const resultado = document.getElementById('resultado')
const res = document.getElementById('res')
const renderizarTela = (lista) => {
    lista.forEach(objeto => {
        const cardGeral = document.createElement('div')
        cardGeral.className = 'conteudo'

        const imagem = document.createElement('img')
        imagem.className = 'imagem'
        imagem.src = objeto.img

        const nome = document.createElement('p')
        nome.className = 'nome'
        nome.textContent = objeto.nome

        const genero = document.createElement('p')
        genero.className = 'genero'
        genero.textContent = objeto.genero

        const imagemClassificaco = document.createElement('img')
        imagemClassificaco.className = 'imagemClassificaco'
        imagemClassificaco.src = objeto.classificacao

        const classificacao = document.createElement('p')
        classificacao.className = 'classificao'
        classificacao.appendChild(imagemClassificaco)

        const data = document.createElement('p')
        data.className = 'data'
        data.textContent = objeto.data

        cardGeral.appendChild(imagem)
        cardGeral.appendChild(nome)
        cardGeral.appendChild(genero)
        cardGeral.appendChild(classificacao)
        cardGeral.appendChild(data)
        resultado.appendChild(cardGeral)
    })
}
document.getElementById('pesquisarAlgo').addEventListener('click', pesquisar)

function pesquisar () {
    const textoDigitadoPeloUsuario = document.getElementById('inputPesquisar').value.trim().toLowerCase()
    if (textoDigitadoPeloUsuario !== '') {
        if (textoDigitadoPeloUsuario.toLowerCase() === 'filmes') {
            const filtroFilmes = produtos.filter(objeto => objeto.genero.toLowerCase() === 'filme')
            res.innerHTML = `Resultados encontrados para ${textoDigitadoPeloUsuario}`
            resultado.innerHTML = ''
            renderizarTela(filtroFilmes)
        } else if (textoDigitadoPeloUsuario.toLowerCase() === 'series') {
            const filtroSeries = produtos.filter(objeto => objeto.genero.toLowerCase() === 'serie')
            res.innerHTML = `Resultados encontrados para ${textoDigitadoPeloUsuario}`
            resultado.innerHTML = ''
            renderizarTela(filtroSeries)
        } else {
            res.innerHTML = `Resultados encontrados para ${textoDigitadoPeloUsuario}`
            resultado.innerHTML = ''
            const resultadoEncontrado = produtos.filter(objeto => objeto.nome.toLowerCase().includes(textoDigitadoPeloUsuario.toLowerCase()))
            renderizarTela(resultadoEncontrado)
        } 
    } 
}

// filtrar todos

document.getElementById('filtrargemTodos').addEventListener('click', todos)

function todos () {
    res.innerHTML = 'Todos os Resultados'
    resultado.innerHTML = ''
    renderizarTela(produtos)
}

// filtrar por filmes

document.getElementById('filtrargemFilmes').addEventListener('click', filmes)

function filmes () {
    const filtroFilmes = produtos.filter(objeto => objeto.genero.toLowerCase() === 'filme')
    res.innerHTML = `Resultados encontrados para 'Filmes'`
    resultado.innerHTML = ''
    renderizarTela(filtroFilmes)
}
// series
document.getElementById('filtrargemSeries').addEventListener('click', series)
function series () {
    const filtroSeries = produtos.filter(objeto => objeto.genero.toLowerCase() === 'serie')
    res.innerHTML = `Resultados encontrados para 'Séries'`
    resultado.innerHTML = ''
    renderizarTela(filtroSeries)
}