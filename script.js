// Pega os elementos do HTML que vamos usar
const modal = document.getElementById("pixModal");
const btnJogar = document.getElementById("btnJogar");
const closeButton = document.querySelector(".close-button");

// Quando o usuário clicar em "Iniciar Jornada", mostra o modal
btnJogar.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clicar no 'X', fecha o modal
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, também fecha
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}