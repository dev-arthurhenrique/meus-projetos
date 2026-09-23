const iconeMenuLateral = document.querySelector('#iconeMenuLateral')
iconeMenuLateral.addEventListener('click', () => {
    const menuLateral = document.querySelector('.menuLateral')
    const conteudoEscondido = document.querySelectorAll('.conteudoEscondido')
    conteudoEscondido.forEach(conteudo => {
        conteudo.nextElementSibling
        conteudo.classList.toggle('ativo')
    })
    menuLateral.classList.toggle('ativo')
    if (menuLateral.classList.contains('ativo')) {
        iconeMenuLateral.textContent = '<-|'
    } else {
        iconeMenuLateral.textContent = '|->'
    }
    
})