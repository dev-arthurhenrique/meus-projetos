const btnEnviar = document.getElementById('btnEnviar')
btnEnviar.addEventListener('click', () => {
    const nome = document.getElementById('nome').value.trim()
    const email = document.getElementById('email').value.trim()
    const mensagem = document.getElementById('mensagem').value.trim()
    

    const numero = '5582996355177' 
    const template = `Olá, meu nome é ${nome}. \n Email: ${email}\n Mensagem: ${mensagem}`
    const mensagemUrl = encodeURIComponent(template)
    window.open(`https://wa.me/${numero}?text=${mensagemUrl}`, '_blank')
})