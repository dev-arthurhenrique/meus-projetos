VanillaTilt.init(document.querySelector(".imagemBanner"), {
		max: 25,
		speed: 400
	})

// script para menu-modal

const btnMenu = document.querySelector('.btnMenu')
btnMenu.addEventListener('click', () => {
	const navMenu = document.querySelector('#navMenu')
	navMenu.classList.toggle('menuAtivo')
	if (navMenu.classList.contains('menuAtivo')) {
		btnMenu.textContent = 'X'
	} else {
		btnMenu.textContent = '='
	}
})