const sonic = document.querySelector('.sonic');
const vilao = document.querySelector('.vilao');

//função jump
const jump = () => {
    sonic.classList.add('jump');

    setTimeout(() => {

        sonic.classList.remove('jump');

    }, 500);

};

// capturar colisão entre os elementos

const loop = setInterval(function colisao() {

    const vilaoPosition = vilao.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
    console.log(sonicPosition)

    if (vilaoPosition <= 210 && vilaoPosition > 0 && sonicPosition <200) {
        vilao.style.animation = 'none';
        vilao.style.left = `${vilaoPosition}px`;
    }


}, 10);


// addEventListener para captura de eventos / passando como parametros o evento e a função
document.addEventListener('keydown', jump);