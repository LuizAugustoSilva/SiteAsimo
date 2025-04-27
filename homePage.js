//=============================== referencias ============================

const navUlRef = document.querySelector('#navUl');
const viewPrincipal = document.querySelector('.view-principal');
const imgLogo = document.querySelector('#imgLogo');

//=============================== imagens background ==============================

const imagens = ['url(Figuras/fundacao-membros.jpg)', 'url(Figuras/img1.jpg)', 'url(Figuras/img2.jpg)', 'url(Figuras/img3.jpg)'];

//=============================== functions ==============================

const roll = (evt) => {
    const destinoName = evt.target.dataset.name;
    const destinoRef = document.querySelector(`#${destinoName}`);
    
    if(destinoName === 'login'){
        window.open('login.html', '_self')
        return;
    }

    window.scrollTo({
        top: destinoRef.getBoundingClientRect().top + window.scrollY - 112,
        behavior: "smooth"
    });
}

const rollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

let index = 0;

setInterval(() => {
    viewPrincipal.style.backgroundImage = imagens[index];
    console.log('oi')
    index++;
    if (index >= imagens.length) {
        index = 0;
    }
}, 3000);

//=============================== addEvents ==============================

for (let i = 0; i < navUlRef.childNodes.length; i++) {
    navUlRef.childNodes[i].addEventListener('click', roll);
}

imgLogo.addEventListener('click', rollTop);