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
		btnMenu.textContent = 'x'
	} else {
		btnMenu.textContent = '='
	}
})

// script para accodeon

const accordeon = document.querySelectorAll('.accordeon')

accordeon.forEach(accord => accord.addEventListener('click', () => {
	const novoId = accord.getAttribute('data-id')
	const conteudoQueSomeEAparece = document.getElementById(novoId)
	conteudoQueSomeEAparece.classList.toggle('ativoConteudoAccordeon')

	const btnAccordion = accord.querySelector('.btnAccordion')

	console.log(btnAccordion)


	if (conteudoQueSomeEAparece.classList.contains('ativoConteudoAccordeon'))  {
		btnAccordion.textContent = '-'
	} else {
		btnAccordion.textContent = '+'
	}
}))

// script para btn ver mais projetos

const verMais = document.getElementById('verMais')
verMais.addEventListener('click', () => {
	const projetoDesaparece = document.querySelectorAll('.projetoDesaparece')
	projetoDesaparece.forEach(proDesaparece => {
		proDesaparece.classList.toggle('ativoConteudoProjeto')
		if (proDesaparece.classList.contains('ativoConteudoProjeto')) {
			verMais.textContent = 'Ver Menos'
		} else {
			verMais.textContent = 'Ver Mais'
		}
	})
})