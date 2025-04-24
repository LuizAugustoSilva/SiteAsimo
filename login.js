const emailLogin = document.querySelector('#email');
const senhaLogin = document.querySelector('#password');
const iconeOlho = document.querySelector('.olho');
const btnToggle = document.querySelector('.toggle-password');
const btnSubmit = document.querySelector('.submit');

const toggleSenha = () => {
    event.preventDefault();
    if(senhaLogin.type === "password") {
        senhaLogin.type = "text";
        iconeOlho.src = 'Figuras/olho-aberto.png';
    }
    else {
        senhaLogin.type = "password";
        iconeOlho.src = 'Figuras/olho-fechado.png';
    }
    senhaLogin.focus();
}

btnToggle.addEventListener("click", toggleSenha);