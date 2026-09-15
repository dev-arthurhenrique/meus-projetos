const produtos = [
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/kEGU1gGySIe63lyL7AnwXEw4rQn.jpg' ,nome: 'The Flash', genero:'Serie', classificacao: 'imagens/12_Box_Borda.png', data: '7 de outubro de 2014', preco: 40},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/lcGQaSrWkkxGuh0JJqyN2TkuNqb.jpg' ,nome: 'Diarios de um Vampiro', genero:'Serie', classificacao: 'imagens/14_Box_Borda.png', data: '10 de setembro de 2009', preco: 15},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/g7ocbs1UieVybM3kypqXBfPczaL.jpg' ,nome: 'Beleza Verdadeira', genero:'Serie', classificacao: 'imagens/14_Box_Borda.png', data: '9 de dezembro de 2020', preco: 5},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/ivYf2beO8LXYVzvqRvVR7T0z7qL.jpg' ,nome: 'Cara de Sapo', genero:'Filme', classificacao: 'imagens/L_Box_Borda.png', data: '9 de setembro de 2012', preco: 20},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/qrp4ExXJhbAo1lKWbfiBKn6vXAF.jpg' ,nome: 'My Little Pony:A Amizade é Mágica', genero:'Serie', classificacao: 'imagens/L_Box_Borda.png', data: '10 de outubro de 2010', preco: 20},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/9iSKL0loq9dHbZZExFUd6z34pAq.jpg' ,nome: 'Stranger Things', genero:'Serie', classificacao: 'imagens/16_Box_Borda.png', data: '15 de julho de 2016', preco: 10},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/gMTfrLvrDaD0zrhpLZ7zXIIpKfJ.jpg' ,nome: 'It Bem-Vindos a Derry', genero:'Serie', classificacao: 'imagens/18_Box_Borda.png', data: '26 de outubro de 2025', preco: 320},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/o4ki1gYHkP6IWNdwjHvI9vzfpuC.jpg' ,nome: 'Crepusculo', genero:'Filme', classificacao: 'imagens/14_Box_Borda.png', data: '19 de dezembro de 2008', preco: 100},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/tiUtJXN4OZaK2PQM0q8mbbBgKS4.jpg' ,nome: 'Avatar Aang O Último Mestre do Ar', genero:'Filme', classificacao: 'imagens/12_Box_Borda.png', data: '25 de Julho de 2026', preco: 25},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/tlWgu5Kp37C7XsgJVLmYsPKiAd6.jpg' ,nome: 'Os 100', genero:'Serie', classificacao: 'imagens/16_Box_Borda.png', data: '19 de março de 2014', preco: 35},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/tfM1T6tAivjvy0sLwt6Y9WvlmzB.jpg' ,nome: 'Sonic 3 O filme', genero:'Filme', classificacao: 'imagens/12_Box_Borda.png', data: '25 de deezembro de 2024', preco: 40},
    {img: 'https://media.themoviedb.org/t/p/w300_and_h450_face/504rKeAKejZO2ONKSikdsW7bgO8.jpg' ,nome: 'Death Note', genero:'Serie', classificacao: 'imagens/16_Box_Borda.png', data: '3 de outubro de 2006', preco: 50}
]

const resultado = document.getElementById('resultado')
const res = document.getElementById('res')

// Função geral para criar os cards

const renderizarTela = (lista) => {
    lista.forEach(objeto => {
        const card = document.createElement('div')
        card.className = 'conteudo'

        const imagem = document.createElement('img')
        imagem.className = 'imagem'
        imagem.src = objeto.img

        const nome = document.createElement('p')
        nome.className = 'nome'
        nome.textContent = objeto.nome

        const genero = document.createElement('p')
        genero.className = 'genero'
        genero.textContent = objeto.genero

        const classificacao = document.createElement('p')
        classificacao.className = 'classificao'

        const imagemClassificaco = document.createElement('img')
        imagemClassificaco.className = 'imagemClassificaco'
        imagemClassificaco.src = objeto.classificacao

        classificacao.appendChild(imagemClassificaco)

        const data = document.createElement('p')
        data.className = 'data'
        data.textContent = objeto.data

        const preco = document.createElement('p')
        preco.className = 'preco'
        preco.textContent = `R$${objeto.preco}`

        card.appendChild(imagem)
        card.appendChild(nome)
        card.appendChild(genero)
        card.appendChild(classificacao)
        card.appendChild(data)
        card.appendChild(preco)
        resultado.appendChild(card)
    });
}

// Função para pesquisar

document.getElementById('pesquisarAlgo').addEventListener('click', pesquisar)
function pesquisar () {
    const textoDigitadoPeloUsuario = document.getElementById('inputPesquisar').value.trim()
    if (textoDigitadoPeloUsuario !== '') {
        res.innerHTML = `Resultados encontrados para '<em>${textoDigitadoPeloUsuario}</em>'`
        const resultadoEncontrado = produtos.filter(objeto => objeto.nome.toLowerCase().includes(textoDigitadoPeloUsuario.toLowerCase()))
        if (resultadoEncontrado.length === 0) {
            resultado.innerHTML =  ''
            resultado.innerHTML = `Nenhum resultado encontrado para <em>' ${textoDigitadoPeloUsuario}'</em>`
        } else {
            resultado.innerHTML = ''
            renderizarTela(resultadoEncontrado)
        }
    }
}

// Função para filtrar filmes

document.getElementById('filtrargemFilmes').addEventListener('click', filmes)

function filmes () {
    res.innerHTML = `Resultados encontrados para '<em>Filmes</em>'`
    const filtrargemFilmes = produtos.filter(objeto => objeto.genero === 'Filme')
    resultado.innerHTML = ''
    renderizarTela(filtrargemFilmes)
}

// Função para filtrar serie

document.getElementById('filtrargemSeries').addEventListener('click', serie)

function serie () {
    res.innerHTML = `Resultados encontrados para '<em>Série</em>'`
    const filtrargemSeries = produtos.filter(objeto => objeto.genero === 'Serie')
    resultado.innerHTML = ''
    renderizarTela(filtrargemSeries)
}
// Função para mostrar A a Z

document.getElementById('filtrargemAZ').addEventListener('click', aZ)

function aZ () {
    const ordemAz = produtos.sort((a, b) => a.nome.localeCompare(b.nome))
    resultado.innerHTML = ''
    renderizarTela(ordemAz)
}

//função para mostar de Z a A

document.getElementById('filtrargemZA').addEventListener('click', Za)

function Za () {
    const ordemZa = produtos.sort((a,b) => b.nome.localeCompare(a.nome))
    resultado.innerHTML = ''
    renderizarTela(ordemZa)
}

// Função para filtrar tudo

document.getElementById('filtrargemTodos').addEventListener('click', todos)

function todos () {
    res.innerHTML = `Resultados encontrados para '<em>Todos</em>'`
    resultado.innerHTML = ''
    renderizarTela(produtos)
}

// filtragem para classificao al

document.getElementById('al').addEventListener('click', livre)
function livre () {
    res.innerHTML = `Filmes e Séries Livres para todos os públicos`
    resultado.innerHTML = ''
    const livreEncontrado = produtos.filter(objeto => objeto.classificacao === 'imagens/L_Box_Borda.png')
    renderizarTela(livreEncontrado)
}
// filtragem para classificao 10

document.getElementById('a12').addEventListener('click', maiores12)
function maiores12 () {
    res.innerHTML = `Filmes e Séries para maiores de 12 anos`
    resultado.innerHTML = ''
    const maiores12Encontrado = produtos.filter(objeto => objeto.classificacao === 'imagens/12_Box_Borda.png')
    renderizarTela(maiores12Encontrado)
}

// filtragem para classificao 10

document.getElementById('a14').addEventListener('click', maiores14)
function maiores14 () {
    res.innerHTML = `Filmes e Séries para maiores de 14 anos`
    resultado.innerHTML = ''
    const maiores12Encontrado = produtos.filter(objeto => objeto.classificacao === 'imagens/14_Box_Borda.png')
    renderizarTela(maiores12Encontrado)
}
// filtragem para classificao 16

document.getElementById('a16').addEventListener('click', maiores16)
function maiores16 () {
    res.innerHTML = `Filmes e Séries para maiores de 16 anos`
    resultado.innerHTML = ''
    const maiores12Encontrado = produtos.filter(objeto => objeto.classificacao === 'imagens/16_Box_Borda.png')
    renderizarTela(maiores12Encontrado)
}
// filtragem para classificao 18

document.getElementById('a18').addEventListener('click', maiores18)
function maiores18 () {
    res.innerHTML = `Filmes e Séries para maiores de 18 anos`
    resultado.innerHTML = ''
    const maiores12Encontrado = produtos.filter(objeto => objeto.classificacao === 'imagens/18_Box_Borda.png')
    renderizarTela(maiores12Encontrado)
}

