// array para armazenar as tarefas

const tarefas = []
const listaTarefas = document.querySelector('#listaTarefas')
const adicionarTarefa = document.querySelector('#adicionarTarefa')
const mensagem = document.querySelector('#mensagem')

// função para renderizar a lista na tela

const renderizar = () => {
    listaTarefas.innerHTML = ''
    mensagem.textContent = `Tarefas Pendentes: ${tarefas.length}`
    tarefas.forEach((trf, posicao) => {

        const novaTarefa = document.createElement('li')
        novaTarefa.classList.add('novaTarefa')

        const checkbox = document.createElement('input')
        checkbox.classList.add('checkbox')
        checkbox.type = 'checkbox'

        const nomeTarefa = document.createElement('p')
        nomeTarefa.classList.add('nomeTarefa')
        nomeTarefa.textContent = trf

        const botaoRemover = document.createElement('button')
        botaoRemover.classList.add('botaoRemover')
        botaoRemover.textContent = 'Remover'
        botaoRemover.addEventListener('click', () => {
            
            tarefas.splice(posicao, 1)
            renderizar()
            
        })
        
        
        novaTarefa.appendChild(checkbox)
        novaTarefa.appendChild(nomeTarefa)
        novaTarefa.appendChild(botaoRemover)

        listaTarefas.appendChild(novaTarefa)
    })
}

// criando uma função para botao adicionar

adicionarTarefa.addEventListener('click', () => {

    const inputTarefa = document.querySelector('#inputTarefa')
    const tarefa = inputTarefa.value.trim()
    if (tarefa.length === 0) {
        alert('Adicione uma tarefa para continuar')
    } else {
        tarefas.push(tarefa)
        renderizar()
        inputTarefa.value = ''
        inputTarefa.focus()  
        console.log(tarefas.length)
    }
})