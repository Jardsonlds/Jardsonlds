// Arrays para armazenar dados de usuários
let usernames = [];
let passwords = [];

// Função para realizar o login
function login(username, password) {
    let index = usernames.indexOf(username);
    if (index !== -1 && passwords[index] === password) {
        // Login bem-sucedido
        alert("Login bem-sucedido!");
        showLoggedInPage();
    } else {
        // Login falhou
        alert("Usuário ou senha inválidos.");
    }
}

// Função para cadastrar um novo usuário
function register(username, password) {
    usernames.push(username);
    passwords.push(password);
    alert("Cadastro realizado com sucesso! Por favor, faça login.");
    showLoginPage();
}

// Função para mostrar a página de login
function showLoginPage() {
    document.getElementById("login-page").style.display = "block";
    document.getElementById("register-page").style.display = "none";
    document.getElementById("logged-in-page").style.display = "none";
}

// Função para mostrar a página de cadastro
function showRegisterPage() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("register-page").style.display = "block";
    document.getElementById("logged-in-page").style.display = "none";
}

// Função para mostrar a página logada
function showLoggedInPage() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("register-page").style.display = "none";
    document.getElementById("logged-in-page").style.display = "block";
}

// Event listener para o formulário de login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    login(username, password);
});

// Event listener para o formulário de cadastro
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let newUsername = document.getElementById("new-username").value;
    let newPassword = document.getElementById("new-password").value;
    register(newUsername, newPassword);
});

// Event listener para o link "Cadastrar-se"
document.getElementById("show-register").addEventListener("click", function(event) {
    event.preventDefault();
    showRegisterPage();
});

// Event listener para o link "Fazer Login"
document.getElementById("show-login").addEventListener("click", function(event) {
    event.preventDefault();
    showLoginPage();
});

// Event listener para o botão de logout
document.getElementById("logout-button").addEventListener("click", function() {
    showLoginPage();
});

// Inicialmente, mostramos a página de login
showLoginPage();