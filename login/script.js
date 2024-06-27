const div = document.querySelector('div')

const form = document.getElementById('forms')
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        // console.log(e)
        const usuario = e.target.user.value
        console.log(usuario)
    
        const senha = e.target.senha.value
        console.log(senha)
    
        // Outra página
        // window.location.href = recebe o nome do arquivo
        let user = localStorage.getItem('usuario')
        console.log(user)
        let password = localStorage.getItem('senha')
        console.log(password)
    
        if (usuario === user && senha === password) {
            window.location.href = '../boas_vindas/index.html'
        } else {
            alert('Deu ruim')
        }


    })
}

const botao_sair = document.getElementById('botao-sair')
if (botao_sair) {
    console.log(botao_sair)
    
    botao_sair.addEventListener('click', () => {
        window.location.href = '../login/index.html'
    })
}

const formRegistro = document.getElementById('formRegistro')
if (formRegistro) {
    formRegistro.addEventListener('submit', (e) => {
        e.preventDefault()

        const usuario = e.target.usuario.value
        console.log(usuario)
    
        const senha = e.target.senha.value
        console.log(senha)

        localStorage.setItem('usuario', usuario)
        localStorage.setItem('senha', senha)
        alert('Cadastrado com Sucesso!')
    })
}