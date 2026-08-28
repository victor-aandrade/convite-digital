/* ========================================
   CONVITE DE ANIVERSÁRIO DA ROMANA
   JavaScript
   ======================================== */


/* ========================================
   CONTROLE DO DESLIZE DAS PÁGINAS
   ======================================== */

const convite = document.querySelector(".convite");

let inicioToque = 0;
let fimToque = 0;


/* Detecta onde o usuário começou a tocar */

convite.addEventListener("touchstart", function (evento) {

    inicioToque = evento.touches[0].clientX;

});


/* Detecta onde o usuário terminou o toque */

convite.addEventListener("touchend", function (evento) {

    fimToque = evento.changedTouches[0].clientX;

    verificarDeslize();

});


/* Verifica a direção do deslize */

function verificarDeslize() {

    const distancia = fimToque - inicioToque;

    /* Deslizou para a esquerda */

    if (distancia < -50) {

        convite.scrollBy({
            left: window.innerWidth,
            behavior: "smooth"
        });

    }


    /* Deslizou para a direita */

    if (distancia > 50) {

        convite.scrollBy({
            left: -window.innerWidth,
            behavior: "smooth"
        });

    }

}


/* ========================================
   NAVEGAÇÃO COM O TECLADO
   ======================================== */

document.addEventListener("keydown", function (evento) {

    if (evento.key === "ArrowRight") {

        convite.scrollBy({
            left: window.innerWidth,
            behavior: "smooth"
        });

    }


    if (evento.key === "ArrowLeft") {

        convite.scrollBy({
            left: -window.innerWidth,
            behavior: "smooth"
        });

    }

});


/* ========================================
   CONTAGEM REGRESSIVA
   ======================================== */

/*
   Data da comemoração:
   13 de setembro de 2026
   Horário: 16:00
   Horário de Brasília: UTC-3
*/

const dataFesta = new Date("2026-09-13T16:00:00-03:00");


function atualizarContador() {

    const agora = new Date();

    const diferenca = dataFesta - agora;


    /* Se a data já chegou */

    if (diferenca <= 0) {

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;

    }


    /* Calculando o tempo */

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );


    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );


    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );


    /* Colocando os valores na página */

    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}


/* Atualiza imediatamente */

atualizarContador();


/* Atualiza a cada segundo */

setInterval(atualizarContador, 1000);


/* ========================================
   CONTROLE DA MÚSICA
   ======================================== */

const musica = document.getElementById("musica");
const botaoMusica = document.getElementById("botao-musica");


function controlarMusica() {

    if (musica.paused) {

        musica.play();

        botaoMusica.textContent = "🔊";

    } else {

        musica.pause();

        botaoMusica.textContent = "🎵";

    }

}


/* ========================================
   BOTÃO "COMO CHEGAR"
   ======================================== */

function abrirMapa() {
    // Abre diretamente o seu link do Google Maps
    window.open("https://maps.app.goo.gl/qjCq8rKjcjvz8WJ27", "_blank");
}
/* ========================================
   VOLTAR AO INÍCIO
   ======================================== */

function voltarInicio() {

    convite.scrollTo({
        left: 0,
        behavior: "smooth"
    });

}
