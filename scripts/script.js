/* ========================================
   CONVITE DE ANIVERSÁRIO DA ROMANA
   JavaScript Ajustado para Dispositivos Móveis
   ======================================== */

const convite = document.querySelector(".convite");

/* ========================================
   CONTROLE DO DESLIZE DAS PÁGINAS (TOUCH)
   ======================================== */

let inicioToqueX = 0;
let inicioToqueY = 0;
let fimToqueX = 0;
let fimToqueY = 0;

if (convite) {
    convite.addEventListener("touchstart", function (evento) {
        inicioToqueX = evento.touches[0].clientX;
        inicioToqueY = evento.touches[0].clientY;
    }, { passive: true });

    convite.addEventListener("touchend", function (evento) {
        fimToqueX = evento.changedTouches[0].clientX;
        fimToqueY = evento.changedTouches[0].clientY;
        verificarDeslize();
    }, { passive: true });
}

function verificarDeslize() {
    const distanciaX = fimToqueX - inicioToqueX;
    const distanciaY = fimToqueY - inicioToqueY;

    // Evita acionar a rolagem horizontal caso o usuário esteja apenas tentando rolar verticalmente
    if (Math.abs(distanciaX) > Math.abs(distanciaY) && Math.abs(distanciaX) > 40) {
        const larguraPagina = convite.clientWidth;

        /* Deslizou para a esquerda (próxima página) */
        if (distanciaX < 0) {
            convite.scrollBy({
                left: larguraPagina,
                behavior: "smooth"
            });
        }

        /* Deslizou para a direita (página anterior) */
        if (distanciaX > 0) {
            convite.scrollBy({
                left: -larguraPagina,
                behavior: "smooth"
            });
        }
    }
}

/* ========================================
   NAVEGAÇÃO COM O TECLADO
   ======================================== */

document.addEventListener("keydown", function (evento) {
    if (!convite) return;
    const larguraPagina = convite.clientWidth;

    if (evento.key === "ArrowRight") {
        convite.scrollBy({
            left: larguraPagina,
            behavior: "smooth"
        });
    }

    if (evento.key === "ArrowLeft") {
        convite.scrollBy({
            left: -larguraPagina,
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
   Horário: 16:00 (Fuso UTC-3)
*/
const dataFesta = new Date("2026-09-13T16:00:00-03:00").getTime();

function atualizarContador() {
    const elementoDias = document.getElementById("dias");
    const elementoHoras = document.getElementById("horas");
    const elementoMinutos = document.getElementById("minutos");
    const elementoSegundos = document.getElementById("segundos");

    // Interrompe se o contador não estiver presente no HTML da tela atual
    if (!elementoDias || !elementoHoras || !elementoMinutos || !elementoSegundos) {
        return;
    }

    const agora = new Date().getTime();
    const diferenca = dataFesta - agora;

    /* Se a data já chegou ou passou */
    if (diferenca <= 0) {
        elementoDias.textContent = "00";
        elementoHoras.textContent = "00";
        elementoMinutos.textContent = "00";
        elementoSegundos.textContent = "00";
        return;
    }

    /* Calculando o tempo */
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    /* Atualizando a interface com zero à esquerda */
    elementoDias.textContent = String(dias).padStart(2, "0");
    elementoHoras.textContent = String(horas).padStart(2, "0");
    elementoMinutos.textContent = String(minutos).padStart(2, "0");
    elementoSegundos.textContent = String(segundos).padStart(2, "0");
}

/* Inicialização do temporizador */
atualizarContador();
setInterval(atualizarContador, 1000);

/* ========================================
   CONTROLE DA MÚSICA
   ======================================== */

function controlarMusica() {
    const musica = document.getElementById("musica");
    const botaoMusica = document.getElementById("botao-musica");

    if (!musica || !botaoMusica) return;

    if (musica.paused) {
        musica.play().then(() => {
            botaoMusica.textContent = "🔊";
        }).catch(err => {
            console.log("Reprodução de áudio bloqueada pelo navegador:", err);
        });
    } else {
        musica.pause();
        botaoMusica.textContent = "🎵";
    }
}

/* ========================================
   BOTÕES DE AÇÃO
   ======================================== */

function abrirMapa() {
    window.open("https://maps.app.goo.gl/qjCq8rKjcjvz8WJ27", "_blank");
}

function voltarInicio() {
    if (!convite) return;
    convite.scrollTo({
        left: 0,
        behavior: "smooth"
    });
}