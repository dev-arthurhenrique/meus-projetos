const listaConteudosAssistidos = [
    {img:'imagens/celeste.jpg', nome: 'Nome da música', categotia: 'Musica'},
    {img:'imagens/rift.jpg', nome: 'Nome da música', categotia: 'Musica'},
    {img:'imagens/hollow.jpg', nome: 'Nome da música', categotia: 'Musica'},
    {img:'imagens/artista-luan-santana.jpg', nome: 'Nome da música', categotia: 'Musica'},
    {img:'imagens/fisolofatos.jpg', nome: 'Nome da música', categotia: 'Podcast'},
    {img:'imagens/audiolivro.jpg', nome: 'Nome da música', categotia: 'Podcast'},
    {img:'imagens/now.jpg', nome: 'Nome da música', categotia: 'Musica'},
    {img:'imagens/ursinho.jpg', nome: 'Nome da música', categotia: 'Musica'},
]
const respostaConteudoAssistido = document.getElementById('respostaConteudoAssistido')
// forEach que vai varrer todos os objetos

const renderizarConteudosAssistidos = (conteudo) => {
    conteudo.forEach(objeto => {
        const card = document.createElement('div')
        card.classList.add('conteudo')

        const imagemConteudo = document.createElement('img')
        imagemConteudo.classList.add('imagemConteudo')
        imagemConteudo.src = objeto.img

        const textoAssistido = document.createElement('p')
        textoAssistido.classList.add('textoAssistido')
        textoAssistido.textContent = objeto.nome

        const categoria = document.createElement('p')
        categoria.classList.add('categoria')
        categoria.textContent = objeto.categotia

        card.appendChild(imagemConteudo)
        card.appendChild(textoAssistido)
        card.appendChild(categoria)

        respostaConteudoAssistido.appendChild(card)

    })
}

//função para filtrar musicas

document.getElementById('musicas').addEventListener('click', () => btnMusicas ())

const btnMusicas = () => {
    const musicas = listaConteudosAssistidos.filter(objeto => objeto.categotia === 'Musica')
    respostaConteudoAssistido.innerHTML = ''
    renderizarConteudosAssistidos(musicas)
    console.log(musicas)
}

document.getElementById('podcasts').addEventListener('click', () => btnPodcasts ())

const btnPodcasts = () => {
    const podcasts = listaConteudosAssistidos.filter(objeto => objeto.categotia === 'Podcast')
    respostaConteudoAssistido.innerHTML = ''
    renderizarConteudosAssistidos(podcasts)
    console.log(podcasts)
}

document.getElementById('tudo').addEventListener('click', () => btnTudo ())

const btnTudo = () => {
    respostaConteudoAssistido.innerHTML = ''
    renderizarConteudosAssistidos(listaConteudosAssistidos)
} 