// menu hamburguer

const burguer = document.getElementById('burguer')
burguer.addEventListener('click', () => {
    const nav = document.getElementById('nav')
    nav.classList.toggle('ativoMenu')
})

