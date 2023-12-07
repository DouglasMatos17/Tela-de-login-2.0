// Ao iniciar uma avaciação dos conchecimentos utilizados nesses projeto, atente-se que os comentarios no mesmo e a forma como foi feito serve alem de projeto, mas como catalogo de conhecimento sendo que em muitos casos reviso como pratiguei em meus projetos antigos para aprimorar meur projetos atuais.


//Animações de DOM

let btnIrCadastro = document.getElementById('btnIrCadastro')
let btnIrLogin = document.getElementById('btnIrLogin')
let ocultador = document.getElementById('ocultador')
let loginDiv = document.getElementById('loginDiv')
let cadastroDiv = document.getElementById('cadastroDiv')
let alertaDiv = document.getElementById('alerta')

btnIrCadastro.addEventListener('click', function() {
    hideLogin()
    console.log('Cadastro Ativado')
});

btnIrLogin.addEventListener('click', function() {
    showLogin()
    console.log('Cadastro Desativado')
});


function hideLogin() {
    loginDiv.style.opacity = '0%'
    ocultador.classList.add('hide')
    setTimeout(function () {
        cadastroDiv.style.opacity = '100%'
    }, 800)
    
}

function showLogin() {
    cadastroDiv.style.opacity = '0%'
    ocultador.classList.remove('hide')
    setTimeout(function () {
        loginDiv.style.opacity = '100%'
    }, 800)

}


//animação de Alerta

let alertaLogin = document.getElementById('alertaLogin')
let alertaEmail = document.getElementById('alertaEmail')
let alertaSenha = document.getElementById('alertaSenha')
let alertaConfirm = document.getElementById('alertaConfirm')

function showAlert(){
    
    if (!userValid) {
        alertaLogin.style.display = 'flex';
    }

    if (!emailValid) {
        alertaEmail.style.display = 'flex';
    }

    if (!senhaValid) {
        alertaSenha.style.display = 'flex';
    }

    if (!senhaConfValid) {
        alertaConfirm.style.display = 'flex';
    }

    alertaDiv.style.display = 'flex'
    setTimeout(function () {
        alertaDiv.style.opacity = '100%'
    }, 10)
}


function hideAlert(){
    alertaDiv.style.opacity = '0%'
    setTimeout(function () {
        alertaDiv.style.display = 'none'
    }, 400)
    
    const p = ['alertaLogin', 'alertaEmail', 'alertaSenha', 'alertaConfirm'];

    // Oculta todos os parágrafos
    p.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
}


// Validação do Cadastro

// A forma de validação simples que encontrei em meu estudos foi criando uma variavel especificando os caracteres que não poderiam ser utilizados e colocando todos em uma string, e utilizando o propriedade do js .test para efetuar uma validação simples para ver se o conteudo digitado estava com os caracteres corretos. Vale resaltar que este metodo é apenas para simular da funcionabilidade do projeto, para projetos reais e robustos necessita de bibliotecas de validação de formulários mais avançadas ou implementar verificações adicionais no lado do servidor para garantir a segurança.


let btnEfCadastro = document.getElementById('btnEfCadastro')
let btnEfLogin = document.getElementById('btnEfLogin')
let userValid = null
let emailValid = null
let senhaValid = null
let senhaConfValid = null

btnEfCadastro.addEventListener('click', function(){
    validateLogin()
    validatePasswordMatch()
    mensagem()
})


function validateLogin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let user = document.getElementById('user').value;
    
    let userRegex = /^[a-zA-Z0-9]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    let passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/;

    if(!userRegex.test(user)) {
        userValid = false
    }else{
        userValid = true
    }

    if (!emailRegex.test(email)) { 
        emailValid = false
    }else{
        emailValid = true
    }

    if (!passwordRegex.test(password)) {
        senhaValid = false
    }else{
        senhaValid = true
    }
}

function validatePasswordMatch(senhaValid) {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        senhaConfValid = false
    } else{
        senhaConfValid = true
    }
}


function mensagem(){

    if(userValid === false) {
        console.log ('User Incorreto')
    } else if(userValid === true){
        console.log ('User Correto')
    }

    if(emailValid === false){
        console.log('Email Incorreto')
    } else if(emailValid === true){
        console.log('Email Correto')
    }

    if (senhaValid === false){
        console.log('Senha Incorreta')
    } else if(senhaValid === true){
        console.log('Senha Correta')
    }

    if(senhaConfValid === false){
        console.log('As senhas não são iguais')
    }else if(senhaConfValid === true){
        console.log('Senhas estão iguais')
    }
    verificarErros()
}

function verificarErros() {
    // Verifica se alguma das condições resultou em false
    if (!userValid || !emailValid || !senhaValid || !senhaConfValid) {
        showAlert();
    }
}