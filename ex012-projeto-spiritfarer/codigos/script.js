document.getElementById('burguer').addEventListener('click', b)
function b () {
    const menu = document.getElementById('nav')
    if ( menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}