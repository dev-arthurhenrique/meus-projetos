const callback = entradas => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            if (entrada.target.classList.contains('subtitulo')) {
                entrada.target.classList.add('scrollAparecerDireita')
            }
            else if (entrada.target.classList.contains('conteudoSubtitulo')) {
                entrada.target.classList.add('scrollAparecerEsquerda')
            }
            else if (entrada.target.classList.contains('projeto')) {
                entrada.target.classList.add('scrollAparecerCentro')
            }  
        }
        else {
            entrada.target.classList.remove('scrollAparecerDireita', 'scrollAparecerEsquerda', 'scrollAparecerCentro')
        }
    })
}
const objeto = {
    threshold: 0.5,
}
const observador = new IntersectionObserver(callback, objeto)

const subtitulo = document.querySelectorAll('.subtitulo')
subtitulo.forEach(sub => observador.observe(sub))

const conteudoSubtitulo = document.querySelectorAll('.conteudoSubtitulo')
conteudoSubtitulo.forEach(contSub => observador.observe(contSub))

const projeto = document.querySelectorAll('.projeto')
projeto.forEach(pro => observador.observe(pro))