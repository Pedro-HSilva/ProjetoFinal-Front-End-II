"use strict";
const botaoEntrar = document.getElementById("entrar");
const exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    const recipient = button.getAttribute("data-bs-whatever");
    const modalTitle = exampleModal.querySelector(".modal-title");
    const modalBodyInput = exampleModal.querySelector(".modal-body input");
    modalTitle.textContent = `Sobre a aplicação:`;
    modalBodyInput.value = recipient;
});
function entrarLista() {
    const nomeUsuario = document.getElementById("username");
    const senhaUsuario = document.getElementById("password");
    const usernameStorage = localStorage.getItem(nomeUsuario.value);
    const usernameObjeto = JSON.parse(usernameStorage);
    if (!nomeUsuario.value || !senhaUsuario.value) {
        alert("Todos os campos são de preenchimento obrigatório");
        return;
    }
    if (!usernameStorage || usernameObjeto.senha !== senhaUsuario.value) {
        alert("Usuário ou senha não cadastrado!");
        return;
    }
    if (usernameObjeto.senha === senhaUsuario.value ||
        usernameObjeto.nome === nomeUsuario.value) {
        sessionStorage.setItem("usuarioLogado", usernameStorage);
        window.location.href = "listaRecados.html";
    }
}
botaoEntrar.addEventListener("click", entrarLista);
