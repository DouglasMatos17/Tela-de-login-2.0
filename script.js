// Ao iniciar uma avaciação dos conchecimentos utilizados nesses projeto, atente-se que os comentarios no mesmo e a forma como foi feito serve alem de projeto, mas como catalogo de conhecimento sendo que em muitos casos reviso como pratiguei em meus projetos antigos para aprimorar meur projetos atuais.


//Animações de DOM

let btnIrCadastro = document.getElementById('btnIrCadastro')
let btnIrLogin = document.getElementById('btnIrLogin')
let ocultador = document.getElementById('ocultador')

btnIrCadastro.addEventListener('click', function() {
    showLogin()
    console.log('Cadastro Ativado')
});

btnIrLogin.addEventListener('click', function() {
    hideLogin()
    console.log('Cadastro Desativado')
});


function showLogin() {
    ocultador.classList.add('show')
}

function hideLogin() {
    ocultador.classList.remove('show')
    
}





// Validação do login

let btnEfCadastro = document.getElementById('btnEfCadastro')
let btnEfLogin = document.getElementById('btnEfLogin')

btnEfCadastro.addEventListener('click', function(){
    validatePasswordMatch()
    validateLogin()
})


function validatePasswordMatch() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let confirmPasswordErrorElement = document.getElementById('confirmPasswordError');

    if (password !== confirmPassword) {
        displayErrorMessage('As senhas não coincidem.');
        return false;
    }

    return true;
}

// A forma de validação simples que encontrei em meu estudos foi criando uma variavel com caracteres que não poderiam ser utilizados e colocando todos em uma string, e utilizando o propriedade do js .test para efetuar uma validação simples para ver se o conteudo digitado estava com os caracteres corretos. Vale resaltar que este metodo é apenas para simular da funcionabilidade do projeto, para projetos reais e robustos necessita de bibliotecas de validação de formulários mais avançadas ou implementar verificações adicionais no lado do servidor para garantir a segurança.

function validateLogin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    let passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/;

    let errorMessageElement = document.getElementById('errorMessage');
    let successMessageElement = document.getElementById('successMessage');
    
    errorMessageElement.textContent = '';
    successMessageElement.textContent = '';

    if (!emailRegex.test(email)) { //A propriedade .test() é um método em JavaScript que é utilizado para testar se uma expressão regular encontra correspondência em uma string. Ela retorna true se a correspondência for encontrada e false caso contrário.
        displayErrorMessage('Por favor, insira um email válido.');
        return;
    }

    if (!passwordRegex.test(password)) {
        displayErrorMessage('A senha deve conter pelo menos um número, uma letra, sem caracteres especiais e ter no mínimo 6 caracteres.');
        return;
    }

    displaySuccessMessage('Login bem-sucedido!');
}

function displayErrorMessage(message) {
    let errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = message;
}

function displaySuccessMessage(message) {
    let successMessageElement = document.getElementById('successMessage');
    successMessageElement.textContent = message;
}