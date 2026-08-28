/* ========================================
   CONVITE DE ANIVERSÁRIO DA ROMANA
   ======================================== */

const convite = document.querySelector(".convite");

/* VOLTAR AO INÍCIO */
function voltarInicio() {
    if (convite) {
        convite.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

/* ABRIR MAPA */
function abrirMapa() {
    window.open("https://maps.app.goo.gl/qjCq8rKjcjvz8WJ27", "_blank");
}

/* CONTAGEM REGRESSIVA */
const dataFesta = new Date("2026-09-13T16:00:00-03:00").getTime();

function atualizarContador() {
    const elDias = document.getElementById("dias");
    const elHoras = document.getElementById("horas");
    const elMinutos = document.getElementById("minutos");
    const elSegundos = document.getElementById("segundos");

    if (!elDias || !elHoras || !elMinutos || !elSegundos) return;

    const agora = new Date().getTime();
    const diferenca = dataFesta - agora;

    if (diferenca <= 0) {
        elDias.textContent = "00";
        elHoras.textContent = "00";
        elMinutos.textContent = "00";
        elSegundos.textContent = "00";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    elDias.textContent = String(dias).padStart(2, "0");
    elHoras.textContent = String(horas).padStart(2, "0");
    elMinutos.textContent = String(minutos).padStart(2, "0");
    elSegundos.textContent = String(segundos).padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);