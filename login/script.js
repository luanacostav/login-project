// _____________________________ LOGIN PAGE _____________________________

const formLogin = document.getElementById('formLogin')

if (formLogin) {
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault()
        
        let userLogin = event.target.usernameLogin.value
        let passwordLogin = event.target.passwordLogin.value
        
        let userStorage = localStorage.getItem('username')
        let pwordStorage = localStorage.getItem('password')
        
        if (userLogin === userStorage && passwordLogin === pwordStorage) {
            window.location.href = '../welcome/index.html'
        } else {
            alert('ERROR')
        }
    })
}

// _____________________________ SIGN UP PAGE _____________________________

const formSignup = document.getElementById('formSignup')

if (formSignup) {
    formSignup.addEventListener('submit', (event) => {
        event.preventDefault()

        let userSignup = event.target.usernameSignup.value
        let passwordSignup = event.target.passwordSignup.value
        // console.log('Username: ', userSignup)
        // console.log('Password: ', passwordSignup)

        localStorage.setItem('username', userSignup)
        localStorage.setItem('password', passwordSignup)

        alert('Sucess!')
    })
}

// _____________________________ WELCOME PAGE _____________________________

const titleWelcome = document.getElementById('titleWelcome')

if (titleWelcome) {
    let username = localStorage.getItem('username')
    let title = document.createElement('h1')
    title.textContent = `Welcome, ${username}!`
    titleWelcome.appendChild(title)
}

const buttonExit = document.getElementById('buttonExit')

if (buttonExit) {
    buttonExit.addEventListener('click', () => {
        window.location.href = '../login/index.html'
    })
}
